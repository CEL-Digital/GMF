import { useState } from "react";

const faqData = [
  {
    question: "O que fazer em caso de descumprimento de contrato?",
    answer:
      "A parte lesada pode exigir judicialmente o cumprimento forçado da obrigação, a rescisão do contrato com aplicação das multas previstas ou a indenização pelas perdas e danos decorrentes da inadimplência.",
  },
  {
    question: "Qual o prazo para cobrar uma dívida na Justiça?",
    answer:
      "Depende da natureza da dívida. A cobrança de cheques, notas promissórias e contratos expressos costuma prescrever em 5 anos, enquanto outros tipos de reparação civil podem ter prazos específicos entre 3 e 5 anos.",
  },
  {
    question: "Como funciona a ação de despejo por falta de pagamento?",
    answer:
      "Diante do atraso no aluguel, o locador pode ingressar com a ação requerendo a desocupação do imóvel e a cobrança dos valores devidos, sendo possível obter ordem liminar de desocupação em prazos reduzidos em certos contratos.",
  },
  {
    question: "É possível resolver disputas civis sem entrar na Justiça?",
    answer:
      "Sim. A negociação extrajudicial, a mediação e o envio de notificações formais são ferramentas altamente eficazes para alcançar acordos de forma mais célere e menos onerosa.",
  },
];

export function FaqCivel() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="px-6 md:px-12 max-w-4xl mx-auto mb-24">
      <div className="text-center mb-12">
        <span className="text-xs font-semibold text-zinc-400 mb-2">
          Tire Suas Dúvidas
        </span>
        <h2 className="font-news text-2xl md:text-3xl text-zinc-950 font-semibold mt-6">
          Perguntas Frequentes sobre Direito Cível
        </h2>
      </div>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-zinc-200 rounded-2xl overflow-hidden transition-all"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full text-left p-6 font-news font-semibold text-zinc-900 flex justify-between cursor-pointer items-center gap-4 focus:outline-none"
            >
              <span>{item.question}</span>
              <span className="text-lg font-light text-zinc-400">
                {openFaq === index ? "−" : "+"}
              </span>
            </button>

            {openFaq === index && (
              <div className="px-6 pb-6 text-sm text-zinc-600 border-t border-zinc-100 pt-4">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
