import Cart from "../components/Cart";
import EmptyCart from "../components/EmptyCart";
import NavBar from "../components/NavBar";

const CartPage = () => {
  return (
    <div>
      <NavBar />
      <Cart />
      <EmptyCart />
    </div>
  );
};

export default CartPage;
