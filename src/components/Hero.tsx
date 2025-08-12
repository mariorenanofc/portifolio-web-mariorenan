
import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { generateWhatsAppLink } from '@/lib/utils';

const Hero = () => {

  const heroWhatsappLink = generateWhatsAppLink(
    '5587999061405',
    '*Olá Mário!*👋 Gostaria de saber mais sobre seus serviços.'
  )
  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-background pt-20">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-6 animate-slide-in-left glass-card p-8 rounded-xl">
            <h2 className="text-primary font-semibold text-lg animate-fade-in" style={{ animationDelay: '300ms' }}>
              Desenvolvedor Full Stack
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold animate-slide-up" style={{ animationDelay: '400ms' }}>
              Olá, eu sou<br />
              <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-glow">
                Mário Renan
              </span>
            </h1>
            <p className="text-lg max-w-lg animate-fade-in" style={{ animationDelay: '600ms' }}>
              Desenvolvedor com 27 anos e paixão por criar soluções web inovadoras e eficientes. 
              Especialista em tecnologias Front-End e Back-End.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-scale-in" style={{ animationDelay: '800ms' }}>
              <a href="#contact">
                <Button className="bg-primary hover:bg-primary/90 text-white transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25">
                  Entre em contato
                </Button>
              </a>
              <a href="#about">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 transform hover:scale-105 transition-all duration-300">
                  Saiba mais
                </Button>
              </a>
            </div>
            
            <div className="flex gap-4 pt-4 animate-slide-up" style={{ animationDelay: '1000ms' }}>
              <a 
                href="https://github.com/mariorenanofc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-all duration-300 transform hover:scale-125 hover:rotate-12"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/mariorenanofc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-all duration-300 transform hover:scale-125 hover:rotate-12"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:MARIOVENDASONLINE10K@GMAIL.COM" 
                className="text-foreground hover:text-primary transition-all duration-300 transform hover:scale-125 hover:rotate-12"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a 
                href={heroWhatsappLink} 
                target="_blank" 
                rel='noopener noreferrer'
                className="text-foreground hover:text-primary transition-all duration-300 transform hover:scale-125 hover:rotate-12"
                aria-label="Whatsapp"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center animate-slide-in-right">
            <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full relative overflow-hidden border-4 border-primary/30 animate-glow hover:scale-105 transition-all duration-500">
              <img 
                src="/lovable-uploads/7e555188-c75e-4be9-8d4d-bf7b900900dd.png" 
                alt="Mário Renan" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
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
