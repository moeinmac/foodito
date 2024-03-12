import FixedCartButton from "../UI/FixedCartButton";
import AccountHeader from "../components/Account/AccountHeader";

import MediaQuery from "react-responsive";
import AccountMain from "../components/Account/AccountMain";
import AccountControl from "../components/Account/AccountControl";
import styles from './Account.module.css'

const Account = () => {
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
