'use client';

import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function GalleryCarousel() {
  const images = [1, 2, 3, 4, 5].map((i) => `/images/carrusel${i}.jpeg`);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
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

      <div className="max-w-4xl mx-auto px-4">
        <Slider {...settings}>
          {images.map((src, idx) => (
            <div key={idx} className="px-2">
              <div className="relative w-full h-0 pb-[56.25%]">
                <Image
                  src={src}
                  alt={`Carrusel ${idx + 1}`}
                  fill
                  className="object-cover rounded-lg shadow-lg"
                  priority={idx === 0}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
