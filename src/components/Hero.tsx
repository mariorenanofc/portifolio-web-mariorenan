
import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { generateWhatsAppLink } from '@/lib/utils';
import { useLanguage } from '@/hooks/useLanguage';

const Hero = () => {
  const { t } = useLanguage();

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
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          <div className="order-2 lg:order-1 w-full lg:w-1/2 space-y-6 lg:space-y-8 animate-slide-up-fade glass-card p-6 lg:p-10 rounded-3xl">
            <div className="space-y-2">
              <h2 className="text-cyber font-semibold text-xl md:text-2xl animate-text-glow font-display tracking-wide">
                🚀 {t('hero.title')}
              </h2>
              <div className="w-20 h-1 bg-gradient-primary rounded-full"></div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight font-display">
              {t('hero.greeting')}<br />
              <span className="bg-gradient-primary bg-clip-text text-transparent animate-text-glow relative">
                Mário Renan
                <div className="absolute -inset-2 bg-gradient-primary opacity-20 blur-xl rounded-lg"></div>
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl animate-fade-in font-light" style={{ animationDelay: '600ms' }}>
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 animate-scale-up" style={{ animationDelay: '800ms' }}>
              <a href="#contact" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto btn-premium text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 font-semibold tracking-wide">
                  🎯 {t('hero.contact')}
                </Button>
              </a>
              <a href="#projects" className="w-full sm:w-auto">
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto bg-transparent border-2 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary backdrop-blur-sm text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 font-semibold tracking-wide transition-all duration-500 hover:shadow-glow"
                >
                  ⚡ {t('hero.cta')}
                </Button>
              </a>
            </div>
            
            <div className="flex gap-3 sm:gap-4 lg:gap-6 pt-6 lg:pt-8 animate-slide-up justify-center lg:justify-start" style={{ animationDelay: '1000ms' }}>
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
                  className={`group relative p-2 sm:p-3 lg:p-4 rounded-xl bg-card/20 backdrop-blur-sm border border-white/10 text-muted-foreground ${color} transition-all duration-500 transform hover:scale-110 hover:-translate-y-2`}
                  aria-label={label}
                  style={{ animationDelay: `${1000 + (index * 100)}ms` }}
                >
                  <Icon size={20} className="sm:hidden transition-all duration-300 group-hover:drop-shadow-glow" />
                  <Icon size={24} className="hidden sm:block lg:hidden transition-all duration-300 group-hover:drop-shadow-glow" />
                  <Icon size={28} className="hidden lg:block transition-all duration-300 group-hover:drop-shadow-glow" />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300"></div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 w-full lg:w-1/2 flex justify-center animate-scale-up" style={{ animationDelay: '400ms' }}>
            <div className="relative group">
              {/* Animated rings */}
              <div className="absolute inset-0 w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full border border-primary/20 animate-spin"></div>
              <div className="absolute inset-2 w-44 h-44 sm:w-52 sm:h-52 md:w-68 md:h-68 lg:w-76 lg:h-76 xl:w-88 xl:h-88 rounded-full border border-cyber/20 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '8s' }}></div>
              
              {/* Main image container */}
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden">
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
