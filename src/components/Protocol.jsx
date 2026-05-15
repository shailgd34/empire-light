import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const steps = [
    {
        number: '01',
        title: 'PICK A GIRL',
        description: 'See our beautiful girls and pick your favorite girl for the meeting.'
    },
    {
        number: '02',
        title: 'MESSAGE US',
        description: 'Call or WhatsApp us to book. We will tell you if the girl is free now.'
    },
    {
        number: '03',
        title: 'GIRL ARRIVES',
        description: 'The girl will reach your location fast, usually in 30 to 45 minutes.'
    }
];

const Protocol = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        gsap.fromTo(cardsRef.current,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%'
                }
            }
        );
    }, []);

    return (
        <section id="how-to-book" ref={sectionRef} className="section" style={{ background: '#fff', padding: '120px 0' }}>
            <div className="container">
                <div className="section-header anim-reveal" style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <p style={{ color: 'var(--accent)', fontSize: '12px', fontWeight: '900', letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Simplified Process</p>
                    <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '800', color: '#111', textTransform: 'uppercase' }}>
                        How It <span style={{ color: 'var(--accent)' }}>Works</span>
                    </h2>
                    <p style={{ color: '#888', fontSize: '15px', marginTop: '1rem', fontWeight: '500' }}>Three simple steps to your elite companion experience</p>
                </div>

                <div className="process-grid">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            ref={el => cardsRef.current[index] = el}
                            className="process-card"
                        >
                            <div className="process-number-wrap">
                                <div className="process-number">{step.number}</div>
                                {index < steps.length - 1 && <div className="process-connector desktop-only"></div>}
                            </div>
                            <h3 className="process-title">{step.title}</h3>
                            <p className="process-text">{step.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center anim-reveal flex justify-center" style={{ justifyContent: 'center' }}>
                    <a href="tel:07368428158" className="btn btn-primary rounded-full" style={{ padding: '20px 50px' }}>
                        START YOUR BOOKING NOW
                    </a>
                </div>
            </div>

            <style jsx>{`
                .process-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 60px;
                }
                .process-card {
                    text-align: center;
                    position: relative;
                }
                .process-number-wrap {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 30px;
                    position: relative;
                }
                .process-number {
                    width: 70px;
                    height: 70px;
                    background: var(--accent);
                    color: #fff;
                    font-size: 20px;
                    font-weight: 900;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    box-shadow: 0 10px 20px rgba(135, 86, 0, 0.2);
                    z-index: 2;
                }
                .process-connector {
                    position: absolute;
                    left: calc(50% + 35px);
                    top: 50%;
                    width: calc(100% - 10px);
                    height: 2px;
                    background: #f0f0f0;
                    z-index: 1;
                }
                .process-title {
                    font-size: 16px;
                    font-weight: 900;
                    color: #111;
                    margin-bottom: 15px;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                }
                .process-text {
                    font-size: 14px;
                    color: #666;
                    line-height: 1.8;
                    font-weight: 500;
                    max-width: 280px;
                    margin: 0 auto;
                }
                @media (max-width: 1024px) {
                    .process-grid { grid-template-columns: 1fr; gap: 80px; }
                    .process-connector { display: none; }
                }
            `}</style>
        </section>
    );
};

export default Protocol;
