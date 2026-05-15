import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { girls } from '../data/girls';
import gsap from 'gsap';

const ProfilePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const girl = girls.find(g => g.id === parseInt(id));
    const [activeImage, setActiveImage] = useState(girl?.image || '');

    if (!girl) {
        return (
            <div className="container" style={{ padding: '150px 0', textAlign: 'center' }}>
                <h2>Profile Not Found</h2>
                <Link to="/girls" className="btn btn-primary" style={{ marginTop: '20px' }}>BACK TO DIRECTORY</Link>
            </div>
        );
    }

    const similarGirls = girls
        .filter(g => g.id !== girl.id && (g.location === girl.location || g.type === girl.type))
        .slice(0, 4);

    useEffect(() => {
        window.scrollTo(0, 0);
        setActiveImage(girl.image);
        
        // Use a small delay to ensure DOM is ready
        const timer = setTimeout(() => {
            gsap.from('.profile-header-info > *', {
                opacity: 0,
                y: 20,
                stagger: 0.1,
                duration: 0.8,
                ease: 'power3.out'
            });

            gsap.from('.main-image-wrap', {
                opacity: 0,
                scale: 0.95,
                duration: 1,
                ease: 'power3.out'
            });

            gsap.from('.glass-card', {
                opacity: 0,
                y: 30,
                duration: 1,
                delay: 0.5,
                ease: 'power3.out'
            });
        }, 100);

        return () => clearTimeout(timer);
    }, [id, girl.image]);

    return (
        <div className="profile-page">
            <div className="container">
                <div className="profile-breadcrumb">
                    <Link to="/">Home</Link> / <Link to="/girls">Our Girls</Link> / <span>{girl.name}</span>
                </div>

                <div className="profile-main-layout">
                    {/* Left: Gallery */}
                    <div className="profile-left">
                        <div className="main-image-wrap">
                            <div className="gallery-counter">{(girl.images?.indexOf(activeImage) + 1) || 1} / {girl.images?.length || 1}</div>
                            <img src={activeImage} alt={girl.name} className="main-profile-img" />
                            {girl.isVip && <div className="vip-badge-large">VIP MODEL</div>}
                            <div className="verified-badge">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                                VERIFIED PROFILE
                            </div>
                        </div>
                        <div className="image-thumbnails">
                            {girl.images?.map((img, idx) => (
                                <div 
                                    key={idx} 
                                    className={`thumb ${activeImage === img ? 'active' : ''}`}
                                    onClick={() => setActiveImage(img)}
                                >
                                    <img src={img} alt={`${girl.name} - View ${idx + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Info & Actions */}
                    <div className="profile-right">
                        <div className="glass-card">
                            <div className="profile-header-info">
                                <div className="status-indicator">
                                    <span className={`dot ${girl.status === 'Available Now' ? 'online' : 'busy'}`}></span>
                                    {girl.status}
                                </div>
                                <h1>{girl.name}, {girl.age}</h1>
                                <p className="location-text">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                    {girl.location}
                                </p>
                            </div>

                            <div className="profile-actions-grid">
                                <a href="tel:07368428158" className="action-btn call">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                    CALL NOW
                                </a>
                                <a href="https://wa.me/447368428158" className="action-btn whatsapp">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                                    WHATSAPP
                                </a>
                                <button className="action-btn book" onClick={() => navigate('/#join-us')}>
                                    BOOK NOW
                                </button>
                            </div>

                            <div className="profile-details-section">
                                <div className="stats-grid">
                                    <div className="stat-box">
                                        <span className="label">Height</span>
                                        <span className="value">{girl.height || `5'${(girl.id % 6) + 4}"`}</span>
                                    </div>
                                    <div className="stat-box">
                                        <span className="label">Hair</span>
                                        <span className="value">{girl.hair || (girl.id % 2 === 0 ? 'Brunette' : 'Blonde')}</span>
                                    </div>
                                    <div className="stat-box">
                                        <span className="label">Eyes</span>
                                        <span className="value">{girl.eyes || (girl.id % 3 === 0 ? 'Blue' : 'Brown')}</span>
                                    </div>
                                    <div className="stat-box">
                                        <span className="label">Nationality</span>
                                        <span className="value">{girl.nationality || 'British'}</span>
                                    </div>
                                    <div className="stat-box">
                                        <span className="label">Availability</span>
                                        <span className="value">{girl.availability}</span>
                                    </div>
                                    <div className="stat-box">
                                        <span className="label">Price</span>
                                        <span className="value">{girl.price}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="trust-banner">
                                <div className="trust-item">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                                    <span>Genuine Photos</span>
                                </div>
                                <div className="trust-item">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                    <span>Verified</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* New Row: Bio & Information */}
                <div className="profile-info-row">
                    <div className="info-section bio">
                        <h3>Discover {girl.name}</h3>
                        <p>
                            {girl.name} is a stunning and sophisticated {girl.type.toLowerCase()} companion who excels in providing elite companionship. 
                            Known for her charm, elegance, and captivating personality, she is the perfect choice for both social events and intimate evenings. 
                            Whether you're looking for an engaging dinner date or a relaxing night in, her attention to detail and commitment to excellence ensure a truly memorable experience.
                        </p>
                    </div>
                    <div className="info-section services">
                        <h3>Exclusive Services</h3>
                        <div className="services-list">
                            <div className="service-tag">GFE Experience</div>
                            <div className="service-tag">Social Events</div>
                            <div className="service-tag">Dinner Dates</div>
                            <div className="service-tag">Travel Companion</div>
                            <div className="service-tag">Tours (Request Only)</div>
                        </div>
                    </div>
                </div>

                {/* Similar Profiles */}
                <section className="similar-profiles-section">
                    <h2 className="section-title">Similar <span>Companions</span></h2>
                    <div className="similar-grid">
                        {similarGirls.map(g => (
                            <Link key={g.id} to={`/profile/${g.id}`} className="similar-card">
                                <div className="similar-img-wrap">
                                    <img src={g.image} alt={g.name} />
                                    <div className="similar-price">{g.price}</div>
                                </div>
                                <div className="similar-info">
                                    <h4>{g.name}, {g.age}</h4>
                                    <span>{g.location}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>

            <style jsx>{`
                .profile-page {
                    background: #fcfaf5;
                    padding: 80px 0 80px;
                    color: #111;
                    position: relative;
                    overflow: hidden;
                }
                .glass-card {
                    background: rgba(255, 255, 255, 0.7);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.8);
                    padding: 40px;
                    box-shadow: 0 30px 60px rgba(0,0,0,0.05);
                    position: relative;
                    z-index: 1;
                }
                .profile-breadcrumb {
                    font-size: 11px;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: #999;
                    margin-bottom: 40px;
                }
                .profile-breadcrumb a {
                    color: inherit;
                    text-decoration: none;
                    transition: 0.3s;
                }
                .profile-breadcrumb a:hover { color: var(--accent); }
                .profile-breadcrumb span { color: #111; }

                .profile-main-layout {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 80px;
                    margin-bottom: 100px;
                }

                /* Left Side: Gallery */
                .main-image-wrap {
                    position: relative;
                    aspect-ratio: 1/1.1;
                    background: #eee;
                    margin-bottom: 25px;
                    overflow: hidden;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.1);
                }
                .gallery-counter {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    background: rgba(0,0,0,0.5);
                    color: #fff;
                    padding: 5px 12px;
                    font-size: 10px;
                    font-weight: 800;
                    border-radius: 20px;
                    z-index: 10;
                    backdrop-filter: blur(5px);
                }
                .main-profile-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
                }
                .main-image-wrap:hover .main-profile-img {
                    transform: scale(1.08);
                }

                /* New Info Row */
                .profile-info-row {
                    display: grid;
                    grid-template-columns: 2fr 1fr;
                    gap: 40px;
                    margin-top: 40px;
                    margin-bottom: 80px;
                    padding-top: 60px;
                    border-top: 1px solid #eee;
                }
                .info-section h3 {
                    font-size: 14px;
                    font-weight: 900;
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    margin-bottom: 25px;
                    color: var(--accent);
                }
                .info-section.bio p {
                    font-size: 16px;
                    line-height: 1.8;
                    color: #555;
                    font-family: var(--font-body);
                }
                .services-list {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                }
                .service-tag {
                    background: #fff;
                    border: 1px solid #eee;
                    padding: 10px 20px;
                    font-size: 11px;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    transition: 0.3s;
                }
                .service-tag:hover {
                    border-color: var(--accent);
                    color: var(--accent);
                }

                .vip-badge-large {
                    position: absolute;
                    top: 30px;
                    left: 30px;
                    background: #ff007f;
                    color: #fff;
                    padding: 10px 25px;
                    font-size: 12px;
                    font-weight: 900;
                    letter-spacing: 0.15em;
                    box-shadow: 0 5px 15px rgba(255,0,127,0.3);
                }
                .verified-badge {
                    position: absolute;
                    bottom: 30px;
                    left: 30px;
                    background: rgba(255,255,255,0.9);
                    color: #111;
                    padding: 12px 25px;
                    font-size: 11px;
                    font-weight: 900;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    backdrop-filter: blur(10px);
                    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
                }
                .image-thumbnails {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 15px;
                }
                .thumb {
                    aspect-ratio: 1/1;
                    background: #eee;
                    cursor: pointer;
                    overflow: hidden;
                    border: 2px solid transparent;
                    transition: 0.4s var(--ease-expo);
                }
                .thumb:hover, .thumb.active { 
                    border-color: var(--accent);
                    transform: translateY(-5px);
                }
                .thumb img { width: 100%; height: 100%; object-fit: cover; }

                /* Right Side: Info & Stats */
                .status-indicator {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 11px;
                    font-weight: 900;
                    text-transform: uppercase;
                    color: #555;
                    margin-bottom: 20px;
                    letter-spacing: 0.1em;
                }
                .status-indicator .dot {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                }
                .status-indicator .dot.online { background: #25D366; box-shadow: 0 0 15px rgba(37, 211, 102, 0.5); }
                .status-indicator .dot.busy { background: #ff007f; box-shadow: 0 0 15px rgba(255, 0, 127, 0.5); }

                .profile-header-info h1 {
                    font-size: clamp(2rem, 4vw, 3.2rem);
                    font-weight: 900;
                    text-transform: uppercase;
                    margin-bottom: 12px;
                    line-height: 1.1;
                    letter-spacing: -0.01em;
                }
                .location-text {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 14px;
                    font-weight: 700;
                    color: #777;
                    text-transform: uppercase;
                    margin-bottom: 40px;
                    letter-spacing: 0.05em;
                }
                .location-text svg { color: var(--accent); }

                .profile-actions-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 15px;
                    margin-bottom: 50px;
                }
                .action-btn {
                    padding: 20px;
                    text-align: center;
                    text-decoration: none;
                    font-size: 12px;
                    font-weight: 900;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                    transition: 0.4s var(--ease-expo);
                    border: none;
                    cursor: pointer;
                    letter-spacing: 0.1em;
                }
                .action-btn.call { background: #111; color: #fff; }
                .action-btn.whatsapp { background: #25D366; color: #fff; }
                .action-btn.book { 
                    background: var(--accent); 
                    color: #fff; 
                    grid-column: span 2;
                    font-size: 14px;
                    padding: 25px;
                }
                .action-btn:hover { 
                    transform: translateY(-5px); 
                    box-shadow: 0 15px 30px rgba(0,0,0,0.15); 
                    filter: brightness(1.1);
                }

                .profile-bio {
                    margin-bottom: 60px;
                }
                .profile-bio h3 { 
                    font-size: 14px; 
                    font-weight: 900; 
                    text-transform: uppercase; 
                    margin-bottom: 25px; 
                    color: var(--accent);
                    letter-spacing: 0.2em;
                }
                .profile-bio p { 
                    font-size: 16px; 
                    color: #444; 
                    line-height: 1.8; 
                    font-family: var(--font-body);
                }

                .profile-details-section {
                    margin-bottom: 60px;
                }
                .profile-details-section h3 {
                    font-size: 14px; 
                    font-weight: 900; 
                    text-transform: uppercase; 
                    margin-bottom: 30px; 
                    letter-spacing: 0.2em;
                }

                /* Stats Grid */
                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1px;
                    background: #eee;
                    border: 1px solid #eee;
                }
                .stat-box {
                    background: #fff;
                    padding: 18px 15px;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    text-align: center;
                }
                .stat-box .label {
                    font-size: 10px;
                    font-weight: 800;
                    color: #999;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                }
                .stat-box .value {
                    font-size: 14px;
                    font-weight: 900;
                    color: #111;
                    text-transform: uppercase;
                }

                /* Rates Table */
                .rates-table {
                    background: #fff;
                    border: 1px solid #eee;
                    margin-bottom: 20px;
                }
                .rate-row {
                    display: flex;
                    justify-content: space-between;
                    padding: 20px 30px;
                    border-bottom: 1px solid #f7f7f7;
                }
                .rate-row:last-child { border-bottom: none; }
                .rate-time { font-size: 13px; font-weight: 700; color: #555; }
                .rate-price { font-size: 15px; font-weight: 900; color: var(--accent); }

                .availability-note {
                    font-size: 12px;
                    color: #777;
                    font-style: italic;
                }

                /* Services Tags */
                .services-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                }
                .services-tags span {
                    font-size: 11px;
                    font-weight: 800;
                    background: #fff;
                    border: 1px solid #eee;
                    padding: 10px 20px;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                .trust-banner {
                    display: flex;
                    gap: 40px;
                    background: #fff;
                    padding: 30px;
                    border: 1px solid #eee;
                    margin-top: 60px;
                }
                .trust-item {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    font-size: 11px;
                    font-weight: 900;
                    color: #111;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                }

                /* Similar Profiles */
                .similar-profiles-section {
                    border-top: 1px solid #eee;
                    padding: 100px 0;
                    background: #fff;
                    margin-top: 80px;
                }
                .section-title {
                    font-size: clamp(2rem, 4vw, 3rem);
                    font-weight: 900;
                    text-transform: uppercase;
                    text-align: center;
                    margin-bottom: 60px;
                    letter-spacing: -0.01em;
                }
                .section-title span { color: var(--accent); }
                .similar-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 30px;
                }
                .similar-card {
                    background: #fff;
                    border: 1px solid #eee;
                    text-decoration: none;
                    transition: 0.4s var(--ease-expo);
                    overflow: hidden;
                }
                .similar-card:hover { 
                    transform: translateY(-15px); 
                    border-color: var(--accent);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.05);
                }
                .similar-img-wrap { position: relative; aspect-ratio: 1/1.2; overflow: hidden; }
                .similar-img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: 0.6s; }
                .similar-card:hover .similar-img-wrap img { transform: scale(1.1); }
                .similar-price {
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    background: var(--accent);
                    color: #fff;
                    padding: 5px 12px;
                    font-size: 11px;
                    font-weight: 900;
                }
                .similar-info { padding: 25px 20px; text-align: center; }
                .similar-info h4 { font-size: 16px; font-weight: 900; color: #111; margin-bottom: 8px; text-transform: uppercase; }
                .similar-info span { font-size: 11px; color: #999; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; }

                @media (max-width: 1100px) {
                    .profile-main-layout { gap: 50px; }
                    .stats-grid { grid-template-columns: repeat(2, 1fr); }
                }

                @media (max-width: 992px) {
                    .profile-main-layout { grid-template-columns: 1fr; gap: 60px; }
                    .profile-header-info h1 { font-size: 3.5rem; }
                    .similar-grid { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 600px) {
                    .profile-actions-grid { grid-template-columns: 1fr; }
                    .action-btn.book { grid-column: span 1; }
                    .stats-grid { grid-template-columns: repeat(2, 1fr); }
                    .trust-banner { flex-direction: column; gap: 20px; }
                }
            `}</style>
        </div>
    );
};

export default ProfilePage;
