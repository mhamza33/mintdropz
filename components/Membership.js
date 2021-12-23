import React from "react";
import styles from "../styles/Home.module.css";

const Membership = () => {
  return (
    <div className={styles.membership}>
      <div className={styles.membership_started}>
        <div className={styles.membership_card}>
          <img src="/gym.svg" alt="Sorry!" />
        </div>
        <div className={styles.membership_btn}>
          <button className={styles.get_started}>
            <img src="/arrow_1.svg" alt="Sorry!" /> Get Started
          </button>
          <button>
            <img src="/arrow_2.svg" alt="Sorry!" /> Learn More
          </button>
        </div>
      </div>
      <div className={styles.membership_info}>
        <h1>Memberships To Your App, With NFTs & Tokens </h1>
        <p>
          By building a platform that connects you directly with your fanbase,
          you can scale thousands of fans to make your brand millions of dollars
          and be more engaged with your brand than ever before <br /> <br />{" "}
          Monthly subscription gives you a predictable and reliable income
          stream for your content that no other platform can provide or compete
          with
        </p>
      </div>
    </div>
  );
};

export default Membership;
