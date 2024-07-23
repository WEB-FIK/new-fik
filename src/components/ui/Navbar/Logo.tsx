import React from "react";
import Link from "next/link";
import Image from "next/image";
import upnvj from "../../../../public/icons/UPNVJ.png";
import styles from "./Navbar.module.css";

const Logo: React.FC = () => (
  <div className={`${styles.logoContainer} md:justify-between`}>
    <Link href="/" className={styles.logoLink}>
      <Image src={upnvj} alt="logo" width={50} height={50} />
    </Link>
    <div className={`md:block md:px-6 md:space-y-2 ${styles.logoText} ${styles.logoTextDesktop}`}>
      <p>FAKULTAS ILMU KOMPUTER</p>
      <p>VETERAN JAKARTA</p>
    </div>
  </div>
);

export default Logo;
