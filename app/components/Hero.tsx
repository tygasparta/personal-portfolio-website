import Link from 'next/link';
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
              Hi, I'm <span className="text-[#FFA500]">Tyga</span> Sparta
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
                href="https://wa.me/YOUR_PHONE_NUMBER" 
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
                alt="Profile Image"
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

// Icon components
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
  </svg>
);

const DribbbleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"></path>
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
  </svg>
); 