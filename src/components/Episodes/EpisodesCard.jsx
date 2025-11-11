import episodes1 from '../../assets/images/episodes-img/episodes1.jpg'
import EpisodesCardBody from './EpisodesCardBody';

const EpisodesCard = () => {
  return (
    <li className="episodes__item">
      <article
        className="episodes__card  card-episodes"
        aria-label="Should you get outboard audio gear?"
        title=" aria-label='Should you get outboard audio gear?"
      >
        <div className="card-episodes__border">
          <EpisodesCardBody />
          <a href="#" className="card-episodes__image">
            <img
              loading="lazy"
              src={episodes1}
              width="389"
              height="432"
              alt="image of episodes_3"
            />
          </a>
        </div>
      </article>
    </li>
  );
};

export default EpisodesCard;
