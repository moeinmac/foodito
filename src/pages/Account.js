import FixedCartButton from "../UI/FixedCartButton";
import AccountHeader from "../components/Account/AccountHeader";

import MediaQuery from "react-responsive";
import AccountMain from "../components/Account/AccountMain";
import AccountControl from "../components/Account/AccountControl";

const Account = () => {
  return (
    <>
      <AccountHeader />
      <AccountMain />
      <AccountControl />

      <MediaQuery maxWidth={600}>
        <FixedCartButton />
      </MediaQuery>
    </>
  );
};

export default Account;
