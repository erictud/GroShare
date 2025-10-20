"use client";

import { useState } from "react";
import Form from "../components/Form";
import styles from "./../styles/authPage.module.css";
import FormInput from "../components/FormInput";
import Button from "../components/Button";
import AlertPrompt from "../components/AlertPrompt";
import LoadingOverlay from "../components/LoadingOverlay";

const noError = {
  exists: false,
  title: "",
  description: "",
};

export default function Home() {
  // loading state
  const [method, setMethod] = useState("login");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(noError);
  const [loading, setLoading] = useState(false);

  const submitForm = () => {
    setError(noError);

    if (method == "login") {
      // General validation for credentials
      if (username.length < 4 || password.length < 8) {
        setError({
          exists: true,
          title: "Invalid credentials",
          description: "Please write a valid username or password!",
        });
        clearErrorTimeout();
        return;
      }
    } else {
      // Username validation. must have at least 4 charcaters, max 16 characters
      if (username.length < 4) {
        setError({
          exists: true,
          title: "Invalid username",
          description: "The username must be between 4 and 16 characters!",
        });
        clearErrorTimeout();
        return;
      }
      // Email validation, basic email validation
      if (email.includes("@") == false || email.includes(".") == false) {
        setError({
          exists: true,
          title: "Invalid email",
          description: "Please write a valid email address!",
        });
        clearErrorTimeout();
        return;
      }
      // Password validation. At least 8 characters and one uppercase one
      if (password.length < 8 || password.toLowerCase() == password) {
        setError({
          exists: true,
          title: "Invalid password",
          description:
            "The password must have at least 8 characters and one upper case letter!",
        });
        clearErrorTimeout();
        return;
      }
      // Checking if passwords match
      if (password != confirmPassword) {
        setError({
          exists: true,
          title: "Password do not match",
          description: "Check the spelling of each password!",
        });
        clearErrorTimeout();
        return;
      }
    }

    // Everything is fine, now we send the data
    setLoading(true);
  };

  return (
    <div>
      {error.exists == true && (
        <AlertPrompt
          type="error"
          title={error.title}
          message={error.description}
        />
      )}
      {loading && (
        <LoadingOverlay
          message={
            method == "login"
              ? "Logging in, please wait..."
              : "Creating your account, please wait..."
          }
        />
      )}
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
            requirment={
              method == "signup"
                ? "The username must have  between 4-16 characters"
                : ""
            }
          />
          <FormInput
            label="password"
            type="password"
            state={password}
            setState={setPassword}
            requirment={
              method == "signup"
                ? "The password must have  at least 8 characters, with one uppercase letter"
                : ""
            }
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
