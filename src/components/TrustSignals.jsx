import React from 'react';

const TrustSignals = () => {
    const signals = [
        { label: 'Verified Profiles', value: '100%', sub: 'Digital Identity Checked' },
        { label: 'Agency Longevity', value: '12', sub: 'Years of Northern Excellence' },
        { label: 'Privacy Index', value: 'Elite', sub: 'Tier-1 Data Encryption' },
        { label: 'Real-Time Support', value: '24/7', sub: 'Concierge Always Active' }
    ];

    return (
        <section className="bg-charcoal py-10 md:py-14 border-y border-white/5 relative overflow-hidden" id="trust">
            {/* Background Branding */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02] select-none">
                <span className="text-[30vw] font-black uppercase text-white leading-none tracking-tighter">Verified</span>
            </div>

            <div className="container-wide relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-1">
                    {signals.map((signal, idx) => (
                        <div key={idx} className="group relative p-6 md:p-8 text-center lg:text-left hover:bg-white/[0.02] transition-colors duration-1000 anim-section-reveal">
                            <div className="space-y-2">
                                <div className="space-y-0">
                                    <span className="text-gold text-5xl md:text-6xl font-black uppercase tracking-tighter block leading-none mb-1">
                                        {signal.value}
                                    </span>
                                    <span className="text-white text-[0.55rem] font-black uppercase tracking-[0.4em] block">
                                        {signal.label}
                                    </span>
                                </div>
                                <div className="w-10 h-px bg-white/10 mx-auto lg:mx-0 group-hover:w-full group-hover:bg-gold transition-all duration-1000 mt-2 mb-2"></div>
                                <p className="text-white/20 text-[0.45rem] font-bold uppercase tracking-[0.2em] italic">
                                    {signal.sub}
                                </p>
                            </div>

                            {/* Vertical Divider for Desktop */}
                            {idx < signals.length - 1 && (
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-1/2 w-px bg-white/5 hidden lg:block"></div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Verified Badges Footer */}
                <div className="mt-8 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-x-12 gap-y-4 grayscale opacity-20 hover:opacity-100 transition-all duration-1000 anim-section-reveal">
                    <span className="text-[0.55rem] uppercase font-black tracking-[0.5em] text-white">UK Registry Certified</span>
                    <span className="text-[0.55rem] uppercase font-black tracking-[0.5em] text-white">GDPR Secure</span>
                    <span className="text-[0.55rem] uppercase font-black tracking-[0.5em] text-white">Verified Identities</span>
                    <span className="text-[0.55rem] uppercase font-black tracking-[0.5em] text-white">Northern Hub Elite</span>
                </div>
            </div>
        </section>
    );
};

export default TrustSignals;
