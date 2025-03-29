
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projectsList = [
    {
      title: "Portfolio Pessoal",
      description: "Meu website de portfolio pessoal desenvolvido com React e Tailwind CSS.",
      tech: ["React", "Tailwind CSS", "Vite"],
      github: "https://github.com/mariorenanofc/mariorenandev-portifolio",
      live: "#"
    },
    {
      title: "E-commerce Moderno",
      description: "Uma plataforma de e-commerce com recursos avançados de filtragem e carrinhos de compras.",
      tech: ["Next.js", "Node.js", "MongoDB"],
      github: "https://github.com/mariorenanofc",
      live: "#"
    },
    {
      title: "Dashboard Administrativo",
      description: "Um dashboard administrativo com visualização de dados e gerenciamento de usuários.",
      tech: ["Vue.js", "Express", "SQL Server"],
      github: "https://github.com/mariorenanofc",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="bg-blue-50">
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
                      className="text-xs font-medium bg-blue-100 text-blue-600 px-2 py-1 rounded"
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
                    className="text-gray-700 hover:text-blue-600 transition-colors flex items-center"
                  >
                    <Github size={18} className="mr-1" /> 
                    <span>GitHub</span>
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600 transition-colors flex items-center"
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
