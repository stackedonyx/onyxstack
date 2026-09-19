const questions = [
  ['Vocês trabalham apenas com projetos novos?', 'Não. Podemos começar do zero ou evoluir um sistema que sua operação já usa.'],
  ['Como funciona o orçamento?', 'Depois de entender o contexto e as prioridades, enviamos uma proposta sob medida. Não trabalhamos com preço fixo de prateleira para projetos personalizados.'],
  ['A Onyx atende negócios de qualquer tamanho?', 'Sim. O escopo é dimensionado para o momento do negócio, com uma base que possa crescer sem desperdício.'],
  ['Vocês continuam depois da entrega?', 'Combinamos o nível de acompanhamento necessário: suporte, manutenção, evolução ou autonomia para sua equipe.'],
];

export default function FaqSection() {
  return <section className="section section-tinted faq-section" aria-labelledby="faq-title"><div className="container faq-grid"><div><span className="eyebrow">Dúvidas comuns</span><h2 className="section-title" id="faq-title">Antes de começar, tudo bem perguntar.</h2></div><div className="faq-list">{questions.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>;
}
