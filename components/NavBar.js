import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo_nav}>
        <img src="/logo.svg" alt="Sorry!" />
      </div>
      <div className={styles.nav_items}>
        <div className={styles.nav_items_link}>
          <Link href="/">
            <p>NFT Creators</p>
          </Link>
          <Link href="/">
            <p>Content Creators</p>
          </Link>
          <Link href="/">
            <p>Enterprise</p>
          </Link>
          <Link href="/">
            <p>Examples</p>
          </Link>
          <Link href="/">
            <p>NFT LIST</p>
          </Link>
        </div>
        <div className={styles.nav_items_btn}>
          <button>GET STARTED</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
