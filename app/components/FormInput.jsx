import { useState } from "react";
import styles from "./../styles/styles_components/FormInput.module.css";
import showPasswordSvg from "./../../public/showPassword.svg";
import hidePasswordSvg from "./../../public/hidePassword.svg";
import Image from "next/image";

export default function FormInput({ type, label, state, setState }) {
  const [showPassowrd, setShowPassword] = useState(false);

  if (type == "password") {
    return (
      <div
        className={`${styles.input_container} ${styles.input_container_password}`}
      >
        <label>{label}</label>
        <div>
          <input
            type={showPassowrd == true ? "text" : "password"}
            alt={label}
            onChange={(e) => setState(e.currentTarget.value)}
            value={state}
          />
          <Image
            onClick={() => setShowPassword((prev) => !prev)}
            alt="Svg icon"
            src={showPassowrd == true ? hidePasswordSvg : showPasswordSvg}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.input_container}>
      <label>{label}</label>
      <input
        type={type}
        alt={label}
        onChange={(e) => setState(e.currentTarget.value)}
        value={state}
      />
    </div>
  );
}
