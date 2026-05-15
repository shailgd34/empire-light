import React from 'react';

const AboutGirls = () => {
    return (
        <section id="about-agency" className="section" style={{ background: '#080808', position: 'relative', overflow: 'hidden' }}>
            {/* Subtle Gradient Accent */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                right: '-10%',
                width: '60%',
                height: '80%',
                background: 'radial-gradient(circle, rgba(135, 86, 0, 0.05) 0%, transparent 70%)',
                zIndex: 1
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="about-grid">
                    <div className="about-visual anim-reveal">
                        <div className="image-stack">
                            <div className="image-main">
                                <img src="/images/pexels-vika-glitter-392079-30219287.jpg" alt="Elite Companions" />
                            </div>
                            <div className="image-accent"></div>
                        </div>
                    </div>

                    <div className="about-content anim-reveal">
                        <div className="content-inner">
                            <p className="label">Best Sheffield Agency</p>
                            <h2 className="title">
                                THE BEST ESCORT <br />
                                <span className="accent">AGENCY IN SHEFFIELD</span>
                            </h2>
                            <div className="description">
                                <p>
                                    Welcome to Empire Escorts. We are the top agency in Sheffield. We have very beautiful and professional girls for you. Our service is the best in South Yorkshire.
                                </p>
                                <p>
                                    All our girls are real and verified. Whether you want to meet for a date or private time, we provide 100% private and safe service. You will have a great time with us.
                                </p>
                            </div>

                            <div className="stats-row">
                                <div className="stat-item">
                                    <span className="stat-val">100%</span>
                                    <span className="stat-lbl">REAL PHOTOS</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-val">24/7</span>
                                    <span className="stat-lbl">FAST SERVICE</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-val">PRIVATE</span>
                                    <span className="stat-lbl">SAFE BOOKING</span>
                                </div>
                            </div>

                            <div className="mt-12">
                                <a href="#our-girls" className="btn btn-primary rounded-full" style={{ padding: '16px 40px' }}>
                                    EXPLORE OUR COLLECTION
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .about-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 100px;
                    align-items: center;
                }
                .image-stack {
                    position: relative;
                    padding-right: 40px;
                    padding-bottom: 40px;
                }
                .image-main {
                    position: relative;
                    z-index: 2;
                    aspect-ratio: 4/5;
                    overflow: hidden;
                    border: 1px solid rgba(255,255,255,0.1);
                }
                .image-main img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .image-accent {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    width: 100%;
                    height: 100%;
                    border: 1px solid var(--accent);
                    z-index: 1;
                    opacity: 0.3;
                    transform: translate(30px, 30px);
                }
                .label {
                    color: var(--accent);
                    font-size: 11px;
                    font-weight: 900;
                    letter-spacing: 0.4em;
                    text-transform: uppercase;
                    margin-bottom: 1.5rem;
                }
                .title {
                    font-size: clamp(2rem, 4vw, 2.8rem);
                    font-weight: 800;
                    color: #fff;
                    text-transform: uppercase;
                    line-height: 1.1;
                    margin-bottom: 2rem;
                }
                .accent {
                    color: var(--accent);
                }
                .description {
                    color: rgba(255,255,255,0.6);
                    font-size: 15px;
                    line-height: 1.8;
                    font-weight: 500;
                    max-width: 500px;
                }
                .description p {
                    margin-bottom: 1.5rem;
                }
                .stats-row {
                    display: flex;
                    gap: 40px;
                    margin-top: 40px;
                    padding-top: 30px;
                    border-top: 1px solid rgba(255,255,255,0.1);
                }
                .stat-item {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                }
                .stat-val {
                    color: #fff;
                    font-size: 1.2rem;
                    font-weight: 900;
                    letter-spacing: 0.05em;
                }
                .stat-lbl {
                    color: var(--accent);
                    font-size: 9px;
                    font-weight: 900;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                }
                @media (max-width: 1024px) {
                    .about-grid { grid-template-columns: 1fr; gap: 60px; text-align: center; }
                    .image-stack { max-width: 450px; margin: 0 auto; }
                    .description { margin: 0 auto; }
                    .stats-row { justify-content: center; }
                }
            `}</style>
        </section>
    );
};

export default AboutGirls;
