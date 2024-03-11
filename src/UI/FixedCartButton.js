import styles from "./FixedCartButton.module.css";

import { FiShoppingBag } from "react-icons/fi";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
    return Number(tp).toFixed(1);
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Link to={"/cart"} className={styles.fixedCartButton}>
          <div className={styles.cartButtonDetail}>
            {props.isTq && (
              <span className={styles.tq}>
                Total : {cart.totalQuantity} items
              </span>
            )}
            <span className={styles.tp}>${!loading && totalPrice()}</span>
          </div>
          <div className={styles.cartButtonIcon}>
            Cart <FiShoppingBag />
          </div>
        </Link>,
        overlay
      )}
    </>
  );
};

export default FixedCartButton;
