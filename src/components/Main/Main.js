import MealsProvider from "../../context/MealsProvider";
import Header from "./Header/Header";
import styles from "./Main.module.css";
import Meals from "./Meals/Meals";

const Main = (props) => {
  return (
    <MealsProvider>
      <main className={styles.main}>
        <Header />
        <Meals />
      </main>
    </MealsProvider>
  );
};

export default Main;
