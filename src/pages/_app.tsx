import { AppProps } from 'next/app'
import Head from 'next/head'

/* Loading Bootstrap */
import 'assets/css/bootstrap.min.css'

/* Loading Template CSS */
import 'assets/css/main.css'
import 'assets/css/style.css'
import 'assets/css/animate.css'
import 'assets/css/pe-icon-7-stroke.css'
import 'assets/css/style-magnific-popup.css'
import 'assets/css/style-dev.css'

/* Awsome Fonts */
import 'assets/css/all.min.css'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf8" />
        {/* <meta charSet="iso-88591" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="" />
        <meta name="description" content="" />

        <title>Goyaz Mútua</title>
        <link rel="shortcut icon" href="/img/favicon_goyaz.png" />
        <link rel="apple-touch-icon" href="/img/favicon_goyaz.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700&display=swap"
          rel="stylesheet"
        />

        {/* Load JS here for greater good ============================= */}
        <script src="js/jquery-3.3.1.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/jquery.scrollTo-min.js"></script>
        <script src="js/jquery.magnific-popup.min.js"></script>
        <script src="js/jquery.nav.js"></script>
        <script src="js/wow.js"></script>
        <script src="js/plugins.js"></script>
        <script src="js/custom.js"></script>

        {/* <!-- Google Tag Manager --> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NTSZ7GJ');`
          }}
        ></script>
        {/* <!-- End Google Tag Manager --> */}
      </Head>
      <GlobalStyles />

      <Component {...pageProps} />
    </>
  )
}

export default App
