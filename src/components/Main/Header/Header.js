import styles from './Header.module.css';

import { RiSearchLine } from "react-icons/ri";
import { FiSliders } from "react-icons/fi";

const Header = props => {
  return (
    <header className={styles.header}>
      <div className={styles["header-top"]}>
        <RiSearchLine className={styles.search} />
        <input type="text" placeholder="Search ..." />
        {/* <div className='ss'>.</div> */}
        <FiSliders className={styles.sliders} />
      </div>
      
    </header>
  );
}

export default Header