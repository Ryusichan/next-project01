import "../styles/globals.css";
// import "bootstrap/dist/css/bootstrap.css";
import "../styles/css/bootstrap.css";
import "../styles/css/fontawesome-all.css";
import "../styles/css/magnific-popup.css";
import "../styles/css/magnific-popup.css";
import "../styles/css/swiper.css";
import "../styles/css/styles.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}

export default MyApp;
