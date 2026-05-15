import React from 'react';

const TrustSignals = () => {
    return (
        <section className="trust-section" style={{ background: '#fff', padding: '80px 0' }}>
            <div className="container">
                <div className="section-header anim-reveal">
                    <p style={{ color: 'var(--accent)', fontSize: '12px', fontWeight: '900', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Our Promise</p>
                    <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '800', color: '#111', textTransform: 'uppercase' }}>
                        The Empire <span style={{ color: 'var(--accent)' }}>Standard</span>
                    </h2>
                </div>

                <div className="trust-grid anim-reveal">
                    <div className="trust-item">
                        <div className="trust-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                        </div>
                        <h3 className="trust-title">100% PRIVATE</h3>
                        <p className="trust-text">We guarantee total discretion. Your privacy is our absolute priority in every booking.</p>
                    </div>

                    <div className="trust-item">
                        <div className="trust-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                        </div>
                        <h3 className="trust-title">VERIFIED PHOTOS</h3>
                        <p className="trust-text">What you see is what you get. Every companion photo is 100% real and strictly verified.</p>
                    </div>

                    <div className="trust-item">
                        <div className="trust-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        </div>
                        <h3 className="trust-title">AVAILABLE 24/7</h3>
                        <p className="trust-text">Our elite companions and support staff are available around the clock for your convenience.</p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .trust-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 50px;
                }
                .trust-item {
                    text-align: center;
                }
                .trust-icon {
                    width: 65px;
                    height: 65px;
                    background: var(--bg-secondary);
                    color: var(--accent);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 25px;
                    transition: 0.4s var(--ease-expo);
                }
                .trust-item:hover .trust-icon {
                    background: var(--accent);
                    color: #fff;
                    transform: translateY(-5px);
                }
                .trust-title {
                    font-size: 15px;
                    font-weight: 800;
                    color: #111;
                    margin-bottom: 15px;
                    letter-spacing: 0.05em;
                }
                .trust-text {
                    font-size: 14px;
                    color: #666;
                    line-height: 1.7;
                    font-weight: 500;
                }
                @media (max-width: 991px) {
                    .trust-grid { grid-template-columns: 1fr; gap: 40px; }
                }
            `}</style>
        </section>
    );
};

export default TrustSignals;
