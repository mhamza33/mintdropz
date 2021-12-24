import React from "react";
import styles from "../styles/Home.module.css";

const TicketBanner = () => {
  return (
    <div className={styles.ticket_banner}>
      <div className={styles.nft_cards}>
        <div className={styles.card}>
          <h1>TICKETED LIVE STREAMS </h1>
          {/* <h1 className={styles.card_heading}>NFT PLATFORMS</h1> */}
        </div>
        <div className={styles.card}>
          {/* <h1>NO</h1> */}
          <h1>DIGITALMERCH +NFTS </h1>
        </div>
        <div className={styles.card}>
          {/* <h1>EASY TO USE</h1> */}
          <h1>NFTS & TOKENS </h1>
        </div>
        <div className={styles.card}>
          {/* <h1>EXCLUSIVE APPS</h1> */}
          <h1>YOUR OWN APPS </h1>
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

export default TicketBanner;
