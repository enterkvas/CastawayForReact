import Stars from '../Stars/Stars';
import styles from './Item.module.scss';

export default function Item({ title, subtitle, author, stars }) {
  return (
		
    <li className={styles.item}>
				
        <article className={styles.card}>
					
          <h3 className={styles.visuallyHidden}>{title}</h3>

					<svg style={{ display: "none" }}>
						<symbol id="icon-star" viewBox="0 0 24 24">
							<path
								d="M12 .587l3.668 7.431L24 9.75l-6 5.847L19.335 24 
										12 19.897 4.665 24 6 15.597 0 9.75l8.332-1.732z"
							/>
						</symbol>
					</svg>

          <Stars count={stars} />

          <blockquote className={styles.description}>
            <p>{subtitle}</p>
          </blockquote>

          <footer className={styles.author}>{author}</footer>
        </article>
    </li>
  );
}
