import React from 'react';

const Partners = () => {
    return (
        <section className="bg-black py-12 md:py-16 border-t border-white/5" id="partners">
            <div className="container-wide">
                <div className="flex flex-col items-center justify-center space-y-8 anim-section-reveal">
                    {/* Section Header */}
                    <div className="text-center space-y-2">
                        <span className="text-gold uppercase tracking-[0.5em] font-bold text-[0.5rem] block">Affiliates</span>
                        <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">Strategic Partners</h2>
                    </div>

                    {/* Partner Banner Container */}
                    <div className="w-full max-w-4xl mx-auto p-4 md:p-8 bg-charcoal/20 border border-white/5 hover:border-gold/20 transition-all duration-1000 group overflow-hidden relative">
                        {/* Decorative Corners */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold/40 group-hover:w-full group-hover:h-full transition-all duration-1000 pointer-events-none"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold/40 group-hover:w-full group-hover:h-full transition-all duration-1000 pointer-events-none"></div>
                        
                        <a href="https://seductiveseekers.com" target="_blank" rel="noopener noreferrer" className="block relative z-10">
                            <img 
                                src="/images/seductive-seekers-exchange-link-banner-1024x256.webp" 
                                alt="Seductive Seekers Partner" 
                                className="w-full h-auto grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 shadow-2xl"
                            />
                        </a>
                    </div>

                    {/* Partner Verification Tag */}
                    <div className="pt-4 opacity-20">
                        <span className="text-[0.45rem] uppercase tracking-[0.6em] font-black text-white">Verified Exchange Partner</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
