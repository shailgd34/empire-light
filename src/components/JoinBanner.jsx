import React from 'react';

const JoinBanner = () => {
    return (
        <section id="join-us" className="join-section" style={{
            position: 'relative',
            padding: '80px 0',
            background: '#000',
            overflow: 'hidden'
        }}>
            {/* Background Video */}
            <div className="join-bg-video" style={{
                position: 'absolute',
                inset: 0,
                zIndex: 1,
                overflow: 'hidden'
            }}>
                <video
                    src="/video/14973850-hd_1920_1080_24fps.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 0.4
                    }}
                />
            </div>

            {/* Overlay */}
            <div className="join-overlay" style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.9) 100%)',
                zIndex: 2
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div className="join-grid">
                    <div className="join-content anim-reveal">
                        <p style={{ color: 'var(--accent)', fontSize: '12px', fontWeight: '900', letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Recruitment</p>
                        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '800', color: '#fff', textTransform: 'uppercase', marginBottom: '2rem', lineHeight: '1.2' }}>
                            JOIN THE MOST ELITE <br />
                            <span style={{ color: 'var(--accent)' }}>AGENCY IN SHEFFIELD</span>
                        </h2>

                        <p className="join-desc" style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.8', marginBottom: '3rem', fontWeight: '500' }}>
                            Are you looking for a professional, safe, and highly profitable agency to work with? Empire Escorts is Sheffield's longest-standing agency, offering the best rates and full support for our models.
                        </p>

                        <div className="join-features">
                            <div className="feat-item">
                                <span className="feat-num">01.</span>
                                <span className="feat-txt">HIGHEST PAYOUTS</span>
                            </div>
                            <div className="feat-item">
                                <span className="feat-num">02.</span>
                                <span className="feat-txt">TOTAL DISCRETION</span>
                            </div>
                            <div className="feat-item">
                                <span className="feat-num">03.</span>
                                <span className="feat-txt">24/7 SECURITY</span>
                            </div>
                        </div>

                        <div className="mt-12 flex gap-6 flex-wrap">
                            <a href="https://wa.me/447368428158" className="btn btn-primary">WHATSAPP APPLICATION</a>
                            <a href="tel:07368428158" className="btn btn-outline" style={{ border: '1px solid rgba(255,255,255,0.3)', color: '#fff' }}>CALL RECRUITMENT</a>
                        </div>
                    </div>

                    <div className="join-video-box anim-reveal">
                        <div className="video-inner">
                            <video
                                src="/video/14973850-hd_1920_1080_24fps.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="recruit-video"
                            />
                            <div className="video-overlay-glow"></div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .join-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 60px;
                    align-items: center;
                }
                .join-features {
                    display: flex;
                    gap: 40px;
                    border-top: 1px solid rgba(255,255,255,0.1);
                    padding-top: 30px;
                }
                .feat-item {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                }
                .feat-num {
                    color: var(--accent);
                    font-size: 10px;
                    font-weight: 900;
                }
                .feat-txt {
                    color: #fff;
                    font-size: 12px;
                    font-weight: 800;
                    letter-spacing: 0.05em;
                }
                .join-video-box {
                    position: relative;
                    width: 100%;
                }
                .video-inner {
                    position: relative;
                    border-radius: 20px;
                    overflow: hidden;
                    aspect-ratio: 4/3;
                    border: 1px solid rgba(255,255,255,0.1);
                    box-shadow: 0 30px 60px rgba(0,0,0,0.5);
                }
                .recruit-video {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .video-overlay-glow {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, var(--accent) 0%, transparent 40%);
                    opacity: 0.2;
                    pointer-events: none;
                }
                .btn-outline:hover {
                    border-color: var(--accent) !important;
                    color: var(--accent) !important;
                }
                @media (max-width: 1024px) {
                    .join-grid { gap: 40px; }
                }
                @media (max-width: 768px) {
                    .join-grid { grid-template-columns: 1fr; gap: 40px; }
                    .join-features { flex-direction: column; gap: 20px; }
                    .btn { width: 100%; }
                    .join-video-box { order: -1; }
                }
            `}</style>
        </section>
    );
};

export default JoinBanner;
