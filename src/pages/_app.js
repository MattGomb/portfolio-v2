import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
import Script from 'next/script'
import Head from 'next/head';

config.autoAddCss = false; 

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Head>
      <Component {...pageProps} />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"/>
    </>
  )
}
