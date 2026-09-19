import Card from '../common/Card.jsx';

export default function ServiceCard({ service }) {
  return <Card className="service-card"><span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.description}</p></Card>;
}
