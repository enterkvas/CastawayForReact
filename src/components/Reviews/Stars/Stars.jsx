import styles from './Stars.module.scss';

export default function Stars({ count }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} className={`${styles.star} ${i < count ? styles.starFull : styles.empty}`}>
          <use href="#icon-star" />
        </svg>
      ))}
    </div>
  );
}
