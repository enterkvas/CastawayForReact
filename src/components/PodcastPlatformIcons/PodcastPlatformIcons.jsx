import PodcastPlatformIcon from '../Icons/PodcastPlatformIcon';
import styles from './PodcastPlatformIcons.module.scss';

export default function PodcastPlatformIcons() {
	return (
		<div className={styles.soc1als1}>
			<ul className={styles.list}>
				<PodcastPlatformIcon platform='google' />
				<PodcastPlatformIcon platform='spotify' />
				<PodcastPlatformIcon platform='soundcloud' />
				<PodcastPlatformIcon platform='apple' />
				<PodcastPlatformIcon platform='rss' />
			</ul>
		</div>
	);
}