import clsx from 'clsx';
import styles from './Card.module.scss';
import CardHeader from './CardHeader';

export default function CardBody({ category, number, title, text }) {
  return (
    <div className={styles.cardBody}>
      <div className={styles.cardContainer}>
        <p className={clsx(styles.topTitle, styles.textSmall)}>{category}</p>

        <p className={clsx(styles.cardBlue, styles.textBlue, styles.textSmall)}>
          Episode <span>{number}</span>
        </p>

        <CardHeader title={title} text={text} />

        <span className={clsx(styles.cta, styles.textSmall)}>View Episode Details</span>
      </div>
    </div>
  );
}
