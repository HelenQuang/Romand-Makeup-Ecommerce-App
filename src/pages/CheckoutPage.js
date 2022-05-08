import OrderSummary from "../components/OrderSummary";
import ShippingInfo from "../components/ShippingInfo";
import NavBar from "../components/NavBar";

const CheckoutPage = () => {
  return (
    <div>
      <NavBar />
      <OrderSummary />
      <ShippingInfo />
    </div>
  );
};

export default CheckoutPage;
