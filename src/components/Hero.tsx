
import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-background pt-20">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-6 animate-fade-in glass-card p-8 rounded-xl">
            <h2 className="text-primary font-semibold text-lg">Desenvolvedor Full Stack</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Olá, eu sou<br />
              <span className="text-primary">Mário Renan</span>
            </h1>
            <p className="text-lg max-w-lg">
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
                className="text-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/mariorenanofc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:MARIOVENDASONLINE10K@GMAIL.COM" 
                className="text-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a 
                href="tel:+5587999061405" 
                className="text-foreground hover:text-primary transition-colors"
                aria-label="Telefone"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center animate-fade-in">
            <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full relative overflow-hidden border-4 border-primary/30">
              <img 
                src="/lovable-uploads/2ffc85fc-6ecf-4d01-8c9a-86093e61e342.png" 
                alt="Mário Renan" 
                className="w-full h-full object-cover"
              />
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
