import styles from './PodcastPlatformIcon.module.scss';
import { icons } from '@/data/podcastPlatformsData';

export default function PodcastPlatformIcon({ platform, size = 32 }) {
  
  const Icon = icons[platform];

  if (!Icon) return null;

  return (
    <li className={styles.item}>
      <a className={styles.link}>
        <span
          className={styles.iconWrapper}
          style={{ width: size, height: size }}
        >
          <Icon width={size} height={size} />
        </span>
      </a>
    </li>
  );
}
