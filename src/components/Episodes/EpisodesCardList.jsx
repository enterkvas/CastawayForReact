import EpisodesCard from "./EpisodesCard";
import episodes2 from '../../assets/images/episodes-img/episodes2.jpg'
import episodes3 from '../../assets/images/episodes-img/episodes3.jpg'

const EpisodesCardList = () => {
  return (
    <ul className="episodes__list">
      <EpisodesCard />
      <li className="episodes__item">
        <article
          className="episodes__card  card-episodes"
          aria-label="Should you get outboard audio gear?"
          title=" aria-label='Should you get outboard audio gear?'"
        >
          <div className="card-episodes__border">
            <div className="card-episodes__body">
              <div className="card-episodes__container">
                <p className="card-episodes__top-title text-small">
                  Tips &amp; Tricks
                </p>
                <p className="card-episodes__text-blue text-blue text-small">
                  Episode <span>2</span>
                </p>
                <header className="card-episodes__header">
                  <h3 className="card-episodes__title ellipsis-text">
                    Mic tricks to take you to the next level
                  </h3>
                  <div className="card-episodes__subtitle subtitle ellipsis-text">
                    <p>
                      Stop rolling with those default settings on your mic.
                      These small tweaks will take you from sounding good to
                      great.
                    </p>
                  </div>
                </header>
                <a href="#" className="card-episodes__button button text-small">
                  View Episode Details
                </a>
              </div>
            </div>
            <a href="#" className="card-episodes__image">
              <img
                loading="lazy"
                src={episodes2}
                width="389"
                height="432"
                alt="image of episodes_3"
              />
            </a>
          </div>
        </article>
      </li>
      <li className="episodes__item">
        <article
          className="episodes__card  card-episodes"
          aria-label="Should you get outboard audio gear?"
          title=" aria-label='Should you get outboard audio gear?'"
        >
          <div className="card-episodes__border">
            <div className="card-episodes__body">
              <div className="card-episodes__container">
                <p className="card-episodes__top-title text-small">Gear</p>
                <p className="card-episodes__text-blue text-blue text-small">
                  Episode <span>1</span>
                </p>
                <header className="card-episodes__header">
                  <h3 className="card-episodes__title ellipsis-text">
                    The best microphone under $200
                  </h3>
                  <div className="card-episodes__subtitle subtitle ellipsis-text">
                    <p>
                      With so many microphones on the market, how are you
                      supposed to know what’s the best? Take a look at our top
                      picks.
                    </p>
                  </div>
                </header>
                <a href="#" className="card-episodes__button button text-small">
                  View Episode Details
                </a>
              </div>
            </div>
            <a href="#" className="card-episodes__image">
              <img
                loading="lazy"
                src={episodes3}
                width="389"
                height="432"
                alt="image of episodes_3"
              />
            </a>
          </div>
        </article>
      </li>
    </ul>
  );
};

export default EpisodesCardList;
