import React from 'react';
import localFont from '@next/font/local';
import type { AppProps } from 'next/app';
import combineProvider from '@common/combineProviders';
import { IntlContextProvider } from '@common/intl/intlContext';
import Footer from '@app/Footer';
import Header from '@app/Header';
import '../src/styles/globals.css';
import styles from './_app.module.css';

const AppProvider = combineProvider(IntlContextProvider);

const affogato = localFont({
  src: [
    {
      path: './fonts/Affogato-Light.woff2',
      weight: '300',
    },
    {
      path: './fonts/Affogato-Regular.woff2',
      weight: '400',
    },
    {
      path: './fonts/Affogato-Medium.woff2',
      weight: '500',
    }, {
      path: './fonts/Affogato-Bold.woff2',
      weight: '700',
    }, {
      path: './fonts/Affogato-Black.woff2',
      weight: '900',
    },
  ],
  variable: '--font-affogato',
});

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

const fonts = { gtHaptik, sourceSerif, affogato };

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  React.useEffect(() => {
    const root = document.documentElement;
    Object.entries(fonts).map(([family, font]) =>
      root.style.setProperty(
        `--font-${family}`,
        String(font.variable?.replace('variable', family)),
      ),
    );
  }, []);

  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <main className={styles.main}>
        <Component {...pageProps} />
      </main>
      <Footer className={styles.footer} />
    </div>
  );
};

const AppWrapped = (props: any) => (
  <AppProvider>
    <App {...props} />
  </AppProvider>
);

export default AppWrapped;
