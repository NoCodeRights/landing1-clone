// src/pages/index.jsx

import Header from '../components/Header';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <>
      {/* Header fijo en top */}
      <Header />

      {/* Sección Hero */}
      <main>
        <Hero />
      </main>
    </>
  );
}
