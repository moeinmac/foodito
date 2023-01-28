import Button from "../../../UI/Button";
import styles from "./FilterMealsItem.module.css";
import { useContext } from "react";
import MealsContext from "../../../context/MealsContext";
import { isMobile } from "react-device-detect";

const FilterMealsItem = (props) => {
  const { mealsFilter } = useContext(MealsContext);
  const filterMealsHandler = (ev) => {
    // ev.classList.add(".active");
    mealsFilter(props.title.toLowerCase());
  };

  return (
    <Button className={styles.filterMealsItem} onClick={filterMealsHandler}>
      {!isMobile && (
        <div>
          <img src={props.img} alt={props.title} />
        </div>
      )}
      <span>{props.title}</span>
    </Button>
  );
};

export default FilterMealsItem;
