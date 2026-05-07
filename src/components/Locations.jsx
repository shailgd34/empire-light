import React, { useState } from 'react';

const Locations = () => {
    const [openCity, setOpenCity] = useState('Sheffield');

    const locationData = [
        {
            city: 'Sheffield',
            tags: [
                'Bisexual Escort in Sheffield', 'Black Escorts in Sheffield', 'British Escorts Agency Sheffield',
                'British Escorts Sheffield', 'Cheap Escorts in Sheffield', 'English Escorts Agency Sheffield',
                'English Escorts Sheffield', 'Escort Agencies in Sheffield', 'Escort Agency in Sheffield',
                'Escort girl in Sheffield', 'Escort Girls in Sheffield', 'Escort Service in Sheffield',
                'Escort Services in Sheffield', 'Escorts Agency Sheffield', 'Escorts Sheffield'
            ]
        },
        {
            city: 'Leeds',
            tags: [
                'Elite Escorts Leeds', 'Leeds Escort Agency', 'Top Rated Escorts Leeds', 'Private Escorts Leeds',
                'Luxury Companion Leeds', 'Leeds City Escorts', 'Outcall Escorts Leeds', 'Incall Escorts Leeds'
            ]
        },
        {
            city: 'Doncaster',
            tags: [
                'Doncaster Escort Services', 'Agency Doncaster', 'Doncaster Private Companions', 'Elite Doncaster Escorts',
                'Doncaster Outcalls', 'Doncaster Incalls', 'Verified Escorts Doncaster'
            ]
        },
        {
            city: 'Barnsley',
            tags: [
                'Barnsley Escorts', 'Agency in Barnsley', 'Elite Barnsley Companions', 'Private Barnsley Escorts',
                'Barnsley Escort Services', 'Top Rated Barnsley Escorts'
            ]
        },
        {
            city: 'Chesterfield',
            tags: [
                'Chesterfield Escorts', 'Chesterfield Agency', 'Private Escorts Chesterfield', 'Luxury Chesterfield Escorts',
                'Chesterfield Escort Services', 'Elite Chesterfield Companions'
            ]
        },
        {
            city: 'Rotherham',
            tags: [
                'Rotherham Escorts', 'Rotherham Agency', 'Elite Rotherham Escorts', 'Private Escorts Rotherham',
                'Rotherham Escort Services', 'Top Rated Rotherham Escorts'
            ]
        }
    ];

    return (
        <section className="bg-bg-primary py-12 md:py-20" id="locations">
            <div className="container-wide">
                <div className="mb-12 anim-section-reveal">
                    <span className="text-gold uppercase tracking-[0.5em] font-bold text-[0.55rem] block mb-2">Registry Expansion</span>
                    <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-none text-black">Northern <br /> Territory Index</h2>
                </div>

                <div className="space-y-4">
                    {locationData.map((loc, idx) => (
                        <div key={idx} className="anim-section-reveal border border-black/5 bg-bg-secondary/40 overflow-hidden transition-all duration-700">
                            <button 
                                onClick={() => setOpenCity(openCity === loc.city ? null : loc.city)}
                                className={`w-full flex justify-between items-center p-6 md:px-10 md:py-8 text-left transition-all duration-500 ${openCity === loc.city ? 'bg-black/5 border-b border-gold/20' : 'hover:bg-black/[0.02]'}`}
                            >
                                <h3 className={`text-xl md:text-2xl font-bold uppercase tracking-tighter transition-colors duration-500 ${openCity === loc.city ? 'text-gold' : 'text-black/60'}`}>
                                    Find Escorts in {loc.city}
                                </h3>
                                <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 ${openCity === loc.city ? 'border-gold text-gold rotate-45' : 'border-black/10 text-black/40'}`}>
                                    <span className="text-2xl font-light">+</span>
                                </div>
                            </button>
                            
                            <div className={`transition-all duration-700 ease-in-out ${openCity === loc.city ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="p-8 md:p-12">
                                    <div className="flex flex-wrap gap-3">
                                        {loc.tags.map((tag, tagIdx) => (
                                            <a 
                                                key={tagIdx} 
                                                href="#" 
                                                className="px-6 py-3 border border-black/10 rounded-full text-[0.6rem] md:text-[0.65rem] uppercase font-bold tracking-widest text-black/40 hover:border-gold hover:text-gold hover:bg-gold/5 transition-all duration-300 no-underline"
                                            >
                                                {tag}
                                            </a>
                                        ))}
                                    </div>
                                    <div className="mt-10 flex justify-end">
                                        <button className="text-[0.5rem] uppercase tracking-[0.4em] text-gold font-bold border-b border-gold/40 pb-1 hover:text-black hover:border-black transition-all">
                                            Load More Services
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Locations;
