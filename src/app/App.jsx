import { ThemeProvider } from '../context/ThemeContext.jsx';
import AppRouter from './router.jsx';
import '../styles/globals.css';

export default function App() {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  );
}
