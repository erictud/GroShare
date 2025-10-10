import React from "react";
import styles from "./../styles/Button.module.css";

export default function Button({ children, customStyle, onClickListener }) {
  return (
    <button
      onClick={onClickListener}
      className={`${customStyle} ${styles.button}`}
    >
      {children}
    </button>
  );
}
