import styles from './Card.module.scss';

export default function CardImage({ image, title }) {
  return (
      <div className={styles.image}>
        <img
          loading='lazy'
          src={image}
          alt={title}
          width='389'
          height='432'
        />
      </div>
  );
}
