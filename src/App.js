import React from 'react';
import { About } from './components/about/About';
import { Blog } from './components/blog/Blog';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';
import { Hero } from './components/hero/Hero';
import { Portfolio } from './components/portoflio/Portfolio';
import { Team } from './components/team/Team';

export const App = () => {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Team />
      <Contact />
      <Blog />
      <Footer />
    </>
  )
}
