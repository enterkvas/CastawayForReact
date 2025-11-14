import EpisodesCardBody from './EpisodesCardBody'
import EpisodesCardImage from './EpisodesCardImage/EpisodesCardImage'

const EpisodesCard = ({ category, number, title, text, image }) => {
  return (
    <li className="episodes__item">
      <article className="episodes__card card-episodes">
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
      </article>
    </li>
  );
};

export default EpisodesCard;
