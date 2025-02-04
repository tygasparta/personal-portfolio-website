'use client';
import React, { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#111111]/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <button onClick={() => scrollToSection('section-hero')} className="text-2xl font-bold text-white z-50">
            <svg 
              width="42" 
              height="24" 
              viewBox="0 0 42 24" 
              fill="none" 
              className="animate-gradient"
            >
              <path 
                d="M17.5 6C14.8478 6 12.3043 7.05357 10.4289 8.92893C8.55357 10.8043 7.5 13.3478 7.5 16C7.5 18.6522 8.55357 21.1957 10.4289 23.0711C12.3043 24.9464 14.8478 26 17.5 26C20.1522 26 22.6957 24.9464 24.5711 23.0711C26.4464 21.1957 27.5 18.6522 27.5 16M24.5 18C27.1522 18 29.6957 16.9464 31.5711 15.0711C33.4464 13.1957 34.5 10.6522 34.5 8C34.5 5.34784 33.4464 2.8043 31.5711 0.928932C29.6957 -0.946432 27.1522 -2 24.5 -2C21.8478 -2 19.3043 -0.946432 17.4289 0.928932C15.5536 2.8043 14.5 5.34784 14.5 8"
                className="stroke-current"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <button 
              onClick={() => scrollToSection('section-about')}
              className="text-white text-lg font-bold hover:text-[#FFA500] transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('section-skills')}
              className="text-white text-lg font-bold hover:text-[#FFA500] transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('section-portfolio')}
              className="text-white text-lg font-bold hover:text-[#FFA500] transition-colors"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('section-contact')}
              className="px-6 py-3 rounded-lg bg-[#FFA500] text-black text-lg font-bold 
              hover:bg-[#FFA500]/90 transition-all"
            >
              Get In Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white my-1.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-[#111111] flex flex-col items-center justify-center gap-8">
              <button 
                onClick={() => scrollToSection('section-about')}
                className="text-white text-2xl font-bold hover:text-[#FFA500] transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('section-skills')}
                className="text-white text-2xl font-bold hover:text-[#FFA500] transition-colors"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('section-portfolio')}
                className="text-white text-2xl font-bold hover:text-[#FFA500] transition-colors"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('section-contact')}
                className="text-white text-2xl font-bold hover:text-[#FFA500] transition-colors"
              >
                Contact
              </button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
} 