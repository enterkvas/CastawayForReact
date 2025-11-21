import clsx from 'clsx';
import Logo from './Logo/Logo';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import styles from './Header.module.scss';

export default function Header () {
  return (
    <header className={styles.header}>
      <div className={clsx(styles.container, styles.alignCenter)}>
        <Logo />
        <HeaderMenu />
      </div>
    </header>
  );
}