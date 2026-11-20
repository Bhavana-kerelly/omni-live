import { useState, useEffect } from 'react';
import { BLOGS_DATA, BLOG_CATEGORIES } from '../data/blogsData';

export const API_BASE_URL = (() => {
  const envUrl = import.meta.env.VITE_API_BASE_URL;
  if (envUrl && envUrl.trim() !== '') {
    return envUrl.trim().replace(/\/+$/, '');
  }
  return import.meta.env.DEV ? 'http://127.0.0.1:8000' : '';
})();

export function normalizeBlog(blog) {
  if (!blog) return null;

  // Resolve image URL
  let resolvedImage = '/images/blogs/blog-1.jpg';
  if (blog.imageFilename) {
    const rawImg = String(blog.imageFilename).trim();
    if (rawImg.startsWith('http://') || rawImg.startsWith('https://') || rawImg.startsWith('data:')) {
      resolvedImage = rawImg;
    } else if (rawImg.startsWith('images/')) {
      resolvedImage = `/${rawImg}`;
    } else if (rawImg.startsWith('/images/')) {
      resolvedImage = rawImg;
    } else {
      const cleanPath = rawImg.replace(/^\/+/, '');
      resolvedImage = API_BASE_URL ? `${API_BASE_URL}/storage/${cleanPath}` : `/storage/${cleanPath}`;
    }
  } else if (blog.heroImage) {
    resolvedImage = blog.heroImage;
  }

  // Format date nicely if standard ISO
  let displayDate = blog.date;
  if (!displayDate && blog.created_at) {
    try {
      displayDate = new Date(blog.created_at).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    } catch {
      displayDate = blog.created_at;
    }
  }

  return {
    id: blog.id,
    slug: blog.slug,
    title: blog.title || 'Untitled Article',
    excerpt: blog.excerpt || '',
    category: blog.category || 'Multispecialty Care',
    doctor: {
      name: blog.author || (blog.doctor && blog.doctor.name) || 'OMNI Hospitals Medical Board',
      desig: (blog.doctor && blog.doctor.desig) || 'Senior Medical Advisory Panel',
      qual: (blog.doctor && blog.doctor.qual) || 'MBBS, MD / MS Specialists',
      dept: blog.category || (blog.doctor && blog.doctor.dept) || 'Multispecialty Care',
    },
    readTime: blog.readTime || blog.readingTime || '4 min read',
    date: displayDate || 'Recently Published',
    heroImage: resolvedImage,
    imageFilename: blog.imageFilename || null,
    fullText: blog.fullText || '',
    content: blog.content || '',
    featured: Boolean(blog.featured),
    tags: Array.isArray(blog.tags) ? blog.tags : []
  };
}

export async function fetchLiveBlogs() {
  const localNormalized = BLOGS_DATA.map(normalizeBlog);
  try {
    const endpoint = API_BASE_URL ? `${API_BASE_URL}/api/blogs` : '/api/blogs';
    const res = await fetch(endpoint, {
      headers: { 'Accept': 'application/json' },
      cache: 'no-cache'
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (Array.isArray(data) && data.length > 0) {
      const apiBlogs = data.map(normalizeBlog);
      const apiSlugs = new Set(apiBlogs.map(b => (b.slug || '').toLowerCase()));
      const apiTitles = new Set(apiBlogs.map(b => (b.title || '').trim().toLowerCase()));

      // Preserve any local blogs that have not yet been migrated or seeded into the backend API
      const missingLocal = localNormalized.filter(b => 
        !apiSlugs.has((b.slug || '').toLowerCase()) && 
        !apiTitles.has((b.title || '').trim().toLowerCase())
      );

      return [...apiBlogs, ...missingLocal];
    }
  } catch (err) {
    console.warn('API blogs fetch failed, falling back to local dataset:', err);
  }
  return localNormalized;
}

export async function fetchLiveBlogBySlug(slug) {
  try {
    const endpoint = API_BASE_URL ? `${API_BASE_URL}/api/blogs/${encodeURIComponent(slug)}` : `/api/blogs/${encodeURIComponent(slug)}`;
    const res = await fetch(endpoint, {
      headers: { 'Accept': 'application/json' },
      cache: 'no-cache'
    });
    if (res.ok) {
      const data = await res.json();
      return normalizeBlog(data);
    }
  } catch (err) {
    console.warn(`API blog by slug '${slug}' failed:`, err);
  }
  const localMatch = BLOGS_DATA.find(b => b.slug === slug || String(b.id) === String(slug));
  return localMatch ? normalizeBlog(localMatch) : null;
}

export function useBlogs() {
  const [blogs, setBlogs] = useState(() => BLOGS_DATA.map(normalizeBlog));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    fetchLiveBlogs().then((data) => {
      if (isMounted && data && data.length > 0) {
        setBlogs(data);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  return { blogs, loading, categories: BLOG_CATEGORIES };
}
