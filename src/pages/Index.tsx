
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Technologies from '@/components/Technologies';
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
      <Experience />
      <Technologies />
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
