import { Link } from "react-router-dom";
// Substituir pelo caminho da foto real do Dr. Giovanni quando tiver
// import doctorPhoto from "../../../assets/giovanni-franca.webp"; 

export function AboutSection() {
  return (
    <section id="sobre" className="relative w-full bg-zinc-950 py-28 px-6 md:px-12 overflow-hidden border-t border-zinc-900">
      
      {/* Luz de fundo sutil para profundidade visual */}
      <div className="absolute top-1/4 -right-20 w-[400px] h-[400px] bg-blue-900/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Cabeçalho de Entrada */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6">
          <div>
            <h2 className="font-news text-3xl md:text-5xl text-white font-semibold mt-6 leading-tight max-w-2xl">
              Advocacia estratégica pautada em <span className="text-zinc-400 italic">excelência e combate técnico.</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-sm md:text-base max-w-md">
            A GMF Advogados une a tradição do rigor jurídico à dinamicidade da advocacia contemporânea, entregando soluções sob medida para cada cliente.
          </p>
        </div>

        {/* Grid Principal: História + Perfil do Advogado */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* COLUNA 1: Narrativa do Escritório e Pilares (7 colunas) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="relative p-8 md:p-10 space-y-6 border-white before:absolute before:inset-y-0 before:left-[2px] before:w-[2px] before:bg-white before:drop-shadow-[0_0_8px_rgba(255,255,255)]">
              <h3 className="text-xl md:text-2xl text-white font-bold font-news">
                Uma visão moderna para dilemas jurídicos complexos
              </h3>
              
              <p className="text-zinc-400 text-sm md:text-base">
                Fundada sob a premissa de que nenhum caso é igual ao outro, a <strong className="text-zinc-200 font-medium">GMF Advogados</strong> recusa soluções genéricas. Atuamos de forma incisiva e preventiva na defesa dos interesses de trabalhadores, indivíduos e empresas.
              </p>

              <p className="text-zinc-400 text-sm md:text-base">
                Nossa prática alia análise profunda de provas, domínio jurisprudencial e uma comunicação transparente com o cliente do início ao fim do processo.
              </p>

              {/* Destaques / Pilares de Atuação */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-800/60">
                <div className="flex items-start gap-3">
                  <span className="text-white font-mono text-sm mt-0.5">✦</span>
                  <div>
                    <h4 className="text-white text-sm font-medium">Atendimento planejado</h4>
                    <p className="text-zinc-500 text-xs font-semibold mt-1">Análise minuciosa de cada prova e detalhe fático.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-white font-mono text-sm mt-0.5">✦</span>
                  <div>
                    <h4 className="text-white text-sm font-medium">Transparência Total</h4>
                    <p className="text-zinc-500 text-xs font-semibold mt-1">Acompanhamento em linguagem clara e acessível.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Métrica / Números de Impacto em formato editorial */}
            <div className="grid grid-cols-2 gap-4 bg-zinc-900/20 border border-zinc-800/50 rounded-3xl p-6 text-center">
              <div className="">
                <span className="block font-news text-2xl md:text-4xl font-bold text-white">Especialista</span>
                <span className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-wider mt-1 block">Direito Trabalhista</span>
              </div>
              <div>
                <span className="block font-news text-2xl md:text-4xl font-bold text-white">Agilidade</span>
                <span className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-wider mt-1 block">Atendimento Digital</span>
              </div>
            </div>
          </div>

          {/* COLUNA 2: Card do Dr. Giovanni França (5 colunas) */}
          <div className="lg:col-span-5">
            <div className="h-full bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8 backdrop-blur-md flex flex-col justify-between relative group overflow-hidden">
              
              {/* Efeito Glow Interno no Card */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full group-hover:bg-blue-500/20 transition-all duration-500" />

              <div>
                {/* Espaço para Foto do Advogado */}
                <div className="relative w-full h-72 md:h-80 rounded-2xl overflow-hidden bg-zinc-800 mb-6 border border-zinc-700/50">
                  {/* <img
                    src={doctorPhoto}
                    alt="Dr. Giovanni França"
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                  /> */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
                  
                  <span className="absolute bottom-4 left-4 bg-zinc-900/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono text-zinc-300 border border-zinc-700/50">
                    Advogado Sócio-Fundador
                  </span>
                </div>

                {/* Nome e Credenciais */}
                <h3 className="font-news text-2xl text-white font-semibold">
                  Dr. Giovanni França
                </h3>
                <p className="text-xs font-news text-zinc-500 mt-1">
                  OAB/SP 506.893 • Advogado Especialista
                </p>

                <p className="text-zinc-400 text-sm mt-4 font-medium">
                  Lidera a bancada jurídica com foco em alta performance técnica, estratégias de negociação e atuação contenciosa firme para a garantia integral dos direitos de seus assessorados.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}