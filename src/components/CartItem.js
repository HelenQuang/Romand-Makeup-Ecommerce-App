const CartItem = ({ item, onRemove, onAdd }) => {
  return (
    <li key={item.chosenColor} className="cart-items">
      <div>
        <img className="cart-img" src={item.imgUrls[0]} alt={item.name} />
      </div>
      <div className="cart-summary">
        <h3>{item.name}</h3>
        <p className="color">{item.chosenColor}</p>
        <span className="price">€ {item.price}</span>
        <span className="amount">x {item.amount}</span>
      </div>
      <div className="cart-actions">
        <button className="btn btn--form" onClick={onRemove}>
          -
        </button>
        <button className="btn btn--cta" onClick={onAdd}>
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
