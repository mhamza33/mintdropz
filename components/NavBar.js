import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import { Modal } from "reactstrap";

const NavBar = () => {
  const [shows, setShows] = useState(false);
  // const []

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

      <Modal centered isOpen={shows} toggle={() => setShows(false)}>
        <div className={styles.coming_soon_modal}>
          <div className={styles.modal_body}>
            <i onClick={() => setShows(false)} class="fas fa-times"></i>
            <div className={styles.img_container}>
              <img src="/Assets/alpha_new/sunny_logo.png" />
            </div>
            <div className={styles.title_container}>
              <h1>COMING SOON</h1>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default NavBar;
