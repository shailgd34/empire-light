import React from 'react';

const StickyCTA = () => {
    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[2000] w-[90%] max-w-3xl md:w-auto">
            <div className="bg-black/95 backdrop-blur-2xl border border-white/10 p-2 rounded-full flex items-center justify-center gap-2 md:gap-4 shadow-[0_25px_60px_rgba(0,0,0,0.6)] anim-section-reveal">
                
                {/* Call Action */}
                <a href="tel:+447368428158" className="flex items-center gap-3 px-4 md:px-6 py-3 no-underline group transition-all duration-500 hover:bg-white/5 rounded-full">
                    <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all shadow-[0_0_20px_rgba(197,160,89,0.3)]">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="black"><path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z"/></svg>
                    </div>
                    <div className="hidden sm:block">
                        <span className="text-[0.6rem] text-white/40 block font-bold tracking-widest uppercase">Call Now</span>
                        <span className="text-white text-sm font-bold tracking-tight">07368 428 158</span>
                    </div>
                </a>

                {/* WhatsApp Action */}
                <a href="https://wa.me/447368428158" className="flex items-center gap-3 px-6 py-3 no-underline group transition-all duration-500">
                    <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center group-hover:scale-110 group-hover:-rotate-12 transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)]">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12.031 2c-5.506 0-9.969 4.462-9.969 9.969 0 1.761.462 3.473 1.336 4.988l-1.42 5.19 5.304-1.392c1.458.797 3.1 1.214 4.75 1.214h.005c5.503 0 9.968-4.463 9.968-9.97 0-2.665-1.037-5.168-2.923-7.054-1.886-1.886-4.389-2.924-7.051-2.924zm5.827 14.122c-.255.717-1.474 1.309-2.022 1.39-.49.073-.962.251-3.132-.647-2.775-1.149-4.568-3.974-4.707-4.159-.139-.186-1.134-1.507-1.134-2.876 0-1.369.719-2.042.974-2.321.255-.279.556-.349.742-.349h.534c.172 0 .406-.065.632.488.227.554.777 1.895.844 2.033.068.139.113.301.02.488-.093.186-.139.301-.278.464-.139.163-.293.364-.418.488-.139.139-.286.291-.123.57.163.279.724 1.192 1.555 1.927.831.735 1.536.963 1.838 1.103.302.139.477.116.653-.081.177-.197.756-.88 1.042-1.183.287-.302.573-.255.962-.116.39.139 2.474 1.168 2.898 1.378.423.21.704.31.808.488.104.178.104.595-.151 1.312z"/></svg>
                    </div>
                    <div className="hidden sm:block">
                        <span className="text-[0.6rem] text-white/40 block font-bold tracking-widest uppercase">WhatsApp</span>
                        <span className="text-white text-sm font-bold tracking-tight">Message Us</span>
                    </div>
                </a>

                {/* Book Now Action */}
                <div className="p-1">
                    <a href="#profiles" className="relative inline-flex items-center justify-center px-8 py-4 bg-gold text-black text-xs font-black uppercase tracking-widest rounded-full hover:bg-white hover:scale-105 transition-all duration-500 shadow-[0_10px_30px_rgba(197,160,89,0.4)] no-underline group overflow-hidden">
                        <span className="relative z-10">Book Now</span>
                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default StickyCTA;
