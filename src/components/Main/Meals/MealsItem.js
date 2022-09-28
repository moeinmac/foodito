import Button from '../../../UI/Button';
import AddToCartButton from './AddToCartButton';
import styles from './MealsItem.module.css';

const MealsItem = props => {
  return (
    <div className={styles.mealsItem}>
      <div className={styles["mealsItem-img"]}>
        <img src={props.img} alt={props.title} />
      </div>
      <div className={styles["mealsItem-detail"]}>
        <p className={styles["title"]}>{props.title}</p>
        <p className={styles["toppings"]}>{props.toppings.join(", ")}</p>
        <AddToCartButton />
      </div>
    </div>
  );
}

export default MealsItem