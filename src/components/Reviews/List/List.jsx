import { reviewsData } from '@/data/reviewsData';
import Item from '../Item/Item';
import styles from './List.module.scss';

export default function List() {
	return (
		<div className={styles.reviewsContainer}>
			<ul className={styles.list}>
				{reviewsData.map((review) => (
					<Item key={review.id} {...review} />
				))}
			</ul>
		</div>
	);
}