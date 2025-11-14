import AppButton from "../AppButton/AppButton";
import EpisodesCardHeader from "./EpisodesCardHeader";

const EpisodesCardBody = ({ category, number, title, text }) => {
  return (
    <div className="card-episodes__body">
      <div className="card-episodes__container">
        <p className="card-episodes__top-title text-small">{category}</p>
        <p className="card-episodes__text-blue text-blue text-small ">
          Episode <span>{number}</span>
        </p>
        <EpisodesCardHeader title={title} text={text} />
        <AppButton />
      </div>
    </div>
  );
};

export default EpisodesCardBody;