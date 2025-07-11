'use client';

import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebook,
  faTiktok,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="py-5"
      style={{ backgroundColor: '#5A2E70', color: '#fff' }}
    >
      <Container>
        <Row className="gy-4">
          <Col md={4} className="text-center text-md-start">
            <h5>Contacto</h5>
            <p>
              <FontAwesomeIcon icon={faPhone} className="me-2" />
              +56 9 9899 9712
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="me-2" />
              Patricioluengoapablaza@gmail.com
            </p>
            <Button
              variant="success"
              size="lg"
              className="rounded-circle"
              href="https://wa.me/56998999712"
              target="_blank"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </Button>
          </Col>

          <Col md={4} className="text-center">
            <h5>Síguenos</h5>
            <div className="d-flex justify-content-center gap-3">
              {[
                {
                  icon: faInstagram,
                  url: 'https://instagram.com/cons.depiscinaspatricioluengo',
                },
                {
                  icon: faFacebook,
                  url: 'https://facebook.com/piscinas.patricio.luengo',
                },
                {
                  icon: faTiktok,
                  url: 'https://tiktok.com/@cons_piscinas_pat',
                },
              ].map((s, i) => (
                <Button
                  key={i}
                  variant="light"
                  className="rounded-circle"
                  size="lg"
                  href={s.url}
                  target="_blank"
                >
                  <FontAwesomeIcon icon={s.icon} />
                </Button>
              ))}
            </div>
          </Col>

          <Col md={4} className="text-center text-md-end">
            <h5 className="fw-bold">Piscinas Patricio Luengo</h5>
            <p className="small mb-0">
              © {new Date().getFullYear()} Todos los derechos reservados
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
