// -----------------------------
// Archivo: src/components/FAQ.jsx
// Descripción: Sección de Preguntas Frecuentes
// -----------------------------

export default function FAQ() {
  const faqs = [
    {
      question: '¿Cuánto tiempo dura la instalación? ',
      answer: 'La instalación completa suele tomar entre 2 y 4 semanas, dependiendo del tamaño y complejidad.'
    },
    {
      question: '¿Qué mantenimiento necesita la piscina? ',
      answer: 'Recomendamos limpieza semanal y revisión mensual del sistema de filtración.'
    },
    {
      question: '¿Ofrecen garantía? ',
      answer: 'Sí, nuestras piscinas tienen 5 años de garantía estructural y 2 años de garantía en acabados.'
    }
  ];

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-cyan-800 text-center mb-8">Preguntas Frecuentes</h2>
        <div className="space-y-6">
          {faqs.map((item, idx) => (
            <div key={idx} className="border-b pb-4">
              <h3 className="text-xl font-semibold text-gray-900">{item.question}</h3>
              <p className="mt-2 text-gray-700">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
