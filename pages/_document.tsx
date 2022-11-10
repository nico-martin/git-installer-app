import React from 'react';
// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Head, Html, Main, NextScript } from 'next/document';

const title = 'Git Installer';
const description =
  'Install and update WordPress themes and plugins directly from your Git repository via GitHub, Gitlab or Bitbucket.';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,user-scalable=yes"
            key="viewport"
          />
          <meta name="robots" content="all" key="robots" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:image" content="/img/banner-facebook.jpg" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta name="twitter:image" content="/img/banner-twitter.jpg" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
        </Head>
        <body>
          <Main />
          <div id="shadowbox" />
          <NextScript />
        </body>
      </Html>
    );
  }
}
