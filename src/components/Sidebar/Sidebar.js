import styles from "./Sidebar.module.css";

import Profile from "./Profile";
import SidebarMenu from "./SidebarMenu/SidebarMenu";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUserData } from "../../store/userSlice";
import { RiMenu2Fill } from "react-icons/ri";
import { CgClose } from "react-icons/cg";

import MediaQuery from "react-responsive";

const Sidebar = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("user"))
      dispatch(fetchUserData(JSON.parse(localStorage.getItem("user"))));
  }, [dispatch]);

  const [sidebar, setSidebar] = useState(false);
  const sidebarHandler = () => {
    setSidebar(!sidebar);
  };

  return (
    <aside
      className={`${styles.sidebar} ${sidebar ? styles["sidebar-on"] : ""}`}>
      <Profile />
      <MediaQuery maxWidth={600}>
        <SidebarMenu sidebar={sidebar} />
        {!sidebar && (
          <RiMenu2Fill
            className={styles["sidebar-icon"]}
            onClick={sidebarHandler}
          />
        )}
        {sidebar && (
          <CgClose
            className={styles["sidebar-icon"]}
            onClick={sidebarHandler}
          />
        )}
      </MediaQuery>
      <MediaQuery minWidth={600}>
        <SidebarMenu sidebar={true} />
      </MediaQuery>
    </aside>
  );
};

export default Sidebar;
