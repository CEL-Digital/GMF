import { useEffect } from "react";
import { HeroPrevidenciario } from "../components/Sections/previdenciario/HeroPrevidenciario";
import { SituacoesPrevidenciario } from "../components/Sections/previdenciario/SituacoesPrevidenciario";
import { ProcessoPrevidenciario } from "../components/Sections/previdenciario/ProcessoPrevidenciario";
import { FaqPrevidenciario } from "../components/Sections/previdenciario/FaqPrevidenciario";
import { CtaFinalPrevidenciario } from "../components/Sections/previdenciario/CtaFinalPrevidenciario";

export function DireitoPrevidenciario() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    document.title = "Direito Previdenciário | GMF Advogados";
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 pt-32 pb-20">
      <HeroPrevidenciario />
      <SituacoesPrevidenciario />
      <ProcessoPrevidenciario />
      <FaqPrevidenciario />
      <CtaFinalPrevidenciario />
    </div>
  );
}

export default DireitoPrevidenciario;
