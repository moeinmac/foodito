import Modal from "../../UI/Modal";
import styles from "./CartDesktop.module.css";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartDesktop = (props) => {
  const { items } = useSelector((state) => state.cart);
  const { meals } = useSelector((state) => state.meals);

  const getCartData = (id) => meals.find((meal) => meal.id === id);

  return (
    <Modal onClose={props.onClose}>
      <h1 className={styles["cart-d_title"]}>My Cart : </h1>
      <div className={styles["cart-d_container"]}>
        <header>
          <p>Product Detail</p>
          <p>Quantity</p>
          <p>Total Price</p>
        </header>
        {items.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            title={getCartData(item.id).title}
            img={getCartData(item.id).img}
            price={getCartData(item.id).price}
            quantity={item.quantity}
          />
        ))}
      </div>
    </Modal>
  );
};

export default CartDesktop;
