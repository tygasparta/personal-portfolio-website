import React from 'react';

export default function About() {
  const stats = [
    { number: "10", symbol: "+", label: "Years of Exp." },
    { number: "50", symbol: "+", label: "Satisfied Clients" },
    { number: "100", symbol: "+", label: "Projects Done" },
    { number: "100", symbol: "%", label: "Positive Reviews" },
  ];

  return (
    <section id="section-about" className="bg-[#111111] py-20 md:py-32 px-4 md:px-0">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-[1fr,1fr] gap-8 md:gap-12">
          {/* Left side */}
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-[2rem] md:text-[3.5rem] font-black tracking-tight leading-[1.1]
              animate-gradient bg-gradient-to-r from-[#FFA500] via-white to-[#FFA500]
              bg-[size:200%] text-transparent bg-clip-text"
            >
              ABOUT ME
            </h2>
            <p className="text-base md:text-lg text-white/70 leading-relaxed">
              I&apos;m a passionate developer dedicated to creating impactful digital solutions.
            </p>
          </div>
          
          {/* Right side */}
          <div className="relative mt-8 md:mt-0">
            <div className="grid grid-cols-2 gap-x-16 gap-y-12 self-end">
              {stats.map((stat, index) => (
                <div key={index} className="text-right">
                  <div className="flex items-baseline justify-end mb-2">
                    <span className="text-[4rem] font-bold leading-none">
                      {stat.number}
                    </span>
                    <span className="text-[#FFA500] text-[2rem] font-bold ml-1">
                      {stat.symbol}
                    </span>
                  </div>
                  <p className="text-white/40 text-base">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Python',
  'SQL',
  'MongoDB',
  'AWS',
  'Docker',
  'Git',
  'REST APIs'
]; 