import clsx from 'clsx';
import List from './List/List';
import styles from './Reviews.module.scss';

export default function Reviews () {
  return (
    <section
      className={clsx(styles.reviews, styles.container, styles.pageContainer)}
      id="reviews"
      aria-labelledby="reviews-title"
    >
      <h2 className={styles.visuallyHidden} id="reviews-title">
        Student reviews
      </h2>
      
      <List />
    </section>
  );
}