import styles from './SubscribeField.module.scss';

export default function SubscribeField({ register, placeholder, error }) {
  return (
    <div className={styles.fieldWrapper}>
      <input
        {...register}
        placeholder={placeholder}
        className={`${styles.field} ${error ? styles.error : ''}`}
      />
      {error && <span className={styles.errorText}>{error.message}</span>}
    </div>
  );
}