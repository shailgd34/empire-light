import React from 'react';
import { girls } from '../data/girls';

import { Link } from 'react-router-dom';

const Selection = () => {
    return (
        <section id="our-girls" className="section" style={{ background: 'rgb(250 248 245)', padding: '80px 0' }}>
            <div className="container">
                <div className="section-header">
                    <p style={{ color: 'var(--accent)', fontSize: '12px', fontWeight: '900', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Our Selection</p>
                    <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '800', color: '#111', textTransform: 'uppercase' }}>
                        Our <span style={{ color: 'var(--accent)' }}>Girls</span>
                    </h2>
                </div>

                <div className="girls-grid">
                    {girls.slice(0, 8).map((girl, index) => (
                        <div key={index} className="selection-girl-card">
                            <Link to={`/profile/${girl.id}`} className="girl-image-link">
                                <div className="girl-image-wrap">
                                    <img src={girl.image} alt={girl.name} className="girl-img" />

                                    {girl.isVip && (
                                        <div className="vip-badge">VIP MODEL</div>
                                    )}

                                    <div className="girl-price">{girl.price}</div>

                                    <div className={`girl-overlay-info ${girl.status === 'Available Now' ? 'status-green' : 'status-magenta'}`}>
                                        <span className="status-dot"></span>
                                        {girl.status}
                                    </div>
                                </div>
                            </Link>
                            
                            <div className="selection-girl-info">
                                <Link to={`/profile/${girl.id}`} className="name-link">
                                    <span className="name-txt">{girl.name}, {girl.age}</span>
                                </Link>
                                <div className="loc-row">
                                    <div className="loc-txt">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                        {girl.location}
                                    </div>
                                    <div className="contact-btns">
                                        <a href="tel:07368428158" className="c-btn phone">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                        </a>
                                        <a href="https://wa.me/447368428158" className="c-btn whatsapp">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="section-footer" style={{ marginTop: '60px', textAlign: 'center' }}>
                    <Link to="/girls" className="btn btn-primary rounded-full" style={{ padding: '18px 60px', fontSize: '12px' }}>
                        SEE ALL GIRLS
                    </Link>
                </div>
            </div>

            <style jsx>{`
                .girls-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: 30px;
                    margin-top: 50px;
                }
                .selection-girl-card {
                    background: #fff;
                    border: 1px solid #eee;
                    transition: 0.4s var(--ease-expo);
                    position: relative;
                }
                .selection-girl-card:hover {
                    border-color: var(--accent);
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.05);
                }
                .girl-image-wrap {
                    position: relative;
                    aspect-ratio: 1/1.3;
                    overflow: hidden;
                    background: #f7f7f7;
                }
                .girl-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: 1s var(--ease-expo);
                }
                
                .vip-badge {
                    position: absolute;
                    top: 15px;
                    left: 15px;
                    background: #ff007f;
                    color: #fff;
                    font-size: 9px;
                    font-weight: 900;
                    padding: 5px 12px;
                    z-index: 5;
                    letter-spacing: 0.1em;
                }

                .girl-price {
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

                .girl-overlay-info {
                    position: absolute;
                    bottom: 15px;
                    left: 15px;
                    background: rgba(0,0,0,0.6);
                    color: #fff;
                    padding: 6px 12px;
                    font-size: 10px;
                    font-weight: 800;
                    text-transform: uppercase;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    z-index: 5;
                }
                .status-green { border-left: 3px solid #25D366; }
                .status-magenta { border-left: 3px solid #ff007f; }
                .status-dot { width: 6px; height: 6px; border-radius: 50%; }
                .status-green .status-dot { background: #25D366; }
                .status-magenta .status-dot { background: #ff007f; }

                .selection-girl-info {
                    padding: 20px;
                    background: #fff;
                }
                .name-txt {
                    font-size: 1.2rem;
                    font-weight: 900;
                    color: #000;
                    text-transform: uppercase;
                    margin-bottom: 12px;
                    display: block;
                    letter-spacing: -0.02em;
                }
                .loc-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .loc-txt {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 11px;
                    color: #777;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
                .contact-btns {
                    display: flex;
                    gap: 10px;
                }
                .c-btn {
                    color: #555;
                    transition: 0.3s;
                    display: flex;
                    align-items: center;
                    opacity: 0.8;
                }
                .c-btn:hover { 
                    opacity: 1;
                    transform: scale(1.1); 
                }
                .c-btn.phone { color: var(--accent); }
                .c-btn.whatsapp { color: #25D366; }

                .name-link {
                    text-decoration: none;
                    display: block;
                }
                .girl-image-link {
                    text-decoration: none;
                    display: block;
                }

                @media (max-width: 600px) {
                    .girls-grid { grid-template-columns: 1fr; }
                }
            `}</style>
        </section>
    );
};

export default Selection;
