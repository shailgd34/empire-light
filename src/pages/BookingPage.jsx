import React, { useEffect } from 'react';
import gsap from 'gsap';

const BookingPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        const tl = gsap.timeline();
        tl.from('.booking-hero-content > *', {
            opacity: 0,
            y: 30,
            stagger: 0.1,
            duration: 0.8,
            ease: 'power3.out',
            clearProps: 'opacity'
        })
            .from('.booking-step', {
                opacity: 0,
                y: 20,
                stagger: 0.1,
                duration: 0.8,
                ease: 'power3.out',
                clearProps: 'opacity'
            }, "-=0.4");
    }, []);

    return (
        <div className="booking-page">
            {/* Hero Section */}
            <section className="booking-hero">
                <div className="container booking-hero-content">
                    <div className="hero-pre">PREMIUM SERVICE</div>
                    <h1 style={{ color: '#fff', opacity: 1 }}>Your Journey <span>Begins Here</span></h1>
                    <p style={{ color: '#fff', opacity: 0.9 }}>Experience the gold standard of companionship with our discreet and seamless booking process.</p>
                </div>
            </section>

            {/* How to Book */}
            <section className="booking-steps">
                <div className="container">
                    <div className="section-header">
                        <div className="accent-line"></div>
                        <h2>The <span>Process</span></h2>
                        <p>ELEGANCE IN EVERY STEP</p>
                    </div>

                    <div className="steps-grid">
                        <div className="booking-step">
                            <div className="step-num">01</div>
                            <h3>Selection</h3>
                            <p>Explore our curated portfolio of elite models and find your perfect match.</p>
                        </div>
                        <div className="booking-step">
                            <div className="step-num">02</div>
                            <h3>Connection</h3>
                            <p>Reach out via Phone or WhatsApp. Our team is available 24/7 for your request.</p>
                        </div>
                        <div className="booking-step">
                            <div className="step-num">03</div>
                            <h3>Coordination</h3>
                            <p>We handle all logistics, ensuring your meeting is confirmed with absolute discretion.</p>
                        </div>
                        <div className="booking-step">
                            <div className="step-num">04</div>
                            <h3>The Meeting</h3>
                            <p>Relax and enjoy a high-end experience tailored to your exact preferences.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Booking Types */}
            <section className="booking-types">
                <div className="container">
                    <div className="modern-types-grid">
                        <div className="type-feature">
                            <div className="type-feature-img">
                                <img src="/images/pexels-guilherme-simao-429126551-32286018.jpg" alt="Same Day Service" />
                            </div>
                            <div className="type-feature-content">
                                <div className="tag">RAPID RESPONSE</div>
                                <h3>Same-Day <span>Bookings</span></h3>
                                <p>Seeking spontaneous companionship? We specialize in rapid response same-day bookings across the region. Our team ensures a seamless experience even at short notice.</p>
                                <a href="tel:07368428158" className="btn btn-outline small">CHECK AVAILABILITY</a>
                            </div>
                        </div>

                        <div className="type-feature reverse">
                            <div className="type-feature-img">
                                <img src="/images/pexels-innamykytas-12010321.jpg" alt="Pre-Booking Service" />
                            </div>
                            <div className="type-feature-content">
                                <div className="tag">PLANNED EXCELLENCE</div>
                                <h3>Advanced <span>Reservations</span></h3>
                                <p>For specific events or special occasions, we recommend booking 24-48 hours in advance. This guarantees your preferred companion is reserved exclusively for you.</p>
                                <a href="https://wa.me/447368428158" className="btn btn-outline small">RESERVE NOW</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Security & Payment */}
            <section className="security-note">
                <div className="container">
                    <div className="security-banner">
                        <div className="sec-overlay"></div>
                        <div className="sec-content">
                            <div className="security-icon">
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                            </div>
                            <h2>Privacy & <span>Security</span></h2>
                            <p>
                                Your discretion is our absolute priority. We do not require invasive personal details for booking.
                                Payments are handled securely and discreetly. We never share client information with third parties.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="booking-faq">
                <div className="container">
                    <div className="faq-modern-layout">
                        <div className="faq-image">
                            <img src="/images/pexels-macnalodao-20270579.jpg" alt="Booking Assistance" />
                            <div className="img-overlay-gold"></div>
                        </div>
                        <div className="faq-content">
                            <div className="section-header left">
                                <div className="accent-line gold"></div>
                                <h2>Booking <span>FAQs</span></h2>
                                <p>ANSWERS FOR OUR ELITE CLIENTELE</p>
                            </div>
                            <div className="faq-list">
                                <div className="faq-item modern">
                                    <h4 style={{ color: 'var(--accent)' }}>Do I need to pay a deposit?</h4>
                                    <p>Deposits may be required for certain companions or travel distances. Our team will advise you during contact.</p>
                                </div>
                                <div className="faq-item modern">
                                    <h4 style={{ color: 'var(--accent)' }}>What is the minimum booking duration?</h4>
                                    <p>The standard minimum is 1 hour. Some companions may have different minimums for outcalls.</p>
                                </div>
                                <div className="faq-item modern">
                                    <h4 style={{ color: 'var(--accent)' }}>Is my privacy guaranteed?</h4>
                                    <p>Absolute discretion is our hallmark. We use encrypted communication and require minimal personal data.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="booking-cta">
                <div className="container">
                    <div className="cta-banner">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="cta-video"
                        >
                            <source src="/video/14973850-hd_1920_1080_24fps.mp4" type="video/mp4" />
                        </video>
                        <div className="cta-overlay"></div>
                        <div className="cta-content">
                            <h2>Ready to <span>Book?</span></h2>
                            <p>Our discreet booking team is available 24/7 for your enquiries.</p>
                            <div className="cta-actions">
                                <a href="tel:07368428158" className="btn btn-primary">CALL 07368 428 158</a>
                                <a href="https://wa.me/447368428158" className="btn btn-outline">WHATSAPP SECURE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .booking-page { background: #fcfaf5; color: #111; }
                
                .booking-hero {
                    padding: 140px 0 100px;
                    background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url('/images/pexels-vika-glitter-392079-11363751.jpg');
                    background-size: cover;
                    background-position: center;
                    color: #fff;
                    text-align: center;
                }
                .hero-pre { font-size: 10px; font-weight: 900; letter-spacing: 0.3em; color: var(--accent); margin-bottom: 15px; }
                .booking-hero h1 { font-size: clamp(2rem, 5vw, 2.8rem); font-weight: 900; text-transform: uppercase; margin-bottom: 15px; letter-spacing: -0.01em; line-height: 1.1; }
                .booking-hero h1 span { color: var(--accent); }
                .booking-hero p { font-size: 1rem; max-width: 600px; margin: 0 auto; opacity: 0.9; line-height: 1.6; }

                .booking-steps { padding: 80px 0; background: #fff; }
                .section-header { text-align: center; margin-bottom: 40px; position: relative; }
                .section-header.left { text-align: left; }
                .section-header.left .accent-line { margin: 0 0 20px 0; }
                .accent-line { width: 35px; height: 3px; background: var(--accent); margin: 0 auto 20px; }
                .accent-line.gold { box-shadow: 0 0 15px var(--accent); }
                .section-header h2 { font-size: 1.8rem; font-weight: 900; text-transform: uppercase; letter-spacing: -0.01em; }
                .section-header h2 span { color: var(--accent); }
                .section-header p { font-size: 9px; color: #999; font-weight: 900; margin-top: 10px; letter-spacing: 0.2em; }

                .steps-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 20px;
                }
                .booking-step {
                    padding: 35px 30px;
                    background: #fcfaf5;
                    border: 1px solid #eee;
                    border-radius: 15px;
                    position: relative;
                    transition: 0.4s var(--ease-expo);
                }
                .booking-step:hover { transform: translateY(-5px); border-color: var(--accent); box-shadow: 0 10px 30px rgba(197, 160, 89, 0.1); }
                .step-num {
                    font-size: 3rem;
                    font-weight: 900;
                    color: var(--accent);
                    opacity: 0.2;
                    position: absolute;
                    top: 10px;
                    right: 15px;
                }
                .booking-step h3 { font-size: 14px; font-weight: 900; margin-bottom: 12px; text-transform: uppercase; color: #111; letter-spacing: 0.05em; }
                .booking-step p { font-size: 13px; color: #666; line-height: 1.6; }

                .booking-types { padding: 80px 0; background: #fff; border-top: 1px solid #eee; }
                .modern-types-grid { display: flex; flex-direction: column; gap: 60px; }
                .type-feature { display: grid; grid-template-columns: 1fr 1fr; gap: 50px; align-items: center; }
                .type-feature.reverse { direction: rtl; }
                .type-feature.reverse .type-feature-content { direction: ltr; }
                
                .type-feature-img { height: 400px; overflow: hidden; border: 1px solid var(--accent); border-radius: 15px; padding: 10px; background: #fff; }
                .type-feature-img img { width: 100%; height: 100%; object-fit: cover; border-radius: 8px; transition: 0.6s; }
                .type-feature:hover .type-feature-img img { transform: scale(1.05); }

                .type-feature-content { padding: 20px; }
                .type-feature-content .tag { font-size: 10px; font-weight: 900; color: var(--accent); letter-spacing: 0.2em; margin-bottom: 15px; }
                .type-feature-content h3 { font-size: 1.8rem; font-weight: 900; text-transform: uppercase; margin-bottom: 20px; }
                .type-feature-content h3 span { color: var(--accent); }
                .type-feature-content p { font-size: 15px; color: #666; line-height: 1.8; margin-bottom: 30px; max-width: 500px; }
                .btn.small { padding: 12px 25px; font-size: 11px; }

                .security-note { padding: 80px 0; background: #fff; }
                .security-banner {
                    height: 300px;
                    background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('/images/pexels-noirgenesis-5953288.jpg');
                    background-size: cover;
                    background-position: center;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    color: #fff;
                    overflow: hidden;
                    border-radius: 15px;
                }
                .sec-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.3); }
                .sec-content { position: relative; z-index: 2; padding: 0 40px; }
                .security-icon { color: var(--accent); margin-bottom: 15px; }
                .security-banner h2 { font-size: 1.5rem; font-weight: 900; text-transform: uppercase; margin-bottom: 12px; letter-spacing: -0.01em; }
                .security-banner h2 span { color: var(--accent); }
                .security-banner p { font-size: 0.95rem; line-height: 1.6; opacity: 0.8; max-width: 550px; margin: 0 auto; }

                .booking-faq { padding: 100px 0; background: #fcfaf5; }
                .faq-modern-layout { display: grid; grid-template-columns: 0.8fr 1.2fr; gap: 80px; align-items: flex-start; }
                
                .faq-image { position: relative; height: 650px; border-radius: 15px; overflow: hidden; border: 1px solid var(--accent); padding: 10px; background: #fff; }
                .faq-image img { width: 100%; height: 100%; object-fit: cover; border-radius: 10px; }
                .img-overlay-gold { position: absolute; inset: 0; background: linear-gradient(to top, rgba(197, 160, 89, 0.2), transparent); }

                .faq-list { display: flex; flex-direction: column; gap: 20px; }
                .faq-item.modern {
                    padding: 30px;
                    background: #fff;
                    border: 1px solid #eee;
                    border-radius: 15px;
                    transition: 0.3s;
                }
                .faq-item.modern:hover { border-color: var(--accent); box-shadow: 0 10px 20px rgba(0,0,0,0.05); }
                .faq-item.modern h4 { font-size: 15px; font-weight: 900; text-transform: uppercase; margin-bottom: 15px; letter-spacing: 0.05em; }
                .faq-item.modern p { font-size: 14px; line-height: 1.7; color: #666; margin: 0; }

                .booking-cta { padding: 0 0 80px; background: #fcfaf5; }
                .cta-banner {
                    height: 320px;
                    background: #111;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    color: #fff;
                    overflow: hidden;
                    border-radius: 15px;
                }
                .cta-video {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    z-index: 1;
                    opacity: 0.5;
                }
                .cta-overlay { position: absolute; inset: 0; background: linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.5)); z-index: 2; }
                .cta-content { position: relative; z-index: 3; padding: 0 20px; }
                .cta-content h2 { font-size: 2rem; font-weight: 900; text-transform: uppercase; margin-bottom: 12px; letter-spacing: -0.01em; }
                .cta-content h2 span { color: var(--accent); }
                .cta-content p { font-size: 1rem; margin-bottom: 25px; opacity: 0.9; }
                .cta-actions { display: flex; justify-content: center; gap: 12px; }

                @media (max-width: 1024px) {
                    .steps-grid { grid-template-columns: repeat(2, 1fr); }
                    .type-feature { grid-template-columns: 1fr; gap: 30px; }
                    .type-feature.reverse { direction: ltr; }
                    .type-feature-img { height: 350px; }
                    .faq-modern-layout { grid-template-columns: 1fr; gap: 40px; }
                    .faq-image { height: 350px; }
                }
                @media (max-width: 600px) {
                    .steps-grid { grid-template-columns: 1fr; }
                    .booking-hero h1 { font-size: 1.8rem; }
                    .security-banner { height: auto; padding: 50px 20px; }
                    .cta-banner { height: auto; padding: 60px 20px; min-height: 300px; }
                    .cta-actions { flex-direction: column; }
                    .cta-content h2 { font-size: 1.6rem; }
                }
            `}</style>
        </div>
    );
};

export default BookingPage;
