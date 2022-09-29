import React from "react";
import type { FunctionComponent } from "react";

import Head from "next/head";

const HeadWrapper: FunctionComponent = () => {
  return (
    <Head>
      <title>Ancubed</title>
      <meta
        name="description"
        content="Андрей Антонов. Fullstack-разработчик. Портфолио."
      />
      <link rel="icon" href="/favicon.ico" />

      <meta property="og:title" content="Andrew Antonov" />
      <meta property="og:description" content="Fullstack developer" />
      <meta
        property="og:image"
        content="https://portfolio.ancubed.me/images/background.png"
      />
    </Head>
  );
};

export default HeadWrapper;
