// src/components/Services.jsx
export default function Services() {
  const services = [
    {
      title: 'Mantención Integral',
      description:
        'Limpieza, balance químico y revisión periódica para que tu piscina siempre luzca perfecta.',
      icon: '🧹'
    },
    {
      title: 'Instalación de Bombas',
      description:
        'Suministro y montaje de bombas de filtración de alto rendimiento según el tamaño de tu piscina.',
      icon: '🔧'
    },
    {
      title: 'Red de Cañerías',
      description:
        'Diseño e instalación de cañerías y tuberías con materiales duraderos y sin filtraciones.',
      icon: '🚰'
    },
    {
      title: 'Terrazas y Entorno',
      description:
        'Construcción de terrazas, soláriums y decks para complementar y armonizar tu nuevo oasis.',
      icon: '🏖️'
    }
  ];

  return (
    <section id="servicios" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-800 mb-8">
          Servicios Adicionales
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((svc, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow"
            >
              <span className="text-5xl mb-4" aria-hidden="true">
                {svc.icon}
              </span>
              <h3 className="text-xl font-semibold text-cyan-900 mb-2">
                {svc.title}
              </h3>
              <p className="text-gray-700">{svc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
