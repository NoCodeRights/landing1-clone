// src/pages/index.jsx

import Header from '../components/Header';
import Hero from '../components/Hero';
import dynamic from 'next/dynamic';
import Process from '../components/Process';
import Services from '../components/Services';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

// Cargamos el carrusel solo en cliente
const GalleryCarousel = dynamic(
  () => import('../components/GalleryCarousel'),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <Header />

      <main className="pt-24">
        {/* Sección Hero */}
        <Hero />

        {/* Proceso */}
        <Process />

        {/* Carrusel principal con margen inferior */}
        <div className="mb-5">
          <GalleryCarousel />
        </div>

        {/* Enlaces a galerías (fondo claro de Bootstrap) */}
        <section className="my-5 bg-light py-4">
          <div className="container text-center">
            <p className="h5 text-dark mb-4">
              ¿Quieres ver más imágenes o videos?
            </p>
            <div className="d-flex justify-content-center gap-3">
              <a
                href="/photos"
                className="btn btn-primary btn-lg"
              >
                📷 Fotos
              </a>
              <a
                href="/videos"
                className="btn btn-primary btn-lg"
              >
                🎥 Videos
              </a>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <Services />

        {/* Preguntas Frecuentes */}
        <FAQ />
      </main>

      <Footer />
    </>
  );
}
