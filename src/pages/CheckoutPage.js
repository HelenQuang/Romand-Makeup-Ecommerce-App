import OrderSummary from "../components/OrderSummary";
import ShippingInfo from "../components/ShippingInfo";

const CheckoutPage = () => {
  return (
    <div>
      <OrderSummary />
      <ShippingInfo />
    </div>
  );
};

export default CheckoutPage;
