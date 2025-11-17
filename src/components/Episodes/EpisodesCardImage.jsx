const EpisodesCardImage = ({ image, title }) => {
	return (
		<div className="card-episodes__image">
			<img
        loading="lazy"
        src={image}
        width="389"
        height="432"
        alt={title}
      />
		</div>
	);
};

export default EpisodesCardImage;