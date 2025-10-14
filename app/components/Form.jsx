import styles from "./../styles/styles_components/Form.module.css";

export default function Form({ children, submitEvent }) {
  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        submitEvent();
      }}
    >
      {children}
    </form>
  );
}
