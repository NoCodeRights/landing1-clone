// Archivo: src/pages/_app.jsx
// Carga global de estilos y librerías de terceros
import '../styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}