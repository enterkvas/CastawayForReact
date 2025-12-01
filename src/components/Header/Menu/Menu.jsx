import clsx from 'clsx';
import styles from './Menu.module.scss'

export default function Menu () {
  return (
    <div className={clsx(styles.menu, styles.alignCenter)}>
      <div className={styles.icon}>
        <span />
      </div>
      <nav className={styles.body}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a href="#home" className={styles.link}>
              Home
            </a>
          </li>
          <li className={styles.item}>
            <a href="#episodes" className={styles.link}>
              Episodes
            </a>
          </li>
          <li className={styles.item}>
            <a href="#about" className={styles.link}>
              About
            </a>
          </li>
          <li className={styles.item}>
            <a href="#reviews" className={styles.link}>
              Reviews
            </a>
          </li>
          <li className={styles.item}>
            <a href="#contact" className={styles.link}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}