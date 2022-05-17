import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import CartContext from "../store/CartContext";
import { useContext } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

const PaymentPage = () => {
  const navigate = useNavigate();
  const { totalAmount } = useContext(CartContext);

  const shippingCost = totalAmount < 50 ? 5 : 0;
  const subtotal = totalAmount < 50 ? totalAmount + shippingCost : totalAmount;

  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AXOYnZ0MWDVtmR2w2qQwAbCe9F6PrC7k5oMpwfh1Sd3cz4Cky8OoTNtv7YM9w1Cenle2ZO0vCK9HjssS",
      }}
    >
      <NavBar />
      <section className="section-cart">
        <div className="container">
          <div className="cart">
            <div className="cart-text-box">
              <h2 className="heading-secondary">Pay For Your Order</h2>

              <PayPalButtons
                onClick={(data, actions) => {
                  const hasAlreadyBought = false;
                  if (hasAlreadyBought) {
                    toast.error("You have already bought this order");
                    return actions.reject();
                  } else {
                    return actions.resolve();
                  }
                }}
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: subtotal,
                        },
                      },
                    ],
                  });
                }}
                onApprove={async (data, actions) => {
                  toast.success("Thank you for your purchase!");
                  navigate("/confirm");
                }}
                onCancel={() => {
                  navigate("/checkout");
                }}
                onError={(err) => {
                  toast.error(err);
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </PayPalScriptProvider>
  );
};

export default PaymentPage;
