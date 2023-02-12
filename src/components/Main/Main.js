import { useDispatch } from "react-redux";
import { fetchMealsData } from "../../store/mealSlice";
import styles from "./Main.module.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../../pages/Home";
import Account from "../../pages/Account";
import Cart from "../../pages/Cart";

const Main = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMealsData("all"));
  }, [dispatch]);

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
