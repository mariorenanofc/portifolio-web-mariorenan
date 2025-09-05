
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Technologies from '@/components/Technologies';
import Experience from '@/components/Experience';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Reveal } from '@/components/Reveal';
import { ProgressBar } from '@/components/ProgressBar';
import { BackToTop } from '@/components/BackToTop';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Mário Renan | Desenvolvedor Full Stack</title>
        <meta name="description" content="Portfólio profissional de Mário Renan, desenvolvedor Full Stack com experiência em NodeJS, React, VueJS e mais." />
      </Helmet>
      
      <ProgressBar />
      <BackToTop />
        
      <Navbar />
      <Reveal>
        <Hero />
      </Reveal>
      <Reveal delay={100}>
        <About />
      </Reveal>
      <Reveal delay={200}>
        <Skills />
      </Reveal>
      <Reveal delay={300}>
        <Technologies />
      </Reveal>
      <Reveal delay={400}>
        <Experience />
      </Reveal>
      <Reveal delay={500}>
        <Services />
      </Reveal>
      <Reveal delay={600}>
        <Projects />
      </Reveal>
      <Reveal delay={700}>
        <Certifications />
      </Reveal>
      <Reveal delay={800}>
        <Contact />
      </Reveal>
      <Reveal delay={900}>
        <Footer />
      </Reveal>
    </>
  );
};

export default Index;
