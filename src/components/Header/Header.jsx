import clsx from 'clsx';
import Logo from '../Icons/Logo/Logo';
import Menu from './Menu/Menu';
import styles from './Header.module.scss';

export default function Header () {
  return (
    <header className={styles.header}>
      <div className={clsx(styles.headerContainer, styles.container, styles.alignCenter)}>
        <Logo />
        <Menu />
      </div>
    </header>
  );
}