import { useState } from 'react';
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi';
import { NavLink, Link } from 'react-router-dom';
import ThemeToggle from '../theme/ThemeToggle.jsx';
import styles from './Header.module.css';

const links = [
  { to: '/produtos', label: 'Produtos' },
  { to: '/servicos', label: 'Sob medida' },
  { to: '/sobre', label: 'Sobre' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <Link className={styles.brand} to="/" onClick={closeMenu} aria-label="Onyx Stack, página inicial">
            <img src="/marketing/2025-06-20_temporary_onyx_logo_compressed.png" alt="" />
            <span>Onyx <b>Stack</b></span>
          </Link>
          <button className={styles.menuButton} type="button" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-controls="main-navigation" aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}>
            {isOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
          <nav id="main-navigation" className={`${styles.nav} ${isOpen ? styles.open : ''}`} aria-label="Navegação principal">
            {links.map((link) => <NavLink key={link.to} to={link.to} onClick={closeMenu} className={({ isActive }) => isActive ? styles.active : ''}>{link.label}</NavLink>)}
            <Link className={styles.contactLink} to="/contato" onClick={closeMenu}>Fale conosco <FiArrowUpRight aria-hidden="true" /></Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
