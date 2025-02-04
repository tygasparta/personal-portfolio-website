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
    <section id="services" className="bg-[#111111] py-20 md:py-32 px-4 md:px-0">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-[2rem] md:text-[3.5rem] font-black tracking-tight leading-[1.1]
          animate-gradient bg-gradient-to-r from-[#FFA500] via-white to-[#FFA500]
          bg-[size:200%] text-transparent bg-clip-text"
        >
          SERVICES
        </h2>
        <p className="text-base md:text-lg text-white/70 leading-relaxed mt-4">
          Specialized solutions for your digital needs.
        </p>
      </div>
    </section>
  );
} 