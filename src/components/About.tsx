import { GraduationCap, Briefcase, Code } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="bg-white relative overflow-hidden">
      {/* About Background Animation */}
      <div className="about-waves"></div>
      <div className="container">
        <h2 className="section-title">Sobre Mim</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-secondary rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow animate-slide-up">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-primary text-white rounded-lg mr-4">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl font-semibold">Formação</h3>
            </div>
            <ul className="space-y-4">
              <li>
                <p className="font-medium">
                  Pós-Graduação em Desenvolvimento Full Stack
                </p>
                <p className="text-gray-600">
                  Universidade Estácio de Sá (UNESA) - 2025
                </p>
              </li>
              <li>
                <p className="font-medium">
                  Análise e Desenvolvimento de Sistemas
                </p>
                <p className="text-gray-600">
                  Universidade Estácio de Sá (UNESA) - 2024
                </p>
              </li>
              <li>
                <p className="font-medium">
                  Curso Técnico em Desenvolvimento de Sistemas
                </p>
                <p className="text-gray-600">
                  Ensino Técnico Estatual (ETE) - 2024
                </p>
              </li>
            </ul>
          </div>

          <div className="bg-secondary rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow animate-slide-up [animation-delay:200ms]">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-primary text-white rounded-lg mr-4">
                <Briefcase size={24} />
              </div>
              <h3 className="text-xl font-semibold">Experiência</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-medium">Tutor</p>
                <p className="text-gray-600">
                  Trilha Tech - CESAR School
                </p>
                <ul className="list-disc ml-5 mt-2 text-gray-600">
                  <li>Monitorar a avaliar os alunos do curso</li>
                  <li>Suporte aos alunos com suas dúvidas sobre o conteúdo</li>
                  <li>Garantir que o conteúdo da aula seja apresentado para os alunos</li>
                  <li>Aplicar desafios e pequenos projetos para avaliar o aprendizado dos alunos.</li>
                  <li>Análise constinua de aprendizado individual de cada aluno.</li>
                  <li>Levantamento de dados dos alunos ao decorrer do projeto.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-secondary rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow animate-slide-up [animation-delay:400ms]">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-primary text-white rounded-lg mr-4">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-semibold">Sobre</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Sou um desenvolvedor com 27 anos e paixão por criar soluções web
              inovadoras e eficientes. Busco constantemente o aperfeiçoamento
              profissional e o aprendizado de novas linguagens e frameworks.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Minha experiência inclui a análise e detalhamento de requisitos
              para o desenvolvimento e sustentação de plataformas, demonstrando
              minha capacidade de contribuir em todas as fases do ciclo de vida
              do software.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Estou sempre aberto a novas oportunidades e desafios que me
              permitam crescer profissionalmente e contribuir com meu
              conhecimento técnico.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
