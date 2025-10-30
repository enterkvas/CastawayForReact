import React from "react";
import styles from "./MenuBody.module.css";

export default function MenuBody({ isActive, onLinkClick }) {
  const links = [
    { href: "#home", text: "Home" },
    { href: "#episodes", text: "Episodes" },
    { href: "#about", text: "About" },
    { href: "#reviews", text: "Reviews" },
    { href: "#contact", text: "Contact" },
  ];

  return (
    <nav className={`${styles.body} ${isActive ? styles.active : ""}`}>
      <ul className={styles.list}>
        {links.map((link) => (
          <li key={link.href} className={styles.item}>
            <a href={link.href} className={styles.link} onClick={onLinkClick}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}