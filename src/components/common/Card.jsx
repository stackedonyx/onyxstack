import styles from './Card.module.css';

export default function Card({ children, className = '', accent = false }) {
  return <article className={`${styles.card} ${accent ? styles.accent : ''} ${className}`}>{children}</article>;
}
