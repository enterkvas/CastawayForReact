import styles from "./Episodes.module.scss" 
import EpisodesCardBody from './EpisodesCardBody'
import EpisodesCardImage from './EpisodesCardImage'

const EpisodesCard = ({ category, number, title, text, image }) => {
  return (
    <li className="episodes__item">
      <a href='#' className={styles.episodesCard}>
        <div className="card-episodes__border">
          <EpisodesCardBody
            category={category}
            number={number}
            title={title}
            text={text}
          />
          <EpisodesCardImage 
            image={image} 
            title={title} 
          />
        </div>
      </a>
    </li>
  );
};

export default EpisodesCard;
