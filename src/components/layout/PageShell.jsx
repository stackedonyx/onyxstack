import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default function PageShell({ children }) {
  return <div className="page"><Header />{children}<Footer /></div>;
}
