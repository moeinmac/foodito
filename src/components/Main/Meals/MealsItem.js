import AddToCartButton from "./AddToCartButton";
import styles from "./MealsItem.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MealsItem = (props) => {
  return (
    <div className={styles.mealsItem}>
      {props.isLoading && props.children}
      {!props.isLoading && (
        <>
          <div className={styles["mealsItem-img"]}>
            <LazyLoadImage src={props.img} alt={props.title} />
          </div>
          <div className={styles["mealsItem-detail"]}>
            <p className={styles["title"]}>{props.title}</p>
            <p className={styles["toppings"]}>{props.toppings.join(", ")}</p>
            <div className={styles["bottom"]}>
              <p className={styles["price"]}>${props.price}</p>
              <AddToCartButton id={props.id} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MealsItem;
