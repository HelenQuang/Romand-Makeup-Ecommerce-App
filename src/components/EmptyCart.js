import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <section className="section-cart">
      <div className="container">
        <div className="cart">
          <div className="cart-text-box">
            <h2 className="heading-secondary">Your Cart</h2>
            <p className="cart-text">Your cart is currently empty!</p>
            <button
              className="btn btn--form"
              onClick={() => {
                navigate("/");
              }}
            >
              Continue shopping with us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmptyCart;
