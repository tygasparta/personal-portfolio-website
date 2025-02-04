import Image from "next/image";
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
