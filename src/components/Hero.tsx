
import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { generateWhatsAppLink } from '@/lib/utils';

const Hero = () => {

  const heroWhatsappLink = generateWhatsAppLink(
    '5587999061405',
    '*Olá Mário!*👋 Gostaria de saber mais sobre seus serviços.'
  )
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Premium animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cyber/5"></div>
        <div className="floating-orbs"></div>
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-cyber rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-gold rounded-full animate-bounce"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="w-full lg:w-1/2 space-y-8 animate-slide-up-fade glass-card p-10 rounded-3xl">
            <div className="space-y-2">
              <h2 className="text-cyber font-semibold text-xl md:text-2xl animate-text-glow font-display tracking-wide">
                🚀 Desenvolvedor Full Stack
              </h2>
              <div className="w-20 h-1 bg-gradient-primary rounded-full"></div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-display">
              Olá, eu sou<br />
              <span className="bg-gradient-primary bg-clip-text text-transparent animate-text-glow relative">
                Mário Renan
                <div className="absolute -inset-2 bg-gradient-primary opacity-20 blur-xl rounded-lg"></div>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl animate-fade-in font-light" style={{ animationDelay: '600ms' }}>
              Transformo <span className="text-primary font-semibold">ideias inovadoras</span> em 
              <span className="text-cyber font-semibold"> soluções digitais extraordinárias</span>. 
              Especialista em criar experiências que <span className="text-gold font-semibold">impressionam</span>.
            </p>
            
            <div className="flex flex-wrap gap-6 animate-scale-up" style={{ animationDelay: '800ms' }}>
              <a href="#contact">
                <Button className="btn-premium text-lg px-8 py-4 font-semibold tracking-wide">
                  🎯 Vamos conversar
                </Button>
              </a>
              <a href="#projects">
                <Button 
                  variant="outline" 
                  className="bg-transparent border-2 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary backdrop-blur-sm text-lg px-8 py-4 font-semibold tracking-wide transition-all duration-500 hover:shadow-glow"
                >
                  ⚡ Ver projetos
                </Button>
              </a>
            </div>
            
            <div className="flex gap-6 pt-8 animate-slide-up" style={{ animationDelay: '1000ms' }}>
              {[
                { 
                  href: "https://github.com/mariorenanofc", 
                  icon: Github, 
                  label: "GitHub",
                  color: "hover:text-primary"
                },
                { 
                  href: "https://linkedin.com/in/mariorenanofc", 
                  icon: Linkedin, 
                  label: "LinkedIn",
                  color: "hover:text-cyber"
                },
                { 
                  href: "mailto:MARIOVENDASONLINE10K@GMAIL.COM", 
                  icon: Mail, 
                  label: "Email",
                  color: "hover:text-gold"
                },
                { 
                  href: heroWhatsappLink, 
                  icon: Phone, 
                  label: "Whatsapp",
                  color: "hover:text-primary"
                }
              ].map(({ href, icon: Icon, label, color }, index) => (
                <a 
                  key={label}
                  href={href} 
                  target={href.startsWith('http') ? "_blank" : undefined}
                  rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className={`group relative p-4 rounded-xl bg-card/20 backdrop-blur-sm border border-white/10 text-muted-foreground ${color} transition-all duration-500 transform hover:scale-110 hover:-translate-y-2`}
                  aria-label={label}
                  style={{ animationDelay: `${1000 + (index * 100)}ms` }}
                >
                  <Icon size={28} className="transition-all duration-300 group-hover:drop-shadow-glow" />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300"></div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center animate-scale-up" style={{ animationDelay: '400ms' }}>
            <div className="relative group">
              {/* Animated rings */}
              <div className="absolute inset-0 w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full border border-primary/20 animate-spin"></div>
              <div className="absolute inset-4 w-72 h-72 md:w-88 md:h-88 lg:w-[24rem] lg:h-[24rem] rounded-full border border-cyber/20 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '8s' }}></div>
              
              {/* Main image container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden">
                {/* Gradient border */}
                <div className="absolute -inset-2 bg-gradient-primary rounded-full opacity-75 animate-pulse-glow"></div>
                
                {/* Image */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-card bg-card">
                  <img 
                    src="/lovable-uploads/7e555188-c75e-4be9-8d4d-bf7b900900dd.png" 
                    alt="Mário Renan - Desenvolvedor Full Stack" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-cyber/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating particles */}
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping opacity-60"></div>
                  <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-cyber rounded-full animate-pulse opacity-80"></div>
                  <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-gold rounded-full animate-bounce opacity-70"></div>
                </div>
              </div>
              
              {/* Status indicator */}
              <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
                ✨ Disponível
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-20">
          <a 
            href="#about" 
            className="group relative flex flex-col items-center gap-2 p-4 rounded-xl bg-card/20 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-500 animate-bounce"
            aria-label="Explorar mais"
          >
            <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
              Explorar mais
            </span>
            <ArrowDown size={24} className="text-primary group-hover:translate-y-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
