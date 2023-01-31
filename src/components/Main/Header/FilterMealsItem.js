import Button from "../../../UI/Button";
import styles from "./FilterMealsItem.module.css";
import { useContext } from "react";
import MealsContext from "../../../context/MealsContext";
import MediaQuery from "react-responsive";

const FilterMealsItem = (props) => {
  const { mealsFilter } = useContext(MealsContext);
  const filterMealsHandler = () => {
    mealsFilter(props.title.toLowerCase());
  };

  return (
    <Button className={styles.filterMealsItem} onClick={filterMealsHandler}>
      <MediaQuery minWidth={600}>
        <div>
          <img src={props.img} alt={props.title} />
        </div>
      </MediaQuery>
      <span>{props.title}</span>
    </Button>
  );
};

export default FilterMealsItem;
