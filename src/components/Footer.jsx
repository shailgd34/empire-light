import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-24 pb-12 border-t border-white/5" id="footer">
            <div className="container-wide">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-12 mb-20">
                    
                    {/* Brand Column */}
                    <div className="space-y-8">
                        <img src="/images/logo.webp" alt="Empire" className="h-10 w-auto brightness-0 invert" />
                        <p className="text-white/40 text-sm font-medium leading-relaxed max-w-xs">
                            The premier destination for distinguished companionship across South Yorkshire and beyond. Absolute discretion guaranteed.
                        </p>
                        <div className="flex gap-6">
                            {['Instagram', 'Twitter', 'WhatsApp'].map(social => (
                                <a key={social} href="#" className="text-white/30 hover:text-gold transition-colors text-xs font-bold uppercase tracking-widest no-underline">{social}</a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Column */}
                    <div className="space-y-8">
                        <h4 className="text-gold text-[0.6rem] font-bold uppercase tracking-[0.3em]">Quick Navigation</h4>
                        <ul className="space-y-4 list-none p-0">
                            {[
                                { name: 'Home', link: '/' },
                                { name: 'Available Companions', link: '#profiles' },
                                { name: 'The Empire Standard', link: '#about' },
                                { name: 'Booking Protocol', link: '#protocol' },
                                { name: 'Help & FAQ', link: '#faq' }
                            ].map(item => (
                                <li key={item.name}>
                                    <a href={item.link} className="text-white/60 hover:text-white transition-all text-sm font-bold no-underline flex items-center gap-2 group">
                                        <div className="w-0 h-px bg-gold group-hover:w-4 transition-all duration-500"></div>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Hubs Column */}
                    <div className="space-y-8">
                        <h4 className="text-gold text-[0.6rem] font-bold uppercase tracking-[0.3em]">Elite Hubs</h4>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                            {[
                                'Sheffield', 'Leeds', 'Nottingham', 'Doncaster',
                                'Rotherham', 'Barnsley', 'Chesterfield', 'Wakefield'
                            ].map(city => (
                                <span key={city} className="text-white/40 text-xs font-bold hover:text-white transition-colors cursor-default">{city}</span>
                            ))}
                        </div>
                    </div>

                    {/* Support Column */}
                    <div className="space-y-8">
                        <h4 className="text-gold text-[0.6rem] font-bold uppercase tracking-[0.3em]">Private Concierge</h4>
                        <div className="space-y-6">
                            <div className="space-y-1">
                                <span className="text-white/30 text-[0.6rem] font-bold uppercase">Direct Inquiry</span>
                                <a href="tel:+447368428158" className="text-white text-lg font-bold block no-underline hover:text-gold transition-colors">07368 428 158</a>
                            </div>
                            <div className="space-y-1">
                                <span className="text-white/30 text-[0.6rem] font-bold uppercase">Operating Hours</span>
                                <p className="text-gold text-xs font-bold">24 Hours / 7 Days a Week</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <p className="text-white/20 text-[0.6rem] font-bold uppercase tracking-widest">
                            © 2026 Empire Escorts. All Rights Reserved.
                        </p>
                        <div className="flex gap-6">
                            <a href="/terms" className="text-white/20 hover:text-white transition-colors text-[0.6rem] font-bold uppercase no-underline">Terms</a>
                            <a href="/privacy" className="text-white/20 hover:text-white transition-colors text-[0.6rem] font-bold uppercase no-underline">Privacy</a>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-white/10">
                        <span className="text-[0.6rem] font-bold uppercase tracking-[0.4em]">Southern Excellence</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
