import EpisodesCard from './EpisodesCard/EpisodesCard';
import styles from './Episodes.module.scss';
import {episodesData} from '@/data/episodesData';

export default function EpisodesCardList () {
  return (
    <ul className={styles.list}>
      {episodesData.map((episode) => (
        <EpisodesCard key={episode.id} {...episode} />
      ))}
    </ul>
  );
}