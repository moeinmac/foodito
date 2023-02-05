import styles from "./Sidebar.module.css";

import Profile from "./Profile";
import SidebarMenu from "./SidebarMenu/SidebarMenu";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUserData } from "../../store/userSlice";

const Sidebar = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("user"))
      dispatch(fetchUserData(JSON.parse(localStorage.getItem("user"))));
  }, [dispatch]);

  const [account, setAccount] = useState(false);
  const accountHandler = () => setAccount(!account);

  return (
    <aside className={`${styles.sidebar} ${account ? styles.account : ""}`}>
      <Profile account={account} onAccount={accountHandler} />
      <SidebarMenu account={account} onAccount={accountHandler} />
    </aside>
  );
};

export default Sidebar;
