import React from "react";

const Dummy_eye = [
  {
    name: "Pampas Garden",
    price: 23.9,
    colors: ["#01 Pampas Garden"],
    imgUrls: [
      "https://img.joomcdn.net/93365160e42cd8d24d1e32f9a20c3516a6c2b1de_original.jpeg",
      "https://img.joomcdn.net/8aa5a47714381d1153a6a234673c44bf82875d74_original.jpeg",
    ],
  },
  {
    name: "Maghogany Garden",
    price: 23.9,
    colors: ["#02 Maghogany Garden"],
    imgUrls: [
      "https://img.joomcdn.net/0cf002c3d2ea9d1f5a30327e032774ed43733002_original.jpeg",
      "https://img.joomcdn.net/c338fa8b2c0ec26d951e2c431ff9008492accdb1_original.jpeg",
    ],
  },
];

const EyeProducts = () => {
  const eyeItem = Dummy_eye.map((item) => (
    <div className="item">
      <div className="img-container">
        <img src={item.imgUrls[0]} className="item-img img1" alt="Eye 1" />
        <img src={item.imgUrls[1]} className="item-img img2" alt="Eye 2" />
      </div>
      <div className="item-content">
        <p className="item-title">{item.name}</p>
        <ul className="item-attributes">
          <li className="item-attribute">
            <span className="price">€ {item.price}</span>
          </li>
          <li className="item-attribute">
            <span>Color: {item.colors}</span>
          </li>
          <button className="btn btn--outline">Add To Cart</button>
        </ul>
      </div>
    </div>
  ));

  return (
    <section class="section-items" id="eye-products">
      <div class="container center-text">
        <h2 class="heading-secondary color-change">Our Eye Products</h2>
      </div>
      <div class="container grid grid--3-cols margin-bottom-md">{eyeItem}</div>
    </section>
  );
};

export default EyeProducts;
