import React from "react";
import styles from "../styles/Home.module.css";

const FutureBanner = () => {
  return (
    <div className={styles.future_banner}>
      <div className={styles.future_header}>
        <h1>BUILD THE FUTURE</h1>
        <img src="/logo-black.svg" alt="Sorry!" />
        <h1>LIVE YOUR DREAMS</h1>
      </div>
      <div className={styles.future_cards}>
        <div className={styles.section_one}>
          <div className={styles.card_one}>
            <h1>REOCCURING REVENUE</h1>
            <p>
              Mintdropz allows your to launch your own platform and make
              reoccuring revenue and upsell with merch and NFTs{" "}
            </p>
          </div>
          <div className={styles.card_two}>
            <h1>REWARD FANS WITH CRYPTO</h1>
            <p>
              Reward your top fans with your own NFTs and tokens for just being
              top fans and content consumption
            </p>
          </div>
        </div>
        <div className={styles.banner_border}></div>
        <div className={styles.section_two}>
          <div className={styles.card_one}>
            <h1>SELL YOUR OWN NFTS</h1>
            <p>
              Launch Your Own NFTs across all major blockchains with no coding
              needed and get into the crypto business
            </p>
          </div>
          <div className={styles.card_two}>
            <h1>BE YOUR OWN BOSS</h1>
            <p>
              Make reoccuring revenue and sell NFTs with a Web 3 Platform that
              transform your fanbase
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureBanner;
