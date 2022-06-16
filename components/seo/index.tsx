import Head from 'next/head';
import React from 'react';

type SeoProps = {
  title: string;
  description: string;
  shareUrl: string;
  url: string;
};

export const Seo = ({ title, description, shareUrl, url }: SeoProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />

      {/* Favicons */}
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/icons/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/icons/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/icons/favicon-16x16.png'
      />
      <meta name='msapplication-TileColor' content='#da532c' />
      <meta name='theme-color' content='#000000' />

      {/* Facebook meta tags */}
      <meta property='og:title' name='title' content={title} />
      <meta
        property='og:description'
        name='description'
        content={description}
      />
      <meta property='og:image' content={shareUrl} />
      <meta property='og:url' content={url} />
      <meta property='og:type' content='website' />

      {/* Twitter meta tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta property='twitter:domain' content='keplux.com' />
      <meta property='twitter:url' content={url} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={shareUrl} />
    </Head>
  );
};

export default Seo;
