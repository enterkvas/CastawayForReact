import about from '@/assets/images/about/about.jpg'

const About = () => {
  return (
    <section
      className="page__about about"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="about__row">
        <div className="about__col">
          <div className="about__image">
            <img
              loading="lazy"
              src={about}
              width="650"
              height="743"
              alt="picture of an about block"
            />
          </div>
        </div>
        <div className="about__col">
          <div className="about__text text-about">
            <div className="text-about__container">
              <div className="text-about__arrow" />
              <div className="text-about__text-blue text-blue text-small">
                Meet your host
              </div>
              <header className="text-about__header">
                <h2 className="text-about__title" id="about-title">
                  Jacob Paulaner
                </h2>
                <div className="text-about__subtitle subtitle">
                  <p>
                    Jacob has a background in audio engineering, and has been
                    podcasting since the early days.
                  </p>
                </div>
                <div className="text-about__subtitle subtitle">
                  <p>
                    He’s here to help you level up your game by sharing
                    everything he’s learned along the way.
                  </p>
                </div>
              </header>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
