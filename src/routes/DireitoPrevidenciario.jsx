import { useEffect } from "react";
import { HeroPrevidenciario } from "../components/sections/previdenciario/HeroPrevidenciario";
import { SituacoesPrevidenciario } from "../components/sections/previdenciario/SituacoesPrevidenciario";
import { ProcessoPrevidenciario } from "../components/sections/previdenciario/ProcessoPrevidenciario";
import { FaqPrevidenciario } from "../components/sections/previdenciario/FaqPrevidenciario";
import { CtaFinalPrevidenciario } from "../components/sections/previdenciario/CtaFinalPrevidenciario";

export function DireitoPrevidenciario() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
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
