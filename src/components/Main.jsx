import About from "./About/About";
import Episodes from "./Episodes/Episodes";
import Hero from "./Hero/Hero";
import Subscribe from "./Subscribe/Subscribe";
import Reviews from "./Reviews/Reviews";


const Main = () => {
  return (
    <main id="home" className="main page page__container container">
      <h1 className="visually-hidden" id="hero-title">
        Podcast Studio
      </h1>
      <Hero />
      <Episodes />
      <About />
      <Subscribe />
      <Reviews />
    </main>
  );
};
export default Main;