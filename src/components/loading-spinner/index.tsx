import styles from "./loading-spinner.module.css";

export default function LoadingSpinner() {
  return (
    <div className={styles.ring}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
