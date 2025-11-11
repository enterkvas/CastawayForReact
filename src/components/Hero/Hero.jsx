import hero from '../../assets/images/hero-img/hero.jpg'
import Soc1alsIcons1 from '../Soc1alsIcons1/Soc1alsIcons1'

const Hero = () => {
  return (
    <section className="page__hero hero" aria-labelledby="hero-title">
      <div className="hero__row">
        <div className="hero__col">
          <div className="hero__image">
            <img
              src={hero}
              width="650"
              height="873"
              alt="hero section image"
            />
          </div>
        </div>
        <div className="hero__col align-center">
          <div className="hero__body">
            <h2 className="hero__text-main">
              Take your podcast to the{" "}
              <span className="hero__text-underlining">next</span>{" "}
              <span className="hero__text-green">level</span>
            </h2>
            <p className="hero__text-add">Listen on</p>
            <Soc1alsIcons1 />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero