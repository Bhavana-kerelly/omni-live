import React from 'react';
import { BookOpen, ArrowRight, Clock } from 'lucide-react';
import { BLOGS_DATA } from '../../data/blogsData';
import { getAssetUrl } from '../../utils/getAssetUrl';

export default function MedicalInsightsSection({ onNavigate }) {
  // Take the 3 primary blogs directly from master datastore
  const blogsList = BLOGS_DATA.slice(0, 3);
  const featuredArticle = blogsList[0];
  const secondaryArticles = blogsList.slice(1);

  const handleBlogClick = (slug) => {
    if (onNavigate) {
      onNavigate('blog-detail', slug);
    }
  };

  return (
    <section className="insights-section" id="blogs">
      <div className="section-container">
        {/* Header Split */}
        <div className="section-header-split">
          <div className="insights-title-group">
            <div className="insights-eyebrow-pill">
              <span className="eyebrow-dash-accent" />
              <span>Knowledge &amp; Medical Insights</span>
            </div>
            <h2 className="insights-main-title">
              <span className="text-blue-primary">Understand </span>
              <span className="text-green-accent">Your Health.</span>
            </h2>
            <p className="insights-lead-desc">
              Evidence-based medical publications and health guides written by our senior hospital board.
            </p>
          </div>

          <button 
            type="button" 
            className="insights-view-all-btn"
            onClick={() => onNavigate && onNavigate('blogs')}
          >
            <BookOpen size={15} />
            <span>View All Publications</span>
            <ArrowRight size={14} className="btn-arrow" />
          </button>
        </div>

        {/* Editorial Publication Grid */}
        <div className="insights-publication-grid">
          
          {/* Left Featured Article Card */}
          {featuredArticle && (
            <article 
              className="featured-insight-card"
              onClick={() => handleBlogClick(featuredArticle.slug)}
              style={{ cursor: 'pointer' }}
            >
              <div className="featured-image-wrapper">
                <img 
                  src={getAssetUrl(featuredArticle.heroImage)} 
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = getAssetUrl('/images/hospitals/kukatpally-card.jpg');
                  }}
                  alt={featuredArticle.title} 
                  className="featured-img" 
                />
                <span className="insight-category-tag">{featuredArticle.category}</span>
              </div>

              <div className="featured-body">
                <div className="insight-meta">
                  <span className="read-time">
                    <Clock size={12} className="meta-icon" />
                    {featuredArticle.readTime}
                  </span>
                </div>

                <h3 className="featured-title">{featuredArticle.title}</h3>
                <p className="featured-desc">{featuredArticle.excerpt}</p>

                <div className="insight-read-link">
                  <span>Read Full Article</span>
                  <ArrowRight size={14} className="arrow-icon" />
                </div>
              </div>
            </article>
          )}

          {/* Right Secondary Articles Stack */}
          <div className="secondary-insights-stack">
            {secondaryArticles.map((art) => (
              <article 
                key={art.id} 
                className="secondary-insight-card"
                onClick={() => handleBlogClick(art.slug)}
                style={{ cursor: 'pointer' }}
              >
                <div className="secondary-body">
                  <span className="insight-category-tag-sub">{art.category}</span>
                  <h4 className="secondary-title">{art.title}</h4>
                  <p className="secondary-desc">{art.excerpt}</p>
                  <div className="secondary-footer">
                    <span className="read-time">
                      <Clock size={12} className="meta-icon" />
                      {art.readTime}
                    </span>
                    <div className="insight-read-link-sub">
                      <span>Read Article</span>
                      <ArrowRight size={13} className="arrow-icon" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
