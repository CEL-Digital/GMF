import { useEffect } from "react";
import { HeroFamilia } from "../components/Sections/familia/HeroFamilia";
import { SituacoesFamilia } from "../components/Sections/familia/SituacoesFamilia";
import { ProcessoFamilia } from "../components/Sections/familia/ProcessoFamilia";
import { FaqFamilia } from "../components/Sections/familia/FaqFamilia";
import { CtaFinalFamilia } from "../components/Sections/familia/CtaFinalFamilia";

export function DireitoFamilia() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    document.title = "Direito de Família | GMF Advogados";
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 pt-32 pb-20">
      <HeroFamilia />
      <SituacoesFamilia />
      <ProcessoFamilia />
      <FaqFamilia />
      <CtaFinalFamilia />
    </div>
  );
}

export default DireitoFamilia;
