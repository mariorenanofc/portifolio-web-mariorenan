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
    
    // About - Education
    'about.education.title1': 'Formação Intensiva Privada Full Stack',
    'about.education.institution1': 'Full Stack Club',
    'about.education.year1': '2025',
    'about.education.status1': 'Em andamento',
    'about.education.title2': 'Pós-Graduação em Desenvolvimento Full Stack',
    'about.education.institution2': 'Universidade Estácio de Sá (UNESA)',
    'about.education.year2': '2025',
    'about.education.title3': 'Análise e Desenvolvimento de Sistemas',
    'about.education.institution3': 'Universidade Estácio de Sá (UNESA)',
    'about.education.year3': '2024',
    'about.education.title4': 'Curso Técnico em Desenvolvimento de Sistemas',
    'about.education.institution4': 'Ensino Técnico Estadual (ETE)',
    'about.education.year4': '2024',

    // About - Experience
    'about.experience.title': 'Tutor Especialista',
    'about.experience.company': 'Trilha Tech - CESAR School 🚀',
    'about.experience.activity1': '🎯 Monitoramento e avaliação especializada de alunos',
    'about.experience.activity2': '💡 Suporte técnico avançado para resolução de dúvidas',
    'about.experience.activity3': '📚 Apresentação de conteúdo didático inovador',
    'about.experience.activity4': '🔥 Criação de desafios práticos e projetos reais',
    'about.experience.activity5': '📊 Análise contínua de performance individual',
    'about.experience.activity6': '📈 Levantamento estratégico de dados de progresso',

    // About - Mission
    'about.mission.title': 'Missão',
    'about.mission.description': '🎯 Desenvolvedor visionário de 27 anos, especializado em transformar conceitos complexos em soluções digitais extraordinárias.',
    'about.mission.item1': '🚀 Análise e arquitetura de sistemas de alta performance',
    'about.mission.item2': '💎 Desenvolvimento full-stack com tecnologias de ponta',
    'about.mission.item3': '🎨 Design de experiências digitais memoráveis',
    'about.mission.item4': '🔥 Inovação constante e aprendizado contínuo',
    'about.mission.cta': '✨ Sempre aberto a novos desafios e oportunidades de crescimento! ✨',

    // Skills Categories
    'skills.development': 'Desenvolvimento',
    'skills.technical': 'Técnicas',
    'skills.soft': 'Soft Skills',

    // Skills Development
    'skills.development.items': 'Desenvolvimento web Full Stack,Desenvolvimento Front-End,Desenvolvimento Back-End,APIs RESTful,Desenvolvimento de Aplicações,Interfaces responsivas',

    // Skills Technical  
    'skills.technical.items': 'Resolução de problemas,Análise de requisitos,Controle de versão (Git),Testes e depuração,Arquitetura de software,Metodologias ágeis',

    // Skills Soft Skills
    'skills.soft.items': 'Comunicação eficaz,Trabalho em equipe,Aprendizado contínuo,Organização,Atendimento ao cliente,Adaptabilidade',

    // Experience - Titles and Companies
    'experience.tutor.title': 'Tutor Especialista',
    'experience.tutor.company': 'CESAR School',
    'experience.tutor.location': 'Trilha Tech - Bolsista',
    'experience.tutor.period': 'Mar 2024 - Atualmente',
    'experience.tutor.description': 'Desenvolvendo habilidades estratégicas de acompanhamento e capacitação no programa Trilha Tech, uma oportunidade de formação para o mercado de tecnologia.',
    'experience.tutor.responsibilities': [
      'Mediação de instrumentos pedagógicos para facilitar aprendizagem',
      'Aplicação de instrumentos avaliativos para monitoramento acadêmico',
      'Acompanhamento de atividades presenciais e em laboratório',
      'Coleta e análise de dados para tomada de decisão',
      'Suporte técnico e educacional aos estudantes',
      'Elaboração de relatórios de progresso e recomendações'
    ],

    'experience.freelancer.title': 'Desenvolvedor Freelancer',
    'experience.freelancer.company': 'Projetos Diversos',
    'experience.freelancer.location': 'Atuação Remota',
    'experience.freelancer.period': 'Atuação Freelancer',
    'experience.freelancer.description': 'Desenvolvimento de soluções web personalizadas, focando em aplicações front-end e back-end funcionais e eficientes para diversos clientes.',
    'experience.freelancer.responsibilities': [
      'Desenvolvimento de websites e aplicações responsivas',
      'Criação e manutenção de APIs RESTful',
      'Integração com bancos de dados relacionais e NoSQL',
      'Levantamento de requisitos junto aos clientes',
      'Gerenciamento de projetos e prazos',
      'Desenvolvimento de e-commerce (Bunito Burgues)',
      'Otimização de performance e resolução técnica'
    ],

    'experience.supervisor.title': 'Supervisor de Departamento',
    'experience.supervisor.company': 'Americanas S.A.',
    'experience.supervisor.location': 'Exu, Pernambuco',
    'experience.supervisor.period': 'Mar 2023 - Mar 2025',
    'experience.supervisor.description': 'Liderança e coordenação de operações em diferentes setores, garantindo funcionamento eficiente e desenvolvimento de equipes para atender expectativas dos clientes.',
    'experience.supervisor.responsibilities': [
      'Supervisão e orientação de equipes multidepartamentais',
      'Otimização de processos e estratégias de vendas',
      'Garantia da excelência no atendimento ao cliente',
      'Monitoramento de performance e identificação de treinamentos',
      'Gestão de situações desafiadoras e motivação de equipes',
      'Comunicação eficaz entre gerência e colaboradores',
      'Manutenção da integridade organizacional dos departamentos'
    ],

    'experience.activities': 'Principais Atividades',

    // Projects
    'projects.subtitle': 'Desenvolvimentos que combinam criatividade, tecnologia e experiência do usuário',
    'projects.cta.interested': 'Interessado em colaborar?',
    'projects.cta.button': 'Vamos conversar!',

    'projects.exudelivery.title': 'Exu Delivery',
    'projects.exudelivery.description': 'Plataforma de delivery de comida com interface moderna e sistema de pedidos online.',

    'projects.finance.title': 'Controle Finance AI',
    'projects.finance.description': 'Aplicação para controle financeiro com auxílio de IA para análise de gastos.',

    'projects.cardapio.title': 'Cardápio Online',
    'projects.cardapio.description': 'Cardápio digital interativo com design responsivo e experiência otimizada.',

    'projects.comparador.title': 'O Esperto Comparador',
    'projects.comparador.description': 'Plataforma de comparação de preços em supermercados para economizar nas compras.',

    'projects.portfolio.title': 'Portfolio Denilson Treinador',
    'projects.portfolio.description': 'Site profissional para personal trainer com foco em transformações corporais.',

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
    
    // About - Education
    'about.education.title1': 'Intensive Private Full Stack Training',
    'about.education.institution1': 'Full Stack Club',
    'about.education.year1': '2025',
    'about.education.status1': 'In progress',
    'about.education.title2': 'Postgraduate in Full Stack Development',
    'about.education.institution2': 'Estácio de Sá University (UNESA)',
    'about.education.year2': '2025',
    'about.education.title3': 'Systems Analysis and Development',
    'about.education.institution3': 'Estácio de Sá University (UNESA)',
    'about.education.year3': '2024',
    'about.education.title4': 'Technical Course in Systems Development',
    'about.education.institution4': 'State Technical Education (ETE)',
    'about.education.year4': '2024',

    // About - Experience
    'about.experience.title': 'Specialist Tutor',
    'about.experience.company': 'Tech Track - CESAR School 🚀',
    'about.experience.activity1': '🎯 Specialized monitoring and evaluation of students',
    'about.experience.activity2': '💡 Advanced technical support for troubleshooting',
    'about.experience.activity3': '📚 Presentation of innovative educational content',
    'about.experience.activity4': '🔥 Creation of practical challenges and real projects',
    'about.experience.activity5': '📊 Continuous analysis of individual performance',
    'about.experience.activity6': '📈 Strategic data collection for progress tracking',

    // About - Mission
    'about.mission.title': 'Mission',
    'about.mission.description': '🎯 Visionary 27-year-old developer, specialized in transforming complex concepts into extraordinary digital solutions.',
    'about.mission.item1': '🚀 Analysis and architecture of high-performance systems',
    'about.mission.item2': '💎 Full-stack development with cutting-edge technologies',
    'about.mission.item3': '🎨 Design of memorable digital experiences',
    'about.mission.item4': '🔥 Constant innovation and continuous learning',
    'about.mission.cta': '✨ Always open to new challenges and growth opportunities! ✨',

    // Skills Categories
    'skills.development': 'Development',
    'skills.technical': 'Technical',
    'skills.soft': 'Soft Skills',

    // Skills Development
    'skills.development.items': 'Full Stack web development,Front-End development,Back-End development,RESTful APIs,Application development,Responsive interfaces',

    // Skills Technical
    'skills.technical.items': 'Problem solving,Requirements analysis,Version control (Git),Testing and debugging,Software architecture,Agile methodologies',

    // Skills Soft Skills
    'skills.soft.items': 'Effective communication,Teamwork,Continuous learning,Organization,Customer service,Adaptability',

    // Experience - Titles and Companies
    'experience.tutor.title': 'Specialist Tutor',
    'experience.tutor.company': 'CESAR School',
    'experience.tutor.location': 'Tech Track - Scholar',
    'experience.tutor.period': 'Mar 2024 - Currently',
    'experience.tutor.description': 'Developing strategic monitoring and training skills in the Tech Track program, a training opportunity for the technology market.',
    'experience.tutor.responsibilities': [
      'Mediation of pedagogical instruments to facilitate learning',
      'Application of assessment tools for academic monitoring',
      'Monitoring of classroom and laboratory activities',
      'Data collection and analysis for decision making',
      'Technical and educational support to students',
      'Preparation of progress reports and recommendations'
    ],

    'experience.freelancer.title': 'Freelance Developer',
    'experience.freelancer.company': 'Various Projects',
    'experience.freelancer.location': 'Remote Work',
    'experience.freelancer.period': 'Freelance Work',
    'experience.freelancer.description': 'Development of customized web solutions, focusing on functional and efficient front-end and back-end applications for various clients.',
    'experience.freelancer.responsibilities': [
      'Development of responsive websites and applications',
      'Creation and maintenance of RESTful APIs',
      'Integration with relational and NoSQL databases',
      'Requirements gathering with clients',
      'Project and deadline management',
      'E-commerce development (Bunito Burgues)',
      'Performance optimization and technical resolution'
    ],

    'experience.supervisor.title': 'Department Supervisor',
    'experience.supervisor.company': 'Americanas S.A.',
    'experience.supervisor.location': 'Exu, Pernambuco',
    'experience.supervisor.period': 'Mar 2023 - Mar 2025',
    'experience.supervisor.description': 'Leadership and coordination of operations in different sectors, ensuring efficient operation and team development to meet customer expectations.',
    'experience.supervisor.responsibilities': [
      'Supervision and guidance of multidepartmental teams',
      'Process optimization and sales strategies',
      'Ensuring excellence in customer service',
      'Performance monitoring and training identification',
      'Managing challenging situations and team motivation',
      'Effective communication between management and employees',
      'Maintaining organizational integrity of departments'
    ],

    'experience.activities': 'Main Activities',

    // Projects
    'projects.subtitle': 'Developments that combine creativity, technology and user experience',
    'projects.cta.interested': 'Interested in collaborating?',
    'projects.cta.button': 'Let\'s talk!',

    'projects.exudelivery.title': 'Exu Delivery',
    'projects.exudelivery.description': 'Food delivery platform with modern interface and online ordering system.',

    'projects.finance.title': 'Finance Control AI',
    'projects.finance.description': 'Financial control application with AI assistance for expense analysis.',

    'projects.cardapio.title': 'Online Menu',
    'projects.cardapio.description': 'Interactive digital menu with responsive design and optimized experience.',

    'projects.comparador.title': 'The Smart Comparator',
    'projects.comparador.description': 'Price comparison platform in supermarkets to save on purchases.',

    'projects.portfolio.title': 'Denilson Trainer Portfolio',
    'projects.portfolio.description': 'Professional website for personal trainer focused on body transformations.',

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
    
    // About - Education
    'about.education.title1': 'Formación Intensiva Privada Full Stack',
    'about.education.institution1': 'Full Stack Club',
    'about.education.year1': '2025',
    'about.education.status1': 'En progreso',
    'about.education.title2': 'Posgrado en Desarrollo Full Stack',
    'about.education.institution2': 'Universidad Estácio de Sá (UNESA)',
    'about.education.year2': '2025',
    'about.education.title3': 'Análisis y Desarrollo de Sistemas',
    'about.education.institution3': 'Universidad Estácio de Sá (UNESA)',
    'about.education.year3': '2024',
    'about.education.title4': 'Curso Técnico en Desarrollo de Sistemas',
    'about.education.institution4': 'Enseñanza Técnica Estatal (ETE)',
    'about.education.year4': '2024',

    // About - Experience
    'about.experience.title': 'Tutor Especialista',
    'about.experience.company': 'Trilha Tech - CESAR School 🚀',
    'about.experience.activity1': '🎯 Monitoreo y evaluación especializada de estudiantes',
    'about.experience.activity2': '💡 Soporte técnico avanzado para resolución de dudas',
    'about.experience.activity3': '📚 Presentación de contenido didáctico innovador',
    'about.experience.activity4': '🔥 Creación de desafíos prácticos y proyectos reales',
    'about.experience.activity5': '📊 Análisis continuo de rendimiento individual',
    'about.experience.activity6': '📈 Recopilación estratégica de datos de progreso',

    // About - Mission
    'about.mission.title': 'Misión',
    'about.mission.description': '🎯 Desarrollador visionario de 27 años, especializado en transformar conceptos complejos en soluciones digitales extraordinarias.',
    'about.mission.item1': '🚀 Análisis y arquitectura de sistemas de alto rendimiento',
    'about.mission.item2': '💎 Desarrollo full-stack con tecnologías de vanguardia',
    'about.mission.item3': '🎨 Diseño de experiencias digitales memorables',
    'about.mission.item4': '🔥 Innovación constante y aprendizaje continuo',
    'about.mission.cta': '✨ ¡Siempre abierto a nuevos desafíos y oportunidades de crecimiento! ✨',

    // Skills Categories
    'skills.development': 'Desarrollo',
    'skills.technical': 'Técnicas',
    'skills.soft': 'Habilidades Blandas',

    // Skills Development
    'skills.development.items': 'Desarrollo web Full Stack,Desarrollo Front-End,Desarrollo Back-End,APIs RESTful,Desarrollo de Aplicaciones,Interfaces responsivas',

    // Skills Technical
    'skills.technical.items': 'Resolución de problemas,Análisis de requisitos,Control de versiones (Git),Pruebas y depuración,Arquitectura de software,Metodologías ágiles',

    // Skills Soft Skills
    'skills.soft.items': 'Comunicación efectiva,Trabajo en equipo,Aprendizaje continuo,Organización,Atención al cliente,Adaptabilidad',

    // Experience - Titles and Companies
    'experience.tutor.title': 'Tutor Especialista',
    'experience.tutor.company': 'CESAR School',
    'experience.tutor.location': 'Trilha Tech - Becario',
    'experience.tutor.period': 'Mar 2024 - Actualmente',
    'experience.tutor.description': 'Desarrollando habilidades estratégicas de seguimiento y capacitación en el programa Trilha Tech, una oportunidad de formación para el mercado tecnológico.',
    'experience.tutor.responsibilities': [
      'Mediación de instrumentos pedagógicos para facilitar el aprendizaje',
      'Aplicación de instrumentos evaluativos para monitoreo académico',
      'Seguimiento de actividades presenciales y de laboratorio',
      'Recopilación y análisis de datos para toma de decisiones',
      'Soporte técnico y educacional a estudiantes',
      'Elaboración de informes de progreso y recomendaciones'
    ],

    'experience.freelancer.title': 'Desarrollador Freelancer',
    'experience.freelancer.company': 'Proyectos Diversos',
    'experience.freelancer.location': 'Trabajo Remoto',
    'experience.freelancer.period': 'Trabajo Freelancer',
    'experience.freelancer.description': 'Desarrollo de soluciones web personalizadas, enfocándose en aplicaciones front-end y back-end funcionales y eficientes para diversos clientes.',
    'experience.freelancer.responsibilities': [
      'Desarrollo de sitios web y aplicaciones responsivas',
      'Creación y mantenimiento de APIs RESTful',
      'Integración con bases de datos relacionales y NoSQL',
      'Levantamiento de requisitos con clientes',
      'Gestión de proyectos y plazos',
      'Desarrollo de e-commerce (Bunito Burgues)',
      'Optimización de rendimiento y resolución técnica'
    ],

    'experience.supervisor.title': 'Supervisor de Departamento',
    'experience.supervisor.company': 'Americanas S.A.',
    'experience.supervisor.location': 'Exu, Pernambuco',
    'experience.supervisor.period': 'Mar 2023 - Mar 2025',
    'experience.supervisor.description': 'Liderazgo y coordinación de operaciones en diferentes sectores, garantizando funcionamiento eficiente y desarrollo de equipos para atender expectativas de clientes.',
    'experience.supervisor.responsibilities': [
      'Supervisión y orientación de equipos multidepartamentales',
      'Optimización de procesos y estrategias de ventas',
      'Garantía de excelencia en atención al cliente',
      'Monitoreo de rendimiento e identificación de entrenamientos',
      'Gestión de situaciones desafiantes y motivación de equipos',
      'Comunicación efectiva entre gerencia y colaboradores',
      'Mantenimiento de integridad organizacional de departamentos'
    ],

    'experience.activities': 'Principales Actividades',

    // Projects
    'projects.subtitle': 'Desarrollos que combinan creatividad, tecnología y experiencia del usuario',
    'projects.cta.interested': '¿Interesado en colaborar?',
    'projects.cta.button': '¡Hablemos!',

    'projects.exudelivery.title': 'Exu Delivery',
    'projects.exudelivery.description': 'Plataforma de delivery de comida con interfaz moderna y sistema de pedidos online.',

    'projects.finance.title': 'Control Finance AI',
    'projects.finance.description': 'Aplicación para control financiero con ayuda de IA para análisis de gastos.',

    'projects.cardapio.title': 'Menú Online',
    'projects.cardapio.description': 'Menú digital interactivo con diseño responsivo y experiencia optimizada.',

    'projects.comparador.title': 'El Comparador Inteligente',
    'projects.comparador.description': 'Plataforma de comparación de precios en supermercados para ahorrar en compras.',

    'projects.portfolio.title': 'Portfolio Denilson Entrenador',
    'projects.portfolio.description': 'Sitio web profesional para entrenador personal enfocado en transformaciones corporales.',

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