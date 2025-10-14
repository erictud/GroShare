import React from "react";
import styles from "./../styles/styles_components/Button.module.css";

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
