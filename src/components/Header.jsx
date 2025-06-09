// src/components/Header.jsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Sin "Testimonios"
  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Proyectos', href: '#galeria' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'Contacto', href: '#contacto' }
  ];

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="bg-white/90 backdrop-blur-sm shadow relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Botón hamburguesa (sólo móvil, izquierda) */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-cyan-900 md:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          )}

          {/* Navegación escritorio (izquierda) */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-cyan-900 hover:text-cyan-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Logo + texto (siempre a la derecha) */}
          <div className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Logo Piscinas Patricio Luengo"
              width={40}
              height={40}
            />
            <span
              className="ml-2 font-bold text-lg"
              style={{
                color: '#B27A2D',
                backgroundColor: 'rgba(255,255,255,0.9)',
                padding: '0 4px',
                borderRadius: '4px'
              }}
            >
              Piscinas Patricio Luengo
            </span>
          </div>
        </div>

        {/* Menú móvil desplegable */}
        {menuOpen && isMobile && (
          <div
            className="absolute top-full left-4 backdrop-blur-sm mt-2 p-4 space-y-2 shadow-lg"
            style={{
              backgroundColor: 'rgba(255,255,255,0.8)',
              borderRadius: '0.75rem',
              minWidth: '30vw'
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block text-cyan-900 font-medium py-2 px-3 rounded transition-colors hover:bg-cyan-50"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
