import Link from 'next/link';

export default function NavFooter() {
  return (
    <div className="flex justify-center gap-4 my-6">
      <Link href="/" legacyBehavior>
        <a className="px-4 py-2 bg-gray-200 rounded">🏠 Inicio</a>
      </Link>
      <Link href="/photos" legacyBehavior>
        <a className="px-4 py-2 bg-gray-200 rounded">📷 Fotos</a>
      </Link>
      <Link href="/videos" legacyBehavior>
        <a className="px-4 py-2 bg-gray-200 rounded">🎥 Videos</a>
      </Link>
    </div>
  );
}
