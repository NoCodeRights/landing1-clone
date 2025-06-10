// src/components/Footer.jsx
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
      className="py-8"
      style={{ backgroundColor: '#5A2E70', color: '#FFFFFF' }}
    >
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Sección de contacto */}
        <div>
          <h4 className="font-bold text-lg mb-2">Contacto</h4>

          <p className="flex items-center mb-1" style={{ fontSize: '1.125rem' }}>
            <FontAwesomeIcon icon={faPhone} className="mr-2 social-icon" style={{ fontSize: '1.5rem' }} /> 
            +56 9 9899 9712
          </p>

          <p className="flex items-center mb-4" style={{ fontSize: '1.125rem' }}>
            <FontAwesomeIcon icon={faEnvelope} className="mr-2 social-icon" style={{ fontSize: '1.5rem' }} /> 
            Patricioluengoapablaza@gmail.com
          </p>

          {/* Botón de WhatsApp solo icono */}
          <Link href="https://wa.me/56998999712?text=¡Hola%20Patricio!%20Quiero%20más%20info%20sobre%20sus%20servicios%20de%20piscinas." legacyBehavior>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold p-4 rounded-full transition-colors"
              style={{ width: '56px', height: '56px' }}
              aria-label="WhatsApp"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="social-icon" style={{ fontSize: '1.75rem' }} />
            </a>
          </Link>
        </div>

        {/* Redes sociales */}
        <div className="flex flex-col">
          <h4 className="font-bold text-lg mb-4">Síguenos</h4>
          <div className="flex" style={{ gap: '24px' }}>
            <Link href="https://www.instagram.com/cons.depiscinaspatricioluengo" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} className="social-icon" style={{ fontSize: '2rem', color: '#FFFFFF' }} />
              </a>
            </Link>
            <Link href="https://www.facebook.com/piscinas.patricio.luengo" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} className="social-icon" style={{ fontSize: '2rem', color: '#FFFFFF' }} />
              </a>
            </Link>
            <Link href="https://www.tiktok.com/@cons_piscinas_pat" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <FontAwesomeIcon icon={faTiktok} className="social-icon" style={{ fontSize: '2rem', color: '#FFFFFF' }} />
              </a>
            </Link>
          </div>
        </div>

        {/* Logo y derechos */}
        <div className="text-center md:text-right">
          <p className="font-bold text-lg">Piscinas Patricio Luengo</p>
          <p className="mt-2 text-sm">© {new Date().getFullYear()} Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
}
