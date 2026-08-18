import { useEffect } from "react";
import { HeroCivel } from "../components/Sections/civel/HeroCivel";
import { SituacoesCivel } from "../components/Sections/civel/SituacoesCivel";
import { ProcessoCivel } from "../components/Sections/civel/ProcessoCivel";
import { FaqCivel } from "../components/Sections/civel/FaqCivel";
import { CtaFinalCivel } from "../components/Sections/civel/CtaFinalCivel";

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
