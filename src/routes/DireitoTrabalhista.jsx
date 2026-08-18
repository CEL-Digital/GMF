import { useEffect } from "react";
import { HeroTrabalhista } from "../components/Sections/trabalhista/HeroTrabalhista";
import { SituacoesTrabalhista } from "../components/Sections/trabalhista/SituacoesTrabalhista";
import { ProcessoTrabalhista } from "../components/Sections/trabalhista/ProcessoTrabalhista";
import { FaqTrabalhista } from "../components/Sections/trabalhista/FaqTrabalhista";
import { CtaFinalTrabalhista } from "../components/Sections/trabalhista/CtaFinalTrabalhista";

export function DireitoTrabalhista() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    document.title = "Direito Trabalhista | GMF Advogados";
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 pt-32 pb-20">
      <HeroTrabalhista />
      <SituacoesTrabalhista />
      <ProcessoTrabalhista />
      <FaqTrabalhista />
      <CtaFinalTrabalhista />
    </div>
  );
}

export default DireitoTrabalhista;
