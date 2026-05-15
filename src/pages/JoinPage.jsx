import React, { useEffect } from 'react';
import gsap from 'gsap';

const JoinPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        gsap.from('.join-hero-content > *', {
            opacity: 0,
            y: 30,
            stagger: 0.1,
            duration: 1,
            ease: 'power3.out',
            clearProps: 'opacity'
        });
    }, []);

    return (
        <div className="join-page">
            {/* Hero Section */}
            <section className="join-hero">
                <div className="container join-hero-content">
                    <div className="join-pre">JOIN THE ELITE</div>
                    <h1 style={{ color: '#fff', opacity: 1 }}>Elevate Your <span>Career</span></h1>
                    <p style={{ color: '#fff', opacity: 0.9 }}>Empire Escorts offers world-class management, safety, and support for the industry's most exceptional individuals.</p>
                </div>
            </section>

            {/* Why Join Us */}
            <section className="join-benefits">
                <div className="container">
                    <div className="section-header">
                        <div className="accent-line gold"></div>
                        <h2>The Empire <span>Standard</span></h2>
                        <p>WORLD-CLASS AGENCY SUPPORT</p>
                    </div>

                    <div className="benefits-grid">
                        <div className="benefit-card modern-light">
                            <div className="benefit-icon-wrapper">
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                            </div>
                            <h3>Safety <span>First</span></h3>
                            <div className="card-line"></div>
                            <p>Professional driver support and 24/7 security monitoring for all appointments.</p>
                        </div>

                        <div className="benefit-card modern-light">
                            <div className="benefit-icon-wrapper">
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </div>
                            <h3>Elite <span>Management</span></h3>
                            <div className="card-line"></div>
                            <p>Our experienced team handles all screening and enquiries with absolute discretion.</p>
                        </div>

                        <div className="benefit-card modern-light">
                            <div className="benefit-icon-wrapper">
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <circle cx="12" cy="12" r="10" /><path d="M12 2v20" /><path d="M2 12h20" />
                                </svg>
                            </div>
                            <h3>Luxury <span>Marketing</span></h3>
                            <div className="card-line"></div>
                            <p>Benefit from our high-end brand positioning and professional studio photography.</p>
                        </div>

                        <div className="benefit-card modern-light">
                            <div className="benefit-icon-wrapper">
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M12 3v3m0 12v3M5 5l2 2m10 10l2 2M3 12h3m12 0h3M5 19l2-2m10-10l2-2" />
                                </svg>
                            </div>
                            <h3>Total <span>Flexibility</span></h3>
                            <div className="card-line"></div>
                            <p>You maintain full control over your schedule, locations, and client preferences.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Process */}
            <section className="join-process">
                <div className="container">
                    <div className="process-card">
                        <h2>Discreet <span>Application</span></h2>
                        <p>Applying to Join Empire is simple. Fill out the form below or contact our recruitment team directly on WhatsApp.</p>

                        <form className="join-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" placeholder="Your name" />
                                </div>
                                <div className="form-group">
                                    <label>Age</label>
                                    <input type="number" placeholder="Must be 18+" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Location</label>
                                <input type="text" placeholder="Current city" />
                            </div>
                            <div className="form-group">
                                <label>Message / Experience</label>
                                <textarea placeholder="Tell us a bit about yourself..."></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={(e) => e.preventDefault()}>SUBMIT APPLICATION</button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Recruitment FAQ */}
            <section className="recruitment-faq">
                <div className="container">
                    <div className="faq-modern-layout">
                        <div className="faq-image">
                            <img src="/images/pexels-amaria-12757297.jpg" alt="Recruitment Support" />
                            <div className="img-overlay-gold"></div>
                        </div>
                        <div className="faq-content">
                            <div className="section-header left">
                                <div className="accent-line gold"></div>
                                <h2>Recruitment <span>FAQ</span></h2>
                                <p>ANSWERS FOR ASPIRING MODELS</p>
                            </div>
                            <div className="faq-list">
                                <div className="faq-item modern">
                                    <h4>What are the requirements?</h4>
                                    <p>You must be over 18, reliable, and possess a professional attitude toward companionship. We value discretion and consistency above all else.</p>
                                </div>
                                <div className="faq-item modern">
                                    <h4>How quickly can I start?</h4>
                                    <p>Once your application is reviewed and photos are verified, you can often start within 24-48 hours. Our onboarding is rapid but thorough.</p>
                                </div>
                                <div className="faq-item modern">
                                    <h4>Is my discretion guaranteed?</h4>
                                    <p>Absolutely. Your privacy is our highest priority. All data is handled with the strictest confidentiality and encrypted systems.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .join-page { background: #fcfaf5; color: #111; }
                
                .join-hero {
                    padding: 140px 0 100px;
                    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url('/images/pexels-noirgenesis-5953288.jpg');
                    background-size: cover;
                    background-position: center;
                    color: #fff;
                    text-align: center;
                }
                .join-pre { font-size: 10px; font-weight: 900; letter-spacing: 0.3em; color: var(--accent); margin-bottom: 15px; }
                .join-hero h1 { font-size: clamp(2rem, 5vw, 2.8rem); font-weight: 900; text-transform: uppercase; margin-bottom: 15px; letter-spacing: -0.01em; line-height: 1.1; }
                .join-hero h1 span { color: var(--accent); }
                .join-hero p { font-size: 1rem; max-width: 600px; margin: 0 auto; opacity: 0.9; line-height: 1.6; }

                .join-benefits { 
                    padding: 80px 0; 
                    background: #fff; 
                    border-top: 1px solid #eee;
                }
                .section-header { text-align: center; margin-bottom: 40px; position: relative; }
                .accent-line { width: 35px; height: 3px; background: var(--accent); margin: 0 auto 20px; box-shadow: 0 0 15px var(--accent); }
                .accent-line.gold { box-shadow: 0 0 15px var(--accent); }
                .section-header h2 { font-size: 1.8rem; font-weight: 900; text-transform: uppercase; letter-spacing: -0.01em; color: #111; }
                .section-header h2 span { color: var(--accent); }
                .section-header p { font-size: 9px; color: #999; font-weight: 900; margin-top: 10px; letter-spacing: 0.2em; }

                .benefits-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 20px;
                }
                .benefit-card.modern-light {
                    padding: 40px 25px;
                    background: #fcfaf5;
                    border: 1px solid var(--accent);
                    border-radius: 15px;
                    transition: 0.4s var(--ease-expo);
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .benefit-card.modern-light:hover { 
                    background: #fff;
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px rgba(197, 160, 89, 0.12);
                }
                .benefit-icon-wrapper {
                    width: 60px;
                    height: 60px;
                    background: #fff;
                    border: 1px solid var(--accent);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 25px;
                    color: var(--accent);
                    transition: 0.4s;
                }
                .benefit-card.modern-light:hover .benefit-icon-wrapper {
                    background: var(--accent);
                    color: #fff;
                    box-shadow: 0 0 20px rgba(197, 160, 89, 0.4);
                }
                .benefit-card.modern-light h3 { font-size: 15px; font-weight: 900; margin-bottom: 15px; text-transform: uppercase; color: #111; letter-spacing: 0.05em; line-height: 1.3; }
                .benefit-card.modern-light h3 span { color: var(--accent); }
                .card-line { width: 30px; height: 1px; background: #ddd; margin-bottom: 15px; transition: 0.4s; }
                .benefit-card.modern-light:hover .card-line { width: 50px; background: var(--accent); }
                .benefit-card.modern-light p { font-size: 13px; color: #777; line-height: 1.6; margin: 0; }

                @media (max-width: 1100px) {
                    .benefits-grid { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 600px) {
                    .benefits-grid { grid-template-columns: 1fr; }
                }

                .join-process { padding: 80px 0; background: #fcfaf5; }
                .process-card {
                    max-width: 800px;
                    margin: 0 auto;
                    background: #fff;
                    padding: 60px;
                    border-radius: 15px;
                    border: 1px solid var(--accent);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.05);
                }
                .process-card h2 { font-size: 2rem; font-weight: 900; text-transform: uppercase; margin-bottom: 15px; text-align: center; }
                .process-card h2 span { color: var(--accent); }
                .process-card > p { text-align: center; color: #777; margin-bottom: 40px; font-size: 14px; }

                .join-form { display: flex; flex-direction: column; gap: 20px; }
                .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
                .form-group { display: flex; flex-direction: column; gap: 8px; }
                .form-group label { font-size: 10px; font-weight: 900; text-transform: uppercase; color: #999; letter-spacing: 0.1em; }
                .form-group input, .form-group textarea {
                    padding: 15px;
                    background: #fcfaf5;
                    border: 1px solid #eee;
                    border-radius: 8px;
                    font-size: 14px;
                    font-family: inherit;
                    transition: 0.3s;
                }
                .form-group input:focus, .form-group textarea:focus { border-color: var(--accent); outline: none; background: #fff; }
                .form-group textarea { height: 100px; resize: none; }
                
                .recruitment-faq { padding: 100px 0; background: #fff; }
                .faq-modern-layout { display: grid; grid-template-columns: 0.8fr 1.2fr; gap: 80px; align-items: flex-start; }
                
                .faq-image { position: relative; height: 650px; border-radius: 15px; overflow: hidden; border: 1px solid var(--accent); padding: 10px; background: #fff; }
                .faq-image img { width: 100%; height: 100%; object-fit: cover; border-radius: 10px; }
                .img-overlay-gold { position: absolute; inset: 0; background: linear-gradient(to top, rgba(197, 160, 89, 0.2), transparent); }

                .faq-list { display: flex; flex-direction: column; gap: 20px; }
                .faq-item.modern {
                    padding: 30px;
                    background: #fcfaf5;
                    border: 1px solid #eee;
                    border-radius: 15px;
                    transition: 0.3s;
                }
                .faq-item.modern:hover { border-color: var(--accent); box-shadow: 0 10px 20px rgba(0,0,0,0.05); background: #fff; }
                .faq-item.modern h4 { font-size: 14px; font-weight: 900; text-transform: uppercase; margin-bottom: 12px; color: var(--accent); letter-spacing: 0.05em; }
                .faq-item.modern p { font-size: 14px; line-height: 1.6; color: #666; margin: 0; }

                @media (max-width: 1024px) {
                    .benefits-grid { grid-template-columns: 1fr; }
                    .faq-modern-layout { grid-template-columns: 1fr; gap: 40px; }
                    .faq-image { height: 350px; }
                }
                @media (max-width: 768px) {
                    .form-row { grid-template-columns: 1fr; }
                    .process-card { padding: 40px 20px; }
                    .join-hero h1 { font-size: 1.8rem; }
                }
            `}</style>
        </div>
    );
};

export default JoinPage;
