import heroBackground from "../../../assets/heroBackground.webp";

export function HeroHome() {
    return (
        <div className="flex w-full h-screen overflow-hidden">
            <img src={heroBackground} alt="" className="w-full object-cover object-top"/>
            <div className="absolute inset-0 flex justify-center items-center flex-col">
                    <h1 className="font-bold text-6xl text-white text-center">
                        Transformando a complexidade do sistema <br/>jurídico em segurança e resultados.
                    </h1>
                    <p className="text-gray-400 pt-8 text-center">
                        Defesa especializada com atendimento humanizado, ético e <br/>focado em proteger seus direitos, seu patrimônio e sua família.
                    </p>
            </div>
        </div>
    )
}