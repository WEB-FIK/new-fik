import React from "react";
import styles from "./Navbar.module.css";

const ToggleButton: React.FC<{ isOpen: boolean, toggleMenu: () => void, closeMenu: () => void }> = ({ isOpen, toggleMenu, closeMenu }) => (
  <button
    className={styles.toggleButton}
    onClick={isOpen ? closeMenu : toggleMenu}
  >
    <span className={`${styles.toggleButtonBar} ${isOpen ? styles.toggleButtonBarOpenTop : ''}`}></span>
    <span className={`${styles.toggleButtonBar} ${styles.toggleButtonBarTop} ${isOpen ? styles.toggleButtonBarOpenBottom : ''}`}></span>
  </button>
);

export default ToggleButton;
