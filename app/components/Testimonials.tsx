import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Chris Daniels",
      role: "Owner of Artisan Bakery Co.",
      quote: "This agency is a one-stop shop for all our branding and marketing needs. Their cohesive strategy gave us a fresh identity and improved our online visibility dramatically. Within weeks, we were ranking higher on search engines and seeing more engagement on social media."
    },
    {
      name: "Laura Simmons",
      role: "COO of EcoTrend",
      quote: "The development team exceeded our expectations! They delivered a fully customized, lightning-fast website ahead of schedule. The seamless user experience has not only delighted our customers but also boosted our conversion rates. Fantastic work!"
    }
  ];

  return (
    <section className="bg-[#111111] px-12 py-24">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex items-center gap-2 mb-8">
          <span className="text-[#FFA500] text-base tracking-wider font-medium">TESTIMONIALS</span>
          <span className="text-white/30 text-sm font-mono">/&gt;</span>
        </div>

        {/* Title */}
        <h2 className="text-[5rem] font-black tracking-tight leading-none mb-8 animate-gradient bg-gradient-to-r from-[#FFA500] via-white to-purple-600 text-transparent bg-clip-text bg-[size:200%]">
          VOICES OF TRUST
        </h2>

        {/* Description and Navigation */}
        <div className="flex justify-between items-start mb-24">
          <p className="text-[1.25rem] leading-[1.8] text-white/70 max-w-3xl">
            Don't just take my word for it—see what clients and collaborators have to 
            say about working with me. Their experiences reflect the dedication and 
            passion I bring to every project.
          </p>
          <div className="flex gap-4 ml-8">
            <button className="w-12 h-12 rounded-full border border-[#FFA500] flex items-center justify-center text-white hover:bg-[#FFA500] transition-colors">
              ←
            </button>
            <button className="w-12 h-12 rounded-full border border-[#FFA500] flex items-center justify-center text-white hover:bg-[#FFA500] transition-colors">
              →
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-2 gap-24">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative bg-[#1A1A1A] rounded-lg p-12 hover:bg-[#222222] transition-colors duration-300 group">
              {/* Name and Role */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-white/40 text-lg">
                  {testimonial.role}
                </p>
              </div>

              {/* Quote */}
              <div className="relative">
                <div className="w-1 h-full absolute left-0 top-0 bg-gradient-to-b from-[#FFA500] via-white to-purple-600" />
                <p className="text-white/80 text-lg leading-relaxed pl-8">
                  {testimonial.quote}
                </p>
              </div>

              {/* Quote Mark */}
              <div className="absolute top-12 right-12 text-[80px] text-[#222222] leading-none">
                "
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 