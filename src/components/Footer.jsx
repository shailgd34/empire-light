import React from 'react';

const Footer = () => {
    return (
        <footer id="contact" className="premium-footer" style={{ background: '#fdfdfb', padding: '120px 0 60px' }}>
            <div className="container">
                <div className="footer-grid">
                    {/* Brand Column */}
                    <div className="footer-col-main">
                        <img src="/images/logo.webp" alt="Empire Escorts" className="footer-logo" />
                        <p className="footer-tagline">
                            Empire Escorts is Sheffield's premier agency, providing elite companionship and discreet services for the sophisticated gentleman.
                        </p>
                        <div className="footer-ctas">
                            <a href="tel:07368428158" className="footer-btn">CALL NOW</a>
                            <a href="https://wa.me/447368428158" className="footer-btn gold">WHATSAPP</a>
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="footer-links-grid">
                        <div className="link-group">
                            <h4>REGIONS</h4>
                            <a href="#sheffield">Sheffield</a>
                            <a href="#leeds">Leeds</a>
                            <a href="#doncaster">Doncaster</a>
                            <a href="#barnsley">Barnsley</a>
                        </div>
                        <div className="link-group">
                            <h4>AGENCY</h4>
                            <a href="/">Home</a>
                            <a href="/girls">Our Girls</a>
                            <a href="/booking">Booking Guide</a>
                            <a href="/join-us">Careers</a>
                        </div>
                        <div className="link-group">
                            <h4>SUPPORT</h4>
                            <a href="/blog">Journal</a>
                            <a href="/contact">Contact</a>
                            <a href="#terms">Terms</a>
                            <a href="#privacy">Privacy</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2024 EMPIRE ESCORTS. ALL RIGHTS RESERVED.</p>
                    <div className="footer-bottom-links">
                        <span>100% VERIFIED PHOTOS</span>
                        <span className="dot"></span>
                        <span>24/7 ELITE SERVICE</span>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .footer-grid {
                    display: grid;
                    grid-template-columns: 1.2fr 2fr;
                    gap: 100px;
                    margin-bottom: 100px;
                }
                .footer-logo {
                    height: 60px;
                    margin-bottom: 30px;
                }
                .footer-tagline {
                    font-size: 15px;
                    color: #444;
                    line-height: 1.8;
                    margin-bottom: 40px;
                    font-weight: 500;
                    max-width: 400px;
                }
                .footer-ctas {
                    display: flex;
                    gap: 15px;
                }
                .footer-btn {
                    padding: 12px 25px;
                    border: 1px solid #ddd;
                    border-radius: 100px;
                    font-size: 11px;
                    font-weight: 900;
                    letter-spacing: 0.1em;
                    text-decoration: none;
                    color: #111;
                    transition: 0.3s;
                }
                .footer-btn.gold {
                    background: var(--accent);
                    color: #fff;
                    border-color: var(--accent);
                }
                .footer-btn:hover {
                    border-color: #000;
                    background: #000;
                    color: #fff;
                }
                .footer-links-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 40px;
                }
                .link-group h4 {
                    font-size: 12px;
                    font-weight: 900;
                    color: var(--accent);
                    letter-spacing: 0.15em;
                    margin-bottom: 30px;
                }
                .link-group a {
                    display: block;
                    font-size: 14px;
                    color: #111;
                    text-decoration: none;
                    margin-bottom: 15px;
                    font-weight: 700;
                    transition: 0.3s;
                }
                .link-group a:hover {
                    color: var(--accent);
                    transform: translateX(5px);
                }
                .footer-bottom {
                    padding-top: 40px;
                    border-top: 1px solid #eee;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 11px;
                    font-weight: 900;
                    color: #999;
                    letter-spacing: 0.1em;
                }
                .footer-bottom-links {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }
                .dot {
                    width: 4px;
                    height: 4px;
                    background: #ddd;
                    border-radius: 50%;
                }
                @media (max-width: 1024px) {
                    .footer-grid { grid-template-columns: 1fr; gap: 60px; }
                    .footer-links-grid { grid-template-columns: repeat(3, 1fr); }
                }
                @media (max-width: 640px) {
                    .footer-links-grid { grid-template-columns: 1fr; }
                    .footer-bottom { flex-direction: column; gap: 20px; text-align: center; }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
