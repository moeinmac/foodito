import AccountHeader from "../components/Account/AccountHeader";
import MediaQuery from "react-responsive";
import FixedCartButton from "../UI/FixedCartButton";

const Address = () => {
  return (
    <div>
      <AccountHeader back="/account" />
      <MediaQuery maxWidth={600}>
        <FixedCartButton />
      </MediaQuery>
    </div>
  );
};

export default Address;
