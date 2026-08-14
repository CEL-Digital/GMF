// src/components/layout/CookieBanner.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // 1. Verifica se já existe a preferência salva no navegador
    const consent = localStorage.getItem("cookie_consent");

    if (!consent) {
      setShowBanner(true);
    } else if (consent === "granted") {
      // Se já aceitou no passado, atualiza o Google Analytics
      updateGoogleConsent("granted");
    }
  }, []);

  // Função auxiliar para comunicar com a tag gtag do HTML
  const updateGoogleConsent = (status) => {
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: status,
        ad_storage: status,
      });
    }
  };

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "granted");
    updateGoogleConsent("granted");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "denied");
    updateGoogleConsent("denied");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md bg-gray-50 shadow-lg rounded-4xl z-50 transition-all duration-500 animate-fade-in">
      <div className="flex flex-col gap-2">
        <h3 className="text-base font-semibold px-5 pt-4 font-news">
          Controle de Privacidade
        </h3>
        
        <p className="text-xs px-5">
          Utilizamos cookies para analisar o tráfego do site e melhorar a sua experiência.
        </p>

        <div className="flex gap-2 justify-between px-5 pb-3 items-center">
            <div className="text-xs">
                <Link 
            to="/politica-de-privacidade" 
            className="text-blue-400 hover:text-blue-300 duration-400"
          >
            Política de Privacidade
          </Link>
            </div>
            <div>
                <button
                    onClick={handleDecline}
                    className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-slate-600 rounded-4xl transition-colors cursor-pointer duration-400"
                >
                    Recusar
                </button>
                <button
                    onClick={handleAccept}
                    className="px-4 py-2 text-xs font-semibold text-white bg-brand-dark-blue hover:opacity-90 rounded-4xl shadow transition-all cursor-pointer duration-400"
                >
                    Aceitar Cookies
                </button>

            </div>
        </div>
      </div>
    </div>
  );
}