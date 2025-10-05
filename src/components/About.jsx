import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">About</h2>
            <p className="mt-6 text-neutral-700 leading-relaxed">
              I am an architect focused on modern, context-sensitive design. My work centers on clear geometry, natural light, and honest materials—bringing serenity to everyday life. Over the past decade, I have led projects from intimate homes to boutique commercial spaces, guiding clients from concept to completion with a collaborative approach.
            </p>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              I believe architecture should feel effortless. Each project is a dialogue with its site and its users, balancing practicality with a refined aesthetic. Sustainability and craftsmanship are integral to every phase of my process.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6 text-sm">
              <div>
                <p className="text-neutral-500">Experience</p>
                <p className="font-medium">10+ years</p>
              </div>
              <div>
                <p className="text-neutral-500">Focus</p>
                <p className="font-medium">Residential, retail</p>
              </div>
              <div>
                <p className="text-neutral-500">Location</p>
                <p className="font-medium">Worldwide</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-200 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]">
              <img
                src="https://images.unsplash.com/photo-1542000551500-8ec64b6ec1c9?q=80&w=1974&auto=format&fit=crop"
                alt="Studio portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
