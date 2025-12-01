import clsx from 'clsx';
import styles from './Subscribe.module.scss';
import SubscribeForm from './components/Form';

export default function Subscribe() {
  return (
    <section
      className={clsx(styles.subscribe, styles.pageContainer)}
      aria-labelledby="subscribe-title"
    >
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.text}>
              <div className={clsx(styles.textBlue, styles.textSmall)}>
                Email Newsletter
              </div>
              <h2 className={styles.title} id="subscribe-title">
                Subscribe for updates
              </h2>
            </div>
          </div>

          <div className={styles.col}>
            <SubscribeForm />
          </div>
          
        </div>
      </div>
    </section>
  );
}