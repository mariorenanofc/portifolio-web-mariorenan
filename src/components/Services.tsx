
import { Code, Globe, Server } from 'lucide-react';

const Services = () => {
  const servicesList = [
    {
      icon: <Code className="text-primary" size={36} />,
      title: "Desenvolvimento Web",
      description: "Criação de sites e aplicações web modernas, responsivas e de alta performance utilizando as tecnologias mais recentes do mercado."
    },
    {
      icon: <Globe className="text-primary" size={36} />,
      title: "Front-End",
      description: "Desenvolvimento de interfaces de usuário atraentes e funcionais utilizando HTML, CSS, JavaScript, React, Vue.js e Next.js."
    },
    {
      icon: <Server className="text-primary" size={36} />,
      title: "Back-End",
      description: "Criação de APIs robustas e seguras, integração com bancos de dados e implementação de lógica de negócios utilizando Node.js, Java e SQL."
    }
  ];

  return (
    <section id="services" className="bg-white">
      <div className="container">
        <h2 className="section-title">Meus Serviços</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div 
              key={service.title}
              className="bg-secondary rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
