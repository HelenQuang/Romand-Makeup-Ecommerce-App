import { useState, useContext } from "react";
import CartContext from "../store/CartContext";

const ProductItem = ({ productListings }) => {
  const [chosenColor, setChosenColor] = useState();
  const { addItem } = useContext(CartContext);

  const productItem = productListings.map((item) => (
    <div key={item.id} className="item">
      <div className="img-container">
        <img src={item.imgUrls[0]} className="item-img img1" alt={item.name} />
        <img src={item.imgUrls[1]} className="item-img img2" alt={item.name} />
      </div>

      <div className="item-content">
        <p className="item-title">{item.name}</p>
        <ul className="item-attributes">
          <li className="item-attribute">
            <span className="price">€ {item.price}</span>
          </li>
          <li className="item-attribute">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const chosenItem = { ...item, chosenColor: chosenColor };

                addItem(chosenItem);
              }}
            >
              <label>Colors:</label>
              <select
                className="colors"
                onClick={(e) => setChosenColor(e.target.value)}
              >
                {item.colors.map((color, i) => (
                  <option key={i} name={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
              <button className="btn btn--outline-cart  " type="submit">
                Add To Cart
              </button>
            </form>
          </li>
        </ul>
      </div>
    </div>
  ));

  return (
    <div className="container grid grid--3-cols margin-bottom-md">
      {productItem}
    </div>
  );
};

export default ProductItem;
