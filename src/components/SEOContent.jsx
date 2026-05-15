import React from 'react';

const SEOContent = () => {
    return (
        <section id="gold-standard" className="section" style={{ background: '#0a0a0a', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
            {/* Subtle Texture/Pattern */}
            <div className="gold-bg-pattern" style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at 20% 50%, rgba(135, 86, 0, 0.05) 0%, transparent 50%)',
                zIndex: 1
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div className="gold-standard-wrapper anim-reveal">
                    <div className="gold-grid">
                        <div className="gold-main-content">
                            <div className="section-header" style={{ textAlign: 'left', marginBottom: '40px' }}>
                                <p style={{ color: 'var(--accent)', fontSize: '11px', fontWeight: '900', letterSpacing: '0.5em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>The Ultimate Experience</p>
                                <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: '900', color: '#fff', textTransform: 'uppercase', lineHeight: '1.0', letterSpacing: '-0.02em' }}>
                                    SHEFFIELD’S <br/>
                                    <span style={{ color: 'var(--accent)' }}>GOLD STANDARD</span>
                                </h2>
                            </div>
                            
                            <div className="gold-text-columns">
                                <p className="lead-text">
                                    Empire Escorts stands alone as the definitive luxury companionship agency in South Yorkshire. We curate an elite selection of the most sophisticated and breathtaking models for our discerning clientele.
                                </p>
                                <p>
                                    Our commitment to excellence is unwavering. We provide a seamless, 100% private booking process that prioritizes your safety and discretion. Whether it's a high-profile social event or a private evening, our companions are chosen for their intelligence, elegance, and beauty.
                                </p>
                            </div>

                            <div className="region-list-wrap">
                                <h4>PREMIUM REGIONS</h4>
                                <div className="region-tags">
                                    <span>Sheffield City</span>
                                    <span>Rotherham</span>
                                    <span>Barnsley</span>
                                    <span>Doncaster</span>
                                    <span>Leeds</span>
                                    <span>BradFORD</span>
                                    <span>Wakefield</span>
                                    <span>Chesterfield</span>
                                </div>
                            </div>
                        </div>

                        <div className="gold-sidebar">
                            <div className="premium-stats">
                                <div className="stat-item">
                                    <span className="stat-val">24/7</span>
                                    <span className="stat-lbl">CONCIERGE</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-val">100%</span>
                                    <span className="stat-lbl">VERIFIED</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-val">ELITE</span>
                                    <span className="stat-lbl">MODELS</span>
                                </div>
                            </div>
                            
                            <div className="booking-card-modern">
                                <h5>SECURE YOUR BOOKING</h5>
                                <p>Our dedicated team is ready to assist you. Contact us now for immediate availability.</p>
                                <div className="action-btns">
                                    <a href="tel:07368428158" className="action-btn call">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                        CALL NOW
                                    </a>
                                    <a href="https://wa.me/447368428158" className="action-btn wa">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                                        WHATSAPP
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .gold-grid {
                    display: grid;
                    grid-template-columns: 1.5fr 1fr;
                    gap: 120px;
                    align-items: center;
                }
                .lead-text {
                    font-size: 20px !important;
                    color: #fff !important;
                    font-weight: 600 !important;
                    line-height: 1.6 !important;
                    margin-bottom: 2rem !important;
                }
                .gold-text-columns p {
                    font-size: 16px;
                    color: rgba(255,255,255,0.6);
                    line-height: 2;
                    margin-bottom: 30px;
                }
                .region-list-wrap {
                    margin-top: 60px;
                    padding-top: 40px;
                    border-top: 1px solid rgba(255,255,255,0.1);
                }
                .region-list-wrap h4 {
                    font-size: 10px;
                    font-weight: 900;
                    letter-spacing: 0.3em;
                    color: var(--accent);
                    margin-bottom: 30px;
                }
                .region-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 12px;
                }
                .region-tags span {
                    font-size: 11px;
                    font-weight: 800;
                    padding: 10px 22px;
                    background: rgba(255,255,255,0.05);
                    border: 1px solid rgba(255,255,255,0.1);
                    color: #fff;
                    border-radius: 50px;
                    transition: 0.3s;
                    text-transform: uppercase;
                }
                .region-tags span:hover {
                    background: var(--accent);
                    border-color: var(--accent);
                }
                
                .gold-sidebar {
                    position: relative;
                }
                .premium-stats {
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(255,255,255,0.1);
                    padding: 50px;
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 40px;
                }
                .stat-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                }
                .stat-val {
                    color: #fff;
                    font-size: 2rem;
                    font-weight: 900;
                    margin-bottom: 5px;
                }
                .stat-lbl {
                    color: var(--accent);
                    font-size: 9px;
                    font-weight: 900;
                    letter-spacing: 0.2em;
                }
                
                .booking-card-modern {
                    position: relative;
                    padding: 60px 40px;
                    border-radius: 4px;
                    text-align: center;
                    overflow: hidden;
                    background: url('/images/pexels-vika-glitter-392079-11363751.jpg');
                    background-size: cover;
                    background-position: center;
                    border: 1px solid rgba(255,255,255,0.1);
                }
                .booking-card-modern::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: rgba(0,0,0,0.85);
                    z-index: 1;
                }
                .booking-card-modern > * {
                    position: relative;
                    z-index: 2;
                }
                .booking-card-modern h5 {
                    font-size: 13px;
                    font-weight: 900;
                    letter-spacing: 0.15em;
                    margin-bottom: 20px;
                    color: var(--accent);
                }
                .booking-card-modern p {
                    font-size: 15px;
                    color: rgba(255,255,255,0.7);
                    line-height: 1.7;
                    margin-bottom: 40px;
                }
                .action-btns {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }
                .action-btn {
                    padding: 18px;
                    border-radius: 50px;
                    font-size: 12px;
                    font-weight: 900;
                    letter-spacing: 0.1em;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    transition: 0.3s;
                    text-decoration: none;
                }
                .action-btn.call {
                    background: #000;
                    color: #fff;
                }
                .action-btn.wa {
                    background: #25D366;
                    color: #fff;
                }
                .action-btn:hover {
                    transform: scale(1.02);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                }
                
                @media (max-width: 1024px) {
                    .gold-grid { grid-template-columns: 1fr; gap: 80px; }
                }
                @media (max-width: 768px) {
                    .premium-stats { padding: 30px; }
                    .stat-val { font-size: 1.5rem; }
                }
            `}</style>
        </section>
    );
};

export default SEOContent;
