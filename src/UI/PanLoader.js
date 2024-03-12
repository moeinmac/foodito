import "./Loader.css";
import Backdrop from "./Modal";

const PanLoader = () => {
  return (
    // <Modal className="pan-loader__Modal">
    <>
      <div className="pan-loader">
        <div className="loader"></div>
        <div className="pan-container">
          <div className="pan"></div>
          <div className="handle"></div>
        </div>
        <div className="shadow"></div>
      </div>
    </>
  );
};

export default PanLoader;
