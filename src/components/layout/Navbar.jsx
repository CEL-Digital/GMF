import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAreasOpen, setIsAreasOpen] = useState(false);
  
  // Estados para controlar a rolagem da pílula
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const dropdownRef = useRef(null);

  // Lógica para esconder a pílula ao rolar para baixo e mostrar ao rolar para cima
  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // Rolando para BAIXO e já passou do topo -> esconde a barra
        setIsVisible(false);
        setIsAreasOpen(false); // Fecha o dropdown se estivesse aberto
      } else {
        // Rolando para CIMA -> mostra a barra
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  // Fecha o dropdown se clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsAreasOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeAllMenus = () => {
    setIsOpen(false);
    setIsAreasOpen(false);
  };

  return (
    <header
      className={`fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-28"
      }`}
    >
      {/* PÍLULA CONTAINER (Estilo idêntico ao da imagem) */}
      <nav className="w-full max-w-5xl bg-zinc-900/90 backdrop-blur-md text-white border border-zinc-800/80 rounded-full px-6 py-2.5 flex items-center justify-between shadow-2xl transition-all">
        
        {/* LOGO */}
        <Link to="/" onClick={closeAllMenus} className="flex items-center gap-2">
          {/* Caso não tenha a logo em imagem ainda, pode deixar um texto visual */}
            logo
        </Link>

        {/* LINKS DESKTOP */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-300">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          
          <Link to="/sobre" className="hover:text-white transition-colors">
            Sobre
          </Link>

          {/* DROPDOWN ÁREAS DE ATUAÇÃO */}
          <div ref={dropdownRef} className="relative flex items-center">
            <button
              onClick={() => setIsAreasOpen(!isAreasOpen)}
              className="hover:text-white flex items-center gap-1 focus:outline-none text-sm font-medium text-zinc-300 py-1"
            >
              Áreas de Atuação
              <svg
                className={`w-3.5 h-3.5 text-zinc-400 transition-transform duration-200 ${
                  isAreasOpen ? "rotate-180 text-white" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Menu Suspenso (Dropdown Dark) */}
            {isAreasOpen && (
              <ul className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-60 bg-zinc-900/95 border border-zinc-800/90 backdrop-blur-lg rounded-2xl p-2 shadow-2xl text-sm animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                <li>
                  <Link
                    to="/direito-trabalhista"
                    onClick={closeAllMenus}
                    className="block px-4 py-2.5 text-zinc-300 hover:bg-zinc-800/80 hover:text-white rounded-xl transition-colors font-medium"
                  >
                    Direito Trabalhista
                  </Link>
                </li>
                <li>
                  <Link
                    to="/direito-civel"
                    onClick={closeAllMenus}
                    className="block px-4 py-2.5 text-zinc-300 hover:bg-zinc-800/80 hover:text-white rounded-xl transition-colors"
                  >
                    Direito Cível
                  </Link>
                </li>
                <li>
                  <Link
                    to="/direito-de-familia"
                    onClick={closeAllMenus}
                    className="block px-4 py-2.5 text-zinc-300 hover:bg-zinc-800/80 hover:text-white rounded-xl transition-colors"
                  >
                    Direito de Família
                  </Link>
                </li>
                <li>
                  <Link
                    to="/direito-do-consumidor"
                    onClick={closeAllMenus}
                    className="block px-4 py-2.5 text-zinc-300 hover:bg-zinc-800/80 hover:text-white rounded-xl transition-colors"
                  >
                    Direito do Consumidor
                  </Link>
                </li>
                <li>
                  <Link
                    to="/direito-criminal"
                    onClick={closeAllMenus}
                    className="block px-4 py-2.5 text-zinc-300 hover:bg-zinc-800/80 hover:text-white rounded-xl transition-colors"
                  >
                    Direito Criminal
                  </Link>
                </li>
                <li>
                  <Link
                    to="/direito-previdenciario"
                    onClick={closeAllMenus}
                    className="block px-4 py-2.5 text-zinc-300 hover:bg-zinc-800/80 hover:text-white rounded-xl transition-colors"
                  >
                    Direito Previdenciário
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <Link to="/contato" className="hover:text-white transition-colors">
            Contato
          </Link>
        </div>

        {/* BOTÃO CTA ESTILO PÍLULA DA IMAGEM */}
        <div className="hidden md:flex items-center gap-3">
          <a
            className="px-4 py-2 text-xs font-semibold text-zinc-900 bg-white hover:bg-zinc-200 rounded-full transition-all active:scale-95 shadow-sm"
            href="https://wa.me/5500000000000?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20an%C3%A1lise%20de%20caso."
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar no WhatsApp
          </a>
        </div>

        {/* BOTÃO HAMBÚRGUER (Mobile) */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
              if (isOpen) setIsAreasOpen(false);
            }}
            className="text-zinc-300 hover:text-white focus:outline-none p-1.5"
            aria-label="Abrir Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* MENU MOBILE EXPANSÍVEL (DARK) */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-zinc-900/95 border border-zinc-800/90 backdrop-blur-xl p-5 rounded-3xl space-y-4 shadow-2xl text-zinc-200 animate-in fade-in slide-in-from-top-2 duration-200">
          <Link to="/" onClick={closeAllMenus} className="block font-medium hover:text-white">
            Home
          </Link>

          <Link to="/sobre" onClick={closeAllMenus} className="block font-medium hover:text-white">
            Sobre
          </Link>

          <div className="space-y-2 pt-2 border-t border-zinc-800">
            <span className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider">
              Áreas de Atuação
            </span>
            <div className="pl-2 space-y-2.5 border-l border-zinc-800">
              <Link to="/direito-trabalhista" onClick={closeAllMenus} className="block text-sm text-zinc-300 hover:text-white">
                Trabalhista
              </Link>
              <Link to="/direito-civel" onClick={closeAllMenus} className="block text-sm text-zinc-300 hover:text-white">
                Cível
              </Link>
              <Link to="/direito-de-familia" onClick={closeAllMenus} className="block text-sm text-zinc-300 hover:text-white">
                Família
              </Link>
              <Link to="/direito-do-consumidor" onClick={closeAllMenus} className="block text-sm text-zinc-300 hover:text-white">
                Consumidor
              </Link>
              <Link to="/direito-criminal" onClick={closeAllMenus} className="block text-sm text-zinc-300 hover:text-white">
                Criminal
              </Link>
              <Link to="/direito-previdenciario" onClick={closeAllMenus} className="block text-sm text-zinc-300 hover:text-white">
                Previdenciário
              </Link>
            </div>
          </div>

          <Link to="/contato" onClick={closeAllMenus} className="block font-medium hover:text-white pt-2 border-t border-zinc-800">
            Contato
          </Link>

          <div className="pt-2">
            <a
              className="block text-center w-full px-5 py-2.5 text-sm font-semibold text-zinc-900 bg-white rounded-full"
              href="https://wa.me/5500000000000?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20an%C3%A1lise%20de%20caso."
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeAllMenus}
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;