import React, { useState, useEffect } from "react";
import styles from "./ButtonUp.module.scss";

export default function ButtonUp () {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when scrolling the page
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll up the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className={styles.buttonUp}
          onClick={scrollToTop}
          aria-label="Scroll up page"
        >
        </button>
      )}
    </>
  );
}