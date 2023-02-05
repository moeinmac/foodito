import Button from "../../../UI/Button";
import styles from "./FilterMealsItem.module.css";
import MediaQuery from "react-responsive";
import { useDispatch } from "react-redux";
import { fetchMealsData, mealAction } from "../../../store/mealSlice";

const FilterMealsItem = (props) => {
  const dispatch = useDispatch();
  const filterMealsHandler = () => {
    dispatch(mealAction.toggleLoading(true));
    dispatch(fetchMealsData(props.title.toLowerCase()));
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
