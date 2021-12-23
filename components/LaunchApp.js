import React from "react";
import styles from "../styles/Home.module.css";

const LaunchApp = () => {
  return (
    <div className={styles.launch}>
      <h1>LAUNCH ON WEB, IOS, ANDROID, APPLE TV, ROKU, AMAZON FIRE</h1>
      <img src="/launch.svg" alt="Sorry!" />
    </div>
  );
};

export default LaunchApp;
