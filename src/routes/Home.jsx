import { HeroHome } from "../components/sections/Home/HeroHome";
import { Interesse } from "../components/sections/Home/Interesse";

export function Home() {
    return (
        <div className="flex flex-col">
            <HeroHome />
            <Interesse />
            <div className="flex w-full h-screen justify-center items-center">
                <h1 className="text-2xl font-bold">Sobre</h1>
            </div>
            <div className="flex w-full h-screen justify-center items-center">
                <h1 className="text-2xl font-bold">Contato</h1>
            </div>
        </div>
    )
}