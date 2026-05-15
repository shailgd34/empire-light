import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const services = [
        {
            title: 'Social Dates',
            desc: 'The perfect companion for dinners, parties, or any social event where you want a beautiful girl by your side.'
        },
        {
            title: 'Personal Meetings',
            desc: 'Private and relaxed time together at your hotel or home. Our girls are friendly, beautiful, and great company.'
        },
        {
            title: 'Elite Outcalls',
            desc: 'We visit all major hotels and private addresses across Sheffield and the North with full discretion.'
        }
    ];

    useEffect(() => {
        gsap.fromTo(".service-item",
            { y: 60, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1.5,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: "#services",
                    start: "top 80%",
                }
            }
        );
    }, []);

    return (
        <section id="services" className="section" style={{ background: 'var(--bg-secondary)', padding: '80px 0' }}>
            <div className="container">
                <div className="section-header anim-reveal">
                    <p style={{ color: 'var(--accent)', fontSize: '12px', fontWeight: '900', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Our Expertise</p>
                    <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '800', color: '#111', textTransform: 'uppercase' }}>
                        Our <span style={{ color: 'var(--accent)' }}>Services</span>
                    </h2>
                </div>

                <div className="services-grid anim-reveal">
                    {services.map((service, idx) => (
                        <div key={idx} className="service-item">
                            <div className="service-num">0{idx + 1}</div>
                            <h3 className="service-name">{service.title}</h3>
                            <p className="service-txt">{service.desc.replace('companion', 'model')}</p>
                            <a href="#how-to-book" className="service-btn">
                                LEARN MORE <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .services-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 30px;
                }
                .service-item {
                    background: #fff;
                    padding: 40px;
                    transition: 0.4s var(--ease-expo);
                    border: 1px solid #f0f0f0;
                }
                .service-item:hover {
                    border-color: var(--accent);
                    transform: translateY(-5px);
                    box-shadow: 0 15px 40px rgba(0,0,0,0.05);
                }
                .service-num {
                    font-size: 10px;
                    font-weight: 900;
                    color: var(--accent);
                    letter-spacing: 0.2em;
                    margin-bottom: 20px;
                }
                .service-name {
                    font-size: 16px;
                    font-weight: 800;
                    color: #111;
                    margin-bottom: 15px;
                    letter-spacing: 0.05em;
                }
                .service-txt {
                    font-size: 14px;
                    color: #666;
                    line-height: 1.7;
                    margin-bottom: 30px;
                    font-weight: 500;
                }
                .service-btn {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    text-decoration: none;
                    font-weight: 900;
                    font-size: 10px;
                    color: #111;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    transition: 0.3s;
                }
                .service-item:hover .service-btn {
                    color: var(--accent);
                    gap: 12px;
                }
                @media (max-width: 1024px) {
                    .services-grid { grid-template-columns: 1fr; }
                }
            `}</style>
        </section>
    );
};

export default Services;
