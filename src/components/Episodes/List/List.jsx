import Card from '../Card/Card';
import styles from './List.module.scss';
import {episodesData} from '@/data/episodesData';

export default function List () {
  return (
    <ul className={styles.list}>
      {episodesData.map((episode) => (
        <Card key={episode.id} {...episode} />
      ))}
    </ul>
  );
}