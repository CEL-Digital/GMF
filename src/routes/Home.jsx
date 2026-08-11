import { ContactSection } from "../components/sections/home/Contato.jsx";
import { HeroHome } from "../components/sections/home/HeroHome.jsx";
import { AlertSection } from "../components/sections/home/Interesse.jsx";
import { AboutSection } from "../components/sections/home/Sobre.jsx";

export function Home() {
    return (
        <div className="flex flex-col">
            <HeroHome />
            <AlertSection />
            <AboutSection />
            <ContactSection />
        </div>
    );
}