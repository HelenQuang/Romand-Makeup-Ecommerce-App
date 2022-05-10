import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";

const LipProducts = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  const clickHandler = () => {};

  useEffect(() => {
    fetchListings();
  }, []);

  const fetchListings = async () => {
    try {
      const listingRef = collection(db, "lips");
      const listingSnapshot = await getDocs(listingRef);
      const listings = listingSnapshot.docs.map((doc) => doc.data());

      setListings(listings);
      setLoading(false);
    } catch (error) {
      toast.error("Could not fetch listings");
    }
  };

  const lipItem = listings.map((item) => (
    <div key={item.id} className="item">
      <div className="img-container">
        <img src={item.imgUrls[0]} className="item-img img1" alt="Lip 1" />
        <img src={item.imgUrls[1]} className="item-img img2" alt="Lip 2" />
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
                console.log(item, e.target.value);
              }}
            >
              <label>Colors:</label>
              <select
                className="colors"
                onChange={(e) => console.log(e.target.value)}
              >
                {item.colors.map((color, i) => (
                  <option key={i} name={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
              <button className="btn btn--outline" type="submit">
                Add To Cart
              </button>
            </form>
          </li>
        </ul>
      </div>
    </div>
  ));

  return (
    <section className="section-items" id="lip-products">
      <div className="container center-text">
        <h2 className="heading-secondary color-change">Our Lip Products</h2>
      </div>
      <div className="container grid grid--3-cols margin-bottom-md">
        {lipItem}
      </div>
    </section>
  );
};

export default LipProducts;
