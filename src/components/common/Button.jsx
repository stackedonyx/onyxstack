import styles from './Button.module.css';

export default function Button({ children, href, variant = 'primary', type = 'button', disabled = false, ...props }) {
  const className = `${styles.button} ${styles[variant]}`;
  if (href) return <a className={className} href={href} {...props}>{children}</a>;
  return <button className={className} type={type} disabled={disabled} {...props}>{children}</button>;
}
