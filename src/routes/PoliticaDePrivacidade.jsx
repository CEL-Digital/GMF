import { useState } from "react";

export function PoliticaDePrivacidade() {
  const [activeSection, setActiveSection] = useState("coleta");

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        
        {/* CABEÇALHO */}
        <div className="border-b border-zinc-200 pb-8 mb-12">
          <h1 className="font-news text-3xl md:text-5xl font-semibold text-zinc-950 mt-3">
            Política de Privacidade
          </h1>
          <p className="text-sm text-zinc-500 mt-3">
            Última atualização: {new Date().toLocaleDateString("pt-BR", { month: "long", year: "numeric" })}
          </p>
        </div>

        {/* RESUMO EXECUTIVO (DESTAQUE BENTO-STYLE) */}
        <div className="bg-white border border-zinc-200 rounded-3xl p-6 md:p-8 shadow-sm mb-12">
          <h3 className="font-news text-lg font-semibold text-zinc-950 mb-2">
            Resumo
          </h3>
          <p className="text-sm text-zinc-600">
            O GMF Advogados coleta apenas as informações estritamente necessárias para realizar seu atendimento jurídico, responder a dúvidas de contato e cumprir obrigações legais. ***Não vendemos nem compartilhamos seus dados pessoais*** com terceiros para fins de marketing.
          </p>
        </div>

        {/* LAYOUT EM DUAS COLUNAS (SUMÁRIO + CONTEÚDO) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* MENU LATERAL FIXO / ANCORAGEM (DESKTOP) */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-28 space-y-2 bg-white border border-zinc-200/80 rounded-2xl p-4 shadow-sm text-sm">
              <span className="text-xs font-news font-semibold text-zinc-400 block px-3 py-1">
                Tópicos
              </span>
              {[
                { id: "coleta", label: "1. Dados Coletados" },
                { id: "uso", label: "2. Uso das Informações" },
                { id: "compartilhamento", label: "3. Compartilhamento" },
                { id: "direitos", label: "4. Seus Direitos (LGPD)" },
                { id: "contato-dpo", label: "5. Encarregado (DPO)" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-3 py-2 rounded-xl transition-all font-medium text-xs ${
                    activeSection === item.id
                      ? "font-news shadow-sm"
                      : "font-news text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </aside>

          {/* CONTEÚDO PRINCIPAL */}
          <main className="lg:col-span-8 space-y-12 text-zinc-700 text-sm">
            
            <section id="coleta" className="scroll-mt-28 space-y-3">
              <h2 className="font-news text-xl font-semibold text-zinc-950">
                1. Quais dados coletamos?
              </h2>
              <p className="text-zinc-600">
                Coletamos informações fornecidas voluntariamente por você ao preencher nossos formulários de contato, agendar consultas ou entrar em contato via WhatsApp:
              </p>
              <ul className="list-disc pl-5 text-zinc-600">
                <li>Nome completo;</li>
                <li>E-mail e telefone de contato;</li>
                <li>Informações do caso enviadas no campo de mensagem;</li>
                <li>Dados de navegação anônimos (cookies para estatísticas de acesso).</li>
              </ul>
            </section>

            <section id="uso" className="scroll-mt-28 space-y-3">
              <h2 className="font-news text-xl font-semibold text-zinc-950">
                2. Como utilizamos seus dados?
              </h2>
              <p className="text-zinc-600">
                Os dados são utilizados exclusivamente para as seguintes finalidades:
              </p>
              <ul className="list-disc pl-5 text-zinc-600">
                <li>Dar retorno às suas solicitações de orçamento e atendimento;</li>
                <li>Prestação de serviços advocatícios e assessoria jurídica;</li>
                <li>Cumprimento de obrigações legais ou regulatórias;</li>
                <li>Melhoria contínua da experiência de navegação do nosso site.</li>
              </ul>
            </section>

            <section id="compartilhamento" className="scroll-mt-28 space-y-3">
              <h2 className="font-news text-xl font-semibold text-zinc-950">
                3. Compartilhamento de dados
              </h2>
              <p className="text-zinc-600">
                O sigilo profissional é a base da advocacia. Seus dados pessoais não são comercializados. O compartilhamento ocorre apenas com plataformas estritamente necessárias para a prestação do serviço (como sistemas de processo eletrônico do Judiciário) ou por ordem judicial.
              </p>
            </section>

            <section id="direitos" className="scroll-mt-28 space-y-3">
              <h2 className="font-news text-xl font-semibold text-zinc-950">
                4. Seus direitos conforme a LGPD
              </h2>
              <p className="text-zinc-600">
                De acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem o direito de solicitar a qualquer momento:
              </p>
              <ul className="list-disc pl-5 text-zinc-600">
                <li>Confirmação da existência de tratamento dos seus dados;</li>
                <li>Acesso aos dados e correção de dados incompletos ou desatualizados;</li>
                <li>Eliminação dos dados pessoais armazenados (salvo obrigações legais de guarda).</li>
              </ul>
            </section>

            <section id="contato-dpo" className="scroll-mt-28 space-y-3 bg-white p-6 rounded-2xl border border-zinc-200">
              <h2 className="font-news text-xl font-semibold text-zinc-950">
                5. Fale com nosso Encarregado de Privacidade (DPO)
              </h2>
              <p className="text-zinc-600">
                Caso deseje exercer seus direitos de privacidade ou esclarecer dúvidas sobre esta política, entre em contato diretamente com o nosso responsável:
              </p>
              <div className="pt-2 text-xs text-zinc-600">
                <p>contato@gmfadvogados.com.br</p>
                <p className="mt-1">Privacidade de Dados - LGPD</p>
              </div>
            </section>

          </main>

        </div>

      </div>
    </div>
  );
}

export default PoliticaDePrivacidade;