import Button from "../../../UI/Button";
import styles from "./FilterMealsItem.module.css";
import { useContext } from "react";
import MealsContext from "../../../context/MealsContext";

const FilterMealsItem = (props) => {
  const { mealsFilter , mealsValue } = useContext(MealsContext);
  const filterMealsHandler = () => {
    mealsFilter(props.title.toLowerCase())
  };

  return (
    <Button className={styles.filterMealsItem} onClick={filterMealsHandler}>
      {props.title}
    </Button>
  );
};

export default FilterMealsItem;
