// src/pages/_app.jsx

import '../styles/globals.css';  // tu CSS con Tailwind, Merriweather, fondo, etc.

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
