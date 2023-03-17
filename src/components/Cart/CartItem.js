import styles from "./CartItem.module.css";
import { HiPlus, HiMinus } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const addCartHandler = () => dispatch(cartActions.addCart(props.id));
  const removeCartHandler = () => dispatch(cartActions.removeCart(props.id));
  const deleteCartHandler = () => dispatch(cartActions.deleteCart(props.id));

  return (
    <div className={styles["cart-item"]}>
      <button className={styles["cart-item-close"]} onClick={deleteCartHandler}>
        <FaTimes className={styles["cart-item-close__icon"]} />
      </button>
      <div className={styles["cart-item-img"]}>
        <div className={styles["cart-item-img__backdrop"]}></div>
        <img src={props.img} />
      </div>
      <div className={styles["cart-item-container"]}>
        <div className={styles["cart-item-detail"]}>
          <h2>{props.title}</h2>
          <span className={styles["cart-item-price"]}>
            Price : {props.price}$
          </span>
        </div>
        <div className={styles["cart-item-footer"]}>
          <p className={styles["cart-item-total-price"]}>
            {Number(props.price * props.quantity).toFixed(1)}$
          </p>
          <div className={styles["cart-item-controller"]}>
            <HiPlus onClick={addCartHandler} />
            <span>{props.quantity}</span>
            <HiMinus onClick={removeCartHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
