import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const RegionsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const regions = [
        { name: 'Sheffield', count: '12+', image: '/images/pexels-ronin-13443101.jpg' },
        { name: 'Leeds', count: '8+', image: '/images/pexels-macnalodao-20270579.jpg' },
        { name: 'Nottingham', count: '6+', image: '/images/pexels-noirgenesis-5953288.jpg' },
        { name: 'Doncaster', count: '5+', image: '/images/pexels-fhstudio-14664321.jpg' },
        { name: 'Barnsley', count: '4+', image: '/images/pexels-Babydov-7788015.jpg' },
        { name: 'Chesterfield', count: '4+', image: '/images/pexels-babydov-7788013.jpg' },
        { name: 'Rotherham', count: '3+', image: '/images/pexels-vika-glitter-392079-11363751.jpg' },
        { name: 'Wakefield', count: '5+', image: '/images/pexels-vika-glitter-392079-12975094.jpg' },
        { name: 'Bradford', count: '7+', image: '/images/pexels-stardustmultimedia-12642172.jpg' },
    ];

    return (
        <div className="regions-page">
            <section className="regions-hero">
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <div className="hero-pre">EMPIRE COVERAGE</div>
                    <h1>Exclusive <span>Regions</span></h1>
                    <p>Elite companionship services across the most prestigious locations in the United Kingdom.</p>
                </div>
            </section>

            <section className="regions-grid-section">
                <div className="container">
                    <div className="section-header">
                        <div className="accent-line gold"></div>
                        <h2>Select Your <span>Destination</span></h2>
                        <p>PREMIUM MODELS IN EVERY CITY</p>
                    </div>

                    <div className="regions-grid">
                        {regions.map((region, idx) => (
                            <Link key={idx} to={`/escorts/${region.name.toLowerCase()}`} className="region-card-premium">
                                <div className="card-img">
                                    <img src={region.image} alt={region.name} />
                                    <div className="img-overlay"></div>
                                </div>
                                <div className="card-info">
                                    <div className="info-top">
                                        <h3>{region.name}</h3>
                                        <span className="count">{region.count} MODELS</span>
                                    </div>
                                    <div className="card-line"></div>
                                    <div className="info-bottom">
                                        <span>EXPLORE REGION</span>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="nationwide-cta">
                <div className="container">
                    <div className="cta-box">
                        <h2>Nationwide <span>Outcalls</span></h2>
                        <p>We provide executive travel arrangements for our elite clientele across all major UK cities.</p>
                        <a href="tel:07368428158" className="btn btn-primary">ENQUIRE NOW</a>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .regions-page { background: #fff; }
                
                .regions-hero {
                    height: 50vh;
                    background: url('/images/pexels-fhstudio-20741650.jpg');
                    background-size: cover;
                    background-position: center;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    color: #fff;
                }
                .hero-overlay { position: absolute; inset: 0; background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.8)); }
                .hero-content { position: relative; z-index: 2; }
                .hero-pre { font-size: 10px; font-weight: 900; letter-spacing: 0.3em; color: var(--accent); margin-bottom: 20px; text-transform: uppercase; }
                .regions-hero h1 { font-size: clamp(2.5rem, 6vw, 3.8rem); font-weight: 900; text-transform: uppercase; margin-bottom: 20px; }
                .regions-hero h1 span { color: var(--accent); }
                .regions-hero p { font-size: 1rem; opacity: 0.9; max-width: 600px; margin: 0 auto; line-height: 1.6; }

                .regions-grid-section { padding: 100px 0; background: #fff; }
                .section-header { text-align: center; margin-bottom: 60px; }
                .accent-line.gold { width: 40px; height: 3px; background: var(--accent); margin: 0 auto 25px; box-shadow: 0 0 15px var(--accent); }
                .section-header h2 { font-size: 2.2rem; font-weight: 900; text-transform: uppercase; }
                .section-header h2 span { color: var(--accent); }
                .section-header p { font-size: 10px; color: #999; font-weight: 900; margin-top: 12px; letter-spacing: 0.2em; }

                .regions-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 30px;
                }
                .region-card-premium {
                    display: block;
                    background: #fcfaf5;
                    border: 1px solid #eee;
                    border-radius: 15px;
                    overflow: hidden;
                    text-decoration: none;
                    color: inherit;
                    transition: 0.4s var(--ease-expo);
                }
                .region-card-premium:hover {
                    transform: translateY(-10px);
                    border-color: var(--accent);
                    box-shadow: 0 20px 40px rgba(197, 160, 89, 0.1);
                }

                .card-img { height: 200px; position: relative; overflow: hidden; }
                .card-img img { width: 100%; height: 100%; object-fit: cover; transition: 0.8s; }
                .region-card-premium:hover .card-img img { transform: scale(1.1); }
                .img-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.5), transparent); }

                .card-info { padding: 30px; }
                .info-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; }
                .info-top h3 { font-size: 18px; font-weight: 900; text-transform: uppercase; color: #111; letter-spacing: 0.05em; }
                .count { font-size: 10px; font-weight: 900; color: var(--accent); letter-spacing: 0.1em; }
                
                .card-line { width: 40px; height: 1px; background: #ddd; margin-bottom: 20px; transition: 0.4s; }
                .region-card-premium:hover .card-line { width: 100%; background: var(--accent); }

                .info-bottom { display: flex; justify-content: space-between; align-items: center; font-size: 11px; font-weight: 900; letter-spacing: 0.1em; color: #999; transition: 0.3s; }
                .region-card-premium:hover .info-bottom { color: var(--accent); }
                
                .nationwide-cta { padding: 100px 0; background: #fcfaf5; }
                .cta-box {
                    max-width: 800px;
                    margin: 0 auto;
                    text-align: center;
                    padding: 60px;
                    background: #fff;
                    border: 1px solid var(--accent);
                    border-radius: 15px;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.05);
                }
                .cta-box h2 { font-size: 2.2rem; font-weight: 900; text-transform: uppercase; margin-bottom: 20px; }
                .cta-box h2 span { color: var(--accent); }
                .cta-box p { font-size: 1.1rem; color: #666; margin-bottom: 30px; line-height: 1.6; }

                @media (max-width: 1024px) {
                    .regions-grid { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 640px) {
                    .regions-grid { grid-template-columns: 1fr; }
                    .regions-hero h1 { font-size: 2.5rem; }
                    .cta-box { padding: 40px 20px; }
                }
            `}</style>
        </div>
    );
};

export default RegionsPage;
