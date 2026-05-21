import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Value from './components/Value';
import Method from './components/Method';
import Deliverables from './components/Deliverables';
import Bento from './components/Bento';
import AboutUs from './components/AboutUs';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Problem />
        <Value />
        <Method />
        <Deliverables />
        <Bento />
        <AboutUs theme={theme} />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
