import { AppProps } from 'next/app'
import Head from 'next/head'

/* Loading Bootstrap */
import 'assets/css/bootstrap.min.css'

/* Loading Template CSS */
import 'assets/css/style.css'
import 'assets/css/animate.css'
import 'assets/css/pe-icon-7-stroke.css'
import 'assets/css/style-magnific-popup.css'

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

        <title>LaunchPage - Creative Landing Page Template</title>

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
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
