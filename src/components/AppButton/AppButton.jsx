import clsx from 'clsx';
import styles from './AppButton.module.scss';

export default function AppButton({ children, href, className = '', type = '', ...props }) { 
  if(href) {
    return (
      <a
        href={href}
        className={clsx(
          styles.button, 
          styles.textSmall
        )}
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      type={type}
      className={styles.buttonSubscribe}
      {...props}
    >
      {children}
    </button>
  );
}