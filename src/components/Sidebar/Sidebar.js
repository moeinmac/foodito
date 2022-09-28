import styles from './Sidebar.module.css';

import Profile from './Profile';

import { GrUserSettings } from "react-icons/gr";

const Sidebar = props => {
  return (
    <aside className={styles.sidebar}>
      <Profile />
      <GrUserSettings className={styles["sidebar-icon"]}/>
    </aside>
  )
}

export default Sidebar