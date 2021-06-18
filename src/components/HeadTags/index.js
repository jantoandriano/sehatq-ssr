import React from "react";
import Head from "next/head";

function HeadTags({title, description, imageUrl}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="Icon" href="../../public/favicon.ico" />
      <meta charSet="utf-8" />
      <meta property="title" content={title} key="title" />
      <meta name="description" content={description} key="description" />
      <meta property="image" content={imageUrl} key="image" />
      <meta name="robots" content="noindex,nofollow" />
    </Head>
  );
}

export default HeadTags;
