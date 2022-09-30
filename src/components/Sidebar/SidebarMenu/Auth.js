import styles from "./Auth.module.css";

import Modal from "../../../UI/Modal";
import Button from "../../../UI/Button";

import { MdOutlineEmail } from "react-icons/md";
import { IoIosKey } from "react-icons/io";
import Input from "./Input";

const Auth = (props) => {
  return (
    <Modal onClose={props.onClose} className={styles.auth}>
      <div className={styles["auth-header"]}>
        <h1>Welcome Back</h1>
      </div>
      <div className={styles.inputs}>
        <Input type="text" label="Email" />
        <Input type="password" label="Password" />
      </div>
      <Button className={styles.button}>SIGN IN</Button>
    </Modal>
  );
};

export default Auth;
