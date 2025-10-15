import styles from "./../styles/styles_components/AlertPrompt.module.css";

export default function AlertPrompt({ title, message, type }) {
  return (
    <div
      className={`${styles.alert_prompt_container} ${
        type == "error" && styles.alert_prompt_error
      }`}
    >
      <h2 className="tertiary-title">{title}</h2>
      <p className="paragraph">{message}</p>
    </div>
  );
}
