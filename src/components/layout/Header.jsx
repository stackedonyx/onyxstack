import { useState } from 'react';
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from '../theme/ThemeToggle.jsx';
import styles from './Header.module.css';

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#produtos', label: 'Produtos' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <a className={styles.brand} href="#inicio" onClick={closeMenu} aria-label="Onyx Stack, início da página">
            <img src="/marketing/2025-06-20_temporary_onyx_logo_compressed.png" alt="" />
            <span>Onyx <b>Stack</b></span>
          </a>
          <button className={styles.menuButton} type="button" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-controls="main-navigation" aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}>
            {isOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
          <nav id="main-navigation" className={`${styles.nav} ${isOpen ? styles.open : ''}`} aria-label="Navegação principal">
            {links.map((link) => <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>)}
            <a className={styles.contactLink} href="#contato" onClick={closeMenu}>Fale conosco <FiArrowUpRight aria-hidden="true" /></a>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
