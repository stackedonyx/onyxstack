import { FiArrowUpRight } from 'react-icons/fi';
import SectionHeading from '../components/common/SectionHeading.jsx';
import ServiceCard from '../components/services/ServiceCard.jsx';
import Button from '../components/common/Button.jsx';
import { services } from '../services/catalog.js';

export default function ServicesSection() {
  return <section className="section section-tinted" id="servicos" aria-labelledby="services-title"><div className="container"><div className="section-heading-row"><SectionHeading eyebrow="Software sob medida" title="Do zero ou evoluindo o que já existe." id="services-title">Aplicativos, sistemas, dados e infraestrutura: construímos a solução que o seu contexto pede, sem limitar a conversa a um tipo de tecnologia.</SectionHeading><Button href="#contato" variant="secondary">Montar um briefing <FiArrowUpRight aria-hidden="true" /></Button></div><div className="service-grid">{services.map((service) => <ServiceCard key={service.title} service={service} />)}</div></div></section>;
}
