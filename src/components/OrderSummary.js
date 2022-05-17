import { useNavigate } from "react-router-dom";
import ShippingInfo from "./ShippingInfo";
import OrderSummaryItem from "./OrderSummaryItem";

const OrderSummary = () => {
  const navigate = useNavigate();

  return (
    <div>
      <section className="section-summary">
        <div className="container">
          <div className="cart">
            <OrderSummaryItem />
            <div className="cart-btn">
              <button
                className="btn btn--form"
                onClick={() => {
                  navigate("/cart");
                }}
              >
                Return to cart
              </button>
            </div>
          </div>
        </div>
      </section>
      <ShippingInfo />
    </div>
  );
};

export default OrderSummary;
