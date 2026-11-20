import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  Share2, 
  CheckCircle2, 
  ShieldCheck, 
  BookOpen, 
  PhoneCall, 
  Sparkles, 
  ChevronRight,
  MessageCircle,
  Copy,
  Check
} from 'lucide-react';
import { useBlogs, fetchLiveBlogBySlug } from '../services/blogService';
import DOMPurify from 'dompurify';
import { getAssetUrl } from '../utils/getAssetUrl';
import { openWhatsAppAppointment } from '../utils/whatsappHelper';
import './BlogsPage.css';

export default function BlogDetailPage({ blogSlug, blogId, onNavigate, onSelectBlog, onBookAppointment }) {
  const { blogs } = useBlogs();
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Find blog by slug or ID with API fallback
  const matchedLocal = blogs.find(b => b.slug === blogSlug || b.id === Number(blogId));
  const [liveBlog, setLiveBlog] = useState(matchedLocal || blogs[0]);

  useEffect(() => {
    const found = blogs.find(b => b.slug === blogSlug || b.id === Number(blogId));
    if (found) {
      setLiveBlog(found);
    } else if (blogSlug) {
      fetchLiveBlogBySlug(blogSlug).then(fetched => {
        if (fetched) setLiveBlog(fetched);
      });
    }
  }, [blogs, blogSlug, blogId]);

  const blog = liveBlog || blogs[0];

  // Scroll Reading Progress Bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      if (totalHeight > 0) {
        setScrollProgress((currentScroll / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Related Blogs (Same category or next items - pick 4 for sidebar)
  const relatedBlogs = blogs
    .filter(b => b.id !== blog.id)
    .slice(0, 4);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(`Read this medical article on OMNI Hospitals: "${blog.title}"\n${window.location.href}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  // Convert raw blog text lines into formatted paragraphs & headings
  const formattedLines = (blog.fullText || '').split('\n').filter(l => l.trim().length > 0);

  return (
    <div className="blog-detail-page-wrapper">
      
      {/* TOP READING PROGRESS BAR */}
      <div 
        className="reading-progress-bar" 
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true" 
      />

      {/* HERO / BREADCRUMB HEADER */}
      <section className="detail-hero-section">
        <div className="detail-hero-container">
          
          <div className="detail-nav-row">
            <button 
              type="button" 
              className="btn-back-blogs"
              onClick={() => onNavigate && onNavigate('blogs')}
            >
              <ArrowLeft size={16} />
              <span>Back to Health Blogs</span>
            </button>

            <nav className="detail-breadcrumbs" aria-label="Breadcrumb">
              <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('home'); }}>Home</a>
              <span className="crumb-sep">/</span>
              <a href="#blogs" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('blogs'); }}>Blogs</a>
              <span className="crumb-sep">/</span>
              <span className="crumb-active">{blog.category}</span>
            </nav>
          </div>

          <div className="detail-header-content">
            <span className="detail-cat-pill">{blog.category}</span>
            <h1 className="detail-main-headline">{blog.title}</h1>

            {/* Author / Doctor & Date Meta Row */}
            <div className="detail-meta-bar">
              <div className="doc-avatar-box">
                <ShieldCheck size={22} className="shield-green-icon" />
              </div>
              <div className="meta-text-box">
                <span className="meta-doc-name">OMNI Hospitals Medical Board</span>
                <span className="meta-doc-desig">Verified Clinical Insights ({blog.category})</span>
              </div>
              <div className="meta-v-divider" />
              <div className="meta-stats-group">
                <span><Calendar size={14} /> {blog.date}</span>
                <span><Clock size={14} /> {blog.readTime}</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* MAIN ARTICLE BODY LAYOUT WITH INTEGRATED SIDEBAR */}
      <section className="detail-body-section">
        <div className="detail-body-container">
          
          {/* LEFT ARTICLE MAIN COLUMN */}
          <div className="article-main-col">
            
            {/* Main Featured Image */}
            <div className="article-hero-image-box">
              <img 
                src={getAssetUrl(blog.heroImage)} 
                alt={blog.title} 
                className="article-main-img" 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = getAssetUrl('/images/hospitals/kukatpally-card.jpg');
                }}
              />
              <div className="img-caption-bar">
                <span>OMNI Hospitals Medical Knowledge & Clinical Guidance</span>
              </div>
            </div>

            {/* Key Executive Summary Box */}
            <div className="key-takeaways-box">
              <div className="takeaways-header">
                <h3>Key Takeaways & Executive Summary</h3>
              </div>
              <p>{blog.excerpt}</p>
            </div>

            {/* Formatted Article Body Content */}
            <div className="article-formatted-content">
              {blog.content && (blog.content.includes('<p>') || blog.content.includes('<h')) ? (
                <div 
                  className="article-html-body"
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.content) }} 
                />
              ) : (
                formattedLines.slice(1).map((line, idx) => {
                  const isHeading = line.length < 90 && !line.endsWith('.') && !line.startsWith('*');
                  const isBullet = line.startsWith('*');

                  if (isHeading) {
                    return <h2 key={idx} className="article-h2">{line.replace(/^[0-9]+\.\s*/, '')}</h2>;
                  }
                  if (isBullet) {
                    return (
                      <div key={idx} className="article-bullet-item">
                        <span className="bullet-dot">•</span>
                        <span className="bullet-text">{line.replace(/^\*\s*/, '')}</span>
                      </div>
                    );
                  }
                  return <p key={idx} className="article-p">{line}</p>;
                })
              )}
            </div>

            {/* Social Sharing & Bookmark Bar */}
            <div className="article-share-strip">
              <span className="share-label">Share this Medical Article:</span>
              <div className="share-buttons-group">
                <button type="button" className="share-btn whatsapp" onClick={handleShareWhatsApp}>
                  <MessageCircle size={16} />
                  <span>WhatsApp</span>
                </button>
                <button type="button" className="share-btn copy" onClick={handleCopyLink}>
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  <span>{copied ? 'Copied Link!' : 'Copy Article Link'}</span>
                </button>
              </div>
            </div>

          </div>

          {/* RIGHT SIDEBAR: DOCTOR REVIEWER, HELPLINE & RELATED HEALTH INSIGHTS */}
          <aside className="article-sidebar-col">
            
            {/* 1. Medical Doctor Card */}
            <div className="sidebar-card doc-reviewer-card">
              <div className="card-badge-verified">
                <ShieldCheck size={16} />
                <span>Medically Verified Article</span>
              </div>
              <h4 className="doc-card-title">Published by Medical Panel</h4>
              <h3 className="doc-card-name">OMNI Medical Advisory Board</h3>
              <p className="doc-card-desig">Senior Consultant Specialists</p>
              <p className="doc-card-dept">Department of {blog.category}</p>

              <button 
                type="button" 
                className="btn-sidebar-book"
                onClick={() => {
                  if (onBookAppointment) onBookAppointment();
                  else openWhatsAppAppointment({ specialty: blog.category });
                }}
              >
                <Calendar size={16} />
                <span>Book Consultation with Specialist</span>
              </button>
            </div>

            {/* 2. RELATED HEALTH INSIGHTS SIDEBAR WIDGET */}
            {relatedBlogs.length > 0 && (
              <div className="sidebar-card related-sidebar-card">
                <div className="related-sidebar-header">
                  <BookOpen size={18} className="book-icon-blue" />
                  <h4>Related Health Insights</h4>
                </div>

                <div className="related-sidebar-list">
                  {relatedBlogs.map((rel) => (
                    <div 
                      key={rel.id} 
                      className="sidebar-related-item"
                      onClick={() => onSelectBlog ? onSelectBlog(rel) : (onNavigate && onNavigate('blog-detail', rel.slug))}
                    >
                      <img 
                        src={getAssetUrl(rel.heroImage)} 
                        alt={rel.title} 
                        className="sidebar-rel-img" 
                      />
                      <div className="sidebar-rel-info">
                        <span className="sidebar-rel-cat">{rel.category}</span>
                        <h5 className="sidebar-rel-title">{rel.title}</h5>
                        <div className="sidebar-rel-footer">
                          <span>{rel.readTime}</span>
                          <ChevronRight size={14} className="arrow-blue" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. Helpline Emergency Box */}
            <div className="sidebar-card emergency-helpline-card">
              <PhoneCall size={28} className="phone-helpline-icon" />
              <h4>Need Immediate Medical Advice?</h4>
              <p>Connect with OMNI Hospitals 24/7 Helpline for emergency triage & appointments.</p>
              <a href="tel:8880101000" className="helpline-num-link">
                888 0101 000
              </a>
            </div>

          </aside>

        </div>
      </section>

    </div>
  );
}
