import { Link } from 'react-router-dom';
import styles from './Button.module.css';

export default function Button({ children, to, href, variant = 'primary', type = 'button', disabled = false, ...props }) {
  const className = `${styles.button} ${styles[variant]}`;
  if (to) return <Link className={className} to={to} {...props}>{children}</Link>;
  if (href) return <a className={className} href={href} {...props}>{children}</a>;
  return <button className={className} type={type} disabled={disabled} {...props}>{children}</button>;
}
