import styles from "./FixedCartButton.module.css";
import Button from "../../../UI/Button";
import { FiShoppingBag } from "react-icons/fi";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";

const overlay = document.querySelector("#overlay");

const FixedCartButton = (props) => {
  const { meals, loading } = useSelector((state) => state.meals);
  const cart = useSelector((state) => state.cart);

  const totalPrice = () => {
    let tp = 0;
    cart.items.forEach((item) => {
      const singleMeals = meals.find((meal) => meal.id === item.id);
      tp += singleMeals.price * item.quantity;
    });
    return tp;
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Button className={styles.fixedCartButton}>
          <span>${!loading && totalPrice()}</span>
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
