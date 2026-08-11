import { ContactSection } from "../components/sections/Home/Contato";
import { HeroHome } from "../components/sections/Home/HeroHome";
import { AlertSection } from "../components/sections/Home/Interesse";
import { AboutSection } from "../components/sections/Home/Sobre"

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