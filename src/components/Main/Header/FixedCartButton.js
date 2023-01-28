import styles from "./FixedCartButton.module.css";
import Button from "../../../UI/Button";
import { FiShoppingBag } from "react-icons/fi";
import ReactDOM from "react-dom";

const overlay = document.querySelector("#overlay");

const FixedCartButton = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Button className={styles.fixedCartButton}>
          <span>$175.4</span>
          <div>
            Cart <FiShoppingBag />
          </div>
        </Button>,
        overlay
      )}
    </>
  );
};

export default FixedCartButton;
