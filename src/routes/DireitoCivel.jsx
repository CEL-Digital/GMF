import { useEffect } from "react";
import { HeroCivel } from "../components/sections/civel/HeroCivel";
import { SituacoesCivel } from "../components/sections/civel/SituacoesCivel";
import { ProcessoCivel } from "../components/sections/civel/ProcessoCivel";
import { FaqCivel } from "../components/sections/civel/FaqCivel";
import { CtaFinalCivel } from "../components/sections/civel/CtaFinalCivel";

export function DireitoCivel() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 pt-32 pb-20">
      <HeroCivel />
      <SituacoesCivel />
      <ProcessoCivel />
      <FaqCivel />
      <CtaFinalCivel />
    </div>
  );
}

export default DireitoCivel;
