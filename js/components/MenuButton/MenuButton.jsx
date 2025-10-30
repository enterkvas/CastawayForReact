// src/components/MenuButton/MenuButton.jsx
import React from "react";
import styles from "./MenuButton.module.css";

export default function MenuButton({ isActive, onToggle }) {
  return (
    <div
      className={`${styles.icon} ${isActive ? styles.active : ""}`}
      onClick={onToggle}
    >
      <span></span>
    </div>
  );
}