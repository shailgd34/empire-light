import React from 'react';

const Services = () => {
    const services = [
        { 
            title: 'Incall Registry', 
            desc: 'Access our secure, high-end private residences in central Sheffield and surrounding hubs. Engineered for total anonymity and uncompromising comfort.',
            tag: 'Mandate 01'
        },
        { 
            title: 'Outcall Visit', 
            desc: 'Discreet, elite visitation to your private residence or luxury hotel. Our companions arrive with absolute punctuality and standard-setting professionalism.',
            tag: 'Mandate 02'
        },
        { 
            title: 'Dinner Dates', 
            desc: 'Sophisticated companionship for high-profile events, corporate dinners, or private engagements. Elevate your presence with world-class grace.',
            tag: 'Mandate 03'
        }
    ];

    return (
        <section className="bg-bg-primary py-12 md:py-20 relative overflow-hidden" id="services">
            {/* Architectural Grid Decoration */}
            <div className="absolute inset-0 grid grid-cols-6 h-full w-full pointer-events-none opacity-[0.03]">
                {[...Array(6)].map((_, i) => <div key={i} className="border-r border-black"></div>)}
            </div>

            <div className="container-wide relative z-10">
                <div className="max-w-3xl mb-16 anim-section-reveal">
                    <span className="text-gold uppercase tracking-[0.5em] font-bold text-[0.55rem] block mb-4">Core Competencies</span>
                    <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.85] text-black">
                        The Empire <br /> <span className="text-transparent" style={{ WebkitTextStroke: '1px var(--ivory-30)' }}>Service Mandate</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
                    {services.map((service, idx) => (
                        <div key={idx} className="group relative p-10 md:p-14 bg-bg-secondary/40 border border-black/5 hover:bg-gold/5 transition-all duration-1000 overflow-hidden anim-section-reveal">
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-1000"></div>
                            
                            <div className="relative z-10 space-y-8">
                                <span className="text-black/20 text-[0.5rem] font-bold uppercase tracking-[0.5em] block group-hover:text-gold transition-colors">{service.tag}</span>
                                
                                <div className="space-y-4">
                                    <h3 className="text-3xl md:text-4xl font-bold text-black uppercase tracking-tighter leading-none group-hover:italic transition-all duration-700">
                                        {service.title}
                                    </h3>
                                    <p className="text-black/40 text-sm italic leading-relaxed group-hover:text-black/60 transition-colors duration-700">
                                        {service.desc}
                                    </p>
                                </div>

                                <div className="pt-8">
                                    <a href="#contact" className="text-gold text-[0.5rem] font-bold uppercase tracking-[0.5em] flex items-center gap-3 no-underline group-hover:gap-6 transition-all duration-500">
                                        Explore Protocol <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                    </a>
                                </div>
                            </div>

                            {/* Background Number */}
                            <div className="absolute -bottom-10 -right-4 pointer-events-none opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-1000">
                                <span className="text-[12rem] font-bold text-black leading-none">0{idx + 1}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
