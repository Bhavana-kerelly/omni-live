import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  BookOpen, 
  Sparkles, 
  ShieldCheck,
  ChevronRight,
  Filter,
  CheckCircle2
} from 'lucide-react';
import { BLOGS_DATA, BLOG_CATEGORIES } from '../data/blogsData';
import { getAssetUrl } from '../utils/getAssetUrl';
import './BlogsPage.css';

export default function BlogsPage({ onNavigate, onSelectBlog }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('newest'); // 'newest', 'readTime'

  // Filter & Sort Logic
  const filteredBlogs = useMemo(() => {
    return BLOGS_DATA.filter((blog) => {
      const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
      const matchesSearch = 
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.doctor.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'newest') return b.id - a.id;
      if (sortBy === 'readTime') return parseInt(a.readTime) - parseInt(b.readTime);
      return 0;
    });
  }, [searchQuery, selectedCategory, sortBy]);

  const featuredBlog = BLOGS_DATA[0]; // Blog 1 as featured spotlight

  const handleBlogClick = (e, blog) => {
    e.preventDefault();
    if (onSelectBlog) {
      onSelectBlog(blog);
    } else if (onNavigate) {
      onNavigate('blog-detail', blog.slug);
    }
  };

  return (
    <div className="blogs-page-wrapper">
      
      {/* 1. CINEMATIC HERO HEADER */}
      <section className="blogs-hero-section">
        <div className="blogs-hero-container">
          
          <nav className="blogs-breadcrumbs" aria-label="Breadcrumb">
            <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('home'); }}>Home</a>
            <span className="crumb-sep">/</span>
            <span className="crumb-active">Blogs & Health Insights</span>
          </nav>

          <div className="blogs-hero-badge">
            <span>OMNI HEALTH INSIGHTS & MEDICAL BLOGS</span>
          </div>

          <h1 className="blogs-hero-headline">
            Verified Medical Knowledge. <br />
            <span className="gradient-text">Empowering Healthier Lives.</span>
          </h1>

          <p className="blogs-hero-subtitle">
            Explore expert health guides, robotic surgical advances, disease prevention strategies, and specialist medical insights published by OMNI Hospitals senior consultants.
          </p>

          {/* Search & Filter Control Bar */}
          <div className="blogs-search-bar-wrapper">
            <div className="search-input-box">
              <Search size={20} className="blog-search-icon" />
              <input 
                type="text"
                placeholder="Search medical conditions, treatments, or doctor articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="blogs-search-input"
              />
              {searchQuery && (
                <button 
                  type="button" 
                  className="clear-search-btn"
                  onClick={() => setSearchQuery('')}
                >
                  Clear
                </button>
              )}
            </div>

            <div className="sort-dropdown-box">
              <Filter size={16} className="filter-icon" />
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="blogs-sort-select"
              >
                <option value="newest">Newest Articles</option>
                <option value="readTime">Shortest Read Time</option>
              </select>
            </div>
          </div>

        </div>
      </section>

      {/* 2. CATEGORY FILTER PILLS TRACK */}
      <section className="blogs-categories-strip">
        <div className="blogs-categories-container">
          <div className="categories-pills-scroll">
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`cat-pill ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED SPOTLIGHT BLOG CARD (IF NO SEARCH FILTER ACTIVE) */}
      {!searchQuery && selectedCategory === 'All' && featuredBlog && (
        <section className="featured-blog-section">
          <div className="featured-blog-container">
            <div className="featured-card-wrapper" onClick={(e) => handleBlogClick(e, featuredBlog)}>
              
              <div className="featured-img-col">
                <img 
                  src={getAssetUrl(featuredBlog.heroImage)} 
                  alt={featuredBlog.title} 
                  className="featured-hero-img"
                  onError={(e) => {
                    e.target.src = getAssetUrl('/images/cardiology.jpg');
                  }}
                />
                <div className="featured-category-badge">{featuredBlog.category}</div>
              </div>

              <div className="featured-content-col">
                <div className="featured-meta-row">
                  <span className="featured-badge-tag">
                    Featured Insight
                  </span>
                  <span className="meta-time">
                    <Clock size={14} />
                    {featuredBlog.readTime}
                  </span>
                </div>

                <h2 className="featured-title">{featuredBlog.title}</h2>
                <p className="featured-excerpt">{featuredBlog.excerpt}</p>

                <a 
                  href={`#blog/${featuredBlog.slug}`}
                  onClick={(e) => handleBlogClick(e, featuredBlog)}
                  className="btn-read-featured"
                >
                  <span>Read Complete Medical Article</span>
                  <ArrowRight size={16} />
                </a>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* 4. MAIN BLOGS GRID SHOWCASE */}
      <section className="blogs-grid-section">
        <div className="blogs-grid-container">
          
          <div className="grid-header-row">
            <h2 className="grid-section-title">
              {selectedCategory === 'All' ? 'All Medical Articles & Guides' : `${selectedCategory} Articles`}
              <span className="results-count">({filteredBlogs.length} Published)</span>
            </h2>
          </div>

          {filteredBlogs.length > 0 ? (
            <div className="blogs-cards-grid">
              {filteredBlogs.map((blog) => (
                <article 
                  key={blog.id} 
                  className="blog-item-card"
                  onClick={(e) => handleBlogClick(e, blog)}
                >
                  <div className="card-image-box">
                    <img 
                      src={getAssetUrl(blog.heroImage)} 
                      alt={blog.title} 
                      className="card-thumb-img" 
                      onError={(e) => {
                        e.target.src = getAssetUrl('/images/cardiology.jpg');
                      }}
                    />
                    <span className="card-cat-badge">{blog.category}</span>
                  </div>

                  <div className="card-body-box">
                    <div className="card-meta-bar">
                      <span className="meta-date">
                        <Calendar size={13} />
                        {blog.date}
                      </span>
                      <span className="meta-read">
                        <Clock size={13} />
                        {blog.readTime}
                      </span>
                    </div>

                    <h3 className="card-blog-title">{blog.title}</h3>
                    <p className="card-blog-excerpt">{blog.excerpt}</p>

                    <div className="card-action-bar">
                      <span className="btn-read-link">
                        Read Article <ChevronRight size={16} />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="no-blogs-found">
              <BookOpen size={48} className="no-blogs-icon" />
              <h3>No Medical Articles Found</h3>
              <p>Try searching for a different health condition, doctor name, or reset your category filter.</p>
              <button 
                type="button" 
                className="btn-reset-filters"
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              >
                Reset All Filters
              </button>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
