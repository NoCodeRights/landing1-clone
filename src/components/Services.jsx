// src/components/Services.jsx
import Card from './Card';

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
    <section id="servicios" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="border-t border-gray-300 mb-16" />

        <h2 className="text-4xl font-extrabold text-cyan-800 text-center mb-4">
          Servicios Adicionales
        </h2>
        <div className="h-1 w-24 mx-auto bg-cyan-800 mb-12 rounded" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((svc, idx) => (
            <Card key={idx}>
              <div className="text-6xl mb-4 text-center">{svc.icon}</div>
              <h3 className="text-2xl font-bold text-cyan-900 mb-2 text-center">
                {svc.title}
              </h3>
              <p className="text-gray-700 text-center">{svc.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
