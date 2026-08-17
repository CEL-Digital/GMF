import { useEffect } from "react";
import { HeroCriminal } from "../components/sections/direitoCriminal/HeroCriminal";
import { SituacoesCriminal } from "../components/sections/direitoCriminal/SituacoesCriminal";
import { ProcessoCriminal } from "../components/sections/direitoCriminal/ProcessoCriminal";
import { FaqCriminal } from "../components/sections/direitoCriminal/FaqCriminal";
import { CtaFinalCriminal } from "../components/sections/direitoCriminal/CtaFinalCriminal";

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
