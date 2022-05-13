import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import CartContext from "../store/CartContext";

const CartBtn = () => {
  const navigate = useNavigate();
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const { items } = useContext(CartContext);

  const numberOfCartItem = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = btnIsHighlighted ? "button bump" : "button";

  useEffect(() => {
    if (items.length === 0) {
      return;
    } else {
      setBtnIsHighlighted(true);

      const timer = setTimeout(() => {
        setBtnIsHighlighted(false);
      }, 300);

      //Clean up function
      return () => {
        clearTimeout(timer);
      };
    }
  }, [items]);

  return (
    <button
      className={btnClasses}
      onClick={() => {
        navigate("/cart");
      }}
    >
      <span className="cart-icon">
        <ion-icon name="cart"></ion-icon>
      </span>
      <span>Cart</span>
      <span className="badge">{numberOfCartItem}</span>
    </button>
  );
};

export default CartBtn;
