import { useState } from "react";

const faqData = [
  {
    question:
      "Meu nome foi negativado indevidamente. Tenho direito a indenização?",
    answer:
      "Sim. A inscrição indevida do nome nos órgãos de proteção ao crédito (Serasa/SPC) gera o direito à baixa imediata da negativação via liminar e indenização por danos morais.",
  },
  {
    question:
      "Fui vítima do golpe do Pix ou fraude bancária. O banco é responsável?",
    answer:
      "Sim. As instituições financeiras respondem objetivamente pelas falhas de segurança em seus sistemas que permitam transações atípicas e fraudes praticadas por terceiros.",
  },
  {
    question: "O plano de saúde negou meu tratamento. O que posso fazer?",
    answer:
      "É possível ingressar com uma ação judicial com pedido de liminar (decisão de urgência) para obrigar o plano de saúde a custear o tratamento recomendado pelo médico responsável.",
  },
  {
    question: "Fiz uma compra pela internet e me arrependi. Posso cancelar?",
    answer:
      "Sim. O artigo 49 do Código de Defesa do Consumidor garante o direito de arrependimento em até 7 dias após o recebimento do produto, com devolução integral dos valores pagos.",
  },
];

export function FaqConsumidor() {
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
          Perguntas Frequentes sobre Direito do Consumidor
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
