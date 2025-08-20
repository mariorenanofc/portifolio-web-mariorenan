
import { CheckCircle, Code, Lightbulb, Users } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const Skills = () => {
  const { t } = useLanguage();
  const skills = [
    { 
      category: t('skills.development'),
      icon: Code,
      gradient: 'from-blue-500 to-purple-500',
      items: (t('skills.development.items') as string).split(',')
    },
    { 
      category: t('skills.technical'),
      icon: Lightbulb,
      gradient: 'from-green-500 to-teal-500',
      items: (t('skills.technical.items') as string).split(',')
    },
    { 
      category: t('skills.soft'),
      icon: Users,
      gradient: 'from-pink-500 to-rose-500',
      items: (t('skills.soft.items') as string).split(',')
    },
  ];

  return (
    <section id="skills" className="bg-secondary">
      <div className="container">
        <h2 className="section-title">{t('skills.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => {
            const Icon = skillGroup.icon;
            return (
              <div 
                key={skillGroup.category}
                className="group glass-card rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 animate-scale-in transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Gradient border effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${skillGroup.gradient} rounded-xl opacity-0 group-hover:opacity-75 blur transition-all duration-500`}></div>
                
                <div className="relative">
                  {/* Icon header */}
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${skillGroup.gradient} text-white mr-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-primary group-hover:text-foreground transition-colors duration-300">
                      {skillGroup.category}
                    </h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {skillGroup.items.map((item, itemIndex) => (
                      <li 
                        key={item} 
                        className="flex items-start animate-slide-in-left"
                        style={{ animationDelay: `${(index * 200) + (itemIndex * 100)}ms` }}
                      >
                        <CheckCircle className="text-primary mr-3 flex-shrink-0 mt-1 transform group-hover:scale-110 transition-transform duration-300" size={18} />
                        <span className="text-foreground group-hover:text-card-foreground transition-colors duration-300 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
