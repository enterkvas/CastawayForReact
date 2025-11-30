import styles from './EpisodesCard.module.scss';

export default function EpisodesCardImage({ image, title }) {
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
