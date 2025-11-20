import clsx from 'clsx';
import styles from './Episodes.module.scss';

export default function EpisodesHeader() {
  return (
    <header className={styles.header}>
      <h2 className={styles.headerTitle}>Latest episodes</h2>
      <a href='#' className={clsx(styles.button, styles.textSmall)}>
        View all episodes
      </a>
    </header>
  );
}