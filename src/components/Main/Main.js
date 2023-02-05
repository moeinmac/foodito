import { useDispatch } from "react-redux";
import { fetchMealsData } from "../../store/mealSlice";
import Header from "./Header/Header";
import styles from "./Main.module.css";
import Meals from "./Meals/Meals";
import { useEffect } from "react";

const Main = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMealsData("all"));
  }, [dispatch]);

  return (
    <main className={styles.main}>
      <Header />
      <Meals />
    </main>
  );
};

export default Main;
