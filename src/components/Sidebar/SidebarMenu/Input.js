import styles from "./Input.module.css";

const Input = (props) => {
  const inValid = false;
  return (
    <div className={styles.input}>
      <div className={styles["input-detail"]}>
        <input
          type={props.type}
          className={inValid ? "invalid" : ""}
          required
        />
        <label>{props.label}</label>
      </div>
      {inValid && (
        <p className={styles["error-message"]}>{props.errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
