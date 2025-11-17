import EpisodesCardList from "./EpisodesCardList";
import EpisodesHeader from "./EpisodesHeader";

const Episodes = () => {
  return (
    <section
      className="page__episodes episodes"
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
