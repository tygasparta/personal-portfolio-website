import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#111111] flex items-center relative overflow-hidden py-20 px-4 md:px-0">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="grid md:grid-cols-[1.2fr,0.8fr] gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 md:space-y-6 relative z-10">
            {/* Intro text */}
            <h1 className="text-xl md:text-2xl text-white/90 font-light">
              Hi, I&apos;m <span className="text-[#FFA500]">Tyga</span> Sparta
            </h1>

            {/* Main heading with gradient animation */}
            <div className="space-y-2 md:space-y-4">
              <h2 className="text-[2.5rem] md:text-[5rem] lg:text-[6rem] font-black leading-[0.9] tracking-tight
                animate-gradient bg-gradient-to-r from-[#FFA500] via-white to-[#FFA500]
                bg-[size:200%] text-transparent bg-clip-text"
              >
                TURNING
                <br />
                IDEAS
                <br />
                INTO
                <br />
                IMPACT.
              </h2>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <a 
                href="#contact" 
                className="inline-block px-8 py-4 bg-[#FFA500] text-black rounded-lg font-medium 
                hover:bg-[#FFA500]/90 transition-all duration-300 text-lg"
              >
                Get Started
              </a>
              <a 
                href="https://wa.me/1234567890" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-[#FFA500] text-black rounded-lg font-medium 
                hover:bg-[#FFA500]/90 transition-all duration-300 text-lg"
              >
                WhatsApp Me
              </a>
            </div>
          </div>

          {/* Right Content - Just Floating Dots */}
          <div className="relative w-[500px]">
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <Image
                src="/profile.png"
                alt="Profile"
                width={500}
                height={600}
                className="contrast-125 brightness-110 grayscale"
                priority
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background Gradient */}
      {/* ... rest of the code remains the same ... */}
    </section>
  );
} 