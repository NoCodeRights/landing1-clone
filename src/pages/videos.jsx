import { useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Link from 'next/link';
import Footer from '../components/Footer';

export default function Videos() {
  const router = useRouter();
  const page = parseInt(router.query.page || '1', 10);

  const totalVideos = 56;
  const perPage = 20;
  const start = (page - 1) * perPage;
  const end = Math.min(start + perPage, totalVideos);

  const allVideos = Array.from(
    { length: totalVideos },
    (_, i) => `/videos/video (${i + 1}).mp4`
  );
  const videos = allVideos.slice(start, end);

  const prevPage = () => page > 1 && router.push(`/videos?page=${page - 1}`);
  const nextPage = () => end < totalVideos && router.push(`/videos?page=${page + 1}`);

  return (
    <>
      <Header />

      <main className="pt-5">
        {/* Navegación rápida */}
        <div className="d-flex justify-content-center gap-3 my-4">
          <Link href="/" legacyBehavior><a className="btn btn-secondary">🏠 Inicio</a></Link>
          <Link href="/photos" legacyBehavior><a className="btn btn-primary">📷 Fotos</a></Link>
          <Link href="/videos" legacyBehavior><a className="btn btn-primary">🎥 Videos</a></Link>
        </div>

        {/* Paginación superior */}
        <div className="container d-flex justify-content-between align-items-center mb-3">
          <button onClick={prevPage} disabled={page === 1} className="btn btn-outline-secondary">
            ‹ Anterior
          </button>
          <span> {start + 1} – {end} de {totalVideos} </span>
          <button onClick={nextPage} disabled={end >= totalVideos} className="btn btn-outline-secondary">
            Siguiente ›
          </button>
        </div>

        {/* Lista de vídeos */}
        <div className="container">
          <div className="row g-3">
            {videos.map((src, idx) => (
              <div key={idx} className="col-12">
                <video src={src} controls className="w-100 rounded shadow-sm" />
              </div>
            ))}
          </div>
        </div>

        {/* Paginación inferior */}
        <div className="container d-flex justify-content-between align-items-center mt-3 mb-5">
          <button onClick={prevPage} disabled={page === 1} className="btn btn-outline-secondary">
            ‹ Anterior
          </button>
          <span> {start + 1} – {end} de {totalVideos} </span>
          <button onClick={nextPage} disabled={end >= totalVideos} className="btn btn-outline-secondary">
            Siguiente ›
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
}
