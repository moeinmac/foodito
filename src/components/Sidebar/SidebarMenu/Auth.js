import styles from "./Auth.module.css";

import Modal from "../../../UI/Modal";
import Button from "../../../UI/Button";
import useInput from "../../../hooks/useInput";

import { useContext, useState } from "react";
import UserContext from "../../../context/UserContext";

import Input from "./Input";

const Auth = (props) => {
  const email = useInput(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
  const password = useInput(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/);

  const formIsValid = email.isValid && password.isValid;

  const user = useContext(UserContext);
  const userLogin = () => user.loginHandler(email.value, password.value);
  const userSignup = () => user.signupHandler(email.value, password.value);

  const [loginForm, setLoginForm] = useState(true);
  const loginFormHandler = () => setLoginForm(!loginForm);

  return (
    <Modal onClose={props.onClose} className={styles.auth}>
      <div className={styles["auth-header"]}>
        {loginForm && <h1>Welcome Back</h1>}
        {!loginForm && <h1>Hello Friend!</h1>}
      </div>
      <div className={styles.inputs}>
        <Input
          type="text"
          label="Email"
          errorMessage="Valid email : (example@example.com)"
          data={email}
        />
        <Input
          type="password"
          label="Password"
          errorMessage="Minimum eight characters, at least a upper case and lower case letter and one number"
          data={password}
        />
      </div>
      {user.error && (
        <p className={styles["error-message"]}>
          Email or Password is Incorrect!
        </p>
      )}
      <div className={styles["button-container"]}>
        {loginForm && (
          <>
            <Button
              className={styles.button}
              disabled={!formIsValid}
              onClick={userLogin}>
              SIGN IN
            </Button>
            <p onClick={loginFormHandler}>
              Have'nt an account? <span>SIGNUP</span>
            </p>
          </>
        )}
        {!loginForm && (
          <>
            <Button
              className={styles.button}
              disabled={!formIsValid}
              onClick={userSignup}>
              SIGN UP
            </Button>
            <p onClick={loginFormHandler}>
              already have an account? <span>SIGN IN</span>
            </p>
          </>
        )}
      </div>
    </Modal>
  );
};

export default Auth;
