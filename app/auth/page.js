"use client";

import { useState } from "react";
import Form from "../components/Form";
import styles from "./../styles/authPage.module.css";
import FormInput from "../components/FormInput";
import Button from "../components/Button";

export default function Home() {
  const [method, setMethod] = useState("login");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitForm = () => {
    alert("Form submitted");
  };

  return (
    <div>
      <Form submitEvent={submitForm}>
        <div className={styles.auth_header}>
          <h2 className="secondary-title">
            {method == "login" ? "Log in" : "Join groShare"}
          </h2>
        </div>
        <div className={styles.auth_input_container}>
          {method == "signup" && (
            <FormInput
              label="email"
              type="email"
              state={email}
              setState={setEmail}
            />
          )}
          <FormInput
            label="username"
            type="text"
            state={username}
            setState={setUsername}
          />
          <FormInput
            label="password"
            type="password"
            state={password}
            setState={setPassword}
          />
          {method == "signup" && (
            <FormInput
              label="confirm password"
              type="password"
              state={confirmPassword}
              setState={setConfirmPassword}
            />
          )}
        </div>
        <div className={styles.auth_button_container}>
          <button
            className={styles.change_method_button}
            onClick={(e) => {
              e.preventDefault();
              setMethod((val) => (val == "login" ? "signup" : "login"));
            }}
          >
            {method == "login"
              ? " Dont have an account? Join us here!"
              : "Already have an account? Log in!"}
          </button>
          <Button>{method == "login" ? "Log in" : "Join groShare"}</Button>
        </div>
      </Form>
    </div>
  );
}
