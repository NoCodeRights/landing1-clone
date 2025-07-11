// src/components/Header.jsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Navbar,
  Container,
  Nav,
  Offcanvas,
} from 'react-bootstrap';

export default function Header() {
  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);

  const navItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Fotos', href: '/photos' },
    { name: 'Videos', href: '/videos' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <Navbar bg="white" expand="md" fixed="top" className="shadow-sm">
      <Container>
        {/* Logo + Marca */}
        <Navbar.Brand as={Link} href="/" className="d-flex align-items-center">
          <Image src="/images/logo.png" width={32} height={32} alt="Logo" />
          <span className="ms-2 fw-bold" style={{ color: '#B27A2D' }}>
            Piscinas Patricio Luengo
          </span>
        </Navbar.Brand>

        {/* Toggle visible solo en < md */}
        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          onClick={toggle}
          className="d-md-none"
        />

        {/* Offcanvas solo en < md */}
        <Offcanvas
          show={show}
          onHide={toggle}
          placement="end"
          className="d-md-none"
          backdrop={true}
          id="offcanvasNavbar"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menú</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">
              {navItems.map((item) => (
                <Nav.Link
                  key={item.name}
                  as={Link}
                  href={item.href}
                  onClick={toggle}
                >
                  {item.name}
                </Nav.Link>
              ))}
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>

        {/* Navegación horizontal en md+ */}
        <Nav className="ms-auto d-none d-md-flex">
          {navItems.map((item) => (
            <Nav.Link
              key={item.name}
              as={Link}
              href={item.href}
            >
              {item.name}
            </Nav.Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
}
