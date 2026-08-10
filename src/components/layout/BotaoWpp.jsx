export function btn() {
    return (
        <a
            className="relative group mt-8 flex items-center justify-center overflow-hidden rounded-full bg-brand-dark-blue px-6 py-2 text-md font-semibold text-brand-dark-blue shadow-sm"
            href="https://wa.me/+5511914511407?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20conhecer%20a%20GMF%20Advogados." 
            target="_blank"
            rel="noopener noreferrer"
            >
            Camada branca inicial
            <span className="absolute inset-0 bg-white transition-opacity duration-800 group-hover:opacity-0"></span>
            
            Círculo expandindo a partir do centro
            <span className="absolute aspect-square w-[200%] scale-0 rounded-full bg-brand-dark-blue transition-transform duration-800 ease-in-out group-hover:scale-100"></span>
            
            Texto
            <span className="relative z-10 transition-colors text-sm duration-1000 ease-in-out group-hover:text-white"> 
                Falar no WhatsApp
            </span>
        </a>
    )
}