import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../store/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const navigate = useNavigate();
  const { items, totalAmount, addItem, removeItem } = useContext(CartContext);

  const onAddItemHandler = (item) => {
    addItem({ ...item, amount: 1 });
  };

  const onRemoveItemHandler = (id) => {
    removeItem(id);
  };

  return (
    <section className="section-cart">
      <div className="container">
        <div className="cart">
          <div className="cart-text-box">
            <h2 className="heading-secondary">Your Cart</h2>
            {items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={onRemoveItemHandler.bind(null, item.id)}
                onAdd={onAddItemHandler.bind(null, item)}
              />
            ))}
          </div>

          <div className="cart-subtotal">
            <span className="subtotal">Subtotal:</span>
            <span className="price">€ {totalAmount}</span>
          </div>
          <div className="cart-btn">
            <button
              className="btn btn--form"
              onClick={() => {
                navigate("/");
              }}
            >
              Continue shopping
            </button>
            <button
              className="btn btn--form"
              onClick={() => {
                navigate("/checkout");
              }}
            >
              Go to check out
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
