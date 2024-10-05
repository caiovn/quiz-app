import styles from "./loading-spinner.module.css";

export default function LoadingSpinner() {
  return (
    <div className={styles.ring} data-testid="loading-spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
