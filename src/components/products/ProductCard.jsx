import { FiArrowUpRight } from 'react-icons/fi';
import Card from '../common/Card.jsx';

export default function ProductCard({ product }) {
  return <Card className="product-card" accent><span className="eyebrow">{product.tag}</span><h3>{product.name}</h3><p>{product.description}</p><ul className="product-includes">{product.includes.map((item) => <li key={item}>{item}</li>)}</ul><span className="consultation-note">Preço sob consulta — cada projeto é único.</span><a href="#contato">Falar sobre este produto <FiArrowUpRight aria-hidden="true" /></a></Card>;
}
