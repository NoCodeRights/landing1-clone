'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Fotos',  href: '/photos' },
    { name: 'Videos', href: '/videos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <Navbar color="light" light expand="md" fixed="top" className="shadow-sm">
      {/* Logo */}
      <Link href="/" legacyBehavior>
        <a className="navbar-brand d-flex align-items-center">
          <Image src="/images/logo.png" alt="Logo" width={32} height={32} />
          <span className="ms-2 fw-bold" style={{ color: '#B27A2D' }}>
            Piscinas Patricio Luengo
          </span>
        </a>
      </Link>

      {/* Toggle para móvil */}
      <NavbarToggler onClick={toggle} />

      {/* Menú colapsable */}
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar>
          {navItems.map(item => (
            <NavItem key={item.name}>
              <Link href={item.href} legacyBehavior>
                <a className="nav-link">{item.name}</a>
              </Link>
            </NavItem>
          ))}
        </Nav>
      </Collapse>
    </Navbar>
  );
}
