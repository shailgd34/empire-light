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
        <section className="bg-bg-secondary py-16 md:py-24 relative overflow-hidden" id="services">
            {/* Background Branding */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02] select-none">
                <span className="text-[25vw] font-bold uppercase text-black leading-none">Services</span>
            </div>

            <div className="container-wide relative z-10">
                <div className="max-w-4xl mb-12 md:mb-16 anim-section-reveal">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-8 h-px bg-gold/30"></div>
                        <span className="text-gold font-bold text-xs tracking-[0.3em] uppercase">Expert Assistance</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold leading-tight text-black">
                        What <span className="text-transparent italic" style={{ WebkitTextStroke: '1px rgba(0,0,0,0.1)' }}>We Offer</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-px md:bg-black/5 border border-black/5 overflow-hidden">
                    {services.map((service, idx) => (
                        <div key={idx} className="service-item group p-10 md:p-14 bg-bg-primary hover:bg-black transition-all duration-1000 relative">
                            {/* Decorative Corner Element */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gold/5 group-hover:bg-gold/10 transition-colors -translate-y-1/2 translate-x-1/2 rotate-45"></div>
                            
                            <div className="relative z-10 space-y-8">
                                <div className="flex items-baseline gap-4">
                                    <span className="text-gold text-4xl font-black italic opacity-20 group-hover:opacity-100 transition-all duration-700">0{idx + 1}</span>
                                    <div className="w-6 h-px bg-gold/30"></div>
                                </div>
                                
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-black group-hover:text-gold transition-colors duration-700">{service.title}</h3>
                                    <p className="text-black/60 text-base leading-relaxed group-hover:text-white/60 transition-colors duration-700">
                                        {service.desc}
                                    </p>
                                </div>

                                <div className="pt-6 flex items-center gap-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                                    <span className="text-white text-xs font-bold uppercase tracking-widest">Book This Service</span>
                                    <div className="w-8 h-px bg-gold"></div>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
