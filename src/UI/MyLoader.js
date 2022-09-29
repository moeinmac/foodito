import ContentLoader from "react-content-loader";

import "./MyLoader.css";

const MyLoader = (props) => {
  const className = `loader ${props.abs === "true" ? "isAbs" : ""}`
  return (
    <div className={className}>
      <ContentLoader
        width={"100%"}
        backgroundColor="#CDBFBF"
        foregroundColor="#fff"
        {...props}>
        <rect x="130" y="30" rx="3" ry="3" width="120" height="12" />
        <rect x="130" y="55" rx="3" ry="3" width="235" height="6" />
        <rect x="130" y="70" rx="3" ry="3" width="235" height="6" />
        <rect x="130" y="85" rx="3" ry="3" width="235" height="6" />
        <rect x="215" y="110" rx="5" ry="5" width="150" height="35" />
        <circle cx="70" cy="50%" r="50" />
      </ContentLoader>
    </div>
  );
};

export default MyLoader;
