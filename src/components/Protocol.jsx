import React from 'react';

const Protocol = () => {
    const steps = [
        { 
            title: 'Registry Selection', 
            desc: 'Browse our world-class Featured Archive and select the companion that perfectly aligns with your requirements and aesthetic preferences.' 
        },
        { 
            title: 'Identity Verification', 
            desc: 'Initiate a secure inquiry. Our concierge team will conduct a brief, discreet verification to ensure mutual safety and absolute discretion.' 
        },
        { 
            title: 'Engagement Fulfillment', 
            desc: 'Protocol established. Your selected companion will proceed to your luxury hotel, private residence, or our secure city incall location.' 
        }
    ];

    return (
        <section className="bg-bg-secondary py-12 md:py-24 relative overflow-hidden" id="protocol">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-[0.02] select-none">
                <span className="text-[30vw] font-bold uppercase text-black leading-none absolute -bottom-10 -right-10">Empire</span>
            </div>

            <div className="container-wide relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16 space-y-4 anim-section-reveal">
                    <span className="text-gold uppercase tracking-[0.5em] font-bold text-[0.55rem] block">The Mandate</span>
                    <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.85]">
                        How It <span className="text-transparent" style={{ WebkitTextStroke: '1px var(--ivory-30)' }}>Works</span>
                    </h2>
                    <p className="text-black/30 text-[0.65rem] font-bold uppercase tracking-widest max-w-xl mx-auto italic">
                        The definitive three-step protocol for our elite Northern companion services.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-1">
                    {steps.map((step, idx) => (
                        <div key={idx} className="group relative p-10 md:p-14 bg-black/5 border border-black/5 hover:bg-gold/5 transition-all duration-1000 text-center anim-section-reveal">
                            <div className="relative z-10 space-y-6">
                                {/* Step Indicator */}
                                <div className="flex justify-center mb-8">
                                    <div className="w-16 h-16 rounded-full border border-gold/20 flex items-center justify-center group-hover:border-gold transition-all duration-1000">
                                        <span className="text-gold text-2xl font-bold italic">0{idx + 1}</span>
                                    </div>
                                </div>

                                <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tighter leading-none group-hover:italic transition-all duration-700">
                                    {step.title}
                                </h3>
                                
                                <p className="text-black/40 text-sm italic leading-relaxed group-hover:text-black/60 transition-colors duration-700">
                                    {step.desc}
                                </p>

                                <div className="pt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                    <div className="w-8 h-[1px] bg-gold mx-auto"></div>
                                </div>
                            </div>

                            {/* Vertical Separator for Desktop */}
                            {idx < steps.length - 1 && (
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-1/2 w-px bg-black/5 hidden md:block"></div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center anim-section-reveal">
                    <div className="inline-flex items-center gap-6">
                        <div className="w-12 h-px bg-black/10"></div>
                        <span className="text-black/20 text-[0.45rem] font-bold uppercase tracking-[0.6em]">Verified Protocol / Est. 2012</span>
                        <div className="w-12 h-px bg-black/10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Protocol;
