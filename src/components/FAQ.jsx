// src/components/FAQ.jsx
'use client';

import { useState } from 'react';
import { Container, Accordion } from 'react-bootstrap';

export default function FAQ() {
  const faqs = [
    {
      question: '¿Cuánto tiempo dura la instalación?',
      answer: 'La instalación completa suele tomar entre 2 y 4 semanas, dependiendo del tamaño y complejidad.',
    },
    {
      question: '¿Qué mantenimiento necesita la piscina?',
      answer: 'Recomendamos limpieza semanal y revisión mensual del sistema de filtración.',
    },
    {
      question: '¿Ofrecen garantía?',
      answer: 'Sí, nuestras piscinas tienen 5 años de garantía estructural y 2 años de garantía en acabados.',
    },
  ];

  const [activeKey, setActiveKey] = useState('0');

  return (
    <section id="faq" className="py-5 bg-white">
      <Container>
        <h2 className="text-center text-cyan-800 mb-4">Preguntas Frecuentes</h2>
        <Accordion activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
          {faqs.map((item, idx) => (
            <Accordion.Item eventKey={String(idx)} key={idx}>
              <Accordion.Header>{item.question}</Accordion.Header>
              <Accordion.Body>{item.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
