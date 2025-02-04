import React from 'react';

export default function CallToAction() {
  return (
    <section id="section-contact" className="bg-[#111111] relative overflow-hidden py-20 md:py-32 px-4 md:px-0">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-[1fr,1fr] gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-[2rem] md:text-[3.5rem] font-black tracking-tight leading-[1.1]
              animate-gradient bg-gradient-to-r from-[#FFA500] via-white to-[#FFA500]
              bg-[size:200%] text-transparent bg-clip-text"
            >
              TAKE THE
              <br />
              NEXT STEP
            </h2>
            
            <p className="text-base md:text-lg text-white/70 leading-relaxed">
              Ready to bring your vision to life? Let's connect and discuss how we can 
              work together to achieve your goals. Your next big step starts here.
            </p>

            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFA500] text-black rounded-lg font-medium 
              hover:bg-[#FFA500]/90 transition-all duration-300"
            >
              Get in Touch
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right Animated Elements - Only show on desktop */}
          <div className="hidden md:block relative h-[400px]">
            {/* Large Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 
              border-2 border-[#FFA500]/20 rounded-full animate-spin-slow">
            </div>

            {/* Medium Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 
              border-2 border-[#FFA500]/30 rounded-full animate-spin-reverse">
            </div>

            {/* Small Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 
              border-2 border-[#FFA500]/40 rounded-full animate-pulse">
            </div>

            {/* Icons */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
              flex items-center justify-center">
              <div className="bg-[#FFA500] p-6 rounded-2xl shadow-lg animate-float">
                <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            {/* Floating Dots */}
            <div className="absolute inset-0">
              {[...Array(6)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-2 h-2 bg-[#FFA500]/40 rounded-full animate-float"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.5}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 