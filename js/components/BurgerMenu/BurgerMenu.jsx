// src/components/BurgerMenu/BurgerMenu.jsx
import React, { useState, useEffect } from "react";
import MenuButton from "../MenuButton/MenuButton";
import MenuBody from "../MenuBody/MenuBody";
import styles from "./BurgerMenu.module.css";

export default function BurgerMenu() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive((prev) => !prev);
    document.body.classList.toggle("_lock");
  };

  const closeMenu = () => {
    setIsActive(false);
    document.body.classList.remove("_lock");
  };

  // При размонтировании — снять блокировку прокрутки
  useEffect(() => {
    return () => document.body.classList.remove("_lock");
  }, []);

  return (
    <div className={`${styles.menu} align-center`}>
      <MenuButton isActive={isActive} onToggle={toggleMenu} />
      <MenuBody isActive={isActive} onLinkClick={closeMenu} />
    </div>
  );
}