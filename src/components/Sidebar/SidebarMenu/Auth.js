import styles from "./Auth.module.css";

import Modal from "../../../UI/Modal";
import Button from "../../../UI/Button";
import useInput from "../../../hooks/useInput";

import { useContext } from "react";
import UserContext from "../../../context/UserContext";

import Input from "./Input";

const Auth = (props) => {
  const email = useInput(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
  const password = useInput(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/);

  const formIsValid = email.isValid && password.isValid;

  const user = useContext(UserContext);

  const userLogin = (event) => user.loginHandler(email.value, password.value);

  return (
    <Modal onClose={props.onClose} className={styles.auth}>
      <div className={styles["auth-header"]}>
        <h1>Welcome Back</h1>
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
      <Button
        className={styles.button}
        disabled={!formIsValid}
        onClick={userLogin}>
        SIGN IN
      </Button>
    </Modal>
  );
};

export default Auth;
