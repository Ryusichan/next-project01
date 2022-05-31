import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Copyright from "../components/Copyright";
import Description from "../components/Description";
import Description02 from "../components/Description02";
import DetailLightBox from "../components/DetailLightBox";
import Download from "../components/Download";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScreenShot from "../components/ScreenShot";
import SmallFeature from "../components/SmallFeature";
import Statistics from "../components/Statistics";
import Testimonials from "../components/Testimonials";
import styles from ".../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="App">
      {/* <Preloader /> */}

      <Header />
      <SmallFeature />

      <Description />

      <DetailLightBox />

      <Description02 />

      <Feature />

      <ScreenShot />

      <Testimonials />

      <Statistics />

      <Download />

      <Footer />

      {/* Copyright */}
      <Copyright />
    </div>
  );
};

export default Home;
