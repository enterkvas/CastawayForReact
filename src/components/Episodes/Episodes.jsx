import clsx from 'clsx';
import styles from './Episodes.module.scss';
import EpisodesCardList from './EpisodesCardList';
import EpisodesHeader from './EpisodesHeader';

export default function Episodes() {
  return (
    <section className={clsx(styles.root, styles.pageContainer)}>
      <EpisodesHeader />
      <EpisodesCardList />
    </section>
  );
}
