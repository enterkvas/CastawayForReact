import clsx from 'clsx';
import styles from './Card.module.scss';

export default function CardHeader({ text, title }) {
  return (
    <header className={styles.header}>
      <h3 className={clsx(styles.cardTitle, styles.ellipsisText)}>{title}</h3>

      <div className={clsx(styles.cardSubtitle, styles.subtitle, styles.ellipsisText)}>
        <p>{text}</p>
      </div>
    </header>
  );
}