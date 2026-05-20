import Nav from './components/Nav';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Value from './components/Value';
import Method from './components/Method';
import Deliverables from './components/Deliverables';
import Bento from './components/Bento';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Value />
        <Method />
        <Deliverables />
        <Bento />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
