import { ThemeProvider } from '../context/ThemeContext.jsx';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import HeroSection from '../sections/HeroSection.jsx';
import AboutSection from '../sections/AboutSection.jsx';
import ServicesSection from '../sections/ServicesSection.jsx';
import ProductsSection from '../sections/ProductsSection.jsx';
import HowItWorksSection from '../sections/HowItWorksSection.jsx';
import FaqSection from '../sections/FaqSection.jsx';
import ContactSection from '../sections/ContactSection.jsx';
import '../styles/globals.css';
import '../styles/pages.css';

export default function App() {
  return (
    <ThemeProvider>
      <div className="page">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ProductsSection />
          <HowItWorksSection />
          <FaqSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
