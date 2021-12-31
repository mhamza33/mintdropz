import React from "react";
import styles from "../styles/Home.module.css";

const ExPlatform = () => {
  return (
    <div className={styles.platform}>
      <div className={styles.monetize_platform}>
        <h1>Exclusive Platform To Monetize Your Fan Base</h1>
        <p>
          Deliver an experience based on Membership subscriptions for your top
          fans and reward them with exclusive experiences, NFTs, and Social
          Tokens
        </p>
        <div className={styles.platform_mob_img}>
          <img src="/mob.svg" alt="Sorry!" />
          <img
            src="/platform-img.svg"
            className={styles.platform_img_mob}
            alt="Sorry!"
          />
        </div>
      </div>
      <div className={styles.own_platform}>
        <img
          src="/platform-img.svg"
          className={styles.platform_img}
          alt="Sorry!"
        />
        <div className={styles.platform_info}>
          <div className={styles.own_info}>
            <h1>
              Your Own Platform{" "}
              <img src="/stars_2.svg" className={styles.star_2} alt="Sorry!" />
            </h1>
            <p>
              Monetize your top fans with subscription revenue on your own apps
              across Web, iOS, Android, & Apple TV
            </p>
          </div>
          <div className={styles.platform_btn}>
            <button className={styles.get_started_now}>
              <img src="/arrow_1.svg" alt="Sorry!" /> Get Started
            </button>
            <button className={styles.learn_now}>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExPlatform;
