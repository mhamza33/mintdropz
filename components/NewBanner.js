import React from "react";
import styles from "../styles/Home.module.css";

const NFTPlatform = () => {
  return (
    <div className={styles.new_banner}>
      <div className={styles.nft_cards}>
        <div className={styles.card}>
          <h1>ATHLETE</h1>
          <h1 className={styles.card_heading}>NFT PLATFORMS</h1>
        </div>
        <div className={styles.card}>
          <h1>NO</h1>
          <h1>CODING NEDEED</h1>
        </div>
        <div className={styles.card}>
          <h1>EASY TO USE</h1>
          <h1>PLATFORM BUILDER</h1>
        </div>
        <div className={styles.card}>
          <h1>EXCLUSIVE APPS</h1>
          <h1>PAYING FANS CAN ACCESS</h1>
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
