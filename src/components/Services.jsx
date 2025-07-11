import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Services() {
  const services = [
    {
      icon: '🧹',
      title: 'Mantención Integral',
      description:
        'Limpieza y revisión periódica para que tu piscina siempre luzca perfecta.',
    },
    {
      icon: '🔧',
      title: 'Instalación de Bombas',
      description:
        'Suministro y montaje de bombas de filtración de alto rendimiento.',
    },
    {
      icon: '🚰',
      title: 'Red de Cañerías',
      description:
        'Diseño e instalación de cañerías y tuberías con materiales duraderos.',
    },
    {
      icon: '🏖️',
      title: 'Terrazas y Entorno',
      description:
        'Construcción de terrazas, soláriums y decks para armonizar tu oasis.',
    },
  ];

  return (
    <section id="servicios" className="py-5 bg-light">
      <Container>
        <h2 className="text-center text-success mb-4">Servicios Adicionales</h2>
        <Row>
          {services.map((s, idx) => (
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
