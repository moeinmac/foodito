import styles from "./cart.module.css";
import { TfiShoppingCart, TfiShoppingCartFull } from "react-icons/tfi";
import { BsBoxSeam } from "react-icons/bs";
import { useCallback, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState(false);

  const cartHandler = useCallback(() => {
    if (!cart) {
      setCart(true);
      setTimeout(() => {
        setCart(false);
      }, 3300);
    }
  }, []);

  const cartClass = `${styles["cart-button"]} ${
    cart ? styles["cart-active"] : ""
  }`;

  return (
    <button className={cartClass} onClick={cartHandler}>
      {cart && <BsBoxSeam className={styles["cart-box"]} />}
      <TfiShoppingCart className={styles["cart-icon"]} />
      <TfiShoppingCartFull
        className={`${styles["cart-icon"]} ${styles["cart-icon-full"]}`}
      />
    </button>
  );
};

export default Cart;
