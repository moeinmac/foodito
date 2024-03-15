import FixedCartButton from "../UI/FixedCartButton";
import AccountHeader from "../components/Account/AccountHeader";

import MediaQuery from "react-responsive";
import AccountMain from "../components/Account/AccountMain";
import AccountControl from "../components/Account/AccountControl";
import styles from './Account.module.css';

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if(!localStorage.getItem("supabase.auth.token")) navigate("/")
  }, []);

  return (
    <div className={styles.account}>
      <AccountHeader />
      <AccountMain />
      <AccountControl />

      <MediaQuery maxWidth={600}>
        <FixedCartButton />
      </MediaQuery>
    </div>
  );
};

export default Account;
