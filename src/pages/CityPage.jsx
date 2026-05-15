import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { girls } from '../data/girls';
import { cityData } from '../data/cities';
import gsap from 'gsap';

const CityPage = () => {
    const { city } = useParams();
    const cityKey = city.toLowerCase();
    const data = cityData[cityKey];
    
    // Fallback if city data doesn't exist
    const cityDisplay = data ? data.name : city.charAt(0).toUpperCase() + city.slice(1);
    const filteredGirls = girls.filter(g => 
        g.location.toLowerCase().includes(cityKey) || 
        (data && data.nearby.some(n => g.location.toLowerCase().includes(n.toLowerCase())))
    );

    useEffect(() => {
        window.scrollTo(0, 0);
        
        // Initial state reset to ensure visibility if GSAP fails
        gsap.set('.city-hero-content > *', { opacity: 0, y: 30 });
        
        gsap.to('.city-hero-content > *', {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 1,
            ease: 'power4.out',
            delay: 0.3
        });

        gsap.from('.info-card', {
            opacity: 0,
            y: 30,
            stagger: 0.1,
            duration: 1,
            ease: 'power3.out',
            delay: 0.8
        });
    }, [city]);

    if (!data) {
        return (
            <div className="city-page">
                <section className="city-hero">
                    <div className="container city-hero-content">
                        <h1 style={{ color: '#fff !important' }}>Escorts in {cityDisplay}</h1>
                        <p style={{ color: '#fff !important' }}>Browse our elite selection of companions available in {cityDisplay} and surrounding areas.</p>
                    </div>
                </section>
                <section className="city-girls-grid">
                    <div className="container">
                        <div className="grid-header">
                            <h2 style={{ color: '#111 !important' }}>Available Now in <span>{cityDisplay}</span></h2>
                        </div>
                        <div className="girls-list-wrapper">
                            {filteredGirls.length > 0 ? (
                                <div className="girls-grid">
                                    {filteredGirls.map(girl => (
                                        <Link key={girl.id} to={`/profile/${girl.id}`} className="girl-card">
                                            <div className="img-wrap">
                                                <img src={girl.image} alt={girl.name} />
                                                <div className="card-badge">{girl.price}</div>
                                            </div>
                                            <div className="info">
                                                <h3 style={{ color: '#111 !important' }}>{girl.name}, {girl.age}</h3>
                                                <p style={{ color: '#888 !important' }}>{girl.location}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <p className="no-results">No escorts currently listed in {cityDisplay}. Please check nearby areas.</p>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div className="city-page">
            {/* City Hero */}
            <section className="city-hero">
                <div className="container city-hero-content">
                    <div className="hero-tags">
                        <span className="hero-tag">TOP RATED</span>
                        <span className="hero-tag">VIP SELECTION</span>
                        <span className="hero-tag">NEW MODELS</span>
                    </div>
                    <h1 style={{ color: '#ffffff', opacity: 1 }}>{data.heroTitle}</h1>
                    <p className="intro-text" style={{ color: '#ffffff', opacity: 0.9 }}>{data.intro}</p>
                    <div className="hero-actions">
                        <a href="#available" className="btn btn-primary">VIEW MODELS</a>
                        <a href="tel:07368428158" className="btn btn-outline">CALL NOW</a>
                    </div>
                </div>
            </section>

            {/* Available Girls */}
            <section id="available" className="city-girls-grid">
                <div className="container">
                    <div className="section-header">
                        <h2 style={{ color: '#111' }}>Available Now in <span>{data.name}</span></h2>
                        <p style={{ color: '#777' }}>Hand-picked elite companions for outcalls and social dates.</p>
                    </div>
                    
                    <div className="girls-grid">
                        {filteredGirls.map(girl => (
                            <Link key={girl.id} to={`/profile/${girl.id}`} className="girl-card">
                                <div className="img-wrap">
                                    <img src={girl.image} alt={girl.name} />
                                    <div className="card-badge">{girl.price}</div>
                                    {girl.isVip && <div className="vip-tag">VIP</div>}
                                </div>
                                <div className="info">
                                    <div className="info-top">
                                        <h3 style={{ color: '#111' }}>{girl.name}, {girl.age}</h3>
                                        <span className={`status-dot ${girl.status === 'Available Now' ? 'active' : ''}`}></span>
                                    </div>
                                    <p className="loc" style={{ color: '#888' }}>{girl.location}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    {filteredGirls.length === 0 && (
                        <div className="no-girls">
                            <p>We are currently updating our roster for {data.name}.</p>
                            <Link to="/girls" className="btn btn-primary">VIEW ALL LOCATIONS</Link>
                        </div>
                    )}
                </div>
            </section>

            {/* City Information Grid */}
            <section className="city-info-section">
                <div className="container">
                    <div className="city-info-grid">
                        <div className="info-card">
                            <h3 style={{ color: '#111' }}>How to Book in {data.name}</h3>
                            <p style={{ color: '#333' }}>{data.bookingInfo}</p>
                        </div>
                        <div className="info-card">
                            <h3 style={{ color: '#111' }}>Nearby Areas Covered</h3>
                            <div className="nearby-tags">
                                {data.nearby.map(area => (
                                    <span key={area} className="tag">{area}</span>
                                ))}
                            </div>
                        </div>
                        <div className="info-card">
                            <h3 style={{ color: '#111' }}>Trust & Discretion</h3>
                            <ul className="trust-list">
                                <li style={{ color: '#111' }}>✓ 100% Verified Profiles</li>
                                <li style={{ color: '#111' }}>✓ Total Privacy Guaranteed</li>
                                <li style={{ color: '#111' }}>✓ No Hidden Charges</li>
                                <li style={{ color: '#111' }}>✓ Elite Professional Service</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="city-faq">
                <div className="container">
                    <div className="section-header">
                        <h2 style={{ color: '#111' }}>Frequently Asked <span>Questions</span></h2>
                    </div>
                    <div className="faq-wrapper">
                        {data.faqs.map((faq, idx) => (
                            <div key={idx} className="faq-item">
                                <h4 style={{ color: '#111' }}>{faq.q}</h4>
                                <p style={{ color: '#333' }}>{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SEO Content Section */}
            <section className="city-seo-content">
                <div className="container">
                    <div className="seo-card">
                        <h2>Elite Companionship in {data.name}</h2>
                        <div className="seo-text">
                            <p>{data.seoText}</p>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .city-page {
                    background: #fcfaf5;
                    color: #111;
                }
                .city-page a {
                    color: inherit;
                    text-decoration: none;
                }
                .city-hero {
                    background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url('/images/pexels-noirgenesis-5953288.jpg');
                    background-size: cover;
                    background-position: center;
                    padding: 180px 0 120px;
                    color: #ffffff;
                    text-align: center;
                    position: relative;
                }
                .hero-tags {
                    display: flex;
                    justify-content: center;
                    gap: 15px;
                    margin-bottom: 25px;
                }
                .hero-tag {
                    font-size: 10px;
                    font-weight: 900;
                    letter-spacing: 0.2em;
                    padding: 6px 15px;
                    border: 1px solid rgba(255,255,255,0.3);
                    background: rgba(255,255,255,0.1);
                    backdrop-filter: blur(5px);
                    color: var(--accent);
                }
                .city-hero-content h1 {
                    font-size: clamp(2rem, 5vw, 3rem);
                    font-weight: 900;
                    text-transform: uppercase;
                    margin-bottom: 20px;
                    letter-spacing: -0.01em;
                    text-shadow: 0 5px 15px rgba(0,0,0,0.3);
                    -webkit-font-smoothing: antialiased;
                    line-height: 1.1;
                }
                .intro-text {
                    font-size: 1.1rem;
                    max-width: 700px;
                    margin: 0 auto 35px;
                    opacity: 1;
                    line-height: 1.6;
                    font-weight: 500;
                    text-shadow: 0 2px 10px rgba(0,0,0,0.5);
                }
                .hero-actions {
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                }

                .city-girls-grid { padding: 100px 0; }
                .section-header { text-align: center; margin-bottom: 60px; }
                .section-header h2 { font-size: 2.5rem; font-weight: 900; text-transform: uppercase; }
                .section-header h2 span { color: var(--accent); }
                .section-header p { color: #777; margin-top: 10px; font-weight: 600; }

                .girls-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 30px;
                }
                .girl-card {
                    background: #fff;
                    border: 1px solid #eee;
                    text-decoration: none;
                    transition: 0.4s var(--ease-expo);
                    overflow: hidden;
                    position: relative;
                }
                .girl-card:hover { transform: translateY(-10px); border-color: var(--accent); }
                .img-wrap { position: relative; aspect-ratio: 1/1.2; overflow: hidden; }
                .img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: 0.6s; }
                .girl-card:hover .img-wrap img { transform: scale(1.1); }
                
                .card-badge {
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    background: var(--accent);
                    color: #fff;
                    padding: 5px 12px;
                    font-size: 11px;
                    font-weight: 900;
                    z-index: 2;
                }
                .vip-tag {
                    position: absolute;
                    top: 15px;
                    left: 15px;
                    background: #ff007f;
                    color: #fff;
                    padding: 5px 12px;
                    font-size: 10px;
                    font-weight: 900;
                    letter-spacing: 0.1em;
                }

                .info { padding: 20px; }
                .info-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px; }
                .info h3 { font-size: 16px; font-weight: 900; color: #111; text-transform: uppercase; margin: 0; }
                .status-dot { width: 8px; height: 8px; border-radius: 50%; background: #ccc; }
                .status-dot.active { background: #25D366; box-shadow: 0 0 10px #25D366; }
                .loc { font-size: 12px; color: #888; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin: 0; }

                .city-info-section { padding: 100px 0; background: #fff; border-top: 1px solid #eee; }
                .city-info-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 40px;
                }
                .info-card {
                    padding: 40px;
                    background: #fcfaf5;
                    border: 1px solid #eee;
                }
                .info-card h3 { font-size: 15px; font-weight: 900; text-transform: uppercase; margin-bottom: 20px; letter-spacing: 0.1em; color: #111; }
                .info-card p { font-size: 14px; line-height: 1.7; color: #333; font-weight: 500; }
                
                .nearby-tags { display: flex; flex-wrap: wrap; gap: 10px; }
                .tag { font-size: 11px; font-weight: 800; background: #fff; border: 1px solid #eee; padding: 8px 15px; text-transform: uppercase; color: #111; }
                
                .trust-list { list-style: none; padding: 0; }
                .trust-list li { font-size: 13px; font-weight: 700; color: #111; margin-bottom: 12px; }

                .city-faq { padding: 100px 0; border-top: 1px solid #eee; }
                .faq-wrapper { max-width: 900px; margin: 0 auto; }
                .faq-item { margin-bottom: 40px; padding-bottom: 30px; border-bottom: 1px solid #eee; }
                .faq-item:last-child { border-bottom: none; }
                .faq-item h4 { font-size: 16px; font-weight: 900; text-transform: uppercase; margin-bottom: 15px; color: #111; }
                .faq-item p { font-size: 15px; line-height: 1.7; color: #333; font-weight: 500; }

                .city-seo-content { padding: 100px 0; background: #111; color: #fff; }
                .seo-card { max-width: 1000px; margin: 0 auto; text-align: center; }
                .seo-card h2 { font-size: 2rem; font-weight: 900; text-transform: uppercase; margin-bottom: 30px; }
                .seo-text p { font-size: 16px; line-height: 1.9; opacity: 0.8; }

                @media (max-width: 1024px) {
                    .girls-grid { grid-template-columns: repeat(3, 1fr); }
                    .city-info-grid { grid-template-columns: 1fr; }
                }
                @media (max-width: 768px) {
                    .girls-grid { grid-template-columns: repeat(2, 1fr); }
                    .hero-actions { flex-direction: column; }
                }
            `}</style>
        </div>
    );
};

export default CityPage;
