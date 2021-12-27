import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import { Drawer } from "antd";
import { Modal } from "reactstrap";

const NavBarSm = () => {
  const [isOpen, setOPen] = useState(false);
  const [showCS, setShowCS] = useState(false);

  return (
    <div className={styles.navbar_sm}>
      <div className={styles.logo_sec}>
        <img src="/logo.svg" alt="Sorry!" />
      </div>

      <div className={styles.hamburger_container}>
        <img onClick={() => setOPen(true)} src="/menu.png" />
      </div>

      <Drawer
        title=""
        placement="right"
        closable={true}
        onClose={() => setOPen(false)}
        visible={isOpen}
      >
        <div className={styles.drawer_container}>
          <div className={styles.header_sec}>
            <div className={styles.logo_container}>
              <img src="/Assets/footer_logo.png" />
            </div>
          </div>
          <div className={styles.drawer_body}>
            <Link href="/">
              <p>NFT Creators</p>
            </Link>
            <Link href="/mint">
              <p>Content Creators</p>
            </Link>
            <Link href="/mint-final">
              <p>Enterprise</p>
            </Link>
            <Link href="/pricing">
              <p>Examples</p>
            </Link>
            <Link href="/">
              <p>NFT LIST</p>
            </Link>
            <Link href="/regfinal">
              <button className="btn">GET STARTED</button>
            </Link>
          </div>
        </div>
      </Drawer>

      <Modal centered isOpen={showCS} toggle={() => setShowCS(false)}>
        <div className={styles.coming_soon_modal}>
          <div className={styles.modal_body}>
            <i onClick={() => setShowCS(false)} class="fas fa-times"></i>
            <div className={styles.img_container}>
              <img src="/logo.svg" />
            </div>
            {/* <div className={styles.title_container}>
              <h1>COMING SOON</h1>
            </div> */}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default NavBarSm;
