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

  // Rutas de imágenes
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
    arrows: false,
    dots: false,
    autoplay: true,        // autoplay
    autoplaySpeed: 4000,   // cada 4s
    beforeChange: (_, next) => setCurrent(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          vertical: false,
          verticalSwiping: false
        }
      }
    ]
  };

  // Índices para los 5 botones (dos previos, actual, dos siguientes)
  const navButtons = useMemo(() => {
    const total = images.length;
    return [-2, -1, 0, 1, 2].map(offset => (current + offset + total) % total);
  }, [current, images.length]);

  return (
    <section id="galeria" className="py-12 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-800 mb-6">
        Proyectos Destacados
      </h2>

      <div className="max-w-4xl mx-auto">
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
                  alt={`Proyecto de piscina ${idx + 1}`}
                  fill
                  sizes="100vw"
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          ))}
        </Slider>

        {/* Controles manuales con mayor separación */}
        <div className="flex justify-center items-center space-x-4 mt-4">
          {navButtons.map((idx, btn) => (
            <button
              key={btn}
              onClick={() => sliderRef.current?.slickGoTo(idx)}
              className={`
                w-4 h-4 rounded-full
                ${idx === current ? 'bg-cyan-800' : 'bg-cyan-300'}
                hover:bg-cyan-600 transition-colors
              `}
              aria-label={`Ir a la imagen ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50 p-4"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Imagen grande */}
          <div className="relative w-full max-w-3xl h-0 pb-[56.25%] mb-4">
            <Image
              src={images[lightboxIndex]}
              alt={`Proyecto de piscina ${lightboxIndex + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          {/* Flechas prev/next */}
          <div className="flex space-x-8 mb-6">
            <button
              onClick={e => {
                e.stopPropagation();
                setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
              }}
              className="text-white text-3xl p-2 bg-cyan-800 rounded-full"
              aria-label="Anterior"
            >
              ‹
            </button>
            <button
              onClick={e => {
                e.stopPropagation();
                setLightboxIndex((lightboxIndex + 1) % images.length);
              }}
              className="text-white text-3xl p-2 bg-cyan-800 rounded-full"
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
                className={`relative w-20 h-12 flex-shrink-0 cursor-pointer rounded ${
                  idx === lightboxIndex ? 'ring-2 ring-cyan-500' : ''
                }`}
                onClick={e => {
                  e.stopPropagation();
                  setLightboxIndex(idx);
                }}
              >
                <Image src={src} alt={`Miniatura ${idx + 1}`} fill className="object-cover rounded" />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
