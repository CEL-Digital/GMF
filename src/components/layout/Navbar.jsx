import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import LogoAzul from "../../assets/logoGMFAzulEscuro.webp";

export function Navbar() {
  
  const [isOpen, setIsOpen] = useState(false);
  const [isAreasOpen, setIsAreasOpen] = useState(false);

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Lógica para esconder/mostrar pílula ao rolar
  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
        setIsAreasOpen(false);
      } else {
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

  // Função centralizada para navegar e rolar até a âncora
  const scrollToAnchor = (sectionId) => {
    closeAllMenus();
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
    <header
      className={`fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-28"
      }`}
    >
      <nav className="w-full max-w-5xl bg-white text-zinc-900 border border-zinc-200 rounded-full px-6 py-2.5 flex items-center justify-between shadow-xl transition-all">
        {/* LOGO */}
        <Link to="/" onClick={closeAllMenus} className="flex items-center h-8">
          <img src={LogoAzul} alt="GMF Advogados" className="h-full w-auto object-contain" />
        </Link>

        {/* LINKS DESKTOP */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-900">
          <Link to="/" onClick={closeAllMenus} className="font-news font-semibold tracking-tighter hover:text-zinc-600 transition-colors">
            Home
          </Link>
          
          <button
            onClick={() => scrollToAnchor("sobre")}
            className="font-news font-semibold tracking-tighter hover:text-zinc-600 transition-colors cursor-pointer bg-transparent border-0 p-0 text-sm text-zinc-900"
          >
            Sobre
          </button>

          {/* DROPDOWN ÁREAS DE ATUAÇÃO */}
          <div ref={dropdownRef} className="relative flex items-center">
            <button
              onClick={() => setIsAreasOpen(!isAreasOpen)}
              className="font-news font-semibold tracking-tighter cursor-pointer hover:text-zinc-600 flex items-center gap-1 focus:outline-none text-sm text-zinc-900 py-1"
            >
              Áreas de Atuação
              <svg
                className={`w-3.5 h-3.5 text-zinc-500 transition-transform duration-200 ${
                  isAreasOpen ? "rotate-180 text-zinc-900" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Menu Suspenso */}
            {isAreasOpen && (
              <ul className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-60 bg-white border border-zinc-200 rounded-2xl p-2 shadow-2xl text-sm animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                <li>
                  <Link
                    to="/direito-trabalhista"
                    onClick={closeAllMenus}
                    className="font-news font-semibold tracking-tighter block px-4 py-2.5 text-zinc-900 hover:bg-zinc-100 hover:text-zinc-950 rounded-xl transition-colors font-medium"
                  >
                    Direito Trabalhista
                  </Link>
                </li>
                <li>
                  <Link
                    to="/direito-civel"
                    onClick={closeAllMenus}
                    className="font-news font-semibold tracking-tighter block px-4 py-2.5 text-zinc-900 hover:bg-zinc-100 hover:text-zinc-950 rounded-xl transition-colors"
                  >
                    Direito Cível
                  </Link>
                </li>
                <li>
                  <Link
                    to="/direito-de-familia"
                    onClick={closeAllMenus}
                    className="font-news font-semibold tracking-tighter block px-4 py-2.5 text-zinc-900 hover:bg-zinc-100 hover:text-zinc-950 rounded-xl transition-colors"
                  >
                    Direito de Família
                  </Link>
                </li>
                <li>
                  <Link
                    to="/direito-do-consumidor"
                    onClick={closeAllMenus}
                    className="font-news font-semibold tracking-tighter block px-4 py-2.5 text-zinc-900 hover:bg-zinc-100 hover:text-zinc-950 rounded-xl transition-colors"
                  >
                    Direito do Consumidor
                  </Link>
                </li>
                <li>
                  <Link
                    to="/direito-criminal"
                    onClick={closeAllMenus}
                    className="font-news font-semibold tracking-tighter block px-4 py-2.5 text-zinc-900 hover:bg-zinc-100 hover:text-zinc-950 rounded-xl transition-colors"
                  >
                    Direito Criminal
                  </Link>
                </li>
                <li>
                  <Link
                    to="/direito-previdenciario"
                    onClick={closeAllMenus}
                    className="font-news font-semibold tracking-tighter block px-4 py-2.5 text-zinc-900 hover:bg-zinc-100 hover:text-zinc-950 rounded-xl transition-colors"
                  >
                    Direito Previdenciário
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <button
            onClick={() => scrollToAnchor("contato")}
            className="font-news font-semibold tracking-tighter hover:text-zinc-600 transition-colors cursor-pointer bg-transparent border-0 p-0 text-sm text-zinc-900"
          >
            Contato
          </button>
        </div>

        {/* BOTÃO CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            className="px-5 py-2 text-xs font-semibold text-white bg-brand-dark-blue hover:bg-brand-dark-blue/90 rounded-full transition-all active:scale-95 shadow-sm"
            href="https://wa.me/+5511914511407?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20conhecer%20a%20GMF%20Advogados."
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
            className="text-zinc-900 hover:text-zinc-600 focus:outline-none p-1.5"
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

      {/* MENU MOBILE */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white border border-zinc-200 p-5 rounded-3xl space-y-4 shadow-2xl text-zinc-900 animate-in fade-in slide-in-from-top-2 duration-200">
          <Link to="/" onClick={closeAllMenus} className="font-news font-semibold tracking-tighter block hover:text-zinc-600">
            Home
          </Link>

          <button
            onClick={() => scrollToAnchor("sobre")}
            className="font-news font-semibold tracking-tighter block text-left w-full hover:text-zinc-600 bg-transparent border-0 p-0 text-base text-zinc-900"
          >
            Sobre
          </button>

          <button
            onClick={() => scrollToAnchor("contato")}
            className="font-news font-semibold tracking-tighter block text-left w-full hover:text-zinc-600 bg-transparent border-0 p-0 text-base text-zinc-900"
          >
            Contato
          </button>

          <div className="space-y-2 pt-2 border-t border-zinc-100">
            <span className="block text-xs font-semibold font-news text-zinc-400 uppercase tracking-wider">
              Áreas de Atuação
            </span>
            <div className="pl-2 space-y-2.5 border-l border-zinc-200">
              <Link to="/direito-trabalhista" onClick={closeAllMenus} className="font-news font-semibold tracking-tighter block text-sm font-medium text-zinc-900 hover:text-zinc-600">
                Trabalhista
              </Link>
              <Link to="/direito-civel" onClick={closeAllMenus} className="font-news font-semibold tracking-tighter block text-sm font-medium text-zinc-900 hover:text-zinc-600">
                Cível
              </Link>
              <Link to="/direito-de-familia" onClick={closeAllMenus} className="font-news font-semibold tracking-tighter block text-sm font-medium text-zinc-900 hover:text-zinc-600">
                Família
              </Link>
              <Link to="/direito-do-consumidor" onClick={closeAllMenus} className="font-news font-semibold tracking-tighter block text-sm font-medium text-zinc-900 hover:text-zinc-600">
                Consumidor
              </Link>
              <Link to="/direito-criminal" onClick={closeAllMenus} className="font-news font-semibold tracking-tighter block text-sm font-medium text-zinc-900 hover:text-zinc-600">
                Criminal
              </Link>
              <Link to="/direito-previdenciario" onClick={closeAllMenus} className="font-news font-semibold tracking-tighter block text-sm font-medium text-zinc-900 hover:text-zinc-600">
                Previdenciário
              </Link>
            </div>
          </div>

          <div className="pt-2">
            <a
              className="block text-center w-full px-5 py-2.5 text-sm font-semibold text-white bg-brand-dark-blue hover:bg-brand-dark-blue/90 rounded-full"
              href="https://wa.me/+5511914511407?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20conhecer%20a%20GMF%20Advogados."
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