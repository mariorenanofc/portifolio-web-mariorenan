
import { generateWhatsAppLink } from '@/lib/utils';
import { Github, Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const whatsappLink = generateWhatsAppLink(
    '5587999061405',
    '*Olá 👋*, Vim atraves do seu portifolio.'
  );

  return (
    <footer className="bg-card text-foreground py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Mário<span className="text-primary">Renan</span></h2>
            <p className="text-muted-foreground">Desenvolvedor Full Stack</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
            <a href="#home" className="hover:text-primary transition-colors">Início</a>
            <a href="#about" className="hover:text-primary transition-colors">Sobre</a>
            <a href="#experience" className="hover:text-primary transition-colors">Experiência</a>
            <a href="#services" className="hover:text-primary transition-colors">Serviços</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projetos</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contato</a>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com/mariorenanofc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/mariorenanofc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:MARIOVENDASONLINE10K@GMAIL.COM" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href={whatsappLink}
              target="_blank" 
              rel='noopener noreferrer'
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Whatsapp"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Mário Renan. Todos os direitos reservados.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="p-3 bg-primary hover:bg-primary/90 rounded-full transition-colors"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
