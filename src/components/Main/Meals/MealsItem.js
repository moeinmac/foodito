import AddToCartButton from "./AddToCartButton";
import styles from "./MealsItem.module.css";
import {LazyLoadImage} from "react-lazy-load-image-component";
import { useState } from "react";

const MealsItem = (props) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const imgLoaderHandler = () => setImgLoaded(true);

  return (
    <div className={styles.mealsItem}>
      {props.isLoading && props.children}
      {!props.isLoading && (
        <>
          <div className={styles["mealsItem-img"]}>
            <LazyLoadImage
              src={props.img}
              alt={props.title}
              onLoad={imgLoaderHandler}
            />
          </div>
          <div className={styles["mealsItem-detail"]}>
            <p className={styles["title"]}>{props.title}</p>
            <p className={styles["toppings"]}>{props.toppings.join(", ")}</p>
            <AddToCartButton />
          </div>
        </>
      )}
    </div>
  );
};

export default MealsItem;
