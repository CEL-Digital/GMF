import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const situationsData = [
  {
    id: "01",
    title: "Demissão e Rescisão Indevida",
    desc: "Divergências no cálculo do acerto final, atraso na quitação de verbas ou demissão por justa causa aplicada de forma abusiva e sem provas."
  },
  {
    id: "02",
    title: "Horas Extras e Banco de Horas",
    desc: "Cumprimento de jornada além do limite legal sem o devido pagamento do adicional mínimo de 50% ou com controle de ponto fraudado."
  },
  {
    id: "03",
    title: "Trabalho Sem Carteira Assinada",
    desc: "Prestação de serviço continuado e subordinado sem registro em CTPS, privando o trabalhador de FGTS, 13º e férias."
  },
  {
    id: "04",
    title: "Desvio e Acúmulo de Função",
    desc: "Exercício constante de atividades com responsabilidade superior ou incompatíveis com o cargo contratado sem o reajuste salarial devido."
  },
  {
    id: "05",
    title: "Assédio Moral e Dano Existencial",
    desc: "Exposição a situações humilhantes, cobranças excessivas de metas ou isolamento deliberado no ambiente corporativo."
  },
  {
    id: "06",
    title: "Acidente de Trabalho e Doenças",
    desc: "Lesões por esforço repetitivo (LER/DORT) ou acidentes físicos no trabalho que exigem indenizações por estabilidade e danos morais."
  }
];

const cardVariants = {
  enter: (direction) => ({
    opacity: 0,
    scale: 0.95,
    x: direction > 0 ? 40 : -40,
  }),
  center: {
    zIndex: 1,
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  exit: (direction) => ({
    zIndex: 0,
    opacity: 0,
    scale: 0.95,
    x: direction < 0 ? 40 : -40,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  }),
};

export function SituacoesTrabalhista() {
  const [[page, direction], setPage] = useState([0, 0]);

  const currentIndex = Math.abs(page % situationsData.length);
  const nextIndex = (currentIndex + 1) % situationsData.length;

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const currentItem = situationsData[currentIndex];
  const nextItem = situationsData[nextIndex];

  return (
    <section className="relative py-16 w-full border-t border-zinc-200 overflow-x-hidden">
      {/* Container Principal Alinhado com a Hero */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col gap-10 z-10 relative">
        
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-semibold text-zinc-500">
              Casos Recorrentes
            </span>
            <h2 className="font-news text-3xl md:text-4xl text-zinc-950 font-bold mt-6">
              Identifique se o seu caso se encaixa nestas situações:
            </h2>
          </div>

          {/* Botões Minimalistas */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <button
              onClick={() => paginate(-1)}
              className="p-2.5 rounded-full border border-zinc-200/80 bg-white/60 hover:bg-white hover:border-zinc-300 transition-all text-zinc-600 active:scale-95 cursor-pointer shadow-xs"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="p-2.5 rounded-full border border-zinc-200/80 bg-white/60 hover:bg-white hover:border-zinc-300 transition-all text-zinc-600 active:scale-95 cursor-pointer shadow-xs"
              aria-label="Próximo"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Container dos Cards */}
        <div className="relative w-full flex justify-center items-center min-h-[340px] md:min-h-[280px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute w-full grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Card 1 */}
              <div
                className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-zinc-100 flex flex-col justify-between h-full min-h-[220px]"
                style={{ boxShadow: "0 20px 40px -15px rgba(0,0,0,0.05)" }}
              >
                <div>
                  <span className="text-xs font-mono text-zinc-400 font-medium block mb-4">
                    {currentItem.id} / {String(situationsData.length).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl font-news font-semibold text-zinc-950 mb-3">
                    {currentItem.title}
                  </h3>
                  <p className="text-base text-zinc-600 font-light leading-relaxed">
                    {currentItem.desc}
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div
                className="hidden md:flex bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-zinc-100 flex-col justify-between h-full min-h-[220px]"
                style={{ boxShadow: "0 20px 40px -15px rgba(0,0,0,0.05)" }}
              >
                <div>
                  <span className="text-xs font-mono text-zinc-400 font-medium block mb-4">
                    {nextItem.id} / {String(situationsData.length).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl font-news font-semibold text-zinc-950 mb-3">
                    {nextItem.title}
                  </h3>
                  <p className="text-base text-zinc-600 font-light leading-relaxed">
                    {nextItem.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicadores de Paginação */}
        <div className="flex justify-center gap-2.5 mt-2">
          {situationsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setPage([idx, idx > currentIndex ? 1 : -1])}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? "w-8 bg-zinc-950"
                  : "w-2 bg-zinc-300 hover:bg-zinc-400"
              }`}
              aria-label={`Ir para a situação ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}