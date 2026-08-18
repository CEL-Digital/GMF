import { ArrowRight } from "lucide-react";

const whatsappMessage =
  "Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20uma%20consulta%20sobre%20Direito%20de%20Fam%C3%ADlia.";

export function CtaFinalFamilia() {
  return (
    <section className="px-6 md:px-12 max-w-7xl mx-auto">
      <div className="bg-zinc-950 text-white rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
        <div className="max-w-2xl space-y-3 text-center md:text-left">
          <h2 className="font-news text-2xl md:text-4xl font-semibold">
            Precisa avaliar seu caso de família?
          </h2>
          <p className="text-sm text-zinc-400">
            Orientação jurídica segura faz toda a diferença para proteger o seu
            futuro e o dos seus filhos.
          </p>
        </div>

        <a
          href={`https://wa.me/+5511914511407?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-3 px-8 py-4 hover:bg-white hover:text-brand-dark-blue underline underline-offset-6 decoration-white duration-500 text-white font-semibold rounded-full text-xs transition-all whitespace-nowrap shadow-lg"
        >
          Analisar Meu Caso via WhatsApp
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
