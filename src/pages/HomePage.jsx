import { FiArrowDown, FiArrowUpRight, FiCheck } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import PageShell from '../components/layout/PageShell.jsx';
import Button from '../components/common/Button.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import ProductCard from '../components/products/ProductCard.jsx';
import ServiceCard from '../components/services/ServiceCard.jsx';
import { products, services } from '../services/catalog.js';
import { useDocumentMeta } from '../hooks/useDocumentMeta.js';
import '../styles/pages.css';

const benefits = ['Tecnologia que acompanha seu momento', 'Decisões claras, sem complicar o que importa', 'Uma equipe perto quando você precisar'];

export default function HomePage() {
  useDocumentMeta({ title: 'Onyx Stack | Infraestrutura web e automação', description: 'Produtos prontos e software sob medida para negócios que querem evoluir com confiança.' });
  return <PageShell>
    <main>
      <section className="hero grid-pattern"><div className="container hero-grid"><div className="hero-copy"><span className="eyebrow">Web · Automação · Produto</span><h1 className="display">Infraestrutura em que você pode <em>confiar.</em></h1><p className="lead">A Onyx Stack cria ferramentas digitais para você cuidar do que faz de melhor enquanto a tecnologia cuida do resto.</p><div className="button-row"><Button to="/produtos">Ver produtos <FiArrowUpRight aria-hidden="true" /></Button><Button to="/contato" variant="secondary">Falar sobre meu projeto</Button></div></div><div className="hero-mark"><img src="/marketing/2025-06-20_temporary_onyx_logo_compressed.png" alt="Símbolo da Onyx Stack" /><span>ONX / 2025</span></div></div><a className="scroll-cue" href="#proposta">Desça para explorar <FiArrowDown aria-hidden="true" /></a></section>
      <section className="section" id="proposta"><div className="container intro-grid"><SectionHeading eyebrow="Uma equipe sob medida" title="Seu negócio tem um ritmo. A tecnologia também pode ter.">Serviço adaptado para você, por pessoas como você. Nós entendemos o contexto antes de sugerir qualquer ferramenta.</SectionHeading><div className="benefit-list">{benefits.map((benefit, index) => <div className="benefit" key={benefit}><span>0{index + 1}</span><p>{benefit}</p><FiCheck aria-hidden="true" /></div>)}</div></div></section>
      <section className="section section-tinted"><div className="container"><SectionHeading eyebrow="Prateleira Onyx" title="Comece com o que já está pronto.">Produtos pensados para resolver necessidades reais, com compra direta e espaço para crescer junto com você.</SectionHeading><div className="product-grid">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div><Link className="text-link" to="/produtos">Ver todo o catálogo <FiArrowUpRight aria-hidden="true" /></Link></div></section>
      <section className="section"><div className="container service-intro"><div><span className="eyebrow">Do zero, com você</span><h2 className="section-title">Quando o pronto não basta, construímos.</h2></div><Button to="/servicos" variant="secondary">Conhecer serviços <FiArrowUpRight aria-hidden="true" /></Button></div><div className="container service-grid">{services.map((service) => <ServiceCard key={service.number} service={service} />)}</div></section>
      <section className="cta-band"><div className="container cta-content"><span className="eyebrow">Vamos conversar?</span><h2>Você cuida do seu serviço.<br /><em>Nós cuidamos do resto.</em></h2><Button to="/contato">Começar um briefing <FiArrowUpRight aria-hidden="true" /></Button></div></section>
    </main>
  </PageShell>;
}
