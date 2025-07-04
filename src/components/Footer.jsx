'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebook,
  faTiktok,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="py-5"
      style={{ backgroundColor: '#5A2E70', color: '#FFFFFF' }}
    >
      <div className="container">
        <div className="row gy-4">

          {/* Contacto */}
          <div className="col-12 col-md-4 text-center text-md-start">
            <h5 className="fw-bold mb-3">Contacto</h5>
            <p>
              <FontAwesomeIcon icon={faPhone} className="me-2" />
              +56 9 9899 9712
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="me-2" />
              Patricioluengoapablaza@gmail.com
            </p>
            {/* WhatsApp */}
            <a
              href="https://wa.me/56998999712?text=¡Hola%20Patricio!%20Quiero%20más%20info%20sobre%20sus%20servicios%20de%20piscinas."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success btn-lg rounded-circle p-2 mt-2"
              aria-label="WhatsApp"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="lg" />
            </a>
          </div>

          {/* Redes sociales */}
          <div className="col-12 col-md-4 text-center">
            <h5 className="fw-bold mb-3">Síguenos</h5>
            <div className="d-flex justify-content-center gap-3">
              <a
                href="https://www.instagram.com/cons.depiscinaspatricioluengo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light btn-lg rounded-circle p-2"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a
                href="https://www.facebook.com/piscinas.patricio.luengo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light btn-lg rounded-circle p-2"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a
                href="https://www.tiktok.com/@cons_piscinas_pat"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light btn-lg rounded-circle p-2"
                aria-label="TikTok"
              >
                <FontAwesomeIcon icon={faTiktok} size="lg" />
              </a>
            </div>
          </div>

          {/* Derechos */}
          <div className="col-12 col-md-4 text-center text-md-end">
            <p className="fw-bold fs-5">Piscinas Patricio Luengo</p>
            <p className="small mb-0">© {new Date().getFullYear()} Todos los derechos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
