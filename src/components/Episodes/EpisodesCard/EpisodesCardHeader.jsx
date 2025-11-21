import clsx from 'clsx';
import styles from './EpisodesCard.module.scss';

export default function EpisodesCardHeader({ text, title }) {
  return (
    <header className={styles.header}>
      <h3 className={clsx(styles.cardTitle, styles.ellipsisText)}>{title}</h3>

      <div className={clsx(styles.cardSubtitle, styles.ellipsisText, styles.subtitle)}>
        <p>{text}</p>
      </div>
    </header>
  );
}