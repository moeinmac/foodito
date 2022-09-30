import styles from "./Auth.module.css";

import Modal from "../../../UI/Modal";
import Button from "../../../UI/Button";

import { MdOutlineEmail } from "react-icons/md";
import { IoIosKey } from "react-icons/io";

const Auth = (props) => {
  return (
    <Modal onClose={props.onClose} className={styles.auth}>
      <div className={styles["auth-header"]}>
        <h1>Welcome Back</h1>
      </div>
      <div className={styles["auth-input"]}>
        <MdOutlineEmail className={styles.icon} />
        <input placeholder="Email" />
      </div>
      <div className={styles["auth-input"]}>
        <IoIosKey className={styles.icon} />
        <input placeholder="Password" />
      </div>
      <Button className={styles.button}>SIGN IN</Button>
    </Modal>
  );
};

export default Auth;
