import { useEffect } from "react";
import { HeroConsumidor } from "../components/sections/consumidor/HeroConsumidor";
import { SituacoesConsumidor } from "../components/sections/consumidor/SituacoesConsumidor";
import { ProcessoConsumidor } from "../components/sections/consumidor/ProcessoConsumidor";
import { FaqConsumidor } from "../components/sections/consumidor/FaqConsumidor";
import { CtaFinalConsumidor } from "../components/sections/consumidor/CtaFinalConsumidor";

export function DireitoConsumidor() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 pt-32 pb-20">
      <HeroConsumidor />
      <SituacoesConsumidor />
      <ProcessoConsumidor />
      <FaqConsumidor />
      <CtaFinalConsumidor />
    </div>
  );
}

export default DireitoConsumidor;
