// src/pages/index.jsx

import Header from '../components/Header';

export default function Home() {
  return (
    <>
      {/* Header fijo en top */}
      <Header />

      {/* Mensaje temporal de construcción */}
      <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        🚧 Sitio en construcción 🚧
      </main>
    </>
  );
}
