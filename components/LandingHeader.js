import React from "react";
import styles from "../styles/Home.module.css";

const LandingHeader = () => {
  return (
    <div className={styles.landing_header}>
      <div className={styles.info_sec}>
        <div className={styles.header_info}>
          <div>
            <div className={styles.inner_info}>
              <div className={styles.info}>
                <h1>MONETIZE WITH EXCLUSIVE ACCESS PLATFORMS FOR ATHLETES</h1>
                <p>
                  Mintdropz allows Athletes deliveer membership based, NFT
                  Platforms to deliver exclusive experiences for their fans with
                  NFTs & Social Tokens
                </p>
                <img
                  className={styles.star_1}
                  src="/stars_1.svg"
                  alt="Sorry!"
                />
              </div>

              <div className={styles.header_btn}>
                <button className={styles.get_started}>
                  <img src="/arrow_1.svg" alt="Sorry!" /> Get Started
                </button>
                <button>
                  <img src="/arrow_2.svg" alt="Sorry!" /> Learn More
                </button>
              </div>
            </div>
            <div className={styles.header_partners}>
              <h1>NFT PLATFORM FOR ATHLETES</h1>
              <div className={styles.partner}>
                <img src="/ethereum.svg" alt="Sorry!" />
                <img src="/polygon.svg" alt="Sorry!" />
                <img src="/algorand.svg" alt="Sorry!" />
                <img src="/solana.svg" alt="Sorry!" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.landing_img}>
        <img src="/landing-boxer.svg" alt="Sorry!" />
        <h1>THE FUTURE OF EXPERIENCES FOR ATHLETES </h1>
      </div>
    </div>
  );
};

export default LandingHeader;
