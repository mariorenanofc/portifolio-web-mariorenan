import { CalendarDays, Briefcase, MapPin } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const Experience = () => {
  const experiences = [
    {
      title: "Tutor Especialista",
      company: "CESAR School",
      location: "Trilha Tech - Bolsista",
      period: "Mar 2024 - Atualmente",
      color: "from-primary/10 to-cyber/10",
      borderColor: "border-primary/20",
      iconBg: "bg-gradient-primary",
      description: "Desenvolvendo habilidades estratégicas de acompanhamento e capacitação no programa Trilha Tech, uma oportunidade de formação para o mercado de tecnologia.",
      responsibilities: [
        "Mediação de instrumentos pedagógicos para facilitar aprendizagem",
        "Aplicação de instrumentos avaliativos para monitoramento acadêmico",
        "Acompanhamento de atividades presenciais e em laboratório",
        "Coleta e análise de dados para tomada de decisão",
        "Suporte técnico e educacional aos estudantes",
        "Elaboração de relatórios de progresso e recomendações"
      ]
    },
    {
      title: "Desenvolvedor Freelancer",
      company: "Projetos Diversos",
      location: "Atuação Remota",
      period: "Atuação Freelancer",
      color: "from-cyber/10 to-gold/10",
      borderColor: "border-cyber/20",
      iconBg: "bg-gradient-cyber",
      description: "Desenvolvimento de soluções web personalizadas, focando em aplicações front-end e back-end funcionais e eficientes para diversos clientes.",
      responsibilities: [
        "Desenvolvimento de websites e aplicações responsivas",
        "Criação e manutenção de APIs RESTful",
        "Integração com bancos de dados relacionais e NoSQL",
        "Levantamento de requisitos junto aos clientes",
        "Gerenciamento de projetos e prazos",
        "Desenvolvimento de e-commerce (Bunito Burgues)",
        "Otimização de performance e resolução técnica"
      ]
    },
    {
      title: "Supervisor de Departamento",
      company: "Americanas S.A.",
      location: "Exu, Pernambuco",
      period: "Mar 2023 - Mar 2025",
      color: "from-gold/10 to-primary/10",
      borderColor: "border-gold/20",
      iconBg: "bg-gradient-gold",
      description: "Liderança e coordenação de operações em diferentes setores, garantindo funcionamento eficiente e desenvolvimento de equipes para atender expectativas dos clientes.",
      responsibilities: [
        "Supervisão e orientação de equipes multidepartamentais",
        "Otimização de processos e estratégias de vendas",
        "Garantia da excelência no atendimento ao cliente",
        "Monitoramento de performance e identificação de treinamentos",
        "Gestão de situações desafiadoras e motivação de equipes",
        "Comunicação eficaz entre gerência e colaboradores",
        "Manutenção da integridade organizacional dos departamentos"
      ]
    }
  ];

  return (
    <section id="experience" className="relative bg-background overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float-random"></div>
        <div className="absolute bottom-32 right-10 w-80 h-80 bg-cyber/5 rounded-full blur-3xl animate-float-random" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container relative">
        <h2 className="section-title">
          💼 Experiência <span className="text-primary">Profissional</span>
        </h2>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {experiences.map((exp, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full lg:basis-1/2 xl:basis-1/3">
                <div 
                  className="animate-slide-up-fade h-full" 
                  style={{ animationDelay: `${(index + 1) * 150}ms` }}
                >
                  <div className={`glass-card rounded-3xl p-6 lg:p-8 transition-all duration-500 hover:scale-105 border-2 ${exp.borderColor} bg-gradient-to-br ${exp.color} h-full flex flex-col`}>
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`p-3 ${exp.iconBg} rounded-2xl flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <Briefcase size={24} className="text-primary-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2 font-display">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-semibold text-lg mb-1">
                          {exp.company}
                        </p>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <CalendarDays size={14} />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-6 flex-grow">
                      <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                        {exp.description}
                      </p>
                    </div>

                    {/* Responsibilities */}
                    <div className="space-y-4">
                      <h4 className="font-bold text-cyber text-lg flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Principais Atividades
                      </h4>
                      <div className="space-y-2 max-h-48 overflow-y-auto">
                        {exp.responsibilities.map((item, idx) => (
                          <div 
                            key={idx} 
                            className="flex items-start gap-3 p-3 rounded-xl bg-card/20 hover:bg-card/40 transition-all duration-300 group/item"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground text-sm group-hover/item:text-foreground transition-colors">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="relative translate-y-0 left-0 glass-card border-primary/20 hover:bg-primary/10" />
            <CarouselNext className="relative translate-y-0 right-0 glass-card border-primary/20 hover:bg-primary/10" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Experience;
