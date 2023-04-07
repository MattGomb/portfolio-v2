import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
import Script from 'next/script'

config.autoAddCss = false; 

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"/>
    </>
  )
}
