import React from "react";
import styles from "../styles/Home.module.css";

const NFTPlatform = () => {
  return (
    <div className={styles.new_banner}>
      <div className={styles.nft_cards}>
        <div className={styles.card}>
          <h1>NO NEED TOBUILD A DEVELOPMENT TEAM</h1>
          {/* <h1 className={styles.card_heading}>NFT PLATFORMS</h1> */}
        </div>
        <div className={styles.card}>
          {/* <h1>NO</h1> */}
          <h1>LAUNCH AN NFT PLATFORM</h1>
        </div>
        <div className={styles.card}>
          {/* <h1>EASY TO USE</h1> */}
          <h1>MONTHLY &ANNUAL SUBSCRIPTION</h1>
        </div>
        <div className={styles.card}>
          {/* <h1>EXCLUSIVE APPS</h1> */}
          <h1>EXPERIENCES FOR YOUR FANS</h1>
        </div>
        <div className={styles.cardlast}>
          <button>
            GET STARTED <img src="/play.svg" alt="Sorry!" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NFTPlatform;
