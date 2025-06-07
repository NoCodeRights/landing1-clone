// Componente: Testimonials.jsx
// Ubicación: src/components/Testimonials.jsx
// Descripción: Sección de testimonios con video y citas de clientes satisfechos


import { useEffect, useState } from 'react';

export default function Testimonials() {
  // Ejemplo de testimonios. se pueden agregar más testimonios según necesidad
  // Cada testimonio puede tener un video o solo texto
  const testimonials = [
    {
      id: 1,
      name: 'María Gómez',
      text: '¡Excelente servicio! Ahora disfrutamos nuestra piscina todos los días.',
      videoUrl: '/videos/testimonio1.mp4'
    },
    {
      id: 2,
      name: 'Carlos Pérez',
      text: 'Profesionales y cumplidores. Muy recomendados para cualquier proyecto.',
      videoUrl: null // si no hay video, solo se muestra texto
    }
  ];

  return (
    <section id="testimonios" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Título de sección */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-800 mb-8">
          Testimonios
        </h2>
        <div className="space-y-12">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Video o placeholder */}
              {item.videoUrl ? (
                <video
                  src={item.videoUrl}
                  controls
                  className="w-full md:w-1/2 h-auto object-cover"
                />
              ) : (
                <div className="w-full md:w-1/2 p-6">
                  <p className="text-gray-700 italic">"{item.text}"</p>
                  <p className="mt-4 font-semibold text-cyan-900">- {item.name}</p>
                </div>
              )}

              {/* Texto de testimonio si hay video */}
              {item.videoUrl && (
                <div className="w-full md:w-1/2 p-6">
                  <p className="text-gray-700 italic">"{item.text}"</p>
                  <p className="mt-4 font-semibold text-cyan-900">- {item.name}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
