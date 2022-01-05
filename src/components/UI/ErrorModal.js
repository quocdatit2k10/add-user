import Button from "./Button";
import Cart from "./Cart";
import "./ErrorModal.css";

function ErrorModal(props) {
  return (
    <div>
      <div className="backdrop" onClick={props.onConfirm}></div>
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
    </div>
  );
}

export default ErrorModal;
