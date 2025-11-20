import styles from './EpisodesCard.module.scss';
import EpisodesCardBody from './EpisodesCardBody';
import EpisodesCardImage from './EpisodesCardImage';

export default function EpisodesCard ({ image, category, number, title, text }) {
  return (
    <li className={styles.item}>
      <a href='#' className={styles.card}>
        <div className={styles.cardBorder}>
          <EpisodesCardBody
            category={category}
            number={number}
            title={title}
            text={text}
          />
          <EpisodesCardImage image={image} title={title} />
        </div>
      </a>
    </li>
  );
}
