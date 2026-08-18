export function SessaoTermos() {
  return (
    <section id="termos-de-uso" className="min-h-screen bg-zinc-50 text-zinc-900 pt-32 pb-20 px-6 md:px-12">
      {/* CABEÇALHO DA SEÇÃO DE TERMOS */}
      <div className="max-w-5xl mx-auto">
        <div className="border-b border-zinc-200 pb-8 mb-12">
          <h2 className="font-news text-3xl md:text-4xl font-semibold text-zinc-950">
            Termos de Uso
          </h2>
          <p className="text-sm text-zinc-500 mt-2">
            Condições gerais de navegação e utilização do site
          </p>
        </div>
        
        {/* CONTEÚDO */}
        <main className="space-y-12 text-zinc-700 text-sm">
          <section id="aceite-termos" className="scroll-mt-28 space-y-3">
            <h3 className="font-news text-xl font-semibold text-zinc-950">
              1. Aceitação dos Termos
            </h3>
            <p className="text-zinc-600">
              Ao acessar e utilizar este site, você concorda expressamente em cumprir e respeitar estes Termos de Uso e todas as leis e regulamentos aplicáveis. Caso não concorde com qualquer disposição, solicitamos que interrompa a navegação.
            </p>
          </section>

          <section id="natureza-conteudo" className="scroll-mt-28 space-y-3">
            <h3 className="font-news text-xl font-semibold text-zinc-950">
              2. Natureza Informativa do Conteúdo
            </h3>
            <p className="text-zinc-600">
              O conteúdo disponibilizado neste site possui caráter meramente informativo e institucional. As informações e dados publicados não constituem parecer jurídico formal nem estabelecem relação cliente-advogado direta.
            </p>
          </section>

          <section id="uso-aceitavel" className="scroll-mt-28 space-y-3">
            <h3 className="font-news text-xl font-semibold text-zinc-950">
              3. Uso Aceitável do Site
            </h3>
            <p className="text-zinc-600">
              Ao utilizar nossos formulários ou canais de contato, você se compromete a fornecer dados verdadeiros e a não utilizar a plataforma para fins ilícitos, envio de spams ou tentativas de violação de segurança.
            </p>
          </section>

          <section id="propriedade-intelectual" className="scroll-mt-28 space-y-3">
            <h3 className="font-news text-xl font-semibold text-zinc-950">
              4. Propriedade Intelectual
            </h3>
            <p className="text-zinc-600">
              Todo o conteúdo deste site (textos, logotipos, layout e marca) é de propriedade exclusiva e protegido pela legislação de propriedade intelectual. A cópia ou reprodução sem autorização prévia é estritamente proibida.
            </p>
          </section>

          <section id="foro" className="scroll-mt-28 space-y-3">
            <h3 className="font-news text-xl font-semibold text-zinc-950">
              5. Legislação Aplicável e Foro
            </h3>
            <p className="text-zinc-600">
              Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil, sendo eleito o foro da comarca da sede da empresa responsável por este site para dirimir quaisquer controvérsias.
            </p>
          </section>
        </main>

      </div>

    </section>
  );
}

export default SessaoTermos;