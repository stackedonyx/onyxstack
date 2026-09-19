import { FiArrowUpRight, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div><Link className="footer-brand" to="/">Onyx <span>Stack</span></Link><p>Infraestrutura de web e automação em que você pode confiar.</p></div>
        <div><span className="eyebrow">Navegue</span><Link to="/produtos">Produtos</Link><Link to="/servicos">Sob medida</Link><Link to="/sobre">Sobre nós</Link></div>
        <div><span className="eyebrow">Converse</span><a href="mailto:stackonyx@gmail.com"><FiMail aria-hidden="true" /> stackonyx@gmail.com</a><Link to="/contato">Começar um projeto <FiArrowUpRight aria-hidden="true" /></Link></div>
      </div>
      <div className="container footer-bottom"><span>© 2025 Onyx Stack</span><span>Feito para negócios em movimento.</span></div>
    </footer>
  );
}
