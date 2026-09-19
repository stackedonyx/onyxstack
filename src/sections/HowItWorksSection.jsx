import { FiArrowUpRight } from 'react-icons/fi';
import SectionHeading from '../components/common/SectionHeading.jsx';
import Button from '../components/common/Button.jsx';

const steps = [
  ['01', 'Briefing', 'Entendemos sua operação, seus gargalos e o resultado que precisa aparecer.'],
  ['02', 'Proposta', 'Organizamos escopo, prioridades e investimento com transparência.'],
  ['03', 'Desenvolvimento', 'Construímos em ciclos curtos, com você acompanhando a evolução.'],
  ['04', 'Entrega', 'Publicamos, orientamos sua equipe e deixamos a base pronta para evoluir.'],
];

export default function HowItWorksSection() {
  return <section className="section process-section" aria-labelledby="process-title"><div className="container"><SectionHeading eyebrow="Como funciona" title="Menos ruído. Mais avanço." id="process-title">Um processo direto para transformar uma necessidade em uma ferramenta que realmente entra na rotina.</SectionHeading><div className="process-grid">{steps.map(([number, title, description]) => <article className="process-step" key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div><Button href="#contato">Começar uma conversa <FiArrowUpRight aria-hidden="true" /></Button></div></section>;
}
