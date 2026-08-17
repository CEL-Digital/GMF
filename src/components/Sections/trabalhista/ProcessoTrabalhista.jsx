const processStepsData = [
  {
    step: "01",
    title: "Análise Preliminar",
    desc: "Avaliamos suas mensagens, holerites, extratos e documentos para identificar as irregularidades cometidas pelo empregador."
  },
  {
    step: "02",
    title: "Cálculo do Passivo",
    desc: "Apuramos detalhadamente todos os valores rescisórios, adicionais e indenizações devidas antes de dar andamento."
  },
  {
    step: "03",
    title: "Estratégia & Ação",
    desc: "Buscamos o acordo extrajudicial célere ou ingressamos com a Ação Trabalhista com tese fundamentada perante a Justiça do Trabalho."
  }
];

export function ProcessoTrabalhista() {
  return (
    <section className="bg-white border-y border-zinc-200 py-20 px-6 md:px-12 mb-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-zinc-400 mb-2">
            Transparência
          </span>
          <h2 className="font-news text-2xl md:text-4xl text-zinc-950 font-semibold mt-6">
            Como atuamos na defesa do seu caso
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processStepsData.map((step) => (
            <div key={step.step} className="relative bg-zinc-50 border border-zinc-200/80 rounded-2xl p-8">
              <span className="text-3xl font-news font-bold text-zinc-300 block mb-4">
                {step.step}
              </span>
              <h3 className="text-lg font-news font-semibold text-zinc-950 mb-2">
                {step.title}
              </h3>
              <p className="text-md text-zinc-600">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}