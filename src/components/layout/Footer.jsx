import { FiArrowUpRight, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div><a className="footer-brand" href="#inicio">Onyx <span>Stack</span></a><p>Infraestrutura de web e automação em que você pode confiar.</p></div>
        <div><span className="eyebrow">Navegue</span><a href="#sobre">Sobre nós</a><a href="#servicos">Serviços</a><a href="#produtos">Produtos</a></div>
        <div><span className="eyebrow">Converse</span><a href="mailto:stackonyx@gmail.com"><FiMail aria-hidden="true" /> stackonyx@gmail.com</a><a href="#contato">Começar um projeto <FiArrowUpRight aria-hidden="true" /></a></div>
      </div>
      <div className="container footer-bottom"><span>© 2025 Onyx Stack</span><span>Feito para negócios em movimento.</span></div>
    </footer>
  );
}
