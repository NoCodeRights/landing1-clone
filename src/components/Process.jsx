// src/components/Process.jsx
import Card from './Card';

export default function Process() {
  const steps = [
    {
      title: 'Diseño y Asesoría',
      description:
        'Creamos un plan personalizado según el espacio y estilo deseado.',
      icon: '🎨'
    },
    {
      title: 'Excavación',
      description:
        'Preparación del terreno y nivelación para iniciar la construcción.',
      icon: '🛠️'
    },
    {
      title: 'Revestimiento',
      description:
        'Colocación de materiales impermeables y acabados internos.',
      icon: '🏗️'
    },
    {
      title: 'Acabado y Entrega',
      description: 'Detalles finales, limpieza y entrega lista para usar.',
      icon: '✅'
    }
  ];

  return (
    <section
      id="proceso"
      className="py-20 bg-gradient-to-b from-cyan-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-cyan-800 text-center mb-4">
          Nuestro Proceso
        </h2>
        <div className="h-1 w-24 mx-auto bg-cyan-800 mb-12 rounded" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <Card key={idx}>
              <div className="text-6xl mb-4 text-center">{step.icon}</div>
              <h3 className="text-2xl font-bold text-cyan-900 mb-2 text-center">
                {step.title}
              </h3>
              <p className="text-gray-700 text-center">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
