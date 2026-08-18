import { useState } from "react";

const faqData = [
  {
    question: "É possível fazer o divórcio diretamente em cartório?",
    answer:
      "Sim. O divórcio extrajudicial em cartório é permitido quando há consenso entre o casal e não existem filhos menores ou incapazes (ou quando as questões relativas a eles já foram resolvidas judicialmente).",
  },
  {
    question: "Como é calculado o valor da pensão alimentícia?",
    answer:
      "Não existe uma porcentagem fixa de 30% estipulada em lei. O valor é apurado com base no binômio necessidade de quem recebe e possibilidade financeira de quem paga.",
  },
  {
    question: "O que significa a guarda compartilhada na prática?",
    answer:
      "Na guarda compartilhada, a responsabilização e as decisões sobre a vida da criança (escola, saúde, educação) são tomadas por ambos os pais, não devendo ser confundida com divisão exata de dias de convivência.",
  },
  {
    question: "Quanto tempo demora o processo de inventário?",
    answer:
      "O inventário em cartório (extrajudicial) pode ser finalizado em poucas semanas se houver consenso entre os herdeiros. Já o inventário judicial depende da complexidade do patrimônio e divergências.",
  },
];

export function FaqFamilia() {
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
          Perguntas Frequentes sobre Direito de Família
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
