const Reviews = () => {
  return (
    <section
      className="page__reviews reviews"
      id="reviews"
      aria-labelledby="reviews-title"
    >
      <h2 className="visually-hidden" id="reviews-title">
        Student reviews
      </h2>
      <div className="reviews__container container">
        <ul className="reviews__list">
          <li className="reviews__item">
            <a href="#">
              <article className="reviews-card">
                <h3 className="visually-hidden">Review by Betty Lacey</h3>
                <svg style={{ display: "none" }}>
                  <symbol id="icon-star" viewBox="0 0 24 24">
                    <path
                      d="M12 .587l3.668 7.431L24 9.75l-6 5.847L19.335 24 
													12 19.897 4.665 24 6 15.597 0 9.75l8.332-1.732z"
                    />
                  </symbol>
                </svg>
                <div className="stars">
                  <svg className="star empty">
                    <use href="#icon-star" />
                  </svg>
                  <svg className="star empty">
                    <use href="#icon-star" />
                  </svg>
                  <svg className="star empty">
                    <use href="#icon-star" />
                  </svg>
                  <svg className="star empty">
                    <use href="#icon-star" />
                  </svg>
                  <svg className="star empty">
                    <use href="#icon-star" />
                  </svg>
                </div>
                <blockquote className="reviews-card__description">
                  <p>I can’t recommend this podcast enough</p>
                </blockquote>
                <footer className="reviews-card__author">Betty Lacey</footer>
              </article>
            </a>
          </li>
          <li className="reviews__item">
            <a href="#">
              <article className="reviews-card">
                <h3 className="visually-hidden">Review by Betty Adam Driver</h3>
                <div className="stars">
                  <svg className="star full">
                    <use href="#icon-star" />
                  </svg>
                  <svg className="star full">
                    <use href="#icon-star" />
                  </svg>
                  <svg className="star full">
                    <use href="#icon-star" />
                  </svg>
                  <svg className="star full">
                    <use href="#icon-star" />
                  </svg>
                  <svg className="star full">
                    <use href="#icon-star" />
                  </svg>
                </div>
                <blockquote className="reviews-card__description">
                  <p>Jacob is the best in the business</p>
                </blockquote>
                <footer className="reviews-card__author">Adam Driver</footer>
              </article>
            </a>
          </li>
          <li className="reviews__item">
            <a href="#">
              <article className="reviews-card">
                <h3 className="visually-hidden">Review by Marcus Brown</h3>
                <div className="stars">
                  <svg className="star full">
                    <use href="#icon-star" />
                  </svg>
                  <svg className="star full">
                    <use href="#icon-star" />
                  </svg>
                  <svg className="star full">
                    <use href="#icon-star" />
                  </svg>
                  <svg className="star full">
                    <use href="#icon-star" />
                  </svg>
                  <svg className="star empty">
                    <use href="#icon-star" />
                  </svg>
                </div>
                <blockquote className="reviews-card__description">
                  <p>A wealth of audio knowledge</p>
                </blockquote>
                <footer className="reviews-card__author">Marcus Brown</footer>
              </article>
            </a>
          </li>
          <li className="reviews__item">
            <a href="#">
              <article className="reviews-card">
                <h3 className="visually-hidden">Review by Jessica Knowl</h3>
                <div className="stars">
                  <svg className="star full">
                    <use href="#icon-star" />
                  </svg>
                  <svg className="star full">
                    <use href="#icon-star" />
                  </svg>
                  <svg className="star full">
                    <use href="#icon-star" />
                  </svg>
                  <svg className="star full">
                    <use href="#icon-star" />
                  </svg>
                  <svg className="star full">
                    <use href="#icon-star" />
                  </svg>
                </div>
                <blockquote className="reviews-card__description">
                  <p>Every episode is a gem!</p>
                </blockquote>
                <footer className="reviews-card__author">Jessica Knowl</footer>
              </article>
            </a>
          </li>
          <li className="reviews__item">
            <a href="#">
              <article className="reviews-card">
                <h3 className="visually-hidden">Review by Scott Adams</h3>
                <div className="stars">
                  <svg className="star full">
                    <use href="#icon-star" />
                  </svg>
                  <svg className="star empty">
                    <use href="#icon-star" />
                  </svg>
                  <svg className="star empty">
                    <use href="#icon-star" />
                  </svg>
                  <svg className="star empty">
                    <use href="#icon-star" />
                  </svg>
                  <svg className="star empty">
                    <use href="#icon-star" />
                  </svg>
                </div>
                <blockquote className="reviews-card__description">
                  <p>Whoa whoa, let me take some notes!</p>
                </blockquote>
                <footer className="reviews-card__author">Scott Adams</footer>
              </article>
            </a>
          </li>
          <li className="reviews__item">
            <a href="#">
              <article className="reviews-card">
                <h3 className="visually-hidden">Review by Steven Blast</h3>
                <div className="stars">
                  <svg className="star full">
                    <use href="#icon-star" />
                  </svg>
                  <svg className="star full">
                    <use href="#icon-star" />
                  </svg>
                  <svg className="star full">
                    <use href="#icon-star" />
                  </svg>
                  <svg className="star full">
                    <use href="#icon-star" />
                  </svg>
                  <svg className="star full">
                    <use href="#icon-star" />
                  </svg>
                </div>
                <blockquote className="reviews-card__description">
                  <p>
                    I’ve upped my game considerably since I started listening
                  </p>
                </blockquote>
                <footer className="reviews-card__author">Steven Blast</footer>
              </article>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Reviews