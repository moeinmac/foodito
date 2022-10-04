import "./Loader.css";
import ContentLoader from "react-content-loader";

const AccountLoader = (props) => {
  return (
    <ContentLoader
      className="account-loader"
      width="100%"
      backgroundColor="#d5d2d2"
      foregroundColor="#fff">
      <rect rx="7.5" ry="7.5" width="100%" height="35" />
      <rect y="42.5" rx="7.5" ry="7.5" width="100%" height="35" />
      <rect y="85" rx="7.5" ry="7.5" width="100%" height="35" />
    </ContentLoader>
  );
};

export default AccountLoader;
