import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="bg-bg-primary py-24 md:py-32 relative overflow-hidden" id="contact">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none">
                <span className="text-[35vw] font-bold text-black absolute -bottom-20 -right-20 leading-none rotate-6">Secure</span>
            </div>

            <div className="container-wide relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    
                    {/* Left: Direct Contact */}
                    <div className="space-y-16 anim-section-reveal">
                        <div className="space-y-6">
                            <span className="text-gold font-bold text-base block tracking-widest uppercase">Contact Our Concierge</span>
                            <h2 className="text-5xl md:text-8xl font-bold leading-[0.85] text-black">
                                Book Your <br /> <span className="text-transparent italic" style={{ WebkitTextStroke: '1.5px rgba(0,0,0,0.1)' }}>Companion.</span>
                            </h2>
                        </div>

                        <div className="space-y-12">
                            <div className="space-y-4">
                                <p className="text-black/80 text-xl md:text-2xl font-bold italic leading-relaxed border-l-4 border-gold pl-10">
                                    Our team is available 24 hours a day, 7 days a week. We pride ourselves on 100% discretion and privacy.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-black/10">
                                <div className="space-y-4">
                                    <span className="text-gold text-xs font-bold uppercase tracking-widest">Call or Text</span>
                                    <a href="tel:+447368428158" className="text-2xl md:text-3xl text-black font-bold hover:text-gold transition-all duration-500 no-underline block">07368 428 158</a>
                                </div>
                                <div className="space-y-4">
                                    <span className="text-gold text-xs font-bold uppercase tracking-widest">WhatsApp</span>
                                    <a href="https://wa.me/447368428158" className="text-2xl md:text-3xl text-black font-bold hover:text-gold transition-all duration-500 no-underline block">Secure Message</a>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-black/30">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                            <span className="text-xs font-bold uppercase tracking-widest">End-to-End Encrypted Inquiry</span>
                        </div>
                    </div>

                    {/* Right: Premium Form */}
                    <div className="bg-bg-secondary p-12 md:p-20 shadow-2xl border border-black/5 relative overflow-hidden group anim-section-reveal">
                        {/* Decorative Gradient */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl rounded-full"></div>
                        
                        <div className="relative z-10 space-y-12">
                            <div className="space-y-4">
                                <h3 className="text-3xl font-bold text-black italic">Booking Inquiry</h3>
                                <p className="text-black/50 text-sm font-medium">Please fill in your details and requirements below.</p>
                            </div>

                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-xs font-bold text-black/40 uppercase tracking-widest">Your Name</label>
                                        <input type="text" className="w-full bg-black/5 border-b border-black/10 py-4 text-black text-lg focus:outline-none focus:border-gold transition-all bg-transparent" placeholder="Full Name" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-xs font-bold text-black/40 uppercase tracking-widest">Contact Info</label>
                                        <input type="text" className="w-full bg-black/5 border-b border-black/10 py-4 text-black text-lg focus:outline-none focus:border-gold transition-all bg-transparent" placeholder="Phone or Email" />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-bold text-black/40 uppercase tracking-widest">Preferred Companion & Location</label>
                                    <textarea className="w-full bg-black/5 border-b border-black/10 py-4 text-black text-lg focus:outline-none focus:border-gold transition-all bg-transparent h-32 resize-none" placeholder="Who would you like to see, where, and at what time?"></textarea>
                                </div>
                                <div className="pt-6">
                                    <button className="group relative w-full overflow-hidden bg-black text-white py-6 text-base font-bold tracking-widest uppercase transition-all duration-700">
                                        <span className="relative z-10">Send Secure Message</span>
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
