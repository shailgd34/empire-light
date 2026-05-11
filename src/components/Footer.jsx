import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-bg-primary pt-16 pb-32 border-t border-black/5" id="footer">
            <div className="container-wide">
                <div className="flex flex-col items-center text-center space-y-12">
                    {/* Primary Branding */}
                    <div className="space-y-6 anim-section-reveal">
                        <img src="/images/logo.webp" alt="Empire Escorts" className="h-12 md:h-16 w-auto mx-auto" />
                        <p className="text-black/60 text-sm font-bold max-w-sm mx-auto">
                            Real Girls, Real Profiles. Sheffield Based.
                        </p>
                    </div>

                    {/* Navigation Links (Sync Verbatim) */}
                    <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 anim-section-reveal">
                        <a href="/" className="text-base font-bold text-black hover:text-gold transition-colors no-underline">Home</a>
                        <a href="#profiles" className="text-base font-bold text-black hover:text-gold transition-colors no-underline">Our Girls</a>
                        <a href="/blogs" className="text-base font-bold text-black hover:text-gold transition-colors no-underline">Blogs</a>
                        <a href="/contact" className="text-base font-bold text-black hover:text-gold transition-colors no-underline">Contact Us</a>
                        <a href="/join" className="text-base font-bold text-black hover:text-gold transition-colors no-underline">Join Us</a>
                        <a href="#explore" className="text-base font-bold text-black hover:text-gold transition-colors no-underline">Help & FAQ</a>
                    </div>

                    {/* Legal & Copyright */}
                    <div className="w-full pt-12 border-t border-black/5 space-y-8 anim-section-reveal">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            <p className="text-sm text-black/60 font-bold mb-4">
                            © 2026 Empire Escorts. All Rights Reserved. Northern Excellence.
                        </p>
                        <div className="flex justify-center gap-8">
                            <a href="/terms" className="text-xs text-black/40 hover:text-black transition-colors no-underline">Terms of Service</a>
                            <a href="/privacy" className="text-xs text-black/40 hover:text-black transition-colors no-underline">Privacy Policy</a>
                        </div>
                        </div>

                        {/* Agency Watermark */}
                        <div className="opacity-[0.02] pointer-events-none select-none">
                            <span className="text-[12vw] font-bold uppercase text-black leading-none tracking-tighter">Empire</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
