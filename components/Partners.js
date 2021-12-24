import React from "react";
import styles from "../styles/Home.module.css";

const Partners = () => {
  return (
    <div className={styles.partners}>
      <div className={styles.partners_header}>
        <img src="/partner.svg" alt="Sorry!" />
        <h1>PARTNERSHIPS WITH THE BEST</h1>
      </div>
      <div className={styles.partners_card}>
        <div className={styles.partnerCard}>
          <img src="/polygon.svg" className={styles.polygon_img} alt="Sorry!" />
          <h1>
            MintDropz teams up with Polygon Studios so you can create NFTs with
            no coding knowledge
          </h1>
        </div>
        <div className={styles.partnerCard}>
          <img
            src="/algorand.svg"
            className={styles.algorand_img}
            alt="Sorry!"
          />
          <h1>
            Mintdropz Partners Athletes to bring their own platforms and will
            broaden the horizon for these creators to launch on Algorand.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Partners;
