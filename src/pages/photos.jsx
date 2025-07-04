import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Image from 'next/image';
import Link from 'next/link';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Footer from '../components/Footer';

export default function Photos() {
  const router = useRouter();
  const page = parseInt(router.query.page || '1', 10);

  // siempre 20 por página
  const perPage = 20;
  const totalImages = 362;
  const start = (page - 1) * perPage;
  const end = Math.min(start + perPage, totalImages);

  const allImages = Array.from(
    { length: totalImages },
    (_, i) => `/images/proyecto (${i + 1}).jpeg`
  );
  const images = allImages.slice(start, end);

  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const prevPage = () => page > 1 && router.push(`/photos?page=${page - 1}`);
  const nextPage = () => end < totalImages && router.push(`/photos?page=${page + 1}`);

  return (
    <>
      <Header />

      <main className="pt-5">
        {/* Navegación rápida */}
        <div className="d-flex justify-content-center gap-3 my-4">
          <Link href="/" legacyBehavior><a className="btn btn-secondary">🏠 Inicio</a></Link>
          <Link href="/photos" legacyBehavior><a className="btn btn-primary">📷 Fotos</a></Link>
          <Link href="/videos" legacyBehavior><a className="btn btn-primary">🎥 Videos</a></Link>
        </div>

        {/* Paginación superior */}
        <div className="container d-flex justify-content-between align-items-center mb-3">
          <button onClick={prevPage} disabled={page === 1} className="btn btn-outline-secondary">
            ‹ Anterior
          </button>
          <span> {start + 1} – {end} de {totalImages} </span>
          <button onClick={nextPage} disabled={end >= totalImages} className="btn btn-outline-secondary">
            Siguiente ›
          </button>
        </div>

        {/* Grid de imágenes */}
        <div className="container">
          <div className="row g-3">
            {images.map((src, idx) => (
              <div key={idx} className="col-6 col-sm-4 col-md-3">
                <button onClick={() => setLightboxIndex(idx)} className="w-100 p-0 border-0">
                  <div className="position-relative" style={{ paddingBottom: '100%' }}>
                    <Image src={src} alt={`Foto ${start + idx + 1}`} fill objectFit="cover" className="rounded shadow-sm" />
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Paginación inferior */}
        <div className="container d-flex justify-content-between align-items-center mt-3 mb-5">
          <button onClick={prevPage} disabled={page === 1} className="btn btn-outline-secondary">
            ‹ Anterior
          </button>
          <span> {start + 1} – {end} de {totalImages} </span>
          <button onClick={nextPage} disabled={end >= totalImages} className="btn btn-outline-secondary">
            Siguiente ›
          </button>
        </div>

        {/* Lightbox */}
        <Lightbox
          open={lightboxIndex >= 0}
          close={() => setLightboxIndex(-1)}
          slides={images.map(src => ({ src }))}
          index={lightboxIndex}
          onIndexChange={setLightboxIndex}
        />

      </main>

      <Footer />
    </>
  );
}
