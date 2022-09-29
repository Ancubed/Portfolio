import React from "react";
import type { FunctionComponent } from "react";

import Head from "next/head";

const HeadWrapper: FunctionComponent = () => {
  return (
    <Head>
      <title>Ancubed</title>
      <meta name="description" content="Андрей Антонов. Fullstack-разработчик. Портфолио." />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadWrapper;
