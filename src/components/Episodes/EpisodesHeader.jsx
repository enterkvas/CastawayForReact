import AppButton from "../AppButton/AppButton"

const EpisodesHeader = () => {
	return (
		<header className="episodes__header">
      <h2 className="episodes__header-title" id="episodes-title">
        Latest episodes
      </h2>
      <AppButton />
    </header>
	)
}

export default EpisodesHeader