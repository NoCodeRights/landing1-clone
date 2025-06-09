import React from 'react';
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
      style={{ padding: '80px 0', background: 'linear-gradient(to bottom, #ECFEFF, #FFFFFF)' }}
    >
      <div style={{ maxWidth: 1024, margin: '0 auto', padding: '0 16px' }}>
        <h2
          style={{
            fontSize: '2.5rem',
            fontWeight: 800,
            color: '#065F46',
            textAlign: 'center',
            marginBottom: '8px'
          }}
        >
          Nuestro Proceso
        </h2>
        <div
          style={{
            width: 96,
            height: 4,
            backgroundColor: '#0E7490',
            borderRadius: 4,
            margin: '0 auto 48px'
          }}
        />

        {/* Grid responsive 250px min */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 32
          }}
        >
          {steps.map((step, idx) => (
            <Card key={idx}>
              <div style={{ fontSize: '3rem', marginBottom: 16, textAlign: 'center' }}>
                {step.icon}
              </div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#064E3B',
                  textAlign: 'center',
                  marginBottom: 8
                }}
              >
                {step.title}
              </h3>
              <p style={{ color: '#374151', textAlign: 'center' }}>
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
