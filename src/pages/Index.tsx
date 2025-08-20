
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Technologies from '@/components/Technologies';
import Experience from '@/components/Experience';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Mário Renan | Desenvolvedor Full Stack</title>
        <meta name="description" content="Portfólio profissional de Mário Renan, desenvolvedor Full Stack com experiência em NodeJS, React, VueJS e mais." />
      </Helmet>
      
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Technologies />
      <Experience />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
