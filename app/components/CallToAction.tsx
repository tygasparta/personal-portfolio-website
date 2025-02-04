import React from 'react';

export default function CallToAction() {
  return (
    <section id="section-contact" className="bg-[#111111] relative overflow-hidden py-20 md:py-32 px-4 md:px-0">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-[1fr,1fr] gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-[2rem] md:text-[3.5rem] font-black tracking-tight leading-[1.1]
              animate-gradient bg-gradient-to-r from-[#FFA500] via-white to-[#FFA500]
              bg-[size:200%] text-transparent bg-clip-text"
            >
              TAKE THE NEXT STEP
            </h2>
            
            <p className="text-base md:text-lg text-white/70 leading-relaxed">
              Ready to bring your vision to life? Let&apos;s connect and discuss how we can 
              work together to achieve your goals.
            </p>

            <a 
              href="#contact" 
              className="inline-block px-8 py-4 bg-[#FFA500] text-black rounded-lg font-medium 
              hover:bg-[#FFA500]/90 transition-all duration-300 text-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 