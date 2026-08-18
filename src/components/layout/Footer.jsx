import { Link, useNavigate, useLocation } from "react-router-dom";
import imageLogo from "../../assets/logoGMFAzulEscuro.webp";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navigate = useNavigate();
  const location = useLocation();

  const scrollToAnchor = (sectionId) => {
    if (location.pathname === "/" || location.pathname === "/home") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <footer className="w-full bg-zinc-950 text-zinc-400 border-t border-zinc-900 pt-16 pb-12 px-6 md:px-12 relative overflow-hidden">
      {/* Luz de fundo decorativa */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-blue-900/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Grid Superior do Rodapé */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-zinc-900">
          {/* COLUNA 1: Brand & Apresentação (5 Colunas) */}
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="inline-block">
              {/* Se ainda não tiver a logo pronta, você pode usar a imagem ou o texto customizado abaixo */}
              <img
                src={imageLogo}
                alt="GMF Advogados"
                className="h-9 w-auto object-contain brightness-0 invert"
              />
            </Link>

            <p className="text-xs md:text-sm text-zinc-400 max-w-sm">
              Advocacia estratégica e especializada. Combinação entre alto rigor
              técnico, acompanhamento preventivo e defesa incisiva para a
              proteção dos seus direitos.
            </p>
          </div>

          {/* COLUNA 2: Navegação Rápida (3 Colunas) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs text-white font-semibold">Navegação</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  to="/#hero"
                  className="hover:text-white transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="/#sobre"
                  className="hover:text-white transition-colors"
                >
                  Sobre o Escritório
                </Link>
              </li>
              <li>
                <Link
                  to="/#contato"
                  className="hover:text-white transition-colors"
                >
                  Falar com um Advogado
                </Link>
              </li>
              <li>
                <Link
                  to="/politica-de-privacidade"
                  className="hover:text-white transition-colors"
                >
                  Política de Privacidade & Termos de Uso
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUNA 3: Áreas de Atuação (4 Colunas) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs text-white font-semibold font-news">
              Áreas de Atuação
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <li>
                <Link
                  to="/direito-trabalhista"
                  className="hover:text-white transition-colors"
                >
                  Trabalhista
                </Link>
              </li>
              <li>
                <Link
                  to="/direito-civel"
                  className="hover:text-white transition-colors"
                >
                  Cível
                </Link>
              </li>
              <li>
                <Link
                  to="/direito-de-familia"
                  className="hover:text-white transition-colors"
                >
                  Família
                </Link>
              </li>
              <li>
                <Link
                  to="/direito-do-consumidor"
                  className="hover:text-white transition-colors"
                >
                  Consumidor
                </Link>
              </li>
              <li>
                <Link
                  to="/direito-criminal"
                  className="hover:text-white transition-colors"
                >
                  Criminal
                </Link>
              </li>
              <li>
                <Link
                  to="/direito-previdenciario"
                  className="hover:text-white transition-colors"
                >
                  Previdenciário
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé Inferior: Direitos Autorais & Notas OAB */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-500">
          <div>
            © {currentYear} GMF Advogados. Todos os direitos reservados.
          </div>

          <div className="text-center md:text-right space-y-1">
            <p className="font-news">Dr. Giovanni França • OAB/SP 506.893</p>
            <p className="text-zinc-400">
              Este site não realiza consultas públicas genéricas e respeita as
              diretrizes do Código de Ética da OAB.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
