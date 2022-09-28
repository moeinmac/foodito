import styles from './FilterMeals.module.css';
import FilterMealsItem from './FilterMealsItem';

const FilterMeals = props => {
  return (
    <div className={styles.filterMeals}>
      <FilterMealsItem title="All" img="" />
      <FilterMealsItem title="Burger" img="" />
      <FilterMealsItem title="Pizza" img="" />
      <FilterMealsItem title="Salad" img="" />
      <FilterMealsItem title="Dessert" img="" />
      <FilterMealsItem title="Drink" img="" />
    </div>
  );
}

export default FilterMeals