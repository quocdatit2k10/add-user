import Wrapper from "../Helpper/Wrapper";
import Button from "./Button";
import Cart from "./Cart";
import "./ErrorModal.css";
import ReactDOM from "react-dom";
import React from "react";
const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onConfirm}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Cart className="modal">
      <header className="modal__header">
        <h2>{props.title}</h2>
      </header>
      <div className="modal__message">
        <p>{props.message}</p>
      </div>
      <footer className="modal__button">
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Cart>
  );
};
function ErrorModal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onConfirm={props.onConfirm}
          title={props.title}
          message={props.message}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
}

export default ErrorModal;
