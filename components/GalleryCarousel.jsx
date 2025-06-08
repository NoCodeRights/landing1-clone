// components/GalleryCarousel.jsx
'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useMemo } from 'react';

// Import dinámico de la función componente, extrayendo .default
const Slider = dynamic(
  () =>
    import('react-slick').then((mod) => {
      // mod.default es el componente Slider
      return mod.default;
    }),
  { ssr: false }
);

export default function GalleryCarousel() {
  const images = useMemo(
    () =>
      Array.from({ length: 307 }, (_, i) =>
        encodeURI(`/images/proyecto (${i + 1}).jpg`)
      ),
    []
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true,
  };

  return (
    <section id="galeria" className="py-12 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-800 mb-6">
        Proyectos Destacados
      </h2>
      <div className="px-4">
        <div className="max-w-4xl mx-auto">
          <Slider {...settings} className="mx-auto">
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
        </div>
      </div>
    </section>
  );
}
