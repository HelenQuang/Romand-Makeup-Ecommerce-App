import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../store/CartContext";

const OrderSummary = () => {
  const navigate = useNavigate();
  const { items, totalAmount } = useContext(CartContext);

  const shippingCost = totalAmount < 50 ? 5 : 0;

  const subtotal =
    totalAmount < 50 ? totalAmount + shippingCost : totalAmount.toFixed(1);

  const cartItems = items.map((item) => (
    <li className="cart-items">
      <div>
        <img className="cart-img" src={item.imgUrls[0]} alt={item.name} />
      </div>
      <div className="cart-summary">
        <h3>{item.name}</h3>
        <p className="color">{item.chosenColor}</p>
        <span className="price">€ {item.price}</span>
        <span className="amount">x {item.amount}</span>
      </div>
    </li>
  ));

  return (
    <section className="section-summary">
      <div className="container">
        <div className="cart">
          <div className="cart-text-box">
            <h2 className="heading-secondary">Order Summary</h2>
            {cartItems}
          </div>
          <div className="cart-subtotal">
            <span className="subtotal">Shipping cost:</span>
            <span className="price">€ {shippingCost}</span>
          </div>
          <div className="cart-subtotal">
            <span className="subtotal">Subtotal:</span>
            <span className="price">€ {subtotal}</span>
          </div>
          <button
            className="btn btn--edit"
            onClick={() => {
              navigate("/cart");
            }}
          >
            Return to cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;
