// Archivo: src/components/GalleryCarousel.jsx
// Descripción: Carrusel responsive de imágenes de proyectos destacados

import Image from 'next/image';
import dynamic from 'next/dynamic';

// Importamos Slider de react-slick solo en cliente para evitar errores SSR
const Slider = dynamic(() => import('react-slick'), { ssr: false });

// Generamos rutas de imágenes, escapando espacios con encodeURI
const images = Array.from({ length: 307 }, (_, i) => encodeURI(`/images/proyecto (${i + 1}).jpg`));

export default function GalleryCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true
  };

  return (
    <section id="galeria" className="py-12 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-800 mb-6">
        Proyectos Destacados
      </h2>
      <div className="px-4">
        {/* Contenedor centrado y ancho máximo */}
        <div className="max-w-4xl mx-auto">
          {/* Slider solo en cliente */}
          <Slider {...settings} className="mx-auto">
            {images.map((src, idx) => (
              <div key={idx} className="flex justify-center">
                {/* Contenedor relativo para mantener ratio 16:9 */}
                <div className="relative w-full max-w-2xl h-0 pb-[56.25%]">
                  <Image
                    src={src}
                    alt={`Proyecto de piscina ${idx + 1}`}
                    fill
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg shadow-lg"
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
