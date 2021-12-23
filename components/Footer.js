import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_header}>
        <h1>Mintdropz</h1>
        <p>
          Mintdropz allows Athletes deliveer membership based, NFT Platforms to
          deliver exclusive experiences for their fans with NFTs & Social Tokens{" "}
        </p>
      </div>
      <div className={styles.bottom_footer}>
        <div className={styles.dark_logo}>
          <img src="/logo-black.svg" alt="Sorry!" />
        </div>
        <div className={styles.footer_link}>
          <Link href="/">
            <p>Term of Service</p>
          </Link>
          <Link href="/">
            <p>Privacy Policy</p>
          </Link>
        </div>
        <div className={styles.social_link}>
          <img src="/twitter.svg" alt="Sorry!" />
          <img src="/discord.svg" alt="Sorry!" />
          <img src="/insta.svg" alt="Sorry!" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
