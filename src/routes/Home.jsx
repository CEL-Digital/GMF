import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ContactSection } from "../components/Sections/home/Contato.jsx";
import { HeroHome } from "../components/Sections/home/HeroHome.jsx";
import { AlertSection } from "../components/Sections/home/Interesse.jsx";
import { AboutSection } from "../components/Sections/home/Sobre.jsx";

export function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const element = document.getElementById(targetId);

      if (element) {
        // O timeout garante que o React terminou de renderizar os elementos do DOM
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }
    }
  }, [location]);

  return (
    <div className="flex flex-col">
      <HeroHome />
      <AlertSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}

export default Home;
