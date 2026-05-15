import { Link } from 'react-router-dom';

const StickyCTA = () => {
    return (
        <div className="sticky-cta-container">
            <div className="floating-cta-bar">
                {/* Call Item */}
                <a href="tel:07368428158" className="cta-item">
                    <div className="icon-box gold-bg">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                    </div>
                    <div className="cta-info desktop-only">
                        <span className="label">CALL NOW</span>
                        <span className="value">07368 428 158</span>
                    </div>
                </a>

                {/* WhatsApp Item */}
                <a href="https://wa.me/447368428158" className="cta-item">
                    <div className="icon-box wa-bg">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.526-2.961-2.642-.087-.116-.708-.941-.708-1.797 0-.856.448-1.274.607-1.446.159-.171.347-.214.463-.214.116 0 .231.001.332.005.109.004.254-.042.398.304.144.346.491 1.197.535 1.284.044.087.073.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.088.275.073.376-.042.101-.116.433-.506.549-.68.116-.174.231-.144.39-.087s1.011.477 1.184.564c.174.087.289.13.332.202.043.073.043.423-.101.827z" /></svg>
                    </div>
                    <div className="cta-info desktop-only">
                        <span className="label">WHATSAPP</span>
                        <span className="value">Message Us</span>
                    </div>
                </a>

                {/* Primary Action */}
                <Link to="/girls" className="cta-action-btn">
                    BOOK NOW
                </Link>
            </div>

            <style jsx>{`
                .sticky-cta-container {
                    position: fixed;
                    bottom: 30px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: auto;
                    z-index: 9999;
                }
                .floating-cta-bar {
                    background: #fff;
                    padding: 8px 8px 8px 25px;
                    border-radius: 100px;
                    display: flex;
                    align-items: center;
                    gap: 35px;
                    box-shadow: 0 30px 60px rgba(0,0,0,0.15);
                    border: 1px solid #eee;
                }
                .cta-item {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    text-decoration: none;
                }
                .icon-box {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .gold-bg { background: var(--accent); color: #fff; }
                .wa-bg { background: #25D366; color: #fff; }
                
                .cta-info {
                    display: flex;
                    flex-direction: column;
                }
                .label {
                    font-size: 9px;
                    font-weight: 900;
                    color: var(--accent);
                    letter-spacing: 0.15em;
                    margin-bottom: 5px!important;
                }
                .value {
                    font-size: 13px;
                    font-weight: 900;
                    color: #111;
                    letter-spacing: 0.05em;
                }
                .cta-action-btn {
                    background: #111;
                    color: #fff;
                    padding: 15px 35px;
                    border-radius: 100px;
                    text-decoration: none;
                    font-weight: 900;
                    font-size: 11px;
                    letter-spacing: 0.15em;
                    transition: 0.4s var(--ease-expo);
                    border: 1px solid #111;
                }
                .cta-action-btn:hover {
                    background: var(--accent);
                    border-color: var(--accent);
                    transform: translateX(5px);
                }
                @media (max-width: 1024px) {
                    .floating-cta-bar { gap: 20px; padding: 6px 6px 6px 15px; }
                    .value { font-size: 11px; }
                }
                @media (max-width: 480px) {
                    .desktop-only { display: none; }
                    .floating-cta-bar { gap: 12px; }
                }
            `}</style>
        </div>
    );
};

export default StickyCTA;
