import { useEffect } from "react";
import { HeroPrevidenciario } from "../components/sections/direitoPrevidenciario/HeroPrevidenciario";
import { SituacoesPrevidenciario } from "../components/sections/direitoPrevidenciario/SituacoesPrevidenciario";
import { ProcessoPrevidenciario } from "../components/sections/direitoPrevidenciario/ProcessoPrevidenciario";
import { FaqPrevidenciario } from "../components/sections/direitoPrevidenciario/FaqPrevidenciario";
import { CtaFinalPrevidenciario } from "../components/sections/direitoPrevidenciario/CtaFinalPrevidenciario";

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
