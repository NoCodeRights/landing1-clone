import React from 'react';
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
    <section
      id="servicios"
      style={{ padding: '80px 0', backgroundColor: '#F3F4F6' }}
    >
      <div style={{ maxWidth: 1024, margin: '0 auto', padding: '0 16px' }}>
        <div
          style={{
            borderTop: '1px solid #D1D5DB',
            marginBottom: 64
          }}
        />

        <h2
          style={{
            fontSize: '2.5rem',
            fontWeight: 800,
            color: '#065F46',
            textAlign: 'center',
            marginBottom: '8px'
          }}
        >
          Servicios Adicionales
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

        {/* Grid responsive */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 32
          }}
        >
          {services.map((svc, idx) => (
            <Card key={idx}>
              <div style={{ fontSize: '3rem', marginBottom: 16, textAlign: 'center' }}>
                {svc.icon}
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
                {svc.title}
              </h3>
              <p style={{ color: '#374151', textAlign: 'center' }}>
                {svc.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
