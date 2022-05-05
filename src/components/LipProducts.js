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
  return (
    <section class="section-meals">
      <div class="container grid grid--3-cols margin-bottom-md">
        <div class="meal">
          <img
            src="https://img.joomcdn.net/5c26a9c6e6f488791c65475028a20fa7cac16949_original.jpeg"
            class="meal-img"
            alt="Lip"
          />
          <div class="meal-content">
            <p class="meal-title">Glasting water gloss</p>
            <ul class="meal-attributes">
              <li class="meal-attribute">
                <span>11e</span>
              </li>
              <li class="meal-attribute">
                <span>#04 Caramel Tea</span>
              </li>
              <button>Add To Cart</button>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LipProducts;
