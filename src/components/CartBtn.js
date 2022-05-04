import { useNavigate } from "react-router-dom";

const CartBtn = () => {
  const navigate = useNavigate();
  // const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  // const { items } = useContext(CartContext);

  // const numberOfCartItem = items.reduce((curNumber, item) => {
  //   return curNumber + item.amount;
  // }, 0);

  //const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ""}`;

  // useEffect(() => {
  //   if (items.length === 0) {
  //     return;
  //   } else {
  //     setBtnIsHighlighted(true);

  //     const timer = setTimeout(() => {
  //       setBtnIsHighlighted(false);
  //     }, 300);

  //     return () => {
  //       clearTimeout(timer);
  //     };
  //   }
  // }, [items]);

  return (
    <button
      className="button"
      onClick={() => {
        navigate("/cart");
      }}
    >
      <span className="cart-icon">
        <ion-icon name="cart"></ion-icon>
      </span>
      <span>Cart</span>
      <span className="badge">3</span>
    </button>
  );
};

export default CartBtn;
