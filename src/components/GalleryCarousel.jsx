'use client';

import { useState, useRef, useMemo, useEffect } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

export default function GalleryCarousel() {
  const sliderRef = useRef(null);
  const dialogRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const images = useMemo(
    () =>
      Array.from({ length: 307 }, (_, i) =>
        encodeURI(`/images/proyecto (${i + 1}).jpg`)
      ),
    []
  );

  // CST: configuración vertical sin preview
  const settings = {
    vertical: true,
    verticalSwiping: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 4000,
    beforeChange: (_, next) => setCurrent(next),
  };

  // índexes para 5 botones
  const navButtons = useMemo(() => {
    const total = images.length;
    return [-2, -1, 0, 1, 2].map(off => (current + off + total) % total);
  }, [current, images.length]);

  // efecto para cerrar dialog con Esc
  useEffect(() => {
    const handleKey = e => {
      if (e.key === 'Escape' && dialogRef.current.open) {
        dialogRef.current.close();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const openLightbox = idx => {
    setLightboxIndex(idx);
    dialogRef.current.showModal();
  };

  const showPrev = () =>
    setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
  const showNext = () =>
    setLightboxIndex((lightboxIndex + 1) % images.length);

  return (
    <>
      <section id="galeria" className="py-12 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-800 mb-6">
          Proyectos Destacados
        </h2>

        <div className="max-w-4xl mx-auto overflow-hidden">
          <Slider ref={sliderRef} {...settings}>
            {images.map((src, idx) => (
              <div
                key={idx}
                className="relative w-full max-w-2xl h-0 pb-[56.25%] cursor-pointer"
                onClick={() => openLightbox(idx)}
              >
                <Image
                  src={src}
                  alt={`Proyecto ${idx + 1}`}
                  fill
                  sizes="100vw"
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
          </Slider>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}>
            {navButtons.map((idx, btn) => (
              <button
                key={btn}
                onClick={() => sliderRef.current?.slickGoTo(idx)}
                style={{
                  width: 32,
                  height: 32,
                  margin: '0 12px',
                  borderRadius: '50%',
                  backgroundColor: idx === current ? '#0E7490' : '#93C5FD',
                  border: 'none',
                  cursor: 'pointer'
                }}
                aria-label={`Ir a la imagen ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox con <dialog> */}
      <dialog
        ref={dialogRef}
        className="p-0 bg-transparent border-0"
        style={{ width: '90vw', maxWidth: 800, height: '80vh' }}
      >
        <div className="relative w-full h-full bg-black rounded-lg overflow-hidden">
          {/* Imagen en detalle */}
          <Image
            src={images[lightboxIndex]}
            alt={`Proyecto ${lightboxIndex + 1}`}
            fill
            sizes="90vw"
            className="object-contain"
          />

          {/* Controles */}
          <button
            onClick={showPrev}
            className="absolute top-1/2 left-2 -translate-y-1/2 text-white text-3xl p-2 bg-cyan-800 rounded-full"
            aria-label="Anterior"
          >
            ‹
          </button>
          <button
            onClick={showNext}
            className="absolute top-1/2 right-2 -translate-y-1/2 text-white text-3xl p-2 bg-cyan-800 rounded-full"
            aria-label="Siguiente"
          >
            ›
          </button>
        </div>
      </dialog>
    </>
  );
}
