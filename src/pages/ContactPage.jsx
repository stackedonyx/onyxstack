import { useState } from 'react';
import { FiArrowUpRight, FiCheck, FiMail } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import PageShell from '../components/layout/PageShell.jsx';
import Button from '../components/common/Button.jsx';
import { submitContactForm } from '../services/contact.js';
import { useDocumentMeta } from '../hooks/useDocumentMeta.js';
import '../styles/pages.css';

const initialForm = { name: '', email: '', message: '' };

export default function ContactPage() {
  useDocumentMeta({ title: 'Contato | Onyx Stack', description: 'Conte para a Onyx Stack o que seu negócio precisa construir.' });
  const location = useLocation();
  const [form, setForm] = useState(() => ({ ...initialForm, message: subject ? `${subject}\n\n` : '' }));
  const [status, setStatus] = useState('idle');
  const subject = location.state?.subject;
  function updateField(event) { setForm((current) => ({ ...current, [event.target.name]: event.target.value })); }
  async function handleSubmit(event) { event.preventDefault(); setStatus('loading'); await submitContactForm(form); setStatus('success'); }
  return <PageShell><main><section className="page-hero grid-pattern"><div className="container narrow"><span className="eyebrow">Fale conosco</span><h1 className="section-title">Vamos tirar sua ideia do papel?</h1><p className="lead">Conte um pouco sobre o que você precisa. A primeira conversa é simples, direta e sem compromisso.</p></div></section><section className="section"><div className="container contact-grid"><div className="contact-aside"><span className="eyebrow">Canal direto</span><h2>Tem uma pergunta rápida?</h2><a className="mail-link" href="mailto:stackonyx@gmail.com"><FiMail aria-hidden="true" /> stackonyx@gmail.com</a><p>Respondemos com calma e indicamos o melhor próximo passo para o seu momento.</p></div>{status === 'success' ? <div className="success-box"><FiCheck aria-hidden="true" /><h2>Briefing recebido.</h2><p>Obrigado por abrir essa conversa. Vamos responder para {form.email} em breve.</p><Button to="/">Voltar para o início <FiArrowUpRight aria-hidden="true" /></Button></div> : <form className="contact-form" onSubmit={handleSubmit}><div className="form-field"><label htmlFor="name">Seu nome</label><input id="name" name="name" value={form.name} onChange={updateField} required autoComplete="name" /></div><div className="form-field"><label htmlFor="email">Seu melhor e-mail</label><input id="email" name="email" type="email" value={form.email} onChange={updateField} required autoComplete="email" /></div><div className="form-field"><label htmlFor="message">O que você precisa construir?</label><textarea id="message" name="message" rows="6" value={form.message} onChange={updateField} required /></div><Button type="submit" disabled={status === 'loading'}>{status === 'loading' ? 'Enviando...' : 'Enviar briefing'} <FiArrowUpRight aria-hidden="true" /></Button></form>}</div></section></main></PageShell>;
}
