import React from "react";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import LandingHeader from "../components/LandingHeader";
import ExPlatform from "../components/ExPlatform";
import NFTPlatform from "../components/NFTPlatform";
import Membership from "../components/Membership";
import NewBanner from "../components/NewBanner";
import TicketedBanner from "../components/TicketedBanner";
import StreamBanner from "../components/StreamBanner";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <div className={styles.landing}>
      <NavBar />
      <LandingHeader />
      <ExPlatform />
      <NFTPlatform />
      <Membership />
      <NewBanner />
      <StreamBanner />
      <TicketedBanner />
      <Footer />
    </div>
  );
};

export default Landing;
