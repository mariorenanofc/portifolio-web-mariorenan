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