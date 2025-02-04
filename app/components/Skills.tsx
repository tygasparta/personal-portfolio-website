import React from 'react';

export default function Skills() {
  const skills = [
    { name: 'Java', percentage: '90' },
    { name: 'Python', percentage: '95' },
    { name: 'PHP', percentage: '85' },
    { name: 'WordPress', percentage: '90' },
    { name: 'Ethical Hacking', percentage: '80' },
    { name: 'JavaScript', percentage: '95' },
    { name: 'React/Next.js', percentage: '90' },
    { name: 'Node.js', percentage: '85' },
    { name: 'MongoDB', percentage: '80' },
    { name: 'AWS', percentage: '75' }
  ];

  return (
    <section id="section-skills" className="bg-[#111111] py-20 md:py-32 px-4 md:px-0">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-[2rem] md:text-[3.5rem] font-black tracking-tight leading-[1.1] mb-12
          animate-gradient bg-gradient-to-r from-[#FFA500] via-white to-[#FFA500]
          bg-[size:200%] text-transparent bg-clip-text"
        >
          SKILLS &
          <br />
          EXPERTISE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-white">{skill.percentage}%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full">
                <div 
                  className="h-full bg-[#FFA500] rounded-full transition-all duration-500"
                  style={{ width: `${skill.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 