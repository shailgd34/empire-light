import React, { useState, useEffect } from 'react';
import gsap from 'gsap';

const girlPairs = [
    [
        {
            name: 'Nikki',
            age: 27,
            image: '/images/escorts (1).jpg',
            desc: 'Nikki says, "I am the ultimate beautiful Sheffield escort. I have long legs and a very friendly personality."'
        },
        {
            name: 'Bella',
            age: 36,
            image: '/images/escorts (2).jpg',
            desc: 'Bella says, "I\'m a really warm and friendly person with a big personality. I have a gorgeous figure."'
        }
    ],
    [
        {
            name: 'Sophia',
            age: 24,
            image: '/images/escorts (3).jpg',
            desc: 'Sophia says, "I am a young and energetic girl who loves to have fun. I am very professional and always on time."'
        },
        {
            name: 'Mia',
            age: 25,
            image: '/images/escorts (4).jpg',
            desc: 'Mia says, "I am an elegant and sophisticated companion. I love high-end dates and private meetings."'
        }
    ]
];

const GirlSlider = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % girlPairs.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + girlPairs.length) % girlPairs.length);

    return (
        <section className="girl-slider-section" style={{ background: '#0a0a0a', padding: '120px 0', color: '#fff', overflow: 'hidden' }}>
            <div className="container">
                <div className="slider-header anim-reveal" style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <p style={{ color: 'var(--accent)', fontSize: '12px', fontWeight: '900', letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Premium Selection</p>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '900', color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
                        MEET OUR <span style={{ color: 'var(--accent)' }}>ELITE MODELS</span>
                    </h2>
                </div>

                <div className="slider-wrapper">
                    <div className="slides-track" style={{ transform: `translateX(-${current * 100}%)`, display: 'flex', transition: '0.8s var(--ease-expo)' }}>
                        {girlPairs.map((pair, pIdx) => (
                            <div key={pIdx} className="slide-pair" style={{ minWidth: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                                {pair.map((girl, gIdx) => (
                                    <div key={gIdx} className="slider-girl-card">
                                        <div className="slider-girl-info">
                                            <h3 className="slider-girl-name">
                                                {girl.name}, <span className="slider-age">{girl.age}</span>
                                            </h3>
                                            <p className="slider-girl-desc">{girl.desc}</p>
                                            <a href="#our-girls" className="slider-find-btn">FIND OUT MORE</a>
                                        </div>
                                        <div className="slider-img-box">
                                            <img src={girl.image} alt={girl.name} />
                                            <div className="slider-img-tag">EE</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Controls */}
                    <div className="slider-controls">
                        <button className="nav-btn prev" onClick={prevSlide}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
                        </button>
                        <div className="dots">
                            {girlPairs.map((_, i) => (
                                <div key={i} className={`dot ${i === current ? 'active' : ''}`} onClick={() => setCurrent(i)}></div>
                            ))}
                        </div>
                        <button className="nav-btn next" onClick={nextSlide}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .slider-wrapper {
                    position: relative;
                }
                .slider-girl-card {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 20px;
                    overflow: hidden;
                    transition: 0.4s;
                }
                .slider-girl-card:hover {
                    background: rgba(255,255,255,0.06);
                    border-color: var(--accent);
                    transform: translateY(-5px);
                }
                .slider-girl-info {
                    padding: 40px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .slider-girl-name {
                    font-size: 2.5rem;
                    font-weight: 800;
                    margin-bottom: 1.5rem;
                    text-transform: uppercase;
                    color: #fff;
                }
                .slider-girl-name .slider-age {
                    color: var(--accent);
                    font-weight: 400;
                }
                .slider-girl-desc {
                    font-size: 14px;
                    line-height: 1.8;
                    margin-bottom: 2.5rem;
                    color: rgba(255,255,255,0.8);
                }
                .slider-find-btn {
                    align-self: flex-start;
                    padding: 12px 30px;
                    background: var(--accent);
                    color: #fff;
                    font-size: 11px;
                    font-weight: 900;
                    border-radius: 50px;
                    letter-spacing: 0.1em;
                    transition: 0.3s;
                }
                .slider-find-btn:hover {
                    background: #fff;
                    color: #000;
                }
                .slider-img-box {
                    position: relative;
                    height: 450px;
                }
                .slider-img-box img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .slider-img-tag {
                    position: absolute;
                    bottom: 20px;
                    right: 20px;
                    width: 40px;
                    height: 40px;
                    background: var(--accent);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 12px;
                    font-weight: 900;
                    color: #fff;
                }

                .slider-controls {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 30px;
                    margin-top: 60px;
                    position: relative;
                    z-index: 50;
                }
                .nav-btn {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    border: 1px solid rgba(255,255,255,0.2);
                    color: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: 0.3s;
                }
                .nav-btn:hover {
                    background: var(--accent);
                    border-color: var(--accent);
                }
                .dots {
                    display: flex;
                    gap: 10px;
                }
                .dot {
                    width: 8px;
                    height: 8px;
                    background: rgba(255,255,255,0.2);
                    border-radius: 50%;
                    cursor: pointer;
                    transition: 0.3s;
                }
                .dot.active {
                    background: var(--accent);
                    transform: scale(1.5);
                }
                .nav-btn svg {
                    stroke: #fff !important;
                    display: block;
                    width: 24px;
                    height: 24px;
                }

                @media (max-width: 1200px) {
                    .slide-pair { grid-template-columns: 1fr; }
                    .slider-girl-card { grid-template-columns: 1fr 1fr; }
                }
                @media (max-width: 768px) {
                    .slider-girl-card { grid-template-columns: 1fr; }
                    .slider-img-box { order: -1; height: 350px; }
                }
            `}</style>
        </section>
    );
};

export default GirlSlider;
