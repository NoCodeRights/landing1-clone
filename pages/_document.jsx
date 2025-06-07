// Archivo: src/pages/_document.jsx
// Personaliza el documento HTML y agrega atributos SEO base
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* Meta adicional puede agregarse aquí si se desea */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}