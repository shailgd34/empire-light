import React from 'react';

const ValueProp = () => {
    return (
        <section className="bg-black py-12 md:py-20 relative overflow-hidden" id="why-us">
            <div className="container-wide">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Text & Info Grid */}
                    <div className="space-y-8 anim-section-reveal">
                        <div className="space-y-4">
                            <span className="text-gold uppercase tracking-[0.6em] font-bold text-[0.55rem] block">The Mandate / Vol. 24</span>
                            <h2 className="text-4xl md:text-7xl font-black uppercase leading-[0.85] tracking-tighter">
                                Excellence <br /> <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>Reimagined</span>
                            </h2>
                        </div>
                        
                        <p className="text-ivory/60 text-lg leading-relaxed italic font-light tracking-wide max-w-xl">
                            Empire Escort Agency is a South Yorkshire based agency that aims to deliver a high class service to its clients and a secure and rewarding work environment.
                        </p>

                        {/* 2-Column Info Grid */}
                        <div className="grid grid-cols-2 gap-8 pt-4 border-t border-white/5">
                            <div className="space-y-2">
                                <span className="text-gold text-[0.5rem] font-black uppercase tracking-widest block">The Vision</span>
                                <p className="text-white/40 text-xs leading-relaxed uppercase font-bold tracking-tight">
                                    To provide a safe, discreet environment for both our companions and distinguished clientele.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <span className="text-gold text-[0.5rem] font-black uppercase tracking-widest block">The Standard</span>
                                <p className="text-white/40 text-xs leading-relaxed uppercase font-bold tracking-tight">
                                    Rigorous vetting and a commitment to absolute privacy across all northern territories.
                                </p>
                            </div>
                        </div>

                        <div className="pt-4">
                            <a href="#contact" className="group relative inline-block no-underline">
                                <span className="relative z-10 px-10 py-4 border border-white/10 text-white text-[0.6rem] font-black uppercase tracking-[0.4em] group-hover:text-black transition-colors duration-500">
                                    Agency Protocols
                                </span>
                                <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Overlapping Images (Editorial Style) */}
                    <div className="relative anim-section-reveal h-[500px] md:h-[600px]">
                        {/* Background Image (Large) */}
                        <div className="absolute top-0 right-0 w-[80%] aspect-[3/4] border border-white/5 bg-charcoal overflow-hidden shadow-2xl">
                            <img 
                                src="/images/pexels-noirgenesis-5953288.jpg" 
                                alt="London HQ" 
                                className="w-full h-full object-cover grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
                            />
                        </div>

                        {/* Overlapping Image (Smaller/Foreground) */}
                        <div className="absolute bottom-0 left-0 w-[55%] aspect-[3/4] border-4 border-black bg-charcoal z-10 shadow-2xl overflow-hidden translate-x-4 -translate-y-12">
                            <img 
                                src="/images/pexels-vika-glitter-392079-30219287.jpg" 
                                alt="Empire Companion" 
                                className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
                            />
                            {/* Decorative Badge */}
                            <div className="absolute top-4 right-4 w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center backdrop-blur-md">
                                <span className="text-gold text-[0.5rem] font-black">EST.12</span>
                            </div>
                        </div>

                        {/* Floating Text Element */}
                        <div className="absolute top-[10%] left-0 z-20 pointer-events-none">
                            <span className="text-[10vw] font-black text-white/5 uppercase leading-none select-none">Prestige</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValueProp;
