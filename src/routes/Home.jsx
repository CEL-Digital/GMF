import { ContactSection } from "../components/Sections/home/Contato";
import { HeroHome } from "../components/Sections/home/HeroHome";
import { AlertSection } from "../components/Sections/home/Interesse";
import { AboutSection } from "../components/Sections/home/Sobre";

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