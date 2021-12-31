import React from "react";
import styles from "../styles/Home.module.css";
import NavBarRes from "../components/NavBarRes";
import NavBarSm from "../components/NavBarSm";
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LandingHeader from "../components/LandingHeader";
import ExPlatform from "../components/ExPlatform";
import NFTPlatform from "../components/NFTPlatform";
import Membership from "../components/Membership";
import NewBanner from "../components/NewBanner";
import TicketedBanner from "../components/TicketedBanner";
import StreamBanner from "../components/StreamBanner";
import FutureBanner from "../components/FutureBanner";
import LaunchApp from "../components/LaunchApp";
import Partners from "../components/Partners";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.main_style}>
        <NavBarRes />
        {/* <NavBarSm /> */}
        <LandingHeader />
        <ExPlatform />
      </div>
      <NFTPlatform />
      <Membership />
      <NewBanner />
      <StreamBanner />
      <TicketedBanner />
      <FutureBanner />
      <div className={styles.container}>
        <LaunchApp />
        <Partners />
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
