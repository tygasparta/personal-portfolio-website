import React from 'react';

export default function Services() {
  const services = [
    {
      icon: "💻",
      title: "Software Engineering",
      description: "Developing robust software solutions using modern technologies and best practices. Specializing in scalable applications and system architecture."
    },
    {
      icon: "</>",
      title: "Web Development",
      description: "Building robust web applications using cutting-edge technologies. From frontend to backend, I deliver scalable and efficient solutions."
    },
    {
      icon: "📈",
      title: "Digital Marketing",
      description: "Implementing effective digital strategies to boost your online presence. SEO, analytics, and performance optimization for maximum impact."
    },
    {
      icon: "🔒",
      title: "Cybersecurity",
      description: "Protecting digital assets through advanced security measures. Specializing in penetration testing, security audits, and vulnerability assessments."
    }
  ];

  return (
    <section className="bg-[#111111] px-12 py-24">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex items-center gap-2 mb-12">
          <span className="text-[#FFA500] text-base tracking-wider font-medium">SERVICES</span>
          <span className="text-white/30 text-sm font-mono">/&gt;</span>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-[1fr,1fr] gap-20 mb-20">
          {/* Left - Title */}
          <h2 className="text-[4.5rem] font-black tracking-tight leading-none animate-gradient bg-gradient-to-r from-[#FFA500] via-white to-purple-600 text-transparent bg-clip-text bg-[size:200%]">
            SOLUTIONS THAT
            <br />
            DRIVE SUCCESS
          </h2>

          {/* Right - Description */}
          <div className="self-end">
            <p className="text-[1.25rem] leading-[1.8] text-white/70">
              From software engineering to cybersecurity, I offer a range of solutions tailored 
              to your needs. I'm here to help you make it happen.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-[#1A1A1A] p-8 rounded-lg hover:bg-[#222222] transition-colors duration-300"
            >
              <div className="text-4xl mb-6 text-[#FFA500]">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-white/60 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 