import logo from '@/assets/icons/logo.svg';
import styles from './Logo.module.scss'

export default function Logo () {
  return (
    <a href="/" className={styles.logo} aria-label="Home" title="Home">
      <img
        className={styles.img}
        width="160"
        height="33"
        src={logo}
        alt="logo"
      />
    </a>
  );
}