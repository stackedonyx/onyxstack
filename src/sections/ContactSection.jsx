import { useState } from 'react';
import { FiCheck, FiMail, FiSend } from 'react-icons/fi';
import Button from '../components/common/Button.jsx';
import { submitContactForm } from '../services/contact.js';

const initialForm = { name: '', email: '', message: '' };

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  function updateField(event) { setForm((current) => ({ ...current, [event.target.name]: event.target.value })); }
  async function handleSubmit(event) { event.preventDefault(); setStatus('loading'); await submitContactForm(form); setStatus('success'); }
  return <section className="section contact-section" id="contato" aria-labelledby="contact-title"><div className="container contact-grid"><div className="contact-aside"><span className="eyebrow">Fale conosco</span><h2 className="section-title" id="contact-title">Vamos tirar sua ideia do papel?</h2><p className="lead">Conte um pouco sobre o que você precisa. A primeira conversa é simples, direta e sem compromisso.</p><a className="mail-link" href="mailto:stackonyx@gmail.com"><FiMail aria-hidden="true" /> stackonyx@gmail.com</a></div>{status === 'success' ? <div className="success-box" role="status"><FiCheck aria-hidden="true" /><h3>Briefing recebido.</h3><p>Obrigado por abrir essa conversa. Vamos responder para {form.email} em breve.</p><Button href="#inicio">Voltar para o início</Button></div> : <form className="contact-form" onSubmit={handleSubmit}><div className="form-field"><label htmlFor="name">Seu nome</label><input id="name" name="name" value={form.name} onChange={updateField} required autoComplete="name" /></div><div className="form-field"><label htmlFor="email">Seu melhor e-mail</label><input id="email" name="email" type="email" value={form.email} onChange={updateField} required autoComplete="email" /></div><div className="form-field"><label htmlFor="message">O que você precisa construir?</label><textarea id="message" name="message" rows="6" value={form.message} onChange={updateField} required /></div><Button type="submit" disabled={status === 'loading'}>{status === 'loading' ? 'Enviando...' : 'Enviar briefing'} <FiSend aria-hidden="true" /></Button></form>}</div></section>;
}
