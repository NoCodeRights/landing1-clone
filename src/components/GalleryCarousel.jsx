// src/components/GalleryCarousel.jsx
'use client';

import { useState, useRef, useMemo } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

export default function GalleryCarousel() {
  const sliderRef = useRef(null);
  const [current, setCurrent] = useState(0);

  // Generamos las rutas de las imágenes
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
    arrows: false,    // ocultamos flechas nativas
    dots: false,      // ocultamos puntos nativos
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

  // Construye un array de índices alrededor del current: [-2, -1, 0, +1, +2]
  const navButtons = useMemo(() => {
    const total = images.length;
    return [-2, -1, 0, 1, 2].map((offset) => {
      let idx = (current + offset + total) % total;
      return idx;
    });
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
              <div className="relative w-full max-w-2xl h-0 pb-[56.25%]">
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

        {/* Controles manuales */}
        <div className="flex justify-center items-center space-x-3 mt-4">
          {navButtons.map((idx, btn) => (
            <button
              key={btn}
              onClick={() => sliderRef.current?.slickGoTo(idx)}
              className={`
                w-3 h-3 rounded-full
                ${idx === current ? 'bg-cyan-800' : 'bg-cyan-300'}
                hover:bg-cyan-600 transition-colors
              `}
              aria-label={
                btn === 2
                  ? `Slide actual ${idx + 1}`
                  : btn < 2
                  ? `Ir a slide ${idx + 1}`
                  : `Ir a slide ${idx + 1}`
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
