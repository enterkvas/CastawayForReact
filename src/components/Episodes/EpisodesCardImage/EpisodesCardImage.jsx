const EpisodesCardImage = ({ image, title }) => {
	return (
		<a className="card-episodes__image">
			<img
        loading="lazy"
        src={image}
        width="389"
        height="432"
        alt={title}
      />
		</a>
	);
};

export default EpisodesCardImage;