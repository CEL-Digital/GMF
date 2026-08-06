import { HeroHome } from "../components/sections/Home/HeroHome";

export function Home() {
    return (
        <div className="flex flex-col">
            <HeroHome />
            <div className="flex w-full h-screen justify-center items-center">
                <h1 className="text-2xl font-bold">Interesse</h1>
            </div>
            <div className="flex w-full h-screen justify-center items-center">
                <h1 className="text-2xl font-bold">Sobre</h1>
            </div>
            <div className="flex w-full h-screen justify-center items-center">
                <h1 className="text-2xl font-bold">Contato</h1>
            </div>
        </div>
    )
}