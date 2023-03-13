import styles from "./Meals.module.css";
import { BsSliders } from "react-icons/bs";
import MealsItem from "./MealsItem";
import MealsLoader from "../../../UI/MealsLoader";
import { useSelector } from "react-redux";
import React from "react";

const Meals = (props) => {
  const { meals, loading, filterValue } = useSelector((state) => state.meals);
  const filteredMeals = meals.filter((meal) => {
    if (filterValue === "all") return meals;
    return meal.type === filterValue;
  });
  return (
    <div className={styles.meals}>
      <div className={styles["meals-header"]}>
        <h2>All Items</h2>
        <BsSliders className={styles["meals-header-icon"]} />
      </div>
      {loading &&
        meals.map(() => (
          <MealsItem isLoading={true} key={Math.random()}>
            <MealsLoader />
          </MealsItem>
        ))}
      {!loading &&
        filteredMeals.map((meal) => (
          <MealsItem
            isLoading={false}
            title={meal.title}
            key={meal.id}
            price={meal.price}
            type={meal.type}
            img={meal.img}
            toppings={meal.toppings}
            id={meal.id}
          />
        ))}
    </div>
  );
};

export default Meals;
