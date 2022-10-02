import "./Button.css";

const Button = (props) => {
  return (
    <button
      disabled={props.disabled || false}
      className={`button ${props.className || ""}`}
      onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
