import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Hero />
      <main>
        <About />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}

export default App;
