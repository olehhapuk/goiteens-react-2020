import styles from './Button.module.css';

function Button({ children, ...props }) {
  return (
    <button {...props} className={styles.btn}>
      {children}
    </button>
  );
}

export default Button;
