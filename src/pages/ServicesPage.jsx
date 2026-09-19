import { FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import PageShell from '../components/layout/PageShell.jsx';
import ServiceCard from '../components/services/ServiceCard.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import { services } from '../services/catalog.js';
import { useDocumentMeta } from '../hooks/useDocumentMeta.js';
import '../styles/pages.css';

export default function ServicesPage() { useDocumentMeta({ title: 'Software sob medida | Onyx Stack', description: 'Briefing, desenvolvimento e acompanhamento para software feito do zero.' }); return <PageShell><main><section className="page-hero grid-pattern"><div className="container narrow"><span className="eyebrow">Software sob demanda</span><h1 className="section-title">A ferramenta certa para o trabalho que só você conhece.</h1><p className="lead">Desenhamos sistemas, automações e experiências digitais do zero, com clareza em cada etapa.</p><Link className="text-link" to="/contato">Montar meu briefing <FiArrowUpRight aria-hidden="true" /></Link></div></section><section className="section"><div className="container"><SectionHeading eyebrow="Como trabalhamos" title="Menos ruído. Mais avanço." /> <div className="service-grid service-grid-large">{services.map((service) => <ServiceCard key={service.number} service={service} />)}</div></div></section><section className="section section-tinted"><div className="container split-block"><div><span className="eyebrow">Feito do zero</span><h2 className="section-title">Seu contexto é parte do produto.</h2></div><p className="lead">Você não precisa adaptar seu negócio a uma ferramenta genérica. A Onyx Stack traduz sua operação em uma estrutura simples, útil e pronta para evoluir.</p></div></section></main></PageShell>; }
