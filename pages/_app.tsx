import React from 'react';
import localFont from '@next/font/local';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

const gtHaptik = localFont({
  src: [
    {
      path: './fonts/GT-Haptik-Regular.woff2',
      weight: '400',
    },
    {
      path: './fonts/GT-Haptik-Light.woff2',
      weight: '300',
    },
    {
      path: './fonts/GT-Haptik-Bold.woff2',
      weight: '600',
    },
  ],
  variable: '--font-gtHaptik',
});

const sourceSerif = localFont({
  src: [
    {
      path: './fonts/SourceSerifPro-Regular.woff2',
      weight: '400',
    },
    {
      path: './fonts/SourceSerifPro-Bold.woff2',
      weight: '600',
    },
  ],
  variable: '--font-sourceSerif',
});

const fonts = { gtHaptik, sourceSerif };

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  React.useEffect(() => {
    const root = document.documentElement;
    Object.entries(fonts).map(([family, font]) =>
      root.style.setProperty(
        `--font-${family}`,
        String(font.variable?.replace('variable', family))
      )
    );
  }, []);

  return (
    <React.Fragment>
      <header>header</header>
      <Component {...pageProps} />
      <footer>footer</footer>
    </React.Fragment>
  );
};

export default App;
