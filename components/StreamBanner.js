import React from "react";
import styles from "../styles/Home.module.css";

const StreamBanner = () => {
  return (
    <div className={styles.stream_banner}>
      <div className={styles.stream_info}>
        <div className={styles.info_header}>
          <h1>Get Paid With Live Streaming & Merch</h1>
          <p>
            Your fans want a close connection with you and will pay you intimate
            experiences. Reward them with exclusive audio and video, and limited
            time merch drop they can get only on your own platform.
          </p>
        </div>
        <div className={styles.info_btn}>
          <button className={styles.get_started}>
            <img src="/arrow_1.svg" alt="Sorry!" /> Get Started
          </button>
          <button>
            <img src="/arrow_2.svg" alt="Sorry!" /> Learn More
          </button>
        </div>
      </div>
      <div className={styles.stream_img}>
        <img src="/stream.svg" alt="Sorry!" />
      </div>
    </div>
  );
};

export default StreamBanner;
