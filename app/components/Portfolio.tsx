import React from 'react';

export default function Portfolio() {
  const projects = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      icon: "🛍️",
      bgColor: "bg-[#1a1f36]"
    },
    {
      title: "Security Audit System",
      category: "Cybersecurity",
      icon: "🔒",
      bgColor: "bg-[#2d1f1f]"
    },
    {
      title: "AI Trading Bot",
      category: "Software Engineering",
      icon: "🤖",
      bgColor: "bg-[#1f2d1f]"
    },
    {
      title: "Blockchain Wallet",
      category: "Web3 Development",
      icon: "⛓️",
      bgColor: "bg-[#2d2d1f]"
    },
    {
      title: "CRM Dashboard",
      category: "Web Development",
      icon: "📊",
      bgColor: "bg-[#1f1f2d]"
    },
    {
      title: "Network Security Tool",
      category: "Cybersecurity",
      icon: "🛡️",
      bgColor: "bg-[#2d1f2d]"
    }
  ];

  return (
    <section id="section-portfolio" className="bg-[#111111] py-32 scroll-mt-24">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex items-center gap-2 mb-12">
          <span className="text-[#FFA500] text-base tracking-wider font-medium">PORTFOLIO</span>
          <span className="text-white/30 text-sm font-mono">/&gt;</span>
        </div>

        {/* Title and Description */}
        <div className="mb-12">
          <h2 className="text-[4.5rem] font-black tracking-tight leading-none mb-8 animate-gradient bg-gradient-to-r from-[#FFA500] via-white to-purple-600 text-transparent bg-clip-text bg-[size:200%]">
            FEATURED WORK
          </h2>
          <p className="text-[1.25rem] leading-[1.8] text-white/70 max-w-2xl">
            A showcase of my best projects and technical achievements across various domains.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-lg aspect-[3/2] ${project.bgColor} p-4 hover:scale-[1.02] transition-all duration-300`}
            >
              <div className="absolute top-4 right-4 text-2xl animate-bounce-slow">
                {project.icon}
              </div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-base font-bold text-white mb-1">{project.title}</h3>
                <p className="text-[#FFA500] text-xs">{project.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <a 
            href="#" 
            className="inline-block px-6 py-3 text-white border border-[#FFA500] rounded-lg hover:bg-[#FFA500] hover:text-black transition-colors duration-300"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
} 