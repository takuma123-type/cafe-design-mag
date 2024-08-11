'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/" passHref>
          <Image src="/CoffeeLogo.png" alt="CoffeeLogo" width={100} height={100} />
        </Link>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={isOpen ? styles.hamburgerIconOpen1 : styles.hamburgerIcon}></div>
        <div className={isOpen ? styles.hamburgerIconOpen2 : styles.hamburgerIcon}></div>
        <div className={isOpen ? styles.hamburgerIconOpen3 : styles.hamburgerIcon}></div>
      </div>

      <nav className={isOpen ? `${styles.nav} ${styles.open}` : styles.nav}>
        <Link href="/" passHref onClick={closeMenu}>
          <Image src="/CoffeeLogo.png" alt="CoffeeLogo" width={100} height={100} />
        </Link>
        <Link href="/" onClick={closeMenu} className={styles.navLink}>
          カフェ
        </Link>
        <Link href="/" onClick={closeMenu} className={styles.navLink}>
          珈琲
        </Link>
        <Link href="/" onClick={closeMenu} className={styles.navLink}>
          紅茶
        </Link>
        <Link href="/" onClick={closeMenu} className={styles.navLink}>
          お菓子
        </Link>
        <Link href="https://soru-tech.com/" onClick={closeMenu} className={styles.navButton}>
          運営者
        </Link>
      </nav>

      {/* オーバーレイを追加 */}
      {isOpen && <div className={styles.overlay} onClick={closeMenu}></div>}

      {/* PC用ナビゲーション */}
      <nav className={styles.desktopNav}>
        <Link href="/">カフェ</Link>
        <Link href="/">珈琲</Link>
        <Link href="/">紅茶</Link>
        <Link href="/">お菓子</Link>
        <Link href="https://soru-tech.com/" className={styles.blackButton}>
          運営者
        </Link>
      </nav>
    </header>
  );
}
