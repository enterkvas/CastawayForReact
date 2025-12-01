import styles from './Card.module.scss';
import CardBody from './CardBody';
import CardImage from './CardImage';

export default function Card ({ image, category, number, title, text }) {
  return (
    <li className={styles.item}>
      <a href='#' className={styles.card}>
        <div className={styles.cardBorder}>
          <CardBody
            category={category}
            number={number}
            title={title}
            text={text}
          />
          <CardImage image={image} title={title} />
        </div>
      </a>
    </li>
  );
}
