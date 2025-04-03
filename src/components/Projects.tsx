
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projectsList = [
    {
      title: "Exu Delivery",
      description: "Plataforma de delivery de comida.",
      tech: ["Next.js", "Tailwind CSS", "Lucide", "React", "NextAuth.js"],
      github: "https://github.com/mariorenanofc/fsw-foods",
      live: "http://exudelivery.vercel.app/"
    },
    {
      title: "Controle Finance AI",
      description: "Aplicação para controle financeiro com auxílio de IA.",
      tech: ["Next.js", "React", "Tailwind CSS", "Webpack", "Node.js"], 
      github: "https://github.com/mariorenanofc/controle-finance-ai",
      live: "https://controle-finance-ai.vercel.app/login"
    },
    {
      title: "Cardápio Online",
      description: "Cardápio digital interativo.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/mariorenanofc/cardapio-online",
      live: "https://mariorenanofc.github.io/cardapio-online/index.html"
    }
  ];

  return (
    <section id="projects" className="bg-secondary">
      <div className="container">
        <h2 className="section-title">Projetos Recentes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, index) => (
            <div 
              key={project.title}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <span 
                      key={tech} 
                      className="text-xs font-medium bg-secondary text-primary px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-auto">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-primary transition-colors flex items-center"
                  >
                    <Github size={18} className="mr-1" /> 
                    <span>GitHub</span>
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-primary transition-colors flex items-center"
                  >
                    <ExternalLink size={18} className="mr-1" /> 
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
