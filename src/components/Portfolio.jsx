import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Courtyard Residence',
    image:
      'https://images.unsplash.com/photo-1529429612779-c8e40ef2f36e?q=80&w=2067&auto=format&fit=crop',
    location: 'Lisbon, PT',
  },
  {
    title: 'Gallery Pavilion',
    image:
      'https://images.unsplash.com/photo-1529421308411-8154e4c75f56?q=80&w=2069&auto=format&fit=crop',
    location: 'Copenhagen, DK',
  },
  {
    title: 'Cliffside Retreat',
    image:
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c52f?q=80&w=2032&auto=format&fit=crop',
    location: 'Big Sur, US',
  },
  {
    title: 'Atrium Workspace',
    image:
      'https://images.unsplash.com/photo-1524169113253-c6ba17f68498?q=80&w=2069&auto=format&fit=crop',
    location: 'Berlin, DE',
  },
  {
    title: 'Lake House',
    image:
      'https://images.unsplash.com/photo-1500043357865-c6b8827edf51?q=80&w=2070&auto=format&fit=crop',
    location: 'Ontario, CA',
  },
  {
    title: 'Minimalist Loft',
    image:
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?q=80&w=2070&auto=format&fit=crop',
    location: 'New York, US',
  },
];

const Portfolio = () => {
  return (
    <section id="work" className="relative border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Selected Work</h2>
            <p className="mt-3 text-neutral-700 max-w-2xl">
              A curated collection of residential and commercial projects emphasizing proportion, light, and enduring materials.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-100 transition"
          >
            Inquire <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <article key={i} className="group rounded-2xl overflow-hidden bg-neutral-200 relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="p-4 md:p-5 flex items-center justify-between">
                <div>
                  <h3 className="font-medium tracking-tight">{p.title}</h3>
                  <p className="text-sm text-neutral-600">{p.location}</p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition">
                  <ExternalLink className="h-4 w-4 text-neutral-700" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
