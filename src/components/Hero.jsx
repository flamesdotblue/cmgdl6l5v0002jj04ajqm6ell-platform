import React from 'react';
import { ArrowRight } from 'lucide-react';

const Nav = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-white/60 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-xl">Atelier Modern</a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#about" className="hover:text-neutral-600 transition">About</a>
          <a href="#work" className="hover:text-neutral-600 transition">Work</a>
          <a href="#contact" className="hover:text-neutral-600 transition">Contact</a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-4 py-2 hover:bg-neutral-800 transition">
            Start a project <ArrowRight className="h-4 w-4" />
          </a>
        </nav>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <Nav />
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1506377285874-1d5b4a3db2ff?q=80&w=2070&auto=format&fit=crop"
          alt="Modern architecture skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/70 to-white" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-36 pb-24 md:pt-44 md:pb-40">
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.18em] text-xs text-neutral-600 mb-4">Modern Architecture Studio</p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-[-0.02em]">
            Timeless spaces with modern clarity.
          </h1>
          <p className="mt-6 text-neutral-700 max-w-2xl">
            I craft refined residential and commercial environments that balance light, material, and proportion—delivering calm, functional elegance.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-5 py-3 text-sm hover:bg-neutral-800 transition">
              View portfolio <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white border border-neutral-300 px-5 py-3 text-sm hover:bg-neutral-100 transition">
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
