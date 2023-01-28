import styles from "./Header.module.css";

import { RiSearchLine } from "react-icons/ri";
import { FiSliders } from "react-icons/fi";
import FilterMeals from "./FilterMeals";
import FixedCartButton from "./FixedCartButton";

import { isMobile } from "react-device-detect";
import { ImCart } from "react-icons/im";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles["header-top"]}>
        <h1 className={styles["header-title"]}>Welcome to Foodito</h1>
        <RiSearchLine className={styles.search} />
        {isMobile && <input type="text" placeholder="Search ..." />}
        {isMobile && <FiSliders className={styles.sliders} />}
        {!isMobile && <ImCart className={styles["cart-button"]} />}
      </div>
      <FilterMeals />
      {isMobile && <FixedCartButton />}
    </header>
  );
};

export default Header;
