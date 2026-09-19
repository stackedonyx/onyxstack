import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../../hooks/useTheme.js';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const nextTheme = theme === 'dark' ? 'claro' : 'escuro';
  return (
    <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Ativar tema ${nextTheme}`} title={`Tema ${nextTheme}`}>
      {theme === 'dark' ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
    </button>
  );
}
