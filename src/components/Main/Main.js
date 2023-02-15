import { useDispatch, useSelector } from "react-redux";
import { fetchMealsData } from "../../store/mealSlice";
import { sendCartData } from "../../store/cartSlice";
import { cartActions } from "../../store/cartSlice";
import styles from "./Main.module.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../../pages/Home";
import Account from "../../pages/Account";
import Cart from "../../pages/Cart";

const Main = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(fetchMealsData("all"));
  }, [dispatch]);
  useEffect(() => {
    dispatch(cartActions.setCart(user.cart));
  }, [dispatch, user.cart]);
  useEffect(() => {
    if (cart.isChanged) {
      dispatch(sendCartData(cart.items, user.id));
    }
  }, [cart.isChanged, dispatch, cart.items, user.id]);
  return (
    <main className={styles.main}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </main>
  );
};

export default Main;
