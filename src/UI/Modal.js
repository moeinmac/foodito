import ReactDOM from "react-dom";
import "./Modal.css";

const Backdrop = (props) => {
  return <div className={"backdrop"} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return <div className={`modal ${props.className}`}>{props.children}</div>;
};

const portalElement = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay className={props.className}>
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
