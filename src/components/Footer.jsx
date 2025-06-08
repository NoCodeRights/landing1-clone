// File: src/components/Footer.jsx

import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="py-8"
      style={{ backgroundColor: '#5A2E70', color: '#FFFFFF' }}  /* fondo morado #5A2E70 */
    >
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sección de contacto */}
        <div>
          <h4 className="font-bold text-lg mb-2">Contacto</h4>
          <p>Teléfono: +56 9 9899 9712</p>
          <p>Email: Patricioluengoapablaza@gmail.com</p>
        </div>

        {/* Redes sociales */}
        <div>
          <h4 className="font-bold text-lg mb-2">Síguenos</h4>
          <div className="flex space-x-4">
            <Link
              href="#"
              aria-label="Instagram"
              className="text-white hover:underline"
            >
              📸 Instagram
            </Link>
            <Link
              href="#"
              aria-label="Facebook"
              className="text-white hover:underline"
            >
              👍 Facebook
            </Link>
            <Link
              href="#"
              aria-label="TikTok"
              className="text-white hover:underline"
            >
              🎵 TikTok
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
