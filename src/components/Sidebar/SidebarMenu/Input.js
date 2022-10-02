import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={styles.input}>
      <div className={styles["input-detail"]}>
        <input
          type={props.type}
          className={props.data.inValid ? styles["invalid-input"] : ""}
          required
          onChange={props.data.inputChangeHandler}
          onBlur={props.data.inputBlurHandler}
          value={props.data.value}
        />
        <label className={props.data.inValid ? styles["invalid-label"] : ""}>
          {props.label}
        </label>
      </div>
      {props.data.inValid && (
        <p className={styles["error-message"]}>{props.errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
