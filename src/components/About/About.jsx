import clsx from 'clsx';
import about from '@/assets/images/about/about.jpg';
import styles from './About.module.scss';

export default function About () {
  return (
    <section
      className={clsx(styles.about, styles.container, styles.pageContainer)}
      id="about"
      aria-labelledby="about-title"
    >
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.image}>
            <img
              loading="lazy"
              src={about}
              width="650"
              height="743"
              alt="picture of an about block"
            />
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.body}>
            <div className={styles.aboutContainer}>
              <div className={styles.arrow} />
              <div className={clsx(styles.aboutBlue, styles.textBlue, styles.textSmall)}>
                Meet your host
              </div>
              <header className={styles.header}>
                <h2 className={styles.title} id="about-title">
                  Jacob Paulaner
                </h2>
                <div className={clsx(styles.aboutSubtitle, styles.subtitle)}>
                  <p>
                    Jacob has a background in audio engineering, and has been
                    podcasting since the early days.
                  </p>
                </div>
                <div className={clsx(styles.aboutSubtitle, styles.subtitle)}>
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
}
