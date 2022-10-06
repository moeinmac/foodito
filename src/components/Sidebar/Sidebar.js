import styles from "./Sidebar.module.css";

import Profile from "./Profile";
import SidebarMenu from "./SidebarMenu/SidebarMenu";
import UserProvider from "../../context/UserProvider";

import { useState } from "react";

const Sidebar = (props) => {
  const [account, setAccount] = useState(false);
  const accountHandler = () => setAccount(!account);

  return (
    <UserProvider>
      <aside className={`${styles.sidebar} ${account ? styles.account : ""}`}>
        <Profile account={account} onAccount={accountHandler} />
        <SidebarMenu account={account} onAccount={accountHandler} />
      </aside>
    </UserProvider>
  );
};

export default Sidebar;
