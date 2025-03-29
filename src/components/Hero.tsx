
import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary to-white pt-20">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-6 animate-fade-in">
            <h2 className="text-primary font-semibold text-lg">Desenvolvedor Full Stack</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Olá, eu sou<br />
              <span className="text-primary">Mário Renan</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Desenvolvedor com 27 anos e paixão por criar soluções web inovadoras e eficientes. 
              Especialista em tecnologias Front-End e Back-End.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#contact">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Entre em contato
                </Button>
              </a>
              <a href="#about">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Saiba mais
                </Button>
              </a>
            </div>
            
            <div className="flex gap-4 pt-4">
              <a 
                href="https://github.com/mariorenanofc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/mariorenanofc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:MARIOVENDASONLINE10K@GMAIL.COM" 
                className="text-gray-700 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a 
                href="tel:+5587999061405" 
                className="text-gray-700 hover:text-primary transition-colors"
                aria-label="Telefone"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center animate-fade-in">
            <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-teal-300 to-primary flex items-center justify-center text-white font-bold text-5xl relative overflow-hidden">
              <span>MR</span>
              <div className="absolute inset-0 border-4 border-white/30 rounded-full"></div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-16">
          <a 
            href="#about" 
            className="animate-bounce text-primary hover:text-primary/80 transition-colors"
            aria-label="Rolar para baixo"
          >
            <ArrowDown size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
