import { useEffect } from "react";
import { HeroFamilia } from "../components/sections/familia/HeroFamilia";
import { SituacoesFamilia } from "../components/sections/familia/SituacoesFamilia";
import { ProcessoFamilia } from "../components/sections/familia/ProcessoFamilia";
import { FaqFamilia } from "../components/sections/familia/FaqFamilia";
import { CtaFinalFamilia } from "../components/sections/familia/CtaFinalFamilia";

export function DireitoFamilia() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
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
