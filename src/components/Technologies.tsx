
import { useLanguage } from '@/hooks/useLanguage';

const Technologies = () => {
  const { t } = useLanguage();
  const frontendTechs = [
    { name: 'JavaScript', icon: '📜' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'React.js', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Vue.js', icon: '🟢' },
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
  ];

  const backendTechs = [
    { name: 'Node.js', icon: '🟢' },
    { name: 'Java', icon: '☕' },
    { name: 'MySQL', icon: '🐬' },
    { name: 'SQL Server', icon: '🗄️' },
    { name: 'NoSQL', icon: '📊' },
    { name: 'Postman', icon: '🚀' },
  ];

  const toolsTechs = [
    { name: 'Git', icon: '📝' },
    { name: 'VS Code', icon: '💻' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'Metodologias Ágeis', icon: '🔄' },
  ];

  return (
    <section id="technologies" className="bg-background">
      <div className="container">
        <h2 className="section-title">{t('technologies.title')}</h2>
        
        <div className="space-y-12">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">{t('technologies.frontend')}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {frontendTechs.map((tech) => (
                <div key={tech.name} className="tech-icon">
                  <span className="text-4xl mb-2">{tech.icon}</span>
                  <span className="font-medium text-foreground">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">{t('technologies.backend')}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {backendTechs.map((tech) => (
                <div key={tech.name} className="tech-icon">
                  <span className="text-4xl mb-2">{tech.icon}</span>
                  <span className="font-medium text-foreground">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '400ms' }}>
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">{t('technologies.tools')}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {toolsTechs.map((tech) => (
                <div key={tech.name} className="tech-icon">
                  <span className="text-4xl mb-2">{tech.icon}</span>
                  <span className="font-medium text-foreground">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
