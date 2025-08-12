import { CalendarDays, Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="bg-white">
      {" "}
      {/* Mudado para experience */}
      <div className="container">
        <h2 className="section-title">Experiência Profissional</h2>

        <div className="overflow-hidden">
          <div className="flex gap-8 animate-scroll-horizontal-experience pb-4">
            {/* Timeline container */}
            <div className="relative pl-8 border-l-2 border-teal-200 min-w-[800px] flex flex-col">
            {/* --- Experiência Tutor CESAR School --- */}
            <div
              className="mb-10 relative animate-slide-up"
              style={{ animationDelay: "100ms" }}
            >
              <div className="absolute -left-[26px] top-0 h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center border-4 border-white shadow-md">
                <Briefcase className="text-primary" size={20} />
              </div>
              <div className="bg-orange-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow ml-6">
                <div className="flex items-center mb-2">
                  <CalendarDays className="text-primary mr-2" size={18} />
                  <span className="text-sm text-gray-500">
                    Mar 2024 - Atualmente
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-800">Tutor</h3>
                <p className="text-gray-600 font-medium">
                  CESAR School - bolsista
                </p>

                <div className="mt-4 text-gray-700 text-sm">
                  <p className="mb-3 leading-relaxed">
                    No processo de estágio, estou desenvolvendo habilidades e
                    estratégias de acompanhar e desenvolver os alunos no
                    programa Trilha Tech, uma oportunidade de capacitação para o
                    mercado de tecnologia.
                  </p>

                  <h4 className="font-semibold text-primary mt-4 mb-2">
                    Responsabilidades:
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>
                      Mediar aplicação de instrumentos pedagógicos para
                      facilitar a aprendizagem.
                    </li>
                    <li>
                      Aplicar instrumentos avaliativos para monitorar o
                      progresso acadêmico.
                    </li>
                    <li>Acompanhar atividades presenciais e em laboratório.</li>
                    <li>
                      Coletar dados relevantes do projeto para análise e tomada
                      de decisão.
                    </li>
                    <li>
                      Prestar suporte aos estudantes, esclarecendo dúvidas sobre
                      o conteúdo.
                    </li>
                    <li>
                      Oferecer suporte técnico para equipamentos e recursos
                      educacionais.
                    </li>
                    <li>
                      Elaborar relatórios sobre o progresso do projeto e
                      recomendações.
                    </li>
                  </ul>

                  {/* <h4 className="font-semibold text-primary mt-4 mb-2">Realizações:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Contribuição para melhorias nos processos internos de atendimento ao cliente</li>
                    <li>Participação no desenvolvimento de soluções para otimizar o fluxo de trabalho</li>
                    <li>Aprendizado prático de tecnologias utilizadas no mercado</li>
                  </ul> */}
                </div>
              </div>
            </div>
            {/* --- Fim Experiência Tutor --- */}

            {/* --- Experiência Freelancer --- */}
            <div
              className="mb-10 relative animate-slide-up"
              style={{ animationDelay: "200ms" }}
            >
              {/* Ícone (mantido) */}
              <div className="absolute -left-[26px] top-0 h-12 w-12 rounded-full bg-red-100 flex items-center justify-center border-4 border-white shadow-md">
                <Briefcase className="text-primary" size={20} />
              </div>
              {/* Card da Experiência (Modificado) */}
              <div className="bg-red-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow ml-6">
                <div className="flex items-center mb-2">
                  <CalendarDays className="text-primary mr-2" size={18} />
                  {/* Você pode ajustar o período se souber quando atuou como freelancer */}
                  <span className="text-sm text-gray-500">
                     Atuação Freelancer
                  </span>
                </div>

                {/* Título Modificado */}
                <h3 className="text-xl font-semibold text-gray-800">
                  Desenvolvedor Freelancer
                </h3>
                {/* Empresa removida ou pode colocar "Projetos Diversos" */}
                <p className="text-gray-600 font-medium">Projetos Diversos</p>

                {/* Descrição Modificada */}
                <div className="mt-4 text-gray-700 text-sm">
                  <p className="mb-3 leading-relaxed">
                    Atuo como desenvolvedor freelancer, criando soluções web
                    personalizadas para diversos clientes. Foco em
                    desenvolvimento front-end e back-end, entregando projetos
                    funcionais e eficientes.
                  </p>

                  {/* Responsabilidades Modificadas */}
                  <h4 className="font-semibold text-primary mt-4 mb-2">
                    Principais Atividades:
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>
                      Desenvolvimento de websites e aplicações web responsivas.
                    </li>
                    <li>Criação e manutenção de APIs RESTful.</li>
                    <li>Integração com bancos de dados relacionais e NoSQL.</li>
                    <li>Levantamento de requisitos junto aos clientes.</li>
                    <li>Gerenciamento de projetos e prazos.</li>
                    <li>Manutenção e atualização de sistemas existentes.</li>
                    <li>
                      Resolução de problemas técnicos e otimização de
                      performance.
                    </li>
                    <li>
                      Desenvolvimento de e-commerce para Bunito burgues.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* --- Fim Experiência Freelancer --- */}

            {/* --- Experiência Americanas S.A. --- */}
            <div className="mb-10 relative animate-slide-up">
              {/* Ícone na linha do tempo */}
              <div className="absolute -left-[26px] top-0 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center border-4 border-white shadow-md">
                <Briefcase className="text-primary" size={20} />
              </div>
              {/* Card da Experiência */}
              <div className="bg-blue-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow ml-6">
                {/* Data */}
                <div className="flex items-center mb-2">
                  <CalendarDays className="text-primary mr-2" size={18} />
                  <span className="text-sm text-gray-500">
                    Mar 2023 - Mar 2025 (2 anos 1 mês)
                  </span>
                </div>
                {/* Cargo e Empresa */}
                <h3 className="text-xl font-semibold text-gray-800">
                  Supervisor de departamento
                </h3>
                <p className="text-gray-600 font-medium">
                  americanas s.a. - Exu, Pernambuco (Presencial)
                </p>
                {/* Descrição e Detalhes */}
                <div className="mt-4 text-gray-700 text-sm">
                  <p className="mb-3 leading-relaxed">
                    Como supervisor de departamentos nas Americanas S.A, liderei
                    e coordenei as operações de diferentes setores da loja para
                    garantir um funcionamento eficiente e atender às
                    expectativas dos clientes. Assumi responsabilidades
                    abrangentes, desempenhando um papel essencial na gestão e no
                    desenvolvimento da equipe.
                  </p>

                  <h4 className="font-semibold text-primary mt-4 mb-2">
                    Principais Atividades:
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>
                      Supervisão e orientação de membros da equipe nos diversos
                      departamentos.
                    </li>
                    <li>
                      Otimização de processos e implementação de estratégias de
                      vendas em conjunto com gerentes.
                    </li>
                    <li>Garantia da excelência no atendimento ao cliente.</li>
                    <li>
                      Monitoramento do desempenho das equipes e identificação de
                      necessidades de treinamento.
                    </li>
                    <li>Contribuição para um ambiente de trabalho positivo.</li>
                    <li>
                      Participação na resolução de problemas e tomada de
                      decisões estratégicas.
                    </li>
                    <li>
                      Manutenção de comunicação eficaz com gerência e
                      colaboradores.
                    </li>
                    <li>
                      Gestão de situações desafiadoras e motivação da equipe
                      para alcançar metas.
                    </li>
                    <li>
                      Asseguração da integridade e organização dos
                      departamentos.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* --- Fim Experiência Americanas S.A. --- */}

              {/* Ponto final da linha do tempo */}
              <div className="absolute bottom-0 -left-[11px] h-6 w-6 rounded-full bg-primary animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
