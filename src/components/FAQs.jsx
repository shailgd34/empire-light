import React, { useState } from 'react';

const faqs = [
    {
        q: 'How do I book a girl?',
        a: 'It is very simple. See our girls, pick your favorite, and call us or WhatsApp us. We will help you book quickly.'
    },
    {
        q: 'What areas do you cover?',
        a: 'We cover Sheffield, Rotherham, Barnsley, Doncaster, Leeds, Bradford, Wakefield, Chesterfield, and Worksop. We can also come to nearby areas.'
    },
    {
        q: 'Are girl photos real?',
        a: 'Yes, 100%. All our girl photos are real and verified. What you see is exactly what you get.'
    },
    {
        q: 'Can I send WhatsApp message?',
        a: 'Yes, you can WhatsApp us 24/7. Most clients like to message us for booking. It is very private.'
    },
    {
        q: 'Is it private and safe?',
        a: 'Yes, 100%. We have professional drivers and we keep your booking secret. No one will know.'
    },
    {
        q: 'How fast can a girl arrive?',
        a: 'Our girl can reach you in 30 to 60 minutes in Sheffield. It depends on traffic and girl availability.'
    },
    {
        q: 'How to join as a girl?',
        a: 'We are always looking for new girls. Click "Apply to Join Us" in the career section to start.'
    }
];

const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section id="faq" className="section" style={{ background: '#fff', padding: '80px 0' }}>
            <div className="container">
                <div className="section-header anim-reveal">
                    <p style={{ color: 'var(--accent)', fontSize: '12px', fontWeight: '900', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Assistance</p>
                    <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '800', color: '#111', textTransform: 'uppercase' }}>
                        Common <span style={{ color: 'var(--accent)' }}>Questions</span>
                    </h2>
                </div>

                <div className="faq-wrapper anim-reveal">
                    {faqs.map((faq, index) => (
                        <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
                            <button 
                                className="faq-head"
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                            >
                                <span>{faq.q}</span>
                                <div className="faq-plus">
                                    <div className="line v"></div>
                                    <div className="line h"></div>
                                </div>
                            </button>
                            <div className="faq-body">
                                <p className="faq-ans">{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .faq-wrapper {
                    max-width: 800px;
                    margin: 0 auto;
                }
                .faq-item {
                    border-bottom: 1px solid #f0f0f0;
                }
                .faq-head {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 25px 0;
                    background: none;
                    border: none;
                    text-align: left;
                    cursor: pointer;
                    font-size: 16px;
                    font-weight: 800;
                    color: #111;
                    transition: 0.3s;
                    font-family: var(--font-heading);
                }
                .faq-item:hover .faq-head {
                    color: var(--accent);
                }
                .faq-plus {
                    position: relative;
                    width: 12px;
                    height: 12px;
                }
                .line {
                    position: absolute;
                    background: var(--accent);
                    transition: 0.4s var(--ease-expo);
                }
                .line.v { width: 2px; height: 100%; left: 5px; top: 0; }
                .line.h { width: 100%; height: 2px; left: 0; top: 5px; }
                .faq-item.active .line.v { transform: rotate(90deg); opacity: 0; }
                .faq-item.active .line.h { transform: rotate(180deg); }
                
                .faq-body {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.5s var(--ease-expo);
                }
                .faq-item.active .faq-body {
                    max-height: 200px;
                }
                .faq-ans {
                    color: #666;
                    padding-bottom: 25px;
                    line-height: 1.7;
                    font-size: 14px;
                    font-weight: 500;
                }
            `}</style>
        </section>
    );
};

export default FAQs;
