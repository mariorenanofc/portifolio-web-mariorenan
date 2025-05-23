
import { CheckCircle } from 'lucide-react';

const Skills = () => {
  const skills = [
    { 
      category: 'Desenvolvimento',
      items: [
        'Desenvolvimento web Full Stack',
        'Desenvolvimento Front-End',
        'Desenvolvimento Back-End',
        'APIs RESTful',
        'Desenvolvimento de Aplicações',
        'Interfaces responsivas'
      ] 
    },
    { 
      category: 'Técnicas',
      items: [
        'Resolução de problemas',
        'Análise de requisitos',
        'Controle de versão (Git)',
        'Testes e depuração',
        'Arquitetura de software',
        'Metodologias ágeis'
      ] 
    },
    { 
      category: 'Soft Skills',
      items: [
        'Comunicação eficaz',
        'Trabalho em equipe',
        'Aprendizado contínuo',
        'Organização',
        'Atendimento ao cliente',
        'Adaptabilidade'
      ] 
    },
  ];

  return (
    <section id="skills" className="bg-secondary">
      <div className="container">
        <h2 className="section-title">Minhas Habilidades</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div 
              key={skillGroup.category}
              className="glass-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold text-primary mb-4">{skillGroup.category}</h3>
              <ul className="space-y-3">
                {skillGroup.items.map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle className="text-primary mr-2 flex-shrink-0 mt-1" size={18} />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
