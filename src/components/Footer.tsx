
import { Github, Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Mário<span className="text-blue-400">Renan</span></h2>
            <p className="text-gray-400">Desenvolvedor Full Stack</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
            <a href="#home" className="hover:text-blue-400 transition-colors">Início</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">Sobre</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Habilidades</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">Experiência</a>
            <a href="#services" className="hover:text-blue-400 transition-colors">Serviços</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projetos</a>
            <a href="#testimonials" className="hover:text-blue-400 transition-colors">Depoimentos</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contato</a>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com/mariorenanofc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/mariorenanofc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:MARIOVENDASONLINE10K@GMAIL.COM" 
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="tel:+5587999061405" 
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="Telefone"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Mário Renan. Todos os direitos reservados.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
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
