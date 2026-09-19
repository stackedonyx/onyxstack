import { Link } from 'react-router-dom';
import PageShell from '../components/layout/PageShell.jsx';
import Button from '../components/common/Button.jsx';
import '../styles/pages.css';

export default function NotFoundPage() { return <PageShell><main className="not-found"><div className="container narrow"><span className="eyebrow">404</span><h1 className="section-title">Essa página saiu para respirar.</h1><p className="lead">Mas a Onyx Stack continua por aqui.</p><Button to="/">Voltar para o início</Button></div></main></PageShell>; }
