import styles from "./Meals.module.css";
import { BsSliders } from "react-icons/bs";
import supabase from "./../../../supabase";
import { useState, useEffect } from "react";
import MealsItem from "./MealsItem";
import MyLoader from "../../../UI/MyLoader";

const Meals = (props) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMeals = async () => {
      let { data, error } = await supabase.from("food").select("*");
      if (data) {
        setMeals(data);
        setIsLoading(false);
      }
    };
    getMeals();
  }, []);

  // const meals = [
  //   {
  //     product_id : 0,
  //     title: "Deluxe Crispy",
  //     price: 53.6,
  //     type: "burger",
  //     img: "https://cgrqgisynruhcspvtobo.supabase.co/storage/v1/object/public/food/burger-5.png",
  //     toppings: [
  //       "Crispy Chicken Fillet",
  //       "Potato Roll",
  //       "Tomato",
  //       "Mayonnaise",
  //       "Lettuce"
  //     ],
  //   },
  // ];

  return (
    <div className={styles.meals}>
      <div className={styles["meals-header"]}>
        <h2>All Items</h2>
        <BsSliders className={styles["meals-header-icon"]} />
      </div>
      {!isLoading &&
        meals.map((meal) => (
          <MealsItem
            title={meal.title}
            key={meal["product_id"]}
            price={meal.price}
            type={meal.type}
            img={meal.img}
            toppings={meal.toppings}
          />
        ))}
      {isLoading && (
        <>
          <MyLoader styles={{ position: "absolute" }} />
          <MyLoader styles={{ position: "absolute" }} />
          <MyLoader styles={{ position: "absolute" }} />
          <MyLoader styles={{ position: "absolute" }} />
        </>
      )}
    </div>
  );
};

export default Meals;
