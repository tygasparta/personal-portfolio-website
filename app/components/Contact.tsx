import React from 'react';

export default function Contact() {
  return (
    <section className="bg-[#111111] px-12 py-32">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex items-center gap-2 mb-12">
          <span className="text-[#FFA500] text-base tracking-wider font-medium">CONTACT</span>
          <span className="text-white/30 text-sm font-mono">/&gt;</span>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl">
          <h2 className="text-[5.5rem] font-black tracking-tight leading-none mb-8 animate-gradient bg-gradient-to-r from-[#FFA500] via-white to-purple-600 text-transparent bg-clip-text bg-[size:200%]">
            TAKE THE NEXT STEP
          </h2>
          
          <p className="text-[1.25rem] leading-[1.8] text-white/70 mb-12 max-w-2xl">
            Ready to bring your vision to life? Let's connect and discuss how we can work 
            together to achieve your goals. Your next big step starts here.
          </p>

          <a 
            href="#" 
            className="inline-block px-8 py-4 bg-[#FFA500] text-black rounded-lg text-lg font-medium hover:bg-[#FFA500]/90 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
} 