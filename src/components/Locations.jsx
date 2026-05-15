import React from 'react';

const areas = [
    'Sheffield', 'Rotherham', 'Barnsley', 'Doncaster',
    'Leeds', 'Bradford', 'Wakefield', 'Chesterfield', 'Worksop'
];

const Locations = () => {
    return (
        <section id="locations" className="section" style={{ background: '#fff', padding: '80px 0' }}>
            <div className="container">
                <div className="section-header anim-reveal">
                    <p style={{ color: 'var(--accent)', fontSize: '12px', fontWeight: '900', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Where We Are</p>
                    <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '800', color: '#111', textTransform: 'uppercase' }}>
                        Pick Your <span style={{ color: 'var(--accent)' }}>Region</span>
                    </h2>
                </div>

                <div className="regions-grid anim-reveal">
                    {areas.map((area) => (
                        <a key={area} href={`#${area.toLowerCase()}`} className="region-card">
                            <span className="region-txt">{area} Models</span>
                            <svg className="region-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </a>
                    ))}
                </div>

                <div className="locations-footer anim-reveal">
                    <p className="footer-label">Can't find your area? Call us 24/7</p>
                    <a href="tel:07368428158" className="footer-num">07368 428 158</a>
                </div>
            </div>

            <style jsx>{`
                .regions-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 20px;
                }
                .region-card {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 20px 30px;
                    background: var(--bg-secondary);
                    text-decoration: none;
                    transition: 0.4s var(--ease-expo);
                    border: 1px solid #f0f0f0;
                }
                .region-card:hover {
                    background: #fff;
                    border-color: var(--accent);
                    transform: translateY(-5px);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                }
                .region-txt {
                    font-size: 13px;
                    font-weight: 800;
                    color: #111;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
                .region-svg {
                    color: var(--accent);
                    transition: 0.3s;
                }
                .region-card:hover .region-svg {
                    transform: translateX(5px);
                }
                .locations-footer {
                    margin-top: 60px;
                    text-align: center;
                }
                .footer-label {
                    font-size: 10px;
                    font-weight: 900;
                    color: #999;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    margin-bottom: 5px;
                }
                .footer-num {
                    font-size: 1.8rem;
                    font-weight: 800;
                    color: #111;
                    text-decoration: none;
                    letter-spacing: -0.01em;
                }
                @media (max-width: 1024px) {
                    .regions-grid { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 640px) {
                    .regions-grid { grid-template-columns: 1fr; }
                    .footer-num { font-size: 1.5rem; }
                }
            `}</style>
        </section>
    );
};

export default Locations;
