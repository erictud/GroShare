import styles from "../styles/LoadingOverlay.module.css";

export default function LoadingOverlay({ message }) {
  return (
    <div>
      <div className={styles.loading_overlay}></div>
      <div className={styles.loading_container}>
        <span className={styles.spinner}></span>
        <p className="paragraph">{message}</p>
      </div>
    </div>
  );
}
