import styles from "./Meals.module.css";
import { BsSliders } from "react-icons/bs";
import MealsItem from "./MealsItem";
import MyLoader from "../../../UI/MyLoader";
import useFilterMeals from "../../../hooks/useFilterMeals";
import { useContext } from "react";
import MealsContext from "../../../context/MealsContext";

const Meals = (props) => {
  const {mealsValue} = useContext(MealsContext)
  const { meals, loading } = useFilterMeals(mealsValue);

  return (
    <div className={styles.meals}>
      <div className={styles["meals-header"]}>
        <h2>All Items</h2>
        <BsSliders className={styles["meals-header-icon"]} />
      </div>
      {loading && meals.map((key)=>(<MealsItem isLoading={true} key={key}>
        <MyLoader />
      </MealsItem>))}
      {!loading &&
        meals.map((meal) => (
          <MealsItem
            isLoading={false}
            title={meal.title}
            key={meal["product_id"]}
            price={meal.price}
            type={meal.type}
            img={meal.img}
            toppings={meal.toppings}
          />
        ))}
    </div>
  );
};

export default Meals;
