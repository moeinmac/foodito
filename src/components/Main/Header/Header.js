import styles from "./Header.module.css";

import { RiSearchLine } from "react-icons/ri";
import { FiSliders } from "react-icons/fi";
import { ImCart } from "react-icons/im";

import FilterMeals from "./FilterMeals";
import FixedCartButton from "./FixedCartButton";
import MediaQuery from "react-responsive";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles["header-top"]}>
        <h1 className={styles["header-title"]}>Welcome to Foodito</h1>
        <RiSearchLine className={styles.search} />
        <MediaQuery maxWidth={600}>
          <input type="text" placeholder="Search ..." />
          <FiSliders className={styles.sliders} />
        </MediaQuery>
        <MediaQuery minWidth={600}>
          <ImCart className={styles["cart-button"]} />
        </MediaQuery>
      </div>
      <FilterMeals />
      <MediaQuery maxWidth={600}>
        <FixedCartButton />
      </MediaQuery>
    </header>
  );
};

export default Header;
