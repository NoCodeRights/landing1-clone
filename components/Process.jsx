// Componente: Process.jsx
// Ubicación: src/components/Process.jsx
// Descripción: Muestra los pasos del proceso de instalación de piscinas

export default function Process() {
    // Lista de pasos con íconos y descripciones
    const steps = [
      {
        title: 'Diseño y Asesoría',
        description: 'Creamos un plan personalizado según el espacio y estilo deseado.',
        icon: '🎨'
      },
      {
        title: 'Excavación',
        description: 'Preparación del terreno y nivelación para iniciar la construcción.',
        icon: '🛠️'
      },
      {
        title: 'Revestimiento',
        description: 'Colocación de materiales impermeables y acabados internos.',
        icon: '🏗️'
      },
      {
        title: 'Acabado y Entrega',
        description: 'Detalles finales, limpieza y entrega lista para usar.',
        icon: '✅'
      }
    ];
  
    return (
      <section id="proceso" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Título de sección */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-800 mb-8">
            Nuestro Proceso
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
              >
                {/* Icono representativo */}
                <span className="text-5xl mb-4" aria-hidden="true">
                  {step.icon}
                </span>
                {/* Título del paso */}
                <h3 className="text-xl font-semibold text-cyan-900 mb-2">
                  {step.title}
                </h3>
                {/* Descripción del paso */}
                <p className="text-gray-700">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  