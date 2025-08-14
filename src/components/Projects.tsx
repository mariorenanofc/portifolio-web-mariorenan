
import { ExternalLink, Github, ShoppingCart, Calculator, BookOpen, Search, User } from 'lucide-react';
import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const projectsList = [
    {
      title: "Exu Delivery",
      description: "Plataforma de delivery de comida com interface moderna e sistema de pedidos online.",
      tech: ["Next.js", "Tailwind CSS", "Lucide", "React", "NextAuth.js"],
      github: "https://github.com/mariorenanofc/fsw-foods",
      live: "http://exudelivery.vercel.app/",
      icon: ShoppingCart,
      gradient: "from-red-500 to-orange-500"
    },
    {
      title: "Controle Finance AI",
      description: "Aplicação para controle financeiro com auxílio de IA para análise de gastos.",
      tech: ["Next.js", "React", "Tailwind CSS", "Webpack", "Node.js"], 
      github: "https://github.com/mariorenanofc/controle-finance-ai",
      live: "https://controle-finance-ai.vercel.app/login",
      icon: Calculator,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Cardápio Online",
      description: "Cardápio digital interativo com design responsivo e experiência otimizada.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/mariorenanofc/cardapio-online",
      live: "https://mariorenanofc.github.io/cardapio-online/index.html",
      icon: BookOpen,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "O Esperto Comparador",
      description: "Plataforma de comparação de preços em supermercados para economizar nas compras.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Lovable", "Web APIs"],
      github: "https://github.com/mariorenanofc/o-esperto-comparador",
      live: "https://preview--o-esperto-comparador.lovable.app/",
      icon: Search,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Portfolio Denilson Treinador",
      description: "Site profissional para personal trainer com foco em transformações corporais.",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      github: "https://github.com/mariorenanofc/portfolio-denilson",
      live: "http://portifolio-denilson-lima.vercel.app/",
      icon: User,
      gradient: "from-yellow-500 to-red-500"
    }
  ];

  return (
    <section id="projects" className="bg-secondary/50 backdrop-blur-sm relative overflow-hidden">
      {/* Projects Background Animation */}
      <div className="projects-grid"></div>
      
      {/* Background animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title animate-slide-up">
            Projetos <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Inovadores</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            Desenvolvimentos que combinam criatividade, tecnologia e experiência do usuário
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {projectsList.map((project, index) => {
              const Icon = project.icon;
              return (
                <CarouselItem key={project.title} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div 
                    className="group relative project-card animate-fade-in h-full"
                    style={{ animationDelay: `${index * 200}ms` }}
                    onMouseEnter={() => setHoveredProject(index)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Gradient border on hover */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-xl opacity-0 group-hover:opacity-75 blur transition-all duration-500 group-hover:blur-sm`}></div>
                    
                    <div className="relative bg-card rounded-xl p-4 md:p-6 h-full flex flex-col">
                      {/* Icon header with animation */}
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-2 md:p-3 rounded-lg bg-gradient-to-r ${project.gradient} text-white transform transition-all duration-300 ${hoveredProject === index ? 'scale-110 rotate-12' : ''}`}>
                          <Icon size={20} className="md:w-6 md:h-6" />
                        </div>
                        <div className="text-xs md:text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          #{index + 1}
                        </div>
                      </div>

                      <h3 className="text-lg md:text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 flex-grow leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Tech stack with enhanced styling */}
                      <div className="flex flex-wrap gap-1 md:gap-2 mb-4 md:mb-6">
                        {project.tech.map((tech, techIndex) => (
                          <span 
                            key={tech} 
                            className="tech-tag text-xs md:text-sm"
                            style={{ animationDelay: `${(index * 150) + (techIndex * 50)}ms` }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {/* Action buttons with hover effects */}
                      <div className="flex flex-col sm:flex-row gap-2 md:gap-4 mt-auto">
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-3 md:px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm md:text-base"
                        >
                          <Github size={16} className="md:w-[18px] md:h-[18px] icon-hover" /> 
                          <span className="font-medium">GitHub</span>
                        </a>
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-3 md:px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/25 text-sm md:text-base"
                        >
                          <ExternalLink size={16} className="md:w-[18px] md:h-[18px] icon-hover" /> 
                          <span className="font-medium">Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        {/* Call to action */}
        <div className="text-center mt-12 md:mt-16">
          <div className="inline-block p-4 md:p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl backdrop-blur-sm border border-primary/20 animate-glow">
            <p className="text-base md:text-lg font-medium mb-3 md:mb-4">Interessado em colaborar?</p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm md:text-base"
            >
              Vamos conversar!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
