import OrderSummaryItem from "./OrderSummaryItem";
import { useNavigate } from "react-router-dom";
import CartContext from "../store/CartContext";
import { useContext } from "react";

const OrderConfirm = () => {
  const navigate = useNavigate();
  const { clearItem } = useContext(CartContext);

  const currentDate = new Date();
  const currentDayOfMonth = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const dateString =
    currentDayOfMonth + "/" + (currentMonth + 1) + "/" + currentYear;

  return (
    <div>
      <section className="section-summary">
        <div className="container">
          <div className="cart">
            <OrderSummaryItem />
            <div className="cart-subtotal">
              <span className="subtotal">Order was placed on:</span>
              <span className="price">{dateString}</span>
            </div>
            <div className="cart-btn">
              <button
                className="btn btn--form"
                onClick={() => {
                  navigate("/");
                  clearItem();
                }}
              >
                Continue shopping with us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderConfirm;
