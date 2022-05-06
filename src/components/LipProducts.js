import React from "react";

const Dummy_lip = [
  {
    name: "Glasting water gloss",
    price: 11,
    colors: ["#00 Meteor Track", "#01 Sanho Crush", "#02 Night Marine"],
    imgUrls: [
      "https://img.joomcdn.net/5c26a9c6e6f488791c65475028a20fa7cac16949_original.jpeg",
      "https://img.joomcdn.net/a795c48080ccaed831e025614907a952cf66c76b_original.jpeg",
    ],
  },
  {
    name: "Milktea Velvet Tint",
    price: 12.9,
    colors: [
      "#01 Red Tea",
      "#02 Chocolate Tea",
      "#03 Cinnamon Tea",
      "#04 Caramel Tea",
    ],
    imgUrls: [
      "https://img.joomcdn.net/68adbad0e4f4d91e33441fa5e77e5cd0456e65c9_original.jpeg",
      "https://img.joomcdn.net/cc8e0f8917bbdc9ea0e6697ff7420cd9768c506e_original.jpeg",
    ],
  },
];

const LipProducts = () => {
  const lipItem = Dummy_lip.map((item) => (
    <div className="item">
      <img src={item.imgUrls[0]} className="item-img" alt="Lip" />
      <div className="item-content">
        <p className="item-title">{item.name}</p>
        <ul className="item-attributes">
          <li className="item-attribute">
            <span className="price">€ {item.price}</span>
          </li>
          <li className="item-attribute">
            <form>
              <label>Colors:</label>
              <select className="colors">
                {item.colors.map((color, i) => (
                  <option key={i} name={color}>
                    {color}
                  </option>
                ))}
              </select>
            </form>
          </li>
          <button className="btn btn--outline">Add To Cart</button>
        </ul>
      </div>
    </div>
  ));

  return (
    <section class="section-items">
      <div class="container center-text">
        <h2 class="heading-secondary">Our Lip Products</h2>
      </div>
      <div class="container grid grid--3-cols margin-bottom-md">{lipItem}</div>
    </section>
  );
};

export default LipProducts;
