import styles from './FilterMealsItem.module.css'

const FilterMealsItem = props => {
  return (
    <div className={styles.filterMealsItem}>{props.title}</div>
  )
}

export default FilterMealsItem