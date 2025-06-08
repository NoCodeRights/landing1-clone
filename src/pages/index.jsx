// src/pages/index.jsx

import Header from '../components/Header';
import Hero from '../components/Hero';
import dynamic from 'next/dynamic';
import Process from '../components/Process';
import Services from '../components/Services';  // ← AÑADIDO
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const GalleryCarousel = dynamic(
  () => import('../components/GalleryCarousel'),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <GalleryCarousel />
        <Process />
        <Services />

        <FAQ />
      </main>

      <Footer />
    </>
  );
}
