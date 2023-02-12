import styles from "./Account.module.css";
import FixedCartButton from "../components/Main/Header/FixedCartButton";
import AccountHeader from "../components/Account/AccountHeader";

const Account = () => {
  return (
    <>
      <AccountHeader />
      <FixedCartButton />
    </>
  );
};

export default Account;
