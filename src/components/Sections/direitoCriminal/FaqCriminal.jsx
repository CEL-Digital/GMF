import { useState } from "react";

const faqData = [
  {
    question: "Fui intimado a depor na delegacia. Preciso ir com advogado?",
    answer:
      "Sim. O depoimento na fase policial é determinante para o rumo do caso. Estar acompanhado de um advogado garante que suas prerrogativas sejam respeitadas e previne que declarações mal interpretadas gerem acusações.",
  },
  {
    question: "O que é a Audiência de Custódia?",
    answer:
      "É o ato em que a pessoa presa em flagrante é levada em até 24 horas diante de um juiz para avaliar a legalidade da prisão, necessidade de manutenção do término preventivo ou concessão de liberdade provisória.",
  },
  {
    question: "A pessoa pode responder ao processo criminal em liberdade?",
    answer:
      "Sim. A regra constitucional é responder em liberdade. A prisão cautelar só deve ocorrer em casos excepcionais previstos em lei, quando preenchidos os requisitos rigorosos do Código de Processo Penal.",
  },
  {
    question: "O que fazer em casos de busca e apreensão no meu endereço?",
    answer:
      "Exija a apresentação da ordem judicial (mandado) e a identificação dos policiais. Mantenha a calma, acione seu advogado imediatamente e exija a presença de testemunhas durante toda a diligência.",
  },
];

export function FaqCriminal() {
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
          Perguntas Frequentes sobre Direito Criminal
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
