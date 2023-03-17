import styles from "./HeaderCartButton.module.css";
import { ImCart } from "react-icons/im";
import CartDesktop from "../../Cart/CartDesktop";
import { useState } from "react";

const HeaderCartButton = () => {
  const [toggleCart, setToggleCart] = useState(false);
  const cartToggleHandler = () => setToggleCart(!toggleCart);
  return (
    <>
      <ImCart className={styles["cart-button"]} onClick={cartToggleHandler} />
      {toggleCart && <CartDesktop onClose={cartToggleHandler} />}
    </>
  );
};

export default HeaderCartButton;
