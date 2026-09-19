import { FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import PageShell from '../components/layout/PageShell.jsx';
import ProductCard from '../components/products/ProductCard.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import { products } from '../services/catalog.js';
import { useDocumentMeta } from '../hooks/useDocumentMeta.js';
import '../styles/pages.css';

export default function ProductsPage() { useDocumentMeta({ title: 'Produtos | Onyx Stack', description: 'Soluções prontas da Onyx Stack para web, automação e operação.' }); return <PageShell><main><section className="page-hero"><div className="container narrow"><span className="eyebrow">Produtos prontos</span><h1 className="section-title">Ferramentas para você começar hoje.</h1><p className="lead">Escolha uma base pronta, converse com a gente e coloque sua próxima ideia em movimento.</p></div></section><section className="section"><div className="container"><div className="catalog-toolbar"><span>{products.length} soluções disponíveis</span><span>Compra direta · suporte humano</span></div><div className="product-grid product-grid-large">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div><div className="empty-note"><p>Não encontrou exatamente o que precisava?</p><Link to="/contato">Conte para a gente <FiArrowUpRight aria-hidden="true" /></Link></div></div></section></main></PageShell>; }
