const EpisodesCardHeader = ({ title, text }) => {
  return (
    <header className="card-episodes__header">
      <h3 className="card-episodes__title ellipsis-text">
        {title}
      </h3>
      <div className="card-episodes__subtitle subtitle ellipsis-text">
        <p>
          {text}
        </p>
      </div>
    </header>
  );
};

export default EpisodesCardHeader;