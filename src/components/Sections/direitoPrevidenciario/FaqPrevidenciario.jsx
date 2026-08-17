import { useState } from "react";

const faqData = [
  {
    question: "O INSS negou meu benefício, ainda posso conseguir?",
    answer:
      "Sim. A negativa administrativa do INSS não é definitiva. É possível ingressar com uma Ação Judicial na Justiça Federal, onde o caso será analisado por um juiz imparcial e peritos independentes.",
  },
  {
    question: "O que é o BPC/LOAS e quem tem direito?",
    answer:
      "É um benefício assistencial de um salário mínimo mensal destinado a idosos com 65 anos ou mais e pessoas com deficiência de qualquer idade que comprovem não possuir meios de prover a própria manutenção.",
  },
  {
    question: "Quais documentos preciso ter para dar entrada no pedido?",
    answer:
      "RG, CPF, comprovante de residência, Carteiras de Trabalho (CTPS), carnês de contribuição, extrato do CNIS e, para casos de incapacidade, laudos, exames e atestados médicos atualizados.",
  },
  {
    question: "Tenho direito a receber o valor retroativo desde quando pedi?",
    answer:
      "Sim. Caso o benefício seja concedido judicialmente, você tem direito a receber todos os valores atrasados contados desde a Data do Requerimento Administrativo (DER) no INSS.",
  },
];

export function FaqPrevidenciario() {
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
          Perguntas Frequentes sobre Direito Previdenciário
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
