import EpisodesCardList from "./EpisodesCardList";

const Episodes = () => {
  return (
    <section
      className="page__episodes episodes"
      id="episodes"
      aria-labelledby="episodes-title"
    >
      <header className="episodes__header">
        <h2 className="episodes__header-title" id="episodes-title">
          Latest episodes
        </h2>
        <a href="#" className="episodes__header-link button text-small">
          View all episodes
        </a>
      </header>
      <div className="episodes__container">
        <EpisodesCardList />
      </div>
    </section>
  );
};

export default Episodes;
