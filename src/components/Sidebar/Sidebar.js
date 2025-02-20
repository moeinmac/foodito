import styles from "./Sidebar.module.css";

import Profile from "./Profile";
import SidebarMenu from "./SidebarMenu/SidebarMenu";

import { useEffect, useState } from "react";
import { fetchUserData } from "../../store/userSlice";
import { RiMenu2Fill } from "react-icons/ri";
import { CgClose } from "react-icons/cg";

import { useDispatch, useSelector } from "react-redux";
import MediaQuery from "react-responsive";
import { useLocation } from "react-router-dom";

const Sidebar = (props) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (localStorage.getItem("supabase.auth.token"))
      dispatch(
        fetchUserData(
          JSON.parse(localStorage.getItem("supabase.auth.token")).currentSession
            .user.id
        )
      );
  }, [dispatch]);
  useEffect(() => {
    if (location.pathname === "/account" || location.pathname === "/") {
      setSidebar(false);
    }
  }, [location]);

  const [sidebar, setSidebar] = useState(false);
  const sidebarHandler = () => {
    setSidebar(!sidebar);
  };

  return (
    <aside
      className={`${styles.sidebar} ${sidebar ? styles["sidebar-on"] : ""}`}
    >
      <MediaQuery maxWidth={600}>
        {location.pathname === "/" && (
          <>
            <Profile text={"Hello"} />
            <SidebarMenu sidebar={sidebar} />
            {!sidebar && user.isAuth && (
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
          </>
        )}
      </MediaQuery>
      <MediaQuery minWidth={600}>
        <Profile />
        <SidebarMenu sidebar={true} />
      </MediaQuery>
    </aside>
  );
};

export default Sidebar;
