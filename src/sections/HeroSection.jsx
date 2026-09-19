import { FiArrowDown, FiArrowUpRight } from 'react-icons/fi';
import Button from '../components/common/Button.jsx';
import { useDocumentMeta } from '../hooks/useDocumentMeta.js';

export default function HeroSection() {
  useDocumentMeta({ title: 'Onyx Stack | Software em que você pode confiar', description: 'A Onyx Stack constrói software sob medida e produtos digitais prontos para negócios que querem evoluir.' });
  return <section className="hero grid-pattern" id="inicio" aria-labelledby="hero-title"><img className="watermark watermark-hero" src="/marketing/2025-06-28_temporary_onyx_logo_compressed.png" alt="" aria-hidden="true" /><div className="container hero-grid"><div className="hero-copy"><span className="eyebrow">Software · Produto · Evolução</span><h1 className="display" id="hero-title">Infraestrutura em que você pode <em>confiar.</em></h1><p className="lead">A Onyx Stack constrói ferramentas digitais para você cuidar do que faz de melhor enquanto a tecnologia cuida do resto.</p><div className="button-row"><Button href="#servicos">Ver soluções <FiArrowUpRight aria-hidden="true" /></Button><Button href="#contato" variant="secondary">Fale com a gente</Button></div></div><div className="hero-mark"><img src="/marketing/2025-06-20_temporary_onyx_logo_compressed.png" alt="Símbolo da Onyx Stack" width="340" height="290" fetchPriority="high" /><span>ONX / SOFTWARE STUDIO</span></div></div><a className="scroll-cue" href="#sobre">Desça para explorar <FiArrowDown aria-hidden="true" /></a></section>;
}
