import styles from "./Address.module.css"
import AccountHeader from "../components/Account/AccountHeader";
import MediaQuery from "react-responsive";
import FixedCartButton from "../UI/FixedCartButton";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddressMain from "../components/Account/Address/AddressMain";

const Address = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if(!localStorage.getItem("supabase.auth.token")) navigate("/")
  }, [navigate]);

  return (
    <div className={styles.address}>
      <AccountHeader back="/account" header="Address"/>
      <AddressMain />
      
      <MediaQuery maxWidth={600}>
        <FixedCartButton />
      </MediaQuery>
    </div>
  );
};

export default Address;
