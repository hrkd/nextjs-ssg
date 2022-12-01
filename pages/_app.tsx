import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  const title = ""
  const description = ""
  const keywords = ""
  const url=""
  const image=""
  const baseWidth = 768;
  const spWidth = 390;
  useEffect(() => {
    let viewportContent = `width=device-width, initial-scale=1`;
    function updateMetaViewport() {
      if (window.outerWidth < baseWidth) {
        viewportContent = `width=${spWidth},user-scalable=no`;
      } else {
        viewportContent = `width=device-width, initial-scale=1`;
      }
      document.querySelector("meta[name='viewport']")?.setAttribute('content', viewportContent);
    }
    window.addEventListener('resize', updateMetaViewport, false);
    window.addEventListener('orientationchange', updateMetaViewport, false);

    updateMetaViewport();
    return () => {
      window.removeEventListener('resize', updateMetaViewport);
      window.removeEventListener('orientationchange', updateMetaViewport);
    }
  },[])

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />

        <meta property="og:site_name" content={title}/>
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={description} />
        <meta property="og:url" content={ url} />

        <meta property="og:type" content="website"/>
        <meta property="og:image" content={ image} />

        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content={title}/>
        <meta name="twitter:description" content={ description} />
        <meta name="twitter:image" content={image} />

        <meta name="viewport" content={`width=${spWidth},user-scalable=no`} />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      < Component {...pageProps } />
    </>
  )
}
