import React from 'react';

const SEOContent = () => {
    const keyPoints = [
        { title: 'Absolute Discretion', desc: 'We never share your personal details. All bookings are strictly private and confidential.' },
        { title: 'Under 1 Hour Arrival', desc: 'For local Sheffield bookings, we aim to have your chosen girl with you in less than 60 minutes.' },
        { title: '100% Real Pictures', desc: 'Every photo is verified. The girl you see on our website is the girl you will meet.' }
    ];

    return (
        <section className="bg-bg-primary py-16 md:py-24 border-t border-black/5" id="agency-details">
            <div className="container-wide">
                <div className="max-w-6xl mx-auto space-y-16 md:space-y-20 anim-section-reveal">
                    
                    {/* Main Section Heading */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                        <div className="lg:col-span-8 space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-px bg-gold/30"></div>
                                <span className="text-gold font-bold text-xs tracking-[0.3em] uppercase block">Reliable Sheffield Agency</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold text-black leading-tight">
                                Hire Escorts in Sheffield with an Agency <span className="italic text-transparent" style={{ WebkitTextStroke: '1px rgba(0,0,0,0.25)' }}>You Can Rely On</span>
                            </h2>
                        </div>
                        <div className="lg:col-span-4 flex lg:justify-end">
                            <div className="w-16 h-px bg-gold/30"></div>
                        </div>
                    </div>

                    {/* High-End Feature Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {keyPoints.map((point, idx) => (
                            <div key={idx} className="space-y-4 group">
                                <div className="flex items-center gap-4">
                                    <span className="text-gold text-xl font-bold italic">0{idx + 1}</span>
                                    <div className="h-px flex-1 bg-black/5 group-hover:bg-gold/30 transition-all duration-700"></div>
                                </div>
                                <h3 className="text-lg font-bold text-black uppercase tracking-wider">{point.title}</h3>
                                <p className="text-black/60 text-sm leading-relaxed font-medium">
                                    {point.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Detailed Content Block */}
                    <div className="bg-bg-secondary p-10 md:p-14 shadow-xl border border-black/5 relative overflow-hidden">
                        {/* Decorative background element */}
                        <div className="absolute top-0 right-0 p-6 opacity-[0.02] select-none pointer-events-none">
                            <svg width="150" height="150" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
                            <div className="space-y-6">
                                <h4 className="text-xl font-bold text-black italic">Transparency & Trust</h4>
                                <p className="text-black/70 text-base leading-relaxed font-medium italic border-l-4 border-gold pl-6">
                                    "Empire Escorts provides a platform designed to be simple and transparent, helping users explore local profiles and make informed choices."
                                </p>
                                <p className="text-black/60 text-sm leading-relaxed">
                                    Indulge in a secure and memorable experience with our individually vetted and ID checked companions. We operate 24 hours a day, 7 days a week, ensuring that our concierge is always available to facilitate your inquiry.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <h4 className="text-xl font-bold text-black italic">Rapid Outcall Service</h4>
                                <p className="text-black/60 text-sm leading-relaxed">
                                    Once you have confirmed your booking with our concierge, we aim to have your selected companion with you in under an hour for local Sheffield appointments. We specialize in discreet outcall visits to all major luxury hotels and private residences.
                                </p>
                                <div className="pt-4 grid grid-cols-2 gap-8">
                                    <div className="space-y-1">
                                        <span className="text-black font-bold text-2xl block">24/7</span>
                                        <span className="text-black/40 text-[0.6rem] font-bold uppercase tracking-widest">Available</span>
                                    </div>
                                    <div className="space-y-1">
                                        <span className="text-black font-bold text-2xl block">100%</span>
                                        <span className="text-black/40 text-[0.6rem] font-bold uppercase tracking-widest">Discreet</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Minimalist Regional Appendix */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="text-black/20 text-[0.6rem] font-bold uppercase tracking-[0.4em]">Regional Hubs & Coverage</span>
                            <div className="h-px flex-1 bg-black/5"></div>
                        </div>
                        <div className="flex flex-wrap gap-x-8 gap-y-3">
                            {[
                                'Sheffield Escorts', 'Leeds Escorts', 'Nottingham Escorts', 
                                'Doncaster Escorts', 'Rotherham Escorts', 'Barnsley Escorts',
                                'Chesterfield Escorts', 'Worksop Escorts', 'Wakefield Escorts',
                                'Bradford Escorts', 'Huddersfield Escorts', 'Yorkshire Escorts'
                            ].map((tag) => (
                                <span key={tag} className="text-[0.6rem] font-bold text-black/30 hover:text-gold transition-colors uppercase tracking-widest cursor-default">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="text-center pt-4">
                        <p className="text-black/30 text-[0.55rem] font-bold tracking-[0.2em] uppercase">
                            Empire Escorts Agency | Real Girls, Real Profiles | Established 2012
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SEOContent;
