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
    'hero.description': 'Especializado em criar experiências digitais excepcionais com tecnologias modernas',
    'hero.cta': 'Ver meus projetos',
    'hero.contact': 'Entre em contato',
    
    // About
    'about.title': 'Sobre mim',
    'about.age': 'Idade',
    'about.location': 'Localização',
    'about.education': 'Formação',
    'about.experience': 'Experiência',
    
    // Skills
    'skills.title': 'Habilidades',
    
    // Experience
    'experience.title': 'Experiência',
    
    // Projects
    'projects.title': 'Projetos',
    
    // Contact
    'contact.title': 'Contato',
    'contact.subtitle': 'Vamos trabalhar juntos',
    'contact.description': 'Estou sempre aberto a novas oportunidades e projetos interessantes.',
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
    'hero.description': 'Specialized in creating exceptional digital experiences with modern technologies',
    'hero.cta': 'View my projects',
    'hero.contact': 'Get in touch',
    
    // About
    'about.title': 'About me',
    'about.age': 'Age',
    'about.location': 'Location',
    'about.education': 'Education',
    'about.experience': 'Experience',
    
    // Skills
    'skills.title': 'Skills',
    
    // Experience
    'experience.title': 'Experience',
    
    // Projects
    'projects.title': 'Projects',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Let\'s work together',
    'contact.description': 'I\'m always open to new opportunities and interesting projects.',
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
    'hero.description': 'Especializado en crear experiencias digitales excepcionales con tecnologías modernas',
    'hero.cta': 'Ver mis proyectos',
    'hero.contact': 'Contáctame',
    
    // About
    'about.title': 'Acerca de mí',
    'about.age': 'Edad',
    'about.location': 'Ubicación',
    'about.education': 'Educación',
    'about.experience': 'Experiencia',
    
    // Skills
    'skills.title': 'Habilidades',
    
    // Experience
    'experience.title': 'Experiencia',
    
    // Projects
    'projects.title': 'Proyectos',
    
    // Contact
    'contact.title': 'Contacto',
    'contact.subtitle': 'Trabajemos juntos',
    'contact.description': 'Siempre estoy abierto a nuevas oportunidades y proyectos interesantes.',
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