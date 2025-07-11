import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Process() {
  const steps = [
    {
      icon: '🎨',
      title: 'Diseño y Asesoría',
      description: 'Plan personalizado según el espacio.',
    },
    {
      icon: '🛠️',
      title: 'Excavación',
      description: 'Preparación del terreno y nivelación.',
    },
    {
      icon: '🏗️',
      title: 'Revestimiento',
      description: 'Materiales impermeables y acabados.',
    },
    {
      icon: '✅',
      title: 'Acabado y Entrega',
      description: 'Detalles finales y entrega lista.',
    },
  ];

  return (
    <section id="proceso" className="py-5 bg-white">
      <Container>
        <h2 className="text-center text-cyan-800 mb-4">Nuestro Proceso</h2>
        <Row>
          {steps.map((s, idx) => (
            <Col key={idx} xs={12} sm={6} lg={3} className="mb-4">
              <Card className="h-100 shadow-sm text-center">
                <Card.Body>
                  <div className="display-4 mb-3">{s.icon}</div>
                  <Card.Title>{s.title}</Card.Title>
                  <Card.Text>{s.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
