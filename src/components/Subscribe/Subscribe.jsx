const Subscribe = () => {
  return (
    <section
      className="page__subscribe subscribe"
      aria-labelledby="subscribe-title"
    >
      <div className="subscribe__container">
        <div className="subscribe__row">
          <div className="subscribe__col">
            <div className="subscribe__text">
              <div className="subscribe__text-blue text-blue text-small">
                Email Newsletter
              </div>
              <h2 className="subscribe__title" id="subscribe-title">
                Subscribe for updates
              </h2>
            </div>
          </div>
          <div className="subscribe__col">
            <form
              className="subscribe__form form-subscribe align-center"
              action="#"
              id="form"
            >
              <input
                className="form-subscribe__form _req"
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                autoComplete="given-name"
              />
              <input
                className="form-subscribe__form _req _email"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                autoComplete="off"
              />
              <button
                className="form-subscribe__button button-subscribe"
                type="submit"
                aria-label="Submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe