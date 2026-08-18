import { ArrowLeft, Home, MessageSquare } from "lucide-react";

const whatsappMessage = "Ol%C3%A1!%20Estava%20navegando%20no%20site%20e%20n%C3%A3o%20encontrei%20a%20p%C3%A1gina%20que%20procurava.";

export function NotFound() {
  return (
    <section className="min-h-screen bg-zinc-50 text-zinc-900 flex items-center justify-center px-6 py-20">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <span className="text-xs font-semibold text-zinc-400">
          Erro 404
        </span>

        <h1 className="font-news text-4xl md:text-6xl font-bold text-zinc-950">
          Página não encontrada
        </h1>

        <p className="text-zinc-600 text-base max-w-lg mx-auto">
          O endereço digitado pode ter sido alterado, removido ou não existe mais. Utilize os caminhos abaixo para continuar navegando.
        </p>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-950 text-white font-semibold rounded-full text-xs shadow-md hover:bg-zinc-800 transition-all duration-300"
          >
            <Home className="w-4 h-4" />
            Voltar para o Início
          </a>

          <a
            href={`https://wa.me/+5511914511407?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-zinc-200 text-zinc-950 font-semibold rounded-full text-xs hover:border-zinc-300 transition-all duration-300 shadow-xs"
          >
            <MessageSquare className="w-4 h-4" />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default NotFound;