import { ContactSection } from "../components/sections/home/Contato";
import { HeroHome } from "../components/sections/home/HeroHome";
import { AlertSection } from "../components/sections/home/Interesse";
import { AboutSection } from "../components/sections/home/Sobre";

export function Home() {
    return (
        <div className="flex flex-col">
            <HeroHome />
            <AlertSection />
            <AboutSection />
            <ContactSection />
        </div>
    )
}