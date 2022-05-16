import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import CartContext from "../store/CartContext";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const PaypalPayment = () => {
  const navigate = useNavigate();
  const { totalAmount } = useContext(CartContext);
  const [paidFor, setPaidFor] = useState(false);

  const shippingCost = totalAmount < 50 ? 5 : 0;
  const subtotal = totalAmount < 50 ? totalAmount + shippingCost : totalAmount;
  console.log(subtotal);
  const handleApprove = (orderID) => {
    setPaidFor(true);
  };

  if (paidFor) {
    toast.success("Thank you for your purchase!");
  }

  return (
    <PayPalScriptProvider>
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
                        description: "abc",
                        amount: {
                          value: subtotal,
                        },
                      },
                    ],
                  });
                }}
                onApprove={async (data, action) => {
                  const order = await action.order.capture();
                  console.log("order", order);

                  handleApprove(data.orderID);
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

export default PaypalPayment;
