import clsx from 'clsx';
import styles from './Episodes.module.scss';
import List from './List/List';
import Header from './Header/Header';

export default function Episodes() {
  return (
    <section id="episodes" className={clsx(styles.root, styles.container, styles.pageContainer)}>
      <Header />
      <List />
    </section>
  );
}