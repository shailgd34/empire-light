import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="bg-bg-primary py-16 md:py-24 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none">
                <span className="text-[25vw] font-bold text-black absolute -bottom-10 -right-10 leading-none rotate-6">Secure</span>
            </div>

            <div className="container-wide relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                    
                    {/* Left: Direct Contact */}
                    <div className="space-y-12 anim-section-reveal">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-px bg-gold/30"></div>
                                <span className="text-gold font-bold text-xs tracking-[0.3em] uppercase">Contact Our Concierge</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold leading-tight text-black">
                                Book Your <span className="text-transparent italic" style={{ WebkitTextStroke: '1.5px rgba(0,0,0,0.25)' }}>Companion.</span>
                            </h2>
                        </div>

                        <div className="space-y-10">
                            <div className="space-y-4">
                                <p className="text-black/80 text-lg md:text-xl font-bold italic leading-relaxed border-l-4 border-gold pl-8">
                                    Our team is available 24 hours a day, 7 days a week. We pride ourselves on 100% discretion and privacy.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-6 border-t border-black/10">
                                <div className="space-y-3">
                                    <span className="text-gold text-[0.6rem] font-bold uppercase tracking-widest">Call or Text</span>
                                    <a href="tel:+447368428158" className="text-xl md:text-2xl text-black font-bold hover:text-gold transition-all duration-500 no-underline block tracking-tight">07368 428 158</a>
                                </div>
                                <div className="space-y-3">
                                    <span className="text-gold text-[0.6rem] font-bold uppercase tracking-widest">WhatsApp</span>
                                    <a href="https://wa.me/447368428158" className="text-xl md:text-2xl text-black font-bold hover:text-gold transition-all duration-500 no-underline block tracking-tight">Secure Message</a>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 text-black/30">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                            <span className="text-[0.6rem] font-bold uppercase tracking-widest">End-to-End Encrypted Inquiry</span>
                        </div>
                    </div>

                    {/* Right: Premium Form */}
                    <div className="bg-bg-secondary p-10 md:p-14 shadow-2xl border border-black/5 relative overflow-hidden group anim-section-reveal">
                        {/* Decorative Gradient */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 blur-3xl rounded-full"></div>
                        
                        <div className="relative z-10 space-y-10">
                            <div className="space-y-3">
                                <h3 className="text-2xl font-bold text-black italic">Booking Inquiry</h3>
                                <p className="text-black/50 text-xs font-medium uppercase tracking-wider">Please fill in your details below.</p>
                            </div>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[0.6rem] font-bold text-black/40 uppercase tracking-widest">Your Name</label>
                                        <input type="text" className="w-full bg-black/5 border-b border-black/10 py-3 text-black text-base focus:outline-none focus:border-gold transition-all bg-transparent" placeholder="Full Name" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[0.6rem] font-bold text-black/40 uppercase tracking-widest">Contact Info</label>
                                        <input type="text" className="w-full bg-black/5 border-b border-black/10 py-3 text-black text-base focus:outline-none focus:border-gold transition-all bg-transparent" placeholder="Phone or Email" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[0.6rem] font-bold text-black/40 uppercase tracking-widest">Preferred Companion & Location</label>
                                    <textarea className="w-full bg-black/5 border-b border-black/10 py-3 text-black text-base focus:outline-none focus:border-gold transition-all bg-transparent h-24 resize-none" placeholder="Who, where, and at what time?"></textarea>
                                </div>
                                <div className="pt-4">
                                    <button className="group relative w-full overflow-hidden bg-black text-white py-5 text-xs font-bold tracking-widest uppercase transition-all duration-700">
                                        <span className="relative z-10">Request Private Support</span>
                                        <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
