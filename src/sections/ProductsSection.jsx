import SectionHeading from '../components/common/SectionHeading.jsx';
import ProductCard from '../components/products/ProductCard.jsx';
import { products } from '../services/catalog.js';

export default function ProductsSection() {
  return <section className="section" id="produtos" aria-labelledby="products-title"><div className="container"><SectionHeading eyebrow="Prateleira Onyx" title="Comece com o que já está pronto." id="products-title">Soluções pensadas para necessidades reais, com espaço para crescer junto com você. Preço sob consulta — cada projeto é único.</SectionHeading><div className="product-grid">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div></div></section>;
}
