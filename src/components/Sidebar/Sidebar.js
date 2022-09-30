import styles from "./Sidebar.module.css";

import Profile from "./Profile";
import SidebarMenu from "./SidebarMenu/SidebarMenu";
import UserProvider from "../../context/UserProvider";

const Sidebar = (props) => {
  return (
    <UserProvider>
      <aside className={styles.sidebar}>
        <Profile />
        <SidebarMenu />
      </aside>
    </UserProvider>
  );
};

export default Sidebar;
