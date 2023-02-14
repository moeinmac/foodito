import styles from "./HeaderCartButton.module.css";
import { ImCart } from "react-icons/im";

const HeaderCartButton = () => {
  return <ImCart className={styles["cart-button"]} />;
};

export default HeaderCartButton;
