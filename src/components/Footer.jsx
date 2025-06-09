// src/components/Footer.jsx
import Link from 'next/link';

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
          <p>Teléfono: +56 9 9899 9712</p>
          <p>Email: Patricioluengoapablaza@gmail.com</p>

          {/* Botón de WhatsApp */}
          <a
            href="https://wa.me/56998999712?text=¡Hola%20Patricio!%20Quiero%20más%20info%20sobre%20sus%20servicios%20de%20piscinas."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-2"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.52 3.48A11.791 11.791 0 0012 0C5.373 0 0 5.373 0 12a11.73 11.73 0 001.642 6.013L0 24l6.137-1.591A11.825 11.825 0 0012 24c6.627 0 12-5.373 12-12 0-3.183-1.243-6.177-3.48-8.52zM12 22.09c-2.04 0-4.047-.53-5.79-1.53l-.41-.24-3.64.94.97-3.54-.27-.42A9.956 9.956 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.297-7.403c-.297-.149-1.758-.868-2.03-.967-.272-.099-.47-.148-.67.149s-.768.967-.94 1.166c-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.476-.884-.788-1.482-1.761-1.656-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.173.198-.297.298-.496.099-.198.05-.371-.025-.52-.074-.149-.67-1.612-.92-2.208-.242-.579-.487-.5-.67-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.875 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.87.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            </svg>
            WhatsApp
          </a>
        </div>

        {/* Redes sociales */}
        <div>
          <h4 className="font-bold text-lg mb-2">Síguenos</h4>
          <div className="flex space-x-4">
            <Link href="#" aria-label="Instagram" className="text-white hover:underline">
              📸 Instagram
            </Link>
            <Link href="#" aria-label="Facebook" className="text-white hover:underline">
              👍 Facebook
            </Link>
            <Link href="#" aria-label="TikTok" className="text-white hover:underline">
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
