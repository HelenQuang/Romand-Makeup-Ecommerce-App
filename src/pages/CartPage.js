import Cart from "../components/Cart";
import EmptyCart from "../components/EmptyCart";
import NavBar from "../components/NavBar";
import { useContext } from "react";
import CartContext from "../store/CartContext";

const CartPage = () => {
  const { items } = useContext(CartContext);
  const hasItems = items.length > 0;

  return (
    <div>
      <NavBar />
      {hasItems && <Cart />}
      {!hasItems && <EmptyCart />}
    </div>
  );
};

export default CartPage;
