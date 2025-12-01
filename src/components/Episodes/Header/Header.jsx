import styles from './Header.module.scss';
import AppButton from '../../AppButton/AppButton';

export default function Header() {
  return (
    <header className={styles.header}>
      <h2 className={styles.headerTitle}>Latest episodes</h2>
      
      <AppButton href='#'>Show all episodes</AppButton>
    </header>
  );
}