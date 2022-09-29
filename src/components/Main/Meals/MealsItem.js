import AddToCartButton from "./AddToCartButton";
import styles from "./MealsItem.module.css";
import MyLoader from "../../../UI/MyLoader";
import { useState } from "react";

const MealsItem = (props) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const imgLoaderHandler = () => setImgLoaded(true);

  return (
    <div className={styles["mealsItem-container"]}>
      {!imgLoaded && <MyLoader />}
      <div
        className={`${styles.mealsItem} ${
          !imgLoaded ? styles.imgLoading : ""
        }`}>
        <div className={styles["mealsItem-img"]}>
          <img src={props.img} alt={props.title} onLoad={imgLoaderHandler} />
        </div>
        <div className={styles["mealsItem-detail"]}>
          <p className={styles["title"]}>{props.title}</p>
          <p className={styles["toppings"]}>{props.toppings.join(", ")}</p>
          <AddToCartButton />
        </div>
      </div>
    </div>
  );
};

export default MealsItem;
