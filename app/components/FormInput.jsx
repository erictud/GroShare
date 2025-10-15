import { useState } from "react";
import Image from "next/image";
import styles from "./../styles/styles_components/FormInput.module.css";
import attentionCircleSvg from "./../../public/attention-circle.svg";
import showPasswordSvg from "./../../public/showPassword.svg";
import hidePasswordSvg from "./../../public/hidePassword.svg";

export default function FormInput({
  type,
  label,
  state,
  setState,
  requirment = "",
}) {
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
        {requirment && (
          <div className={styles.input_container_attention}>
            <Image src={attentionCircleSvg} alt="Attention circle" />
            <p>{requirment}</p>
          </div>
        )}
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
      {requirment && (
        <div className={styles.input_container_attention}>
          <Image src={attentionCircleSvg} alt="Attention circle" />
          <p>{requirment}</p>
        </div>
      )}
    </div>
  );
}
