import React from 'react';

const Protocol = () => {
    const steps = [
        { 
            title: 'Select Your Companion', 
            desc: 'Browse our curated portfolio of verified companions. Each profile features authentic photography and detailed attributes to ensure an informed choice.',
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        },
        { 
            title: 'Discreet Reservation', 
            desc: 'Contact our private concierge via Call or WhatsApp. We prioritize your privacy above all, handling every detail with absolute discretion and professionalism.',
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        },
        { 
            title: 'Exceptional Experience', 
            desc: 'Relax as your chosen companion arrives at your preferred location. We ensure a seamless transition from first inquiry to an unforgettable encounter.',
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        }
    ];

    return (
        <section className="bg-black text-white py-24 md:py-32 relative overflow-hidden" id="protocol">
            {/* Cinematic Background Elements */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                <span className="text-[30vw] font-black absolute -top-20 -left-20 leading-none rotate-12">Protocol</span>
            </div>

            <div className="container-wide relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    
                    {/* Left: Heading Content */}
                    <div className="lg:col-span-5 space-y-10 anim-section-reveal">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-px bg-gold"></div>
                                <span className="text-gold font-bold text-xs tracking-[0.4em] uppercase">The Empire Journey</span>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-bold leading-[1.1] text-white">
                                How To <span className="italic text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>Book</span>
                            </h2>
                        </div>
                        
                        <p className="text-white/50 text-lg md:text-xl font-medium leading-relaxed max-w-md italic border-l-4 border-gold pl-8">
                            Our booking process is designed to be as seamless and discreet as the experience itself.
                        </p>

                        <div className="pt-6">
                            <a href="tel:+447368428158" className="inline-flex items-center gap-6 group no-underline">
                                <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center text-black group-hover:scale-110 transition-transform duration-500">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z"/></svg>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[0.6rem] text-white/40 block font-bold tracking-widest uppercase">Direct Assistance</span>
                                    <span className="text-white text-xl font-bold border-b border-white/10 group-hover:border-gold transition-all">07368 428 158</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right: Step Interaction */}
                    <div className="lg:col-span-7 space-y-4">
                        {steps.map((step, idx) => (
                            <div key={idx} className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/5 p-8 md:p-12 hover:bg-white/[0.06] transition-all duration-700 anim-section-reveal">
                                <div className="flex flex-col md:flex-row gap-8 md:items-center">
                                    {/* Number & Icon */}
                                    <div className="flex items-center gap-6">
                                        <span className="text-4xl md:text-6xl font-black italic text-white/10 group-hover:text-gold transition-colors duration-700 leading-none">0{idx + 1}</span>
                                        <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all duration-700">
                                            {step.icon}
                                        </div>
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="flex-1 space-y-2">
                                        <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-700">{step.title}</h3>
                                        <p className="text-white/40 text-sm md:text-base leading-relaxed font-medium group-hover:text-white/70 transition-colors duration-700">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Decorative Progress Line */}
                                {idx < steps.length - 1 && (
                                    <div className="hidden lg:block absolute bottom-[-20px] left-20 w-px h-10 bg-gradient-to-b from-gold/30 to-transparent z-0"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Protocol;
