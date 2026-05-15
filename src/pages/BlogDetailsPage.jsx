import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogDetailsPage = () => {
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    // Mock data for the demonstration
    const post = {
        id: id,
        category: 'Lifestyle',
        title: "Elite Companionship: A Guide to the Empire Experience",
        date: "May 10, 2024",
        author: "Empire Editorial",
        image: "/images/pexels-macnalodao-20270579.jpg",
        content: `
            <p>Welcome to the world of Empire, where elite companionship transcends the ordinary. In this comprehensive guide, we explore the intricate details that define the "Empire Experience" – a standard of service that has made us the premier boutique agency in the region.</p>
            
            <h2>The Foundation of Excellence</h2>
            <p>At Empire, we believe that true luxury lies in the details. Our selection process is among the most rigorous in the industry, ensuring that every companion who represents our brand possesses not only exceptional beauty but also the intelligence, charisma, and emotional depth required for high-level social engagement.</p>
            
            <blockquote>
                "True luxury is not just what you see, but how you feel in the presence of someone truly exceptional."
            </blockquote>

            <h2>A Meticulous Screening Process</h2>
            <p>Discretion and safety are the cornerstones of our agency. Every potential companion undergoes a thorough verification process. This commitment to security extends to our clients as well, ensuring a safe and harmonious environment for every meeting.</p>
            
            <h2>The Art of the Date</h2>
            <p>Whether it is a high-profile corporate event, a quiet evening at a luxury hotel, or a weekend getaway, the Empire Experience is tailored to your specific desires. Our team works tirelessly behind the scenes to coordinate logistics, ensuring your focus remains entirely on your companion.</p>
            
            <ul>
                <li>Personalized matching based on preferences</li>
                <li>Seamless travel arrangements and outcall coordination</li>
                <li>24/7 support from our dedicated booking desk</li>
            </ul>

            <h2>Conclusion</h2>
            <p>Choosing Empire means choosing a standard of companionship that respects your time, your privacy, and your lifestyle. We invite you to explore our journal further or contact us directly to begin your journey.</p>
        `
    };

    const relatedPosts = [
        { id: 2, title: "Exploring Sheffield's Luxury Nightlife", image: "/images/pexels-ronin-13443101.jpg" },
        { id: 3, title: "The Importance of Discretion", image: "/images/pexels-babydov-7788013.jpg" }
    ];

    return (
        <div className="blog-details">
            <header className="details-hero">
                <div className="hero-bg" style={{ backgroundImage: `url(${post.image})` }}></div>
                <div className="hero-overlay"></div>
                <div className="container">
                    <div className="hero-content">
                        <div className="post-cat">{post.category}</div>
                        <h1>{post.title}</h1>
                        <div className="post-meta">
                            <span>By {post.author}</span>
                            <span className="dot"></span>
                            <span>{post.date}</span>
                        </div>
                    </div>
                </div>
            </header>

            <div className="details-body">
                <div className="container">
                    <div className="content-wrapper">
                        <div className="main-content" dangerouslySetInnerHTML={{ __html: post.content }}></div>
                        
                        <aside className="details-sidebar">
                            <div className="sidebar-box gold-box">
                                <h3>Ready to Experience?</h3>
                                <p>Our discreet booking team is available 24/7 for your enquiries.</p>
                                <Link to="/booking" className="btn btn-primary full">BOOK NOW</Link>
                            </div>

                            <div className="sidebar-box">
                                <h3>Related Stories</h3>
                                <div className="related-list">
                                    {relatedPosts.map(rp => (
                                        <Link to={`/blog/${rp.id}`} key={rp.id} className="related-item">
                                            <div className="rp-img"><img src={rp.image} alt="" /></div>
                                            <h4>{rp.title}</h4>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .blog-details { background: #fff; color: #111; }

                .details-hero {
                    height: 70vh;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    color: #fff;
                    overflow: hidden;
                }
                .hero-bg {
                    position: absolute;
                    inset: 0;
                    background-size: cover;
                    background-position: center;
                    transform: scale(1.05);
                }
                .hero-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.3)); }
                
                .hero-content { position: relative; z-index: 2; max-width: 900px; margin: 0 auto; padding: 0 20px; }
                .post-cat { font-size: 10px; font-weight: 900; color: var(--accent); letter-spacing: 0.3em; margin-bottom: 20px; text-transform: uppercase; }
                .hero-content h1 { font-size: clamp(2.2rem, 6vw, 4rem); font-weight: 900; line-height: 1.1; margin-bottom: 25px; text-transform: uppercase; }
                .post-meta { display: flex; align-items: center; justify-content: center; gap: 15px; font-size: 12px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; opacity: 0.8; }
                .dot { width: 4px; height: 4px; background: var(--accent); border-radius: 50%; }

                .details-body { padding: 80px 0; background: #fff; }
                .content-wrapper { display: grid; grid-template-columns: 1fr 350px; gap: 80px; }
                
                .main-content { font-size: 18px; line-height: 1.8; color: #333; }
                .main-content h2 { font-size: 24px; font-weight: 900; margin: 40px 0 20px; text-transform: uppercase; color: #111; }
                .main-content p { margin-bottom: 25px; }
                .main-content blockquote {
                    font-size: 24px;
                    font-style: italic;
                    color: var(--accent);
                    padding: 40px;
                    border-left: 4px solid var(--accent);
                    background: #fcfaf5;
                    margin: 40px 0;
                    line-height: 1.4;
                }
                .main-content ul { margin: 30px 0; padding-left: 20px; }
                .main-content li { margin-bottom: 15px; position: relative; }

                .details-sidebar { position: sticky; top: 120px; height: fit-content; }
                .sidebar-box { padding: 40px; background: #fcfaf5; border: 1px solid #eee; margin-bottom: 30px; border-radius: 15px; }
                .gold-box { border-color: var(--accent); background: #fff; }
                .sidebar-box h3 { font-size: 16px; font-weight: 900; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 0.05em; }
                .sidebar-box p { font-size: 14px; color: #666; margin-bottom: 25px; line-height: 1.6; }
                .btn.full { width: 100%; display: block; text-align: center; }

                .related-list { display: flex; flex-direction: column; gap: 25px; }
                .related-item { display: grid; grid-template-columns: 80px 1fr; gap: 15px; text-decoration: none; color: inherit; align-items: center; }
                .rp-img { height: 60px; border-radius: 8px; overflow: hidden; }
                .rp-img img { width: 100%; height: 100%; object-fit: cover; }
                .related-item h4 { font-size: 13px; font-weight: 900; line-height: 1.4; transition: 0.3s; }
                .related-item:hover h4 { color: var(--accent); }

                @media (max-width: 1024px) {
                    .content-wrapper { grid-template-columns: 1fr; gap: 60px; }
                    .details-sidebar { position: static; }
                }
                @media (max-width: 640px) {
                    .details-hero { height: 50vh; }
                    .main-content { font-size: 16px; }
                }
            `}</style>
        </div>
    );
};

export default BlogDetailsPage;
