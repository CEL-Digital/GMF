import { Link } from "react-router-dom";
import { useEffect } from "react";

export function SessaoPolitica() {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    })

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        
        {/* CABEÇALHO */}
        <div id="politica" className="border-b border-zinc-200 pb-8 mb-12">
          <h1 className="font-news text-3xl md:text-5xl font-semibold text-zinc-950 mt-3">
            Política de Privacidade
          </h1>
          <p className="text-sm text-zinc-500 mt-3">
            Última atualização: {new Date().toLocaleDateString("pt-BR", { month: "long", year: "numeric" })}
          </p>
        </div>

        <div>

          {/* CONTEÚDO PRINCIPAL */}
          <main className="lg:col-span-8 space-y-12 text-zinc-700 text-sm">
            
            <section id="introducao" className="scroll-mt-28 space-y-3">
              <h2 className="font-news text-xl font-semibold text-zinc-950">
                1. Introdução
              </h2>
              <p className="text-zinc-600">Esta Política de Privacidade descreve como a empresa responsável por este site coleta, utiliza, armazena e protege as informações pessoais dos usuários deste site. Ao continuar navegando, você declara estar ciente das práticas aqui descritas.</p>
              <p className="text-zinc-600">Levamos a sua privacidade a sério e tratamos os seus dados pessoais em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD) e demais normas aplicáveis.</p>
            </section>

            <section id="responsavel" className="scroll-mt-28 space-y-3">
              <h2 className="font-news text-xl font-semibold text-zinc-950">
                2. Quem é o responsável pelos seus dados?
              </h2>
              <p className="text-zinc-600">A empresa responsável por este site atua como controladora dos dados pessoais tratados no âmbito deste site, sendo responsável por decidir sobre a forma e a finalidade do tratamento.</p>
            </section>

            <section id="coleta" className="scroll-mt-28 space-y-3">
              <h2 className="font-news text-xl font-semibold text-zinc-950">
                3. Quais dados coletamos?
              </h2>
              <p className="text-zinc-600">
                Coletamos informações fornecidas voluntariamente por você ao preencher nossos formulários de contato, agendar consultas ou entrar em contato via WhatsApp:
              </p>
              <ul className="list-disc pl-5 text-zinc-600">
                <li>Nome completo;</li>
                <li>E-mail e telefone de contato;</li>
                <li>Informações do caso enviadas no campo de mensagem;</li>
                <li>Dados de navegação anônimos (cookies para estatísticas de acesso).</li>
              </ul>
            </section>
            
            <section id="uso" className="scroll-mt-28 space-y-3">
              <h2 className="font-news text-xl font-semibold text-zinc-950">
                4. Como utilizamos seus dados?
              </h2>
              <p className="text-zinc-600">
                Os dados são utilizados exclusivamente para as seguintes finalidades:
              </p>
              <ul className="list-disc pl-5 text-zinc-600">
                <li>Dar retorno às suas solicitações de orçamento e atendimento;</li>
                <li>Prestação de serviços advocatícios e assessoria jurídica;</li>
                <li>Cumprimento de obrigações legais ou regulatórias;</li>
                <li>Melhoria contínua da experiência de navegação do nosso site.</li>
              </ul>
            </section>

            <section id="bases-legais" className="scroll-mt-28 space-y-3">
              <h2 className="font-news text-xl font-semibold text-zinc-950">
                5. Bases legais do tratamento
              </h2>
              <p className="text-zinc-600">
                O tratamento dos seus dados pessoais se apoia nas bases legais previstas na LGPD, entre elas:
              </p>
              <ul className="list-disc pl-5 text-zinc-600">
                <li>O seu consentimento, quando solicitado;</li>
                <li>A execução de contrato ou de procedimentos preliminares relacionados a um contrato;</li>
                <li>O cumprimento de obrigação legal ou regulatória;</li>
                <li>O legítimo interesse, respeitados os seus direitos e liberdades fundamentais.</li>
              </ul>
            </section>

            <section id="cookies" className="scroll-mt-28 space-y-3">
              <h2 className="font-news text-xl font-semibold text-zinc-950">
                6. Cookies e tecnologias semelhantes
              </h2>
              <p className="text-zinc-600">Utilizamos cookies e tecnologias semelhantes para garantir o funcionamento do site, lembrar suas preferências e entender como ele é utilizado. Você pode gerenciar ou desativar os cookies nas configurações do seu navegador, ciente de que algumas funcionalidades podem ser afetadas.              </p>
            </section>

            <section id="compartilhamento" className="scroll-mt-28 space-y-3">
              <h2 className="font-news text-xl font-semibold text-zinc-950">
                7. Compartilhamento de dados
              </h2>
              <p className="text-zinc-600">Não vendemos os seus dados pessoais. O compartilhamento ocorre apenas quando necessário e limitado às seguintes situações:</p>
              <ul className="list-disc pl-5 text-zinc-600">
                <li>Com prestadores de serviços que atuam em nosso nome (como hospedagem, analítica e comunicação), obrigados contratualmente a proteger os dados;</li>
                <li>Para cumprimento de obrigação legal ou de determinação de autoridade competente;</li>
                <li>Com o seu consentimento, nas demais hipóteses não previstas acima.</li>
              </ul>
            </section>

            <section id="armazenamento" className="scroll-mt-28 space-y-3">
              <h2 className="font-news text-xl font-semibold text-zinc-950">
                8. Armazenamento e segurança
              </h2>
              <p className="text-zinc-600">Adotamos medidas técnicas e organizacionais razoáveis para proteger os seus dados pessoais contra acessos não autorizados, perda, alteração ou divulgação indevida. Nenhum sistema é totalmente imune a riscos, mas trabalhamos continuamente para manter um ambiente seguro.</p>
            </section>

            <section id="tempo" className="scroll-mt-28 space-y-3">
              <h2 className="font-news text-xl font-semibold text-zinc-950">
                9. Por quanto tempo mantemos os dados
              </h2>
              <p className="text-zinc-600">Mantemos os dados pessoais apenas pelo tempo necessário ao cumprimento das finalidades para as quais foram coletados, salvo quando a retenção por prazo maior for exigida por obrigação legal, regulatória ou para o exercício de direitos.</p>
            </section>

            <section id="direitos" className="scroll-mt-28 space-y-3">
              <h2 className="font-news text-xl font-semibold text-zinc-950">
                10. Seus direitos conforme a LGPD
              </h2>
              <p className="text-zinc-600">
                De acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem o direito de solicitar a qualquer momento:
              </p>
              <ul className="list-disc pl-5 text-zinc-600">
                <li>Confirmar a existência de tratamento dos seus dados;</li>
                <li>Acessar os dados que mantemos sobre você;</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
                <li>Solicitar a anonimização, o bloqueio ou a eliminação de dados desnecessários ou excessivos;</li>
                <li>Solicitar a portabilidade dos dados a outro fornecedor;</li>
                <li>Revogar o consentimento e obter informações sobre o compartilhamento dos seus dados.</li>
              </ul>
            </section>

            <section id="exercer-direitos" className="scroll-mt-28 space-y-3">
              <h2 className="font-news text-xl font-semibold text-zinc-950">
                11. Como exercer os seus direitos
              </h2>
              <p className="text-zinc-600">Para exercer qualquer um dos direitos acima, entre em contato conosco pelos canais de atendimento informados neste site. Poderemos solicitar informações adicionais para confirmar a sua identidade antes de atender à solicitação.</p>
            </section>

            <section id="menores" className="scroll-mt-28 space-y-3">
              <h2 className="font-news text-xl font-semibold text-zinc-950">
                12. Menores de idade
              </h2>
              <p className="text-zinc-600">Este site não se destina a menores de idade sem o devido consentimento dos responsáveis legais. Caso identifiquemos a coleta de dados de um menor sem autorização adequada, adotaremos as providências necessárias para eliminá-los.</p>
            </section>

            <section id="alteracoes" className="scroll-mt-28 space-y-3">
              <h2 className="font-news text-xl font-semibold text-zinc-950">
                13. Alterações desta política
              </h2>
              <p className="text-zinc-600">Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças em nossas práticas ou na legislação. A versão vigente estará sempre disponível nesta página, com a data da última atualização indicada no início do documento.</p>
            </section>

            <section id="contato" className="scroll-mt-28 space-y-3">
              <h2 className="font-news text-xl font-semibold text-zinc-950">
                14. Contato
              </h2>
              <p className="text-zinc-600">Em caso de dúvidas sobre esta Política de Privacidade ou sobre o tratamento dos seus dados pessoais, entre em contato conosco pelos canais de atendimento informados neste site.</p>
            </section>

          </main>

        </div>

      </div>
    </div>
  );
}

export default SessaoPolitica;