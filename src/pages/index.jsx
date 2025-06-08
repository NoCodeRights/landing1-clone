// Archivo: src/pages/index.jsx
// Página principal con estructura de componentes por sección
import { SEO } from '../utils/seo';
import Header from '../components/Header';
import Hero from '../components/Hero';
import GalleryCarousel from '../components/GalleryCarousel';
import Process from '../components/Process';
//import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      {/* SEO personalizado para la página principal */}
      <SEO
        title="Piscinas Patricio Luengo - Instalación de Piscinas en Chile"
        description="Especialistas en construcción de piscinas a medida. Confianza, experiencia y diseño personalizado."
        keywords={[
          'piscinas Chile',
          'instalación de piscinas',
          'Piscinas Patricio Luengo',
          'piscinas personalizadas',
          'construcción de piscinas'
        ]}
        url="https://www.piscinaspatricioluengo.cl/"
      />

      {/* Encabezado de navegación */}
      <Header />

      {/* Contenido principal por secciones */}
      <main>
        <Hero />
        <GalleryCarousel />
        <Process />
        {/* <Testimonials /> */}
        <FAQ />
      </main>

      {/* Pie de página */}
      <Footer />
    </>
  );
}
