import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import styles from "../styles/Home.module.css";

// import {
//   Nav,
//   NavLink,
//   Bars,
//   NavMenu,
//   NavBtn,
//   NavBtnLink,
// } from "./NavbarElement";
import Link from "next/link";

const NavbarRes = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <>
      <div className={styles.main_navbar}>
        <div className={styles.navbar_logo}>
          <img src="/logo.svg" alt="Sorry!" />
        </div>

        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className={styles.navbar_menu}
        >
          {menuOpen ? (
            <FaBars />
          ) : (
            <div className={styles.main_navbar_mob}>
              <div className={styles.navbar_mob}>
                <div className={styles.navbar_logo_mob}>
                  <img src="/logo.svg" alt="Sorry!" />
                </div>

                <div className={styles.times}>
                  <FaTimes />
                </div>
              </div>

              <div className={styles.hrborder}></div>
              <div className={styles.navbar_items_mob}>
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
            </div>
          )}
        </div>

        <div className={styles.navbar_items}>
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

        <div className={styles.navbar_btn}>
          <div to="/signin">GET STARTED</div>
        </div>
      </div>
    </>
  );
};

export default NavbarRes;
