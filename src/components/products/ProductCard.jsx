import { FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Card from '../common/Card.jsx';

export default function ProductCard({ product }) {
  return <Card className="product-card" accent><span className="eyebrow">{product.tag}</span><h3>{product.name}</h3><p>{product.description}</p><strong>{product.price}</strong><Link to="/contato" state={{ subject: product.name }}>Quero este produto <FiArrowUpRight aria-hidden="true" /></Link></Card>;
}
