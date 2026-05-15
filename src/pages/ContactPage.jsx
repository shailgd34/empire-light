import React, { useEffect } from 'react';

const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="contact-page">
            <section className="contact-hero">
                <div className="container contact-hero-content">
                    <div className="contact-pre">GET IN TOUCH</div>
                    <h1>Absolute <span>Discretion</span></h1>
                    <p>Contact our dedicated booking team 24/7 for bespoke companionship enquiries.</p>
                </div>
            </section>

            <section className="contact-main">
                <div className="container">
                    <div className="contact-grid">
                        {/* Info Column */}
                        <div className="contact-info">
                            <div className="info-block">
                                <div className="accent-line small"></div>
                                <h3>Direct Contact</h3>
                                <div className="contact-methods">
                                    <a href="tel:07368428158" className="method">
                                        <span className="icon">📞</span>
                                        <div className="text">
                                            <span className="label">Call Now</span>
                                            <span className="val">07368 428 158</span>
                                        </div>
                                    </a>
                                    <a href="https://wa.me/447368428158" className="method">
                                        <span className="icon">💬</span>
                                        <div className="text">
                                            <span className="label">WhatsApp</span>
                                            <span className="val">Secure Chat</span>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="info-block">
                                <h3>Urgent Bookings</h3>
                                <div className="urgent-note">
                                    <p>For urgent or same-day bookings, we highly recommend contacting us via <strong>Phone or WhatsApp</strong> for the fastest response.</p>
                                </div>
                            </div>

                            <div className="info-block">
                                <h3>Opening Hours</h3>
                                <ul className="hours-list">
                                    <li><span>Monday - Sunday</span> <span>24 Hours</span></li>
                                    <li><span>Discreet Enquiries</span> <span>24/7</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="contact-form-wrap">
                            <div className="form-card">
                                <h3>Enquiry Form</h3>
                                <form className="c-form">
                                    <div className="form-group">
                                        <label>Your Name</label>
                                        <input type="text" placeholder="Full name" />
                                    </div>
                                    <div className="form-group">
                                        <label>Email Address</label>
                                        <input type="email" placeholder="email@example.com" />
                                    </div>
                                    <div className="form-group">
                                        <label>Your Message</label>
                                        <textarea placeholder="How can we help?"></textarea>
                                    </div>
                                    <button className="btn btn-primary" onClick={(e) => e.preventDefault()}>SEND MESSAGE</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .contact-page { background: #fcfaf5; color: #111; }
                
                .contact-hero {
                    padding: 180px 0 120px;
                    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url('/images/pexels-ronin-13443101.jpg');
                    background-size: cover;
                    background-position: center;
                    color: #fff;
                    text-align: center;
                }
                .contact-pre { font-size: 10px; font-weight: 900; letter-spacing: 0.3em; color: var(--accent); margin-bottom: 20px; }
                .contact-hero h1 { font-size: clamp(2rem, 5vw, 3.2rem); font-weight: 900; text-transform: uppercase; margin-bottom: 20px; letter-spacing: -0.01em; line-height: 1.1; }
                .contact-hero h1 span { color: var(--accent); }
                .contact-hero p { font-size: 1.1rem; opacity: 0.9; max-width: 650px; margin: 0 auto; line-height: 1.6; }

                .contact-main { padding: 100px 0; background: #fff; }
                .contact-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 80px; }

                .info-block { margin-bottom: 60px; }
                .accent-line.small { width: 40px; height: 2px; background: var(--accent); margin-bottom: 25px; }
                .info-block h3 { font-size: 14px; font-weight: 900; text-transform: uppercase; color: #111; margin-bottom: 30px; letter-spacing: 0.1em; }
                
                .contact-methods { display: flex; flex-direction: column; gap: 20px; }
                .method {
                    display: flex;
                    align-items: center;
                    gap: 25px;
                    padding: 35px;
                    background: #fcfaf5;
                    border: 1px solid #eee;
                    text-decoration: none;
                    color: inherit;
                    transition: 0.4s var(--ease-expo);
                }
                .method:hover { border-color: var(--accent); transform: translateX(10px); background: #fff; }
                .method .icon { font-size: 28px; }
                .method .text { display: flex; flex-direction: column; gap: 6px; }
                .method .label { font-size: 10px; font-weight: 900; color: #999; text-transform: uppercase; letter-spacing: 0.1em; }
                .method .val { font-size: 20px; font-weight: 900; color: #111; }

                .urgent-note {
                    padding: 30px;
                    background: rgba(197, 160, 89, 0.1);
                    border-left: 4px solid var(--accent);
                    font-size: 15px;
                    line-height: 1.7;
                }

                .hours-list { list-style: none; padding: 0; }
                .hours-list li {
                    display: flex;
                    justify-content: space-between;
                    padding: 15px 0;
                    border-bottom: 1px solid #eee;
                    font-size: 14px;
                    font-weight: 700;
                }

                .form-card { background: #fff; padding: 60px; border: 1px solid #eee; box-shadow: 0 30px 60px rgba(0,0,0,0.05); }
                .form-card h3 { font-size: 20px; font-weight: 900; margin-bottom: 40px; text-transform: uppercase; text-align: center; }
                
                .c-form { display: flex; flex-direction: column; gap: 25px; }
                .form-group { display: flex; flex-direction: column; gap: 10px; }
                .form-group label { font-size: 11px; font-weight: 900; text-transform: uppercase; color: #999; }
                .form-group input, .form-group textarea {
                    padding: 15px;
                    background: #f9f9f9;
                    border: 1px solid #eee;
                    font-family: inherit;
                }
                .form-group textarea { height: 150px; resize: none; }

                @media (max-width: 992px) {
                    .contact-grid { grid-template-columns: 1fr; gap: 60px; }
                }
                @media (max-width: 600px) {
                    .contact-hero h1 { font-size: 2.5rem; }
                    .form-card { padding: 40px 20px; }
                }
            `}</style>
        </div>
    );
};

export default ContactPage;
