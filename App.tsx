import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Mission } from './components/Mission';
import { Speakers } from './components/Speakers';
import { Agenda } from './components/Agenda';
import { Registration } from './components/Registration';
import { Footer } from './components/Footer';

import { Confrarias } from './components/Confrarias';

import { Testimonials } from './components/Testimonials';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-slate-50 font-sans selection:bg-brand-neon selection:text-brand-dark">
      <Header />
      <main>
        <Hero />
        <Mission />
        <Speakers />
        <Agenda />
        <Confrarias />
        <Testimonials />
        <Registration />
      </main>
      <Footer />
    </div>
  );
}

export default App;