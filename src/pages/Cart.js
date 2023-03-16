import styles from "./Cart.module.css";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import FixedCartButton from "../UI/FixedCartButton";
import CartHeader from "../components/Cart/CartHeader";
import CartItem from "../components/Cart/CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const navigate = useNavigate();
  const isDesktop = useMediaQuery({ query: "(min-width : 600px)" });
  useEffect(() => {
    if (isDesktop) navigate("/");
  }, [isDesktop]);

  const { items } = useSelector((state) => state.cart);
  const { meals } = useSelector((state) => state.meals);

  const getCartData = (id) => meals.find((meal) => meal.id === id);

  return (
    <div className={styles.cart}>
      <CartHeader />
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
      <FixedCartButton isTq={true} />
    </div>
  );
};

export default Cart;
