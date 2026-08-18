import { useEffect } from "react";
import { HeroCriminal } from "../components/sections/criminal/HeroCriminal";
import { SituacoesCriminal } from "../components/sections/criminal/SituacoesCriminal";
import { ProcessoCriminal } from "../components/sections/criminal/ProcessoCriminal";
import { FaqCriminal } from "../components/sections/criminal/FaqCriminal";
import { CtaFinalCriminal } from "../components/sections/criminal/CtaFinalCriminal";

export function DireitoCriminal() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 pt-32 pb-20">
      <HeroCriminal />
      <SituacoesCriminal />
      <ProcessoCriminal />
      <FaqCriminal />
      <CtaFinalCriminal />
    </div>
  );
}

export default DireitoCriminal;
