import styles from "./FilterMeals.module.css";
import FilterMealsItem from "./FilterMealsItem";

const FilterMeals = (props) => {
  return (
    <div className={styles.filterMeals}>
      <FilterMealsItem
        title="All"
        img="https://cgrqgisynruhcspvtobo.supabase.co/storage/v1/object/public/food/all.png"
      />
      <FilterMealsItem
        title="Burger"
        img="https://cgrqgisynruhcspvtobo.supabase.co/storage/v1/object/public/food/burger-1.png"
      />
      <FilterMealsItem
        title="Pizza"
        img="https://cgrqgisynruhcspvtobo.supabase.co/storage/v1/object/public/food/pizza-3.png"
      />
      <FilterMealsItem
        title="Salad"
        img="https://cgrqgisynruhcspvtobo.supabase.co/storage/v1/object/public/food/salad-3.png"
      />
      <FilterMealsItem
        title="Dessert"
        img="https://cgrqgisynruhcspvtobo.supabase.co/storage/v1/object/public/food/dessert-2.png"
      />
      <FilterMealsItem
        title="Drink"
        img="https://cgrqgisynruhcspvtobo.supabase.co/storage/v1/object/public/food/drink-5.png"
      />
    </div>
  );
};

export default FilterMeals;
