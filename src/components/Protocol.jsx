import React from 'react';

const Protocol = () => {
    const steps = [
        { 
            title: 'Search', 
            desc: 'Browse our beautiful girls and choose the one you like the most from our verified profiles.' 
        },
        { 
            title: 'Call Us', 
            desc: 'Call, text, or WhatsApp us. Our team is here 24/7 to help you book your date quickly and privately.' 
        },
        { 
            title: 'The Date', 
            desc: 'Your chosen girl will arrive at your hotel or home on time. Enjoy a wonderful experience with us.' 
        }
    ];

    return (
        <section className="bg-bg-primary py-24 md:py-32 relative overflow-hidden" id="protocol">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-[0.02] select-none">
                <span className="text-[35vw] font-bold uppercase text-black leading-none absolute -bottom-20 -right-20 rotate-[-5deg]">Steps</span>
            </div>

            <div className="container-wide relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-24 space-y-6 anim-section-reveal">
                    <div className="flex items-center justify-center gap-4">
                        <div className="w-12 h-px bg-gold/30"></div>
                        <span className="text-gold font-bold text-sm tracking-[0.4em] uppercase">Simple Process</span>
                        <div className="w-12 h-px bg-gold/30"></div>
                    </div>
                    <h2 className="text-5xl md:text-8xl font-bold leading-[0.85] text-black">
                        How To <span className="text-transparent italic" style={{ WebkitTextStroke: '1.5px rgba(0,0,0,0.1)' }}>Book</span>
                    </h2>
                    <p className="text-black/60 text-lg font-medium max-w-xl mx-auto">
                        Follow these 3 simple steps to book a beautiful companion with absolute discretion.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/5 border border-black/5 shadow-2xl">
                    {steps.map((step, idx) => (
                        <div key={idx} className="group relative p-16 md:p-20 bg-bg-primary hover:bg-black transition-all duration-1000 text-center anim-section-reveal">
                            <div className="relative z-10 space-y-10">
                                {/* Step Indicator */}
                                <div className="flex justify-center">
                                    <div className="w-20 h-20 rounded-full border border-gold/10 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/5 transition-all duration-1000">
                                        <span className="text-gold text-3xl font-bold italic opacity-40 group-hover:opacity-100">0{idx + 1}</span>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <h3 className="text-3xl font-bold text-black group-hover:text-gold transition-all duration-700 uppercase tracking-tighter">
                                        {step.title}
                                    </h3>
                                    
                                    <p className="text-black/60 text-base leading-relaxed font-medium group-hover:text-white/60 transition-colors duration-700">
                                        {step.desc}
                                    </p>
                                </div>

                                <div className="pt-10 opacity-0 group-hover:opacity-100 transition-all duration-1000 translate-y-4 group-hover:translate-y-0">
                                    <div className="w-10 h-px bg-gold mx-auto"></div>
                                </div>
                            </div>

                            {/* Floating Background Number */}
                            <div className="absolute -bottom-4 -left-4 opacity-[0.02] group-hover:opacity-[0.1] transition-opacity duration-1000 pointer-events-none">
                                <span className="text-9xl font-black italic text-black group-hover:text-white">0{idx + 1}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Connection Line decoration */}
                <div className="hidden md:flex justify-center mt-12 opacity-[0.1]">
                    <div className="w-[80%] h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
                </div>
            </div>
        </section>
    );
};

export default Protocol;
