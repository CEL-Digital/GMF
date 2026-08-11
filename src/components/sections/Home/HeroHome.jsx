import { useState, useEffect } from "react";
import heroBackground from "../../../assets/heroBackground.webp";

const palavras = [
  "segurança",
  "qualidade",
  "excelência",
  "eficiência",
  "resultado",
];

export function HeroHome() {
  const [indexPalavra, setIndexPalavra] = useState(0);
  const [textoAtual, setTextoAtual] = useState("");
  const [estaDeletando, setEstaDeletando] = useState(false);

  useEffect(() => {
    const palavraCompleta = palavras[indexPalavra];

    // Controla o tempo de digitação, exclusão e pausa
    const velocidade = estaDeletando ? 50 : 100;

    const timer = setTimeout(() => {
      if (!estaDeletando) {
        // Digitando
        setTextoAtual(palavraCompleta.substring(0, textoAtual.length + 1));

        // Quando termina de digitar a palavra
        if (textoAtual === palavraCompleta) {
          setTimeout(() => setEstaDeletando(true), 1500); // Pausa com a palavra completa
        }
      } else {
        // Deletando
        setTextoAtual(palavraCompleta.substring(0, textoAtual.length - 1));

        // Quando termina de apagar a palavra
        if (textoAtual === "") {
          setEstaDeletando(false);
          setIndexPalavra((prev) => (prev + 1) % palavras.length); // Vai para a próxima palavra
        }
      }
    }, velocidade);

    return () => clearTimeout(timer);
  }, [textoAtual, estaDeletando, indexPalavra]);

  return (
    <div className="relative flex flex-col min-h-screen w-full items-center justify-center overflow-hidden">
      <img
        src={heroBackground}
        alt=""
        className="h-full w-full absolute inset-0 object-cover object-top"
      />

      <div className="relative flex max-w-7xl flex-col items-center justify-center px-10 pt-20 text-center">
        <h1 className="font-news text-3xl font-semibold tracking-tighter text-white sm/text:5xl md:text-5xl lg:text-6xl">
          Transformando a complexidade do sistema jurídico em{" "}
          <span>
            {/* Barra piscante na frente/início da palavra */}
            <span>{textoAtual}</span>
            <span className="w-1 h-[0.7em] bg-white inline-block mr-1 animate-cursor" />
          </span>
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-gray-400 sm:text-base md:text-md">
          Defesa especializada com atendimento humanizado, ético e focado em
          proteger seus direitos, seu patrimônio e sua família.
        </p>
      </div>
      <div>
        <a
          className="relative group mt-8 flex items-center justify-center overflow-hidden rounded-full bg-brand-dark-blue px-6 py-2 text-md font-semibold text-brand-dark-blue shadow-sm"
          href="https://wa.me/+5511914511407?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20conhecer%20a%20GMF%20Advogados."
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="absolute inset-0 bg-white transition-opacity duration-800 group-hover:opacity-0"></span>

          <span className="absolute aspect-square w-[200%] scale-0 rounded-full bg-brand-dark-blue transition-transform duration-800 ease-in-out group-hover:scale-100"></span>

          <span className="relative z-10 transition-colors text-md duration-1000 ease-in-out group-hover:text-white">
            Falar no WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
}
