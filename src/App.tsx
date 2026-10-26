import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import ProductWorlds from '@/components/ProductWorlds';
import StrapShowcase from '@/components/StrapShowcase';
import SealExplorer from '@/components/SealExplorer';
import Applications from '@/components/Applications';
import About from '@/components/About';
import Quality from '@/components/Quality';
import Enquiry from '@/components/Enquiry';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="relative bg-plum">
      <Nav />
      <main>
        <Hero />
        <ProductWorlds />
        <StrapShowcase />
        <SealExplorer />
        <Applications />
        <About />
        <Quality />
        <Enquiry />
      </main>
      <Footer />
    </div>
  );
}
