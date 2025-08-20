
import { Code, Globe, Server } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const Services = () => {
  const { t } = useLanguage();
  
  const servicesList = [
    {
      icon: <Code className="text-primary" size={36} />,
      title: t('services.web.title'),
      description: t('services.web.description')
    },
    {
      icon: <Globe className="text-primary" size={36} />,
      title: t('services.frontend.title'),
      description: t('services.frontend.description')
    },
    {
      icon: <Server className="text-primary" size={36} />,
      title: t('services.backend.title'),
      description: t('services.backend.description')
    }
  ];

  return (
    <section id="services" className="bg-background">
      <div className="container">
        <h2 className="section-title">{t('services.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div 
              key={service.title}
              className="glass-card rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
