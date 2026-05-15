import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section" style={{ background: '#fff', padding: '80px 0' }}>
            <div className="container">
                <div className="contact-grid">
                    <div className="contact-info anim-reveal">
                        <div className="section-header" style={{ textAlign: 'left', marginBottom: '40px' }}>
                            <p style={{ color: 'var(--accent)', fontSize: '12px', fontWeight: '900', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Get In Touch</p>
                            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '800', color: '#111', textTransform: 'uppercase' }}>
                                Book Your <span style={{ color: 'var(--accent)' }}>Experience</span>
                            </h2>
                        </div>

                        <p className="contact-intro">
                            Our dedicated concierge team is available 24/7 to assist with your bookings. We guarantee 100% discretion and a professional service at all times.
                        </p>

                        <div className="contact-methods">
                            <div className="method-item">
                                <span className="method-label">Direct Line</span>
                                <a href="tel:07368428158" className="method-link">07368 428 158</a>
                            </div>
                            <div className="method-item">
                                <span className="method-label">WhatsApp</span>
                                <a href="https://wa.me/447368428158" className="method-link">Message Concierge</a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrap anim-reveal">
                        <form className="premium-form">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" placeholder="Your name" />
                            </div>
                            <div className="form-group">
                                <label>Contact Number</label>
                                <input type="text" placeholder="Phone or WhatsApp" />
                            </div>
                            <div className="form-group">
                                <label>Message / Requirements</label>
                                <textarea placeholder="Who would you like to see and when?"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-full">SEND SECURE REQUEST</button>
                        </form>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .contact-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 80px;
                    align-items: center;
                }
                .contact-intro {
                    font-size: 16px;
                    color: #555;
                    line-height: 1.8;
                    margin-bottom: 40px;
                    font-weight: 500;
                    border-left: 3px solid var(--accent);
                    padding-left: 25px;
                }
                .contact-methods {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 30px;
                }
                .method-label {
                    display: block;
                    font-size: 10px;
                    font-weight: 900;
                    color: var(--accent);
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    margin-bottom: 10px;
                }
                .method-link {
                    font-size: 1.2rem;
                    font-weight: 800;
                    color: #111;
                    text-decoration: none;
                    transition: 0.3s;
                }
                .method-link:hover {
                    color: var(--accent);
                }
                .premium-form {
                    background: var(--bg-secondary);
                    padding: 50px;
                    border-radius: 4px;
                    border: 1px solid #eee;
                }
                .form-group {
                    margin-bottom: 25px;
                }
                .form-group label {
                    display: block;
                    font-size: 10px;
                    font-weight: 900;
                    color: #888;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    margin-bottom: 10px;
                }
                .form-group input, .form-group textarea {
                    width: 100%;
                    background: #fff;
                    border: 1px solid #eee;
                    padding: 15px;
                    font-size: 14px;
                    font-weight: 500;
                    outline: none;
                    transition: 0.3s;
                }
                .form-group input:focus, .form-group textarea:focus {
                    border-color: var(--accent);
                }
                .form-group textarea {
                    height: 100px;
                    resize: none;
                }
                @media (max-width: 1024px) {
                    .contact-grid { grid-template-columns: 1fr; gap: 60px; }
                    .premium-form { padding: 40px 30px; }
                }
            `}</style>
        </section>
    );
};

export default Contact;
