import { ContactSection } from "../components/Sections/home/Contato.jsx";
import { HeroHome } from "../components/Sections/home/HeroHome.jsx";
import { AlertSection } from "../components/Sections/home/Interesse.jsx";
import { AboutSection } from "../components/Sections/home/Sobre.jsx";

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