import { useState, useEffect, createContext, useContext } from 'react';

type Language = 'pt' | 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  pt: {
    // Navbar
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.experience': 'Experiência',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',
    
    // Theme
    'theme.toggle': 'Alternar tema',
    'language.select': 'Selecionar idioma',
    
    // Hero
    'hero.greeting': 'Olá, eu sou',
    'hero.title': 'Desenvolvedor Full Stack',
    'hero.description': 'Transformo ideias inovadoras em soluções digitais extraordinárias. Especialista em criar experiências que impressionam.',
    'hero.cta': 'Ver projetos',
    'hero.contact': 'Vamos conversar',
    
    // About
    'about.title': 'Sobre',
    'about.age': 'Idade',
    'about.location': 'Localização',
    'about.education': 'Formação',
    'about.experience': 'Experiência',
    
    // Skills
    'skills.title': 'Minhas Habilidades',
    
    // Experience
    'experience.title': 'Experiência',
    
    // Projects
    'projects.title': 'Projetos',
    
    // Contact
    'contact.title': 'Entre em Contato',
    'contact.subtitle': 'Vamos conversar!',
    'contact.description': 'Estou sempre aberto a novas oportunidades e desafios. Sinta-se à vontade para entrar em contato comigo por qualquer um dos meios abaixo ou através do formulário.',
    'contact.form.name': 'Nome',
    'contact.form.name.placeholder': 'Seu nome',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'seu.email@exemplo.com',
    'contact.form.subject': 'Assunto',
    'contact.form.subject.placeholder': 'Assunto da mensagem',
    'contact.form.message': 'Mensagem',
    'contact.form.message.placeholder': 'Sua mensagem...',
    'contact.form.send': 'Enviar mensagem',
    'contact.form.sending': 'Enviando...',
    'contact.form.success.title': 'Mensagem enviada!',
    'contact.form.success.description': 'Obrigado pelo contato. Responderei em breve.',
    'contact.form.error.title': 'Erro ao enviar mensagem',
    'contact.form.error.description': 'Ocorreu um erro. Tente novamente ou entre em contato pelo WhatsApp.',
    
    // Services
    'services.title': 'Meus Serviços',
    'services.web.title': 'Desenvolvimento Web',
    'services.web.description': 'Criação de sites e aplicações web modernas, responsivas e de alta performance utilizando as tecnologias mais recentes do mercado.',
    'services.frontend.title': 'Front-End',
    'services.frontend.description': 'Desenvolvimento de interfaces de usuário atraentes e funcionais utilizando HTML, CSS, JavaScript, React, Vue.js e Next.js.',
    'services.backend.title': 'Back-End',
    'services.backend.description': 'Criação de APIs robustas e seguras, integração com bancos de dados e implementação de lógica de negócios utilizando Node.js, Java e SQL.',
    
    // Technologies
    'technologies.title': 'Tecnologias',
    'technologies.frontend': 'Front-End',
    'technologies.backend': 'Back-End',
    'technologies.tools': 'Ferramentas & Outros',
    
    // Footer
    'footer.role': 'Desenvolvedor Full Stack',
    'footer.home': 'Início',
    'footer.about': 'Sobre',
    'footer.experience': 'Experiência',
    'footer.services': 'Serviços',
    'footer.projects': 'Projetos',
    'footer.contact': 'Contato',
    'footer.copyright': 'Todos os direitos reservados.',
    'footer.backToTop': 'Voltar ao topo',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Theme
    'theme.toggle': 'Toggle theme',
    'language.select': 'Select language',
    
    // Hero
    'hero.greeting': 'Hello, I am',
    'hero.title': 'Full Stack Developer',
    'hero.description': 'I transform innovative ideas into extraordinary digital solutions. Expert in creating impressive experiences.',
    'hero.cta': 'View projects',
    'hero.contact': 'Get in touch',
    
    // About
    'about.title': 'About',
    'about.age': 'Age',
    'about.location': 'Location',
    'about.education': 'Education',
    'about.experience': 'Experience',
    
    // Skills
    'skills.title': 'My Skills',
    
    // Experience
    'experience.title': 'Experience',
    
    // Projects
    'projects.title': 'Projects',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Let\'s talk!',
    'contact.description': 'I\'m always open to new opportunities and challenges. Feel free to contact me through any of the means below or through the form.',
    'contact.form.name': 'Name',
    'contact.form.name.placeholder': 'Your name',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'your.email@example.com',
    'contact.form.subject': 'Subject',
    'contact.form.subject.placeholder': 'Message subject',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Your message...',
    'contact.form.send': 'Send message',
    'contact.form.sending': 'Sending...',
    'contact.form.success.title': 'Message sent!',
    'contact.form.success.description': 'Thank you for contacting me. I\'ll reply soon.',
    'contact.form.error.title': 'Error sending message',
    'contact.form.error.description': 'An error occurred. Please try again or contact me via WhatsApp.',
    
    // Services
    'services.title': 'My Services',
    'services.web.title': 'Web Development',
    'services.web.description': 'Creation of modern, responsive and high-performance websites and web applications using the latest market technologies.',
    'services.frontend.title': 'Front-End',
    'services.frontend.description': 'Development of attractive and functional user interfaces using HTML, CSS, JavaScript, React, Vue.js and Next.js.',
    'services.backend.title': 'Back-End',
    'services.backend.description': 'Creation of robust and secure APIs, database integration and business logic implementation using Node.js, Java and SQL.',
    
    // Technologies
    'technologies.title': 'Technologies',
    'technologies.frontend': 'Front-End',
    'technologies.backend': 'Back-End',
    'technologies.tools': 'Tools & Others',
    
    // Footer
    'footer.role': 'Full Stack Developer',
    'footer.home': 'Home',
    'footer.about': 'About',
    'footer.experience': 'Experience',
    'footer.services': 'Services',
    'footer.projects': 'Projects',
    'footer.contact': 'Contact',
    'footer.copyright': 'All rights reserved.',
    'footer.backToTop': 'Back to top',
  },
  es: {
    // Navbar
    'nav.home': 'Inicio',
    'nav.about': 'Acerca',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    
    // Theme
    'theme.toggle': 'Cambiar tema',
    'language.select': 'Seleccionar idioma',
    
    // Hero
    'hero.greeting': 'Hola, soy',
    'hero.title': 'Desarrollador Full Stack',
    'hero.description': 'Transformo ideas innovadoras en soluciones digitales extraordinarias. Experto en crear experiencias impresionantes.',
    'hero.cta': 'Ver proyectos',
    'hero.contact': 'Contáctame',
    
    // About
    'about.title': 'Acerca',
    'about.age': 'Edad',
    'about.location': 'Ubicación',
    'about.education': 'Educación',
    'about.experience': 'Experiencia',
    
    // Skills
    'skills.title': 'Mis Habilidades',
    
    // Experience
    'experience.title': 'Experiencia',
    
    // Projects
    'projects.title': 'Proyectos',
    
    // Contact
    'contact.title': 'Contacto',
    'contact.subtitle': '¡Hablemos!',
    'contact.description': 'Siempre estoy abierto a nuevas oportunidades y desafíos. No dudes en contactarme por cualquiera de los medios a continuación o a través del formulario.',
    'contact.form.name': 'Nombre',
    'contact.form.name.placeholder': 'Tu nombre',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'tu.email@ejemplo.com',
    'contact.form.subject': 'Asunto',
    'contact.form.subject.placeholder': 'Asunto del mensaje',
    'contact.form.message': 'Mensaje',
    'contact.form.message.placeholder': 'Tu mensaje...',
    'contact.form.send': 'Enviar mensaje',
    'contact.form.sending': 'Enviando...',
    'contact.form.success.title': '¡Mensaje enviado!',
    'contact.form.success.description': 'Gracias por contactarme. Responderé pronto.',
    'contact.form.error.title': 'Error al enviar mensaje',
    'contact.form.error.description': 'Ocurrió un error. Inténtalo de nuevo o contáctame por WhatsApp.',
    
    // Services
    'services.title': 'Mis Servicios',
    'services.web.title': 'Desarrollo Web',
    'services.web.description': 'Creación de sitios web y aplicaciones web modernas, responsivas y de alto rendimiento utilizando las tecnologías más recientes del mercado.',
    'services.frontend.title': 'Front-End',
    'services.frontend.description': 'Desarrollo de interfaces de usuario atractivas y funcionales utilizando HTML, CSS, JavaScript, React, Vue.js y Next.js.',
    'services.backend.title': 'Back-End',
    'services.backend.description': 'Creación de APIs robustas y seguras, integración con bases de datos e implementación de lógica de negocio utilizando Node.js, Java y SQL.',
    
    // Technologies
    'technologies.title': 'Tecnologías',
    'technologies.frontend': 'Front-End',
    'technologies.backend': 'Back-End',
    'technologies.tools': 'Herramientas y Otros',
    
    // Footer
    'footer.role': 'Desarrollador Full Stack',
    'footer.home': 'Inicio',
    'footer.about': 'Acerca',
    'footer.experience': 'Experiencia',
    'footer.services': 'Servicios',
    'footer.projects': 'Proyectos',
    'footer.contact': 'Contacto',
    'footer.copyright': 'Todos los derechos reservados.',
    'footer.backToTop': 'Volver arriba',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  useEffect(() => {
    const savedLanguage = (localStorage.getItem('language') as Language) || 'pt';
    setLanguage(savedLanguage);
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}