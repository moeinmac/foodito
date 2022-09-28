import styles from './Header.module.css';

import { RiSearchLine } from "react-icons/ri";
import { FiSliders } from "react-icons/fi";
import FilterMeals from './FilterMeals';

const Header = props => {
  return (
    <header className={styles.header}>
      <div className={styles["header-top"]}>
        <RiSearchLine className={styles.search} />
        <input type="text" placeholder="Search ..." />
        <FiSliders className={styles.sliders} />
      </div>
      <FilterMeals />
    </header>
  );
}

export default Header