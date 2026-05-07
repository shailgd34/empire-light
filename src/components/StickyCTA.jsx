import React from 'react';

const StickyCTA = () => {
    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[2000] w-[90%] max-w-xl md:w-auto">
            <div className="bg-black/80 backdrop-blur-2xl border border-white/10 p-2 rounded-full flex items-center justify-between gap-4 shadow-2xl">
                <a href="tel:+447368428158" className="flex items-center gap-3 px-6 py-3 no-underline group">
                    <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="black"><path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z"/></svg>
                    </div>
                    <div className="hidden md:block">
                        <span className="text-[0.45rem] uppercase tracking-widest text-white/40 block font-bold">Secure Line</span>
                        <span className="text-white text-xs font-bold">07368 428 158</span>
                    </div>
                </a>

                <div className="h-8 w-px bg-white/10 hidden md:block"></div>

                <div className="flex gap-2 p-1">
                    <a href="#profiles" className="px-6 py-3 bg-gold text-black text-[0.55rem] font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors no-underline">
                        Book Now
                    </a>
                    <a href="#join" className="px-6 py-3 bg-white/5 border border-white/10 text-white text-[0.55rem] font-bold uppercase tracking-widest rounded-full hover:bg-gold hover:text-black transition-all no-underline">
                        Join Us
                    </a>
                </div>
            </div>
        </div>
    );
};

export default StickyCTA;
