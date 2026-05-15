import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Lifestyle', 'Security', 'Travel', 'Etiquette'];

    const posts = [
        {
            id: 1,
            category: 'Lifestyle',
            title: "Elite Companionship: A Guide to the Empire Experience",
            date: "May 10, 2024",
            excerpt: "Discover what sets Empire Escorts apart. From our meticulous screening process to our focus on discreet, luxury service.",
            image: "/images/pexels-macnalodao-20270579.jpg"
        },
        {
            id: 2,
            category: 'Travel',
            title: "Exploring Sheffield's Luxury Nightlife with a Companion",
            date: "April 28, 2024",
            excerpt: "Looking for the best spots in the Steel City? Our guide covers the most exclusive venues to enjoy with an elite companion.",
            image: "/images/pexels-ronin-13443101.jpg"
        },
        {
            id: 3,
            category: 'Security',
            title: "The Importance of Discretion in the Escort Industry",
            date: "April 15, 2024",
            excerpt: "Learn how we protect your privacy and ensure every meeting is handled with the utmost confidentiality and professionalism.",
            image: "/images/pexels-babydov-7788013.jpg"
        },
        {
            id: 4,
            category: 'Etiquette',
            title: "Gentleman's Guide: Making the Most of Your Date",
            date: "April 05, 2024",
            excerpt: "Master the art of elite companionship with our guide on etiquette, communication, and mutual respect.",
            image: "/images/pexels-stardustmultimedia-12642172.jpg"
        },
        {
            id: 5,
            category: 'Travel',
            title: "Executive Travel: Outcalls Across the United Kingdom",
            date: "March 22, 2024",
            excerpt: "How Empire manages seamless outcall arrangements for our traveling executive clientele.",
            image: "/images/pexels-noirgenesis-5953288.jpg"
        },
        {
            id: 6,
            category: 'Lifestyle',
            title: "The Rise of Boutique Agencies in the Modern Era",
            date: "March 10, 2024",
            excerpt: "Why boutique agencies like Empire are becoming the preferred choice for discerning individuals.",
            image: "/images/pexels-vika-glitter-392079-11363751.jpg"
        }
    ];

    const filteredPosts = activeCategory === 'All' ? posts : posts.filter(p => p.category === activeCategory);

    return (
        <div className="blog-page">
            <section className="blog-hero">
                <div className="container blog-hero-content">
                    <div className="blog-pre">EMPIRE JOURNAL</div>
                    <h1>Lifestyle & <span>Insights</span></h1>
                    <p>Exploring the world of elite companionship, luxury lifestyle, and the Empire standard.</p>
                </div>
            </section>

            <section className="blog-filter-section">
                <div className="container">
                    <div className="filter-bar">
                        {categories.map(cat => (
                            <button 
                                key={cat} 
                                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <section className="blog-grid-section">
                <div className="container">
                    <div className="blog-grid">
                        {filteredPosts.map(post => (
                            <Link to={`/blog/${post.id}`} key={post.id} className="blog-card">
                                <article>
                                    <div className="blog-img">
                                        <img src={post.image} alt={post.title} />
                                        <div className="blog-cat">{post.category}</div>
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-date">{post.date}</div>
                                        <h3>{post.title}</h3>
                                        <p>{post.excerpt}</p>
                                        <div className="read-more">EXPLORE ARTICLE <span>→</span></div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>

                    <div className="pagination">
                        <button className="page-btn active">1</button>
                        <button className="page-btn">2</button>
                        <button className="page-btn">3</button>
                        <button className="page-btn next">NEXT <span>→</span></button>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .blog-page { background: #fcfaf5; color: #111; }
                
                .blog-hero {
                    padding: 160px 0 100px;
                    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url('/images/pexels-ronin-13443101.jpg');
                    background-size: cover;
                    background-position: center;
                    color: #fff;
                    text-align: center;
                }
                .blog-pre { font-size: 10px; font-weight: 900; letter-spacing: 0.3em; color: var(--accent); margin-bottom: 15px; }
                .blog-hero h1 { font-size: clamp(2rem, 5vw, 2.8rem); font-weight: 900; text-transform: uppercase; margin-bottom: 15px; letter-spacing: -0.01em; line-height: 1.1; }
                .blog-hero h1 span { color: var(--accent); }
                .blog-hero p { font-size: 1rem; opacity: 0.9; max-width: 600px; margin: 0 auto; line-height: 1.6; }

                .blog-filter-section { padding: 40px 0; background: #fff; border-bottom: 1px solid #eee; }
                .filter-bar { display: flex; justify-content: center; gap: 30px; }
                .filter-btn {
                    background: none;
                    border: none;
                    font-size: 11px;
                    font-weight: 900;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    color: #999;
                    cursor: pointer;
                    padding: 10px 0;
                    position: relative;
                    transition: 0.3s;
                }
                .filter-btn.active { color: var(--accent); }
                .filter-btn.active::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background: var(--accent);
                }

                .blog-grid-section { padding: 80px 0; background: #fcfaf5; }
                .blog-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 30px;
                    margin-bottom: 60px;
                }
                .blog-card {
                    background: #fff;
                    border: 1px solid #eee;
                    border-radius: 15px;
                    overflow: hidden;
                    text-decoration: none;
                    color: inherit;
                    transition: 0.4s var(--ease-expo);
                    display: block;
                }
                .blog-card:hover { transform: translateY(-10px); border-color: var(--accent); box-shadow: 0 20px 40px rgba(197, 160, 89, 0.1); }
                
                .blog-img { position: relative; aspect-ratio: 16/10; overflow: hidden; }
                .blog-img img { width: 100%; height: 100%; object-fit: cover; transition: 0.8s; }
                .blog-card:hover .blog-img img { transform: scale(1.1); }
                
                .blog-cat {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    background: rgba(197, 160, 89, 0.9);
                    backdrop-filter: blur(5px);
                    color: #fff;
                    padding: 6px 12px;
                    font-size: 9px;
                    font-weight: 900;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    border-radius: 4px;
                }

                .blog-content { padding: 30px; }
                .blog-date { font-size: 10px; font-weight: 900; color: var(--accent); margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.1em; }
                .blog-content h3 { font-size: 18px; font-weight: 900; line-height: 1.3; margin-bottom: 15px; color: #111; }
                .blog-content p { font-size: 14px; color: #666; line-height: 1.7; margin-bottom: 20px; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
                
                .read-more {
                    font-size: 11px;
                    font-weight: 900;
                    letter-spacing: 0.15em;
                    color: var(--accent);
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 0;
                }
                .read-more span { transition: 0.3s; }
                .blog-card:hover .read-more span { transform: translateX(5px); }

                .pagination { display: flex; justify-content: center; gap: 10px; align-items: center; }
                .page-btn {
                    width: 40px;
                    height: 40px;
                    border: 1px solid #eee;
                    background: #fff;
                    font-size: 12px;
                    font-weight: 900;
                    color: #999;
                    cursor: pointer;
                    transition: 0.3s;
                    border-radius: 8px;
                }
                .page-btn.active { background: var(--accent); color: #fff; border-color: var(--accent); }
                .page-btn.next { width: auto; padding: 0 20px; display: flex; align-items: center; gap: 10px; }
                .page-btn:hover:not(.active) { border-color: var(--accent); color: var(--accent); }

                @media (max-width: 1024px) {
                    .blog-grid { grid-template-columns: repeat(2, 1fr); }
                    .filter-bar { gap: 15px; overflow-x: auto; padding-bottom: 10px; justify-content: flex-start; }
                    .filter-btn { white-space: nowrap; }
                }
                @media (max-width: 640px) {
                    .blog-grid { grid-template-columns: 1fr; }
                    .blog-hero h1 { font-size: 2.2rem; }
                }
            `}</style>
        </div>
    );
};

export default BlogPage;
