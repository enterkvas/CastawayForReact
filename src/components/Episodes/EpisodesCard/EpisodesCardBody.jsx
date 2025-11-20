import clsx from 'clsx';
import styles from './EpisodesCard.module.scss';
import EpisodesCardHeader from './EpisodesCardHeader';

export default function EpisodesCardBody({ category, number, title, text }) {
  return (
    <div className={styles.cardBody}>
      <div className={styles.cardContainer}>
        <p className={clsx(styles.topTitle, styles.textSmall)}>{category}</p>

        <p className={clsx(styles.cardBlue, styles.textBlue, styles.textSmall)}>
          Episode <span>{number}</span>
        </p>

        <EpisodesCardHeader title={title} text={text} />

        <span className={clsx(styles.cta, styles.textSmall)}>View Episode Details</span>
      </div>
    </div>
  );
}
