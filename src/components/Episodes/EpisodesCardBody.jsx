import AppButton from "../AppButton/AppButton";
import EpisodesCardHeader from "./EpisodesCardHeader";

const EpisodesCardBody = () => {
  return (
    <div className="card-episodes__body">
      <div className="card-episodes__container">
        <p className="card-episodes__top-title text-small">Gear</p>
        <p className="card-episodes__text-blue text-blue text-small ">
          Episode <span>3</span>
        </p>
        <EpisodesCardHeader />
        <AppButton />
      </div>
    </div>
  );
};

export default EpisodesCardBody;
