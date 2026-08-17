import { useEffect } from "react";
import { HeroFamilia } from "../components/sections/direitoFamilia/HeroFamilia";
import { SituacoesFamilia } from "../components/sections/direitoFamilia/SituacoesFamilia";
import { ProcessoFamilia } from "../components/sections/direitoFamilia/ProcessoFamilia";
import { FaqFamilia } from "../components/sections/direitoFamilia/FaqFamilia";
import { CtaFinalFamilia } from "../components/sections/direitoFamilia/CtaFinalFamilia";

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
