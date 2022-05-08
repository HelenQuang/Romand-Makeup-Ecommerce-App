import { useNavigate } from "react-router-dom";

const Dummy_cart = [
  {
    name: "Glasting Water Gloss",
    price: 11,
    amount: 2,
    colors: "#00 Meteor Track",
    imgUrls: [
      "https://img.joomcdn.net/5c26a9c6e6f488791c65475028a20fa7cac16949_original.jpeg",
      "https://img.joomcdn.net/a795c48080ccaed831e025614907a952cf66c76b_original.jpeg",
    ],
  },
  {
    name: "Milktea Velvet Tint",
    price: 12.9,
    amount: 1,
    colors: "#01 Red Tea",
    imgUrls: [
      "https://img.joomcdn.net/68adbad0e4f4d91e33441fa5e77e5cd0456e65c9_original.jpeg",
      "https://img.joomcdn.net/cc8e0f8917bbdc9ea0e6697ff7420cd9768c506e_original.jpeg",
    ],
  },
  {
    name: "Pampas Garden",
    price: 23.9,
    amount: 3,
    colors: "#01 Pampas Garden",
    imgUrls: [
      "https://img.joomcdn.net/93365160e42cd8d24d1e32f9a20c3516a6c2b1de_original.jpeg",
      "https://img.joomcdn.net/8aa5a47714381d1153a6a234673c44bf82875d74_original.jpeg",
    ],
  },
  {
    name: "Maghogany Garden",
    price: 23.9,
    amount: 2,
    colors: "#02 Maghogany Garden",
    imgUrls: [
      "https://img.joomcdn.net/0cf002c3d2ea9d1f5a30327e032774ed43733002_original.jpeg",
      "https://img.joomcdn.net/c338fa8b2c0ec26d951e2c431ff9008492accdb1_original.jpeg",
    ],
  },
];

const OrderSummary = () => {
  const navigate = useNavigate();

  const cartItems = Dummy_cart.map((item) => (
    <li className="cart-items">
      <div>
        <img className="cart-img" src={item.imgUrls[0]} alt={item.name} />
      </div>
      <div className="cart-summary">
        <h3>{item.name}</h3>
        <p className="color">{item.colors}</p>
        <span className="price">{`€${item.price}`}</span>
        <span className="amount">x {item.amount}</span>
      </div>
    </li>
  ));

  return (
    <section className="section-summary">
      <div className="container">
        <div className="cart">
          <div className="cart-text-box">
            <h2 className="heading-secondary">Order Summary</h2>
            {cartItems}
          </div>
          <div className="cart-subtotal">
            <span className="subtotal">Shipping cost:</span>
            <span className="price">€5</span>
          </div>
          <div className="cart-subtotal">
            <span className="subtotal">Subtotal:</span>
            <span className="price">€57.5</span>
          </div>
          <button
            className="btn btn--edit"
            onClick={() => {
              navigate("/cart");
            }}
          >
            Return to cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;
