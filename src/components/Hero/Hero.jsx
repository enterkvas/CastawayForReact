import clsx from 'clsx';
import hero from '@/assets/images/hero-img/hero.jpg';
import PodcastPlatformIcons from '../PodcastPlatformIcons/PodcastPlatformIcons';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={clsx(styles.hero, styles.container, styles.pageContainer)} aria-labelledby="hero-title">
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.image}>
            <img
              src={hero}
              width="650"
              height="873"
              alt="hero section image"
            />
          </div>
        </div>
        <div className={clsx(styles.col, styles.alignCenter)}>
          <div className={styles.body}>
            <h2 className={styles.textMain}>
              Take your podcast to the{" "}
              <span className={styles.textUnderlining}>next</span>{" "}
              <span className={styles.textGreen}>level</span>
            </h2>
            <p className={styles.textAdd}>Listen on</p>
            <PodcastPlatformIcons />
          </div>
        </div>
      </div>
    </section>
  );
}