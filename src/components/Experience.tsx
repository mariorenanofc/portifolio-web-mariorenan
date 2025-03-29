
import { CalendarDays, Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="bg-white">
      <div className="container">
        <h2 className="section-title">Experiência Profissional</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 border-l-2 border-teal-200">
            <div className="mb-10 relative animate-slide-up">
              <div className="absolute -left-[26px] top-0 h-12 w-12 rounded-full bg-secondary flex items-center justify-center border-4 border-white shadow-md">
                <Briefcase className="text-primary" size={20} />
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow ml-6">
                <div className="flex items-center mb-2">
                  <CalendarDays className="text-primary mr-2" size={18} />
                  <span className="text-gray-500">Período não especificado</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800">Estagiário em Desenvolvimento</h3>
                <p className="text-gray-600 font-medium">Infor Bacural - Assistência Técnica</p>
                
                <div className="mt-4 text-gray-700">
                  <p className="mb-2">
                    Durante meu estágio, tive a oportunidade de adquirir experiência em diversos aspectos relacionados à assistência técnica e desenvolvimento de sistemas.
                  </p>
                  
                  <h4 className="font-medium text-primary mt-4 mb-2">Responsabilidades:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Realização de manutenção de aparelhos eletrônicos</li>
                    <li>Fornecimento de suporte técnico aos clientes</li>
                    <li>Atualização de sistemas operacionais e aplicativos</li>
                    <li>Auxílio no desenvolvimento e implementação de novas tecnologias e ferramentas</li>
                    <li>Participação ativa em reuniões de projetos</li>
                    <li>Identificação e análise de requisitos para desenvolvimento de sistemas</li>
                    <li>Colaboração em iniciativas para aumentar a eficiência e qualidade dos serviços</li>
                  </ul>
                  
                  <h4 className="font-medium text-primary mt-4 mb-2">Realizações:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Contribuição para melhorias nos processos internos de atendimento ao cliente</li>
                    <li>Participação no desenvolvimento de soluções para otimizar o fluxo de trabalho</li>
                    <li>Aprendizado prático de tecnologias utilizadas no mercado</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-0 -left-[11px] h-6 w-6 rounded-full bg-primary animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
