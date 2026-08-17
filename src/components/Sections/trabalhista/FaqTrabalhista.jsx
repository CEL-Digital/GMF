import { useState } from "react";

const faqData = [
  {
    question: "Quanto tempo tenho para entrar com uma ação trabalhista?",
    answer:
      "O prazo legal é de até 2 anos após o desligamento da empresa. Na ação, é possível cobrar os direitos referentes aos últimos 5 anos trabalhados."
  },
  {
    question: "Quais documentos preciso ter em mãos para a primeira consulta?",
    answer:
      "Sua Carteira de Trabalho (física ou digital), Termo de Rescisão (TRCT), últimos holerites, extrato analítico do FGTS e provas de conversas (mensagens, e-mails ou fotos)."
  },
  {
    question: "Posso entrar com ação mesmo sem ter carteira assinada?",
    answer:
      "Sim. Se você cumpria horários, recebia ordens e recebia salário, a Justiça reconhece o vínculo empregatício e garante todos os direitos do período retroativo."
  },
  {
    question: "Preciso ir pessoalmente até o escritório para iniciar o processo?",
    answer:
      "Não obrigatoriamente. Realizamos o atendimento, análise documental e assinatura do contrato de forma 100% digital e segura."
  }
];

export function FaqTrabalhista() {
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
          Perguntas Frequentes sobre Direitos Trabalhistas
        </h2>
      </div>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-zinc-200 rounded-2xl overflow-hidden transition-all "
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