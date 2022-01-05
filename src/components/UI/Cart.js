import "./Card.css";

function Cart(props) {
  return <div className={`cart ${props.className}`}>{props.children}</div>;
}

export default Cart;
