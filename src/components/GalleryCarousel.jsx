// src/components/GalleryCarousel.jsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Carousel,
  Modal,
  Button,
  Container,
} from 'react-bootstrap';

export default function GalleryCarousel() {
  const slides = [1,2,3,4,5].map((i) => `/images/carrusel${i}.jpeg`);
  const [index, setIndex] = useState(0);
  const [modalShow, setModalShow] = useState(false);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <section id="galeria" className="py-5 bg-gray-50">
      <Container>
        <h2 className="text-center text-cyan-800 mb-4">Proyectos Destacados</h2>

        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          interval={4000}
          touch={true}
        >
          {slides.map((src, idx) => (
            <Carousel.Item key={idx} onClick={() => setModalShow(true)} style={{ cursor: 'pointer' }}>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  paddingBottom: '56.25%',
                }}
              >
                <Image
                  src={src}
                  alt={`Slide ${idx+1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Modal */}
        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          size="lg"
          centered
        >
          <Modal.Body className="p-0 position-relative">
            <Image
              src={slides[index]}
              alt={`Slide ${index+1}`}
              width={800}
              height={450}
              className="w-100"
            />
            <Button
              variant="secondary"
              className="position-absolute top-0 end-0 m-2"
              onClick={() => setModalShow(false)}
            >
              ×
            </Button>
          </Modal.Body>
        </Modal>
      </Container>
    </section>
  );
}
