import React, { useState } from 'react';
import styles from './BurgerMenu.module.css';

export default function BurgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.menu}>
      <button
        className={`${styles.icon} ${open ? styles.active : ''}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
      </button>
      <nav className={`${styles.body} ${open ? styles.active : ''}`}>
        <ul>
          <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="#episodes" onClick={() => setOpen(false)}>Episodes</a></li>
          <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="#reviews" onClick={() => setOpen(false)}>Reviews</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}