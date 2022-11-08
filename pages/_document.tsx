import React from "react";
// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from "next/document";

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
