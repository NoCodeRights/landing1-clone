// src/components/GalleryCarousel.jsx
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

  const navButtons = useMemo(() => {
    const total = images.length;
    return [-2, -1, 0, 1, 2].map(offset =>
      (current + offset + total) % total
    );
  }, [current, images.length]);

  const showPrev = () =>
    setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
  const showNext = () =>
    setLightboxIndex((lightboxIndex + 1) % images.length);

  // close dialog on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && dialogRef.current?.open) {
        dialogRef.current.close();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const openLightbox = (idx) => {
    setLightboxIndex(idx);
    dialogRef.current?.showModal();
  };

  return (
    <>
      <section id="galeria" className="py-12 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-800 mb-6">
          Proyectos Destacados
        </h2>

        <div className="max-w-4xl mx-auto overflow-hidden">
          <Slider ref={sliderRef} {...settings}>
            {images.map((src, idx) => (
              <div key={idx} className="flex justify-center">
                <div
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
              </div>
            ))}
          </Slider>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: 16,
            }}
          >
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
                  cursor: 'pointer',
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
        onClick={(e) => {
          if (e.target === dialogRef.current) {
            dialogRef.current.close();
          }
        }}
      >
        <div
          className="relative bg-black rounded-lg overflow-hidden h-full flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Botón Cerrar */}
          <button
            onClick={() => dialogRef.current.close()}
            className="absolute top-2 right-2 text-white text-2xl p-1 bg-cyan-800 rounded-full z-10"
            aria-label="Cerrar"
          >
            ✕
          </button>

          {/* Imagen grande */}
          <Image
            src={images[lightboxIndex]}
            alt={`Proyecto ${lightboxIndex + 1}`}
            fill
            sizes="90vw"
            className="object-contain"
          />

          {/* Flecha Anterior */}
          <button
            onClick={showPrev}
            className="absolute left-2 text-white text-4xl p-2 bg-cyan-800 rounded-full"
            aria-label="Anterior"
          >
            ‹
          </button>

          {/* Flecha Siguiente */}
          <button
            onClick={showNext}
            className="absolute right-2 text-white text-4xl p-2 bg-cyan-800 rounded-full"
            aria-label="Siguiente"
          >
            ›
          </button>
        </div>
      </dialog>
    </>
  );
}
