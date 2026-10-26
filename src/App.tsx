
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import ProductWorlds from '@/components/ProductWorlds';
import SealExplorer from '@/components/SealExplorer';
import Applications from '@/components/Applications';
import About from '@/components/About';
import Quality from '@/components/Quality';
import Enquiry from '@/components/Enquiry';
import Footer from '@/components/Footer';

function HomePage() {
  return (
    <>
    <Hero />
    <ProductWorlds />
     <About />
    </>
  );
}

function ProductsPage() {
  return (
    <>
      <ProductWorlds />
      <SealExplorer />
    </>
  );
}

function AboutPage() {
  return <About />;
}

function QualityPage() {
  return <Quality />;
}

function ContactPage() {
  return <Enquiry />;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-[#E9EFE7]">
        <Nav />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/quality" element={<QualityPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
