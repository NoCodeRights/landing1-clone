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

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Proyectos', href: '#galeria' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo + texto con fondo sólido */}
        <div className="flex items-center bg-white px-3 py-1 rounded-lg shadow-sm">
          <Image
            src="/images/logo.png"
            alt="Logo Piscinas Patricio Luengo"
            width={40}
            height={40}
          />
          {/* Texto en #B27A2D */}
          <span className="ml-2 font-bold text-lg" style={{ color: '#B27A2D', backgroundColor: '#FFFFFF', padding: '0 4px', borderRadius: '4px' }}>
            Piscinas Patricio Luengo
          </span>
        </div>

        {/* Navegación escritorio */}
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

        {/* Botón hamburguesa (solo en móvil) */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-cyan-900 md:hidden order-first"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        )}
      </div>

      {/* Menú móvil desplegable */}
      {menuOpen && isMobile && (
        <div className="md:hidden bg-white w-full px-4 py-6 space-y-4 shadow-lg">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block bg-cyan-50 px-4 py-2 rounded-lg text-cyan-900 hover:bg-cyan-100 transition"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
