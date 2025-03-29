
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonialsList = [
    {
      name: "Ana Silva",
      role: "CEO, TechStart",
      content: "Mário desenvolveu um site excepcional para nossa empresa. Sua atenção aos detalhes e habilidade técnica são impressionantes. Recomendo fortemente seus serviços.",
      rating: 5
    },
    {
      name: "Carlos Oliveira",
      role: "Gerente de Projeto, InnovaSoft",
      content: "Trabalhamos com Mário em vários projetos e sua dedicação e qualidade de trabalho sempre superam nossas expectativas. Um profissional realmente talentoso.",
      rating: 5
    },
    {
      name: "Juliana Santos",
      role: "Designer, CreativeMinds",
      content: "A colaboração com Mário foi uma experiência excelente. Ele é um desenvolvedor habilidoso que entende perfeitamente como transformar designs em código funcional.",
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      <Star 
        key={index} 
        size={16} 
        className={index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
      />
    ));
  };

  return (
    <section id="testimonials" className="bg-white">
      <div className="container">
        <h2 className="section-title">Depoimentos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsList.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="bg-blue-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow animate-slide-up relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="absolute text-blue-200 top-4 right-4" size={40} />
              
              <div className="flex items-center mb-4">
                <div className="flex">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 relative z-10">{testimonial.content}</p>
              
              <div className="mt-auto">
                <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
