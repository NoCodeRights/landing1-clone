// src/components/GalleryCarousel.jsx
'use client';

import { useState, useRef, useMemo } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

export default function GalleryCarousel() {
  const sliderRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Genera las rutas
  const images = useMemo(
    () =>
      Array.from({ length: 307 }, (_, i) =>
        encodeURI(`/images/proyecto (${i + 1}).jpg`)
      ),
    []
  );

  const settings = {
    vertical: true,
    verticalSwiping: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: '0px',
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 4000,
    beforeChange: (_, next) => setCurrent(next),
  };

  // índices para los 5 botones
  const navButtons = useMemo(() => {
    const total = images.length;
    return [-2, -1, 0, 1, 2].map(offset => (current + offset + total) % total);
  }, [current, images.length]);

  return (
    <>
      <section id="galeria" className="py-12 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-800 mb-6">
          Proyectos Destacados
        </h2>

        {/* Contenedor con overflow-hidden para ocultar previews */}
        <div className="max-w-4xl mx-auto overflow-hidden">
          <Slider ref={sliderRef} {...settings}>
            {images.map((src, idx) => (
              <div key={idx} className="flex justify-center">
                <div
                  className="relative w-full max-w-2xl h-0 pb-[56.25%] cursor-pointer"
                  onClick={() => {
                    setLightboxIndex(idx);
                    setLightboxOpen(true);
                  }}
                >
                  <Image
                    src={src}
                    alt={`Proyecto ${idx + 1}`}
                    fill
                    sizes="100vw"
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            ))}
          </Slider>

          {/* Botones manuales inline para tamaño y separación garantizados */}
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

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-[9999] p-4"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Imagen ampliada */}
          <div className="relative w-full max-w-3xl h-0 pb-[56.25%] mb-4">
            <Image
              src={images[lightboxIndex]}
              alt={`Proyecto ${lightboxIndex + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          {/* Navegación lightbox */}
          <div className="flex space-x-8 mb-6">
            <button
              onClick={e => {
                e.stopPropagation();
                setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
              }}
              className="text-white text-4xl p-2 bg-cyan-800 rounded-full"
              aria-label="Anterior"
            >
              ‹
            </button>
            <button
              onClick={e => {
                e.stopPropagation();
                setLightboxIndex((lightboxIndex + 1) % images.length);
              }}
              className="text-white text-4xl p-2 bg-cyan-800 rounded-full"
              aria-label="Siguiente"
            >
              ›
            </button>
          </div>

          {/* Miniaturas */}
          <div className="flex overflow-x-auto space-x-2 max-w-full">
            {images.map((src, idx) => (
              <div
                key={idx}
                className={`relative w-24 h-16 flex-shrink-0 cursor-pointer rounded ${
                  idx === lightboxIndex ? 'ring-4 ring-cyan-500' : ''
                }`}
                onClick={e => {
                  e.stopPropagation();
                  setLightboxIndex(idx);
                }}
              >
                <Image
                  src={src}
                  alt={`Miniatura ${idx + 1}`}
                  fill
                  className="object-cover rounded"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
