import styles from "./Episodes.module.scss"
import EpisodesCardList from "./EpisodesCardList";
import EpisodesHeader from "./EpisodesHeader";

const Episodes = () => {
  return (
    <section
      className={styles.episodes}
      id="episodes"
      aria-labelledby="episodes-title"
    >
      <EpisodesHeader />
      
      <div className="episodes__container">
        <EpisodesCardList />
      </div>
    </section>
  );
};

export default Episodes;
