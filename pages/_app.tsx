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
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
