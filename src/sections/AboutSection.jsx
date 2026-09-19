import { FiCheck } from 'react-icons/fi';
import SectionHeading from '../components/common/SectionHeading.jsx';

const points = ['Tecnologia que acompanha seu momento', 'Decisões claras, sem complicar o que importa', 'Uma equipe perto quando você precisar'];

export default function AboutSection() {
  return <section className="section about-section" id="sobre" aria-labelledby="about-title"><img className="watermark watermark-about" src="/marketing/2025-06-28_temporary_onyx_logo_compressed.png" alt="" aria-hidden="true" loading="lazy" /><div className="container intro-grid"><SectionHeading eyebrow="Uma equipe sob medida" title="Seu negócio tem um ritmo. A tecnologia também pode ter." id="about-title">A Onyx entende o contexto antes de sugerir qualquer ferramenta. Criamos software, automações e produtos digitais com clareza em cada decisão.</SectionHeading><div className="benefit-list">{points.map((point, index) => <div className="benefit" key={point}><span>0{index + 1}</span><p>{point}</p><FiCheck aria-hidden="true" /></div>)}</div></div></section>;
}
