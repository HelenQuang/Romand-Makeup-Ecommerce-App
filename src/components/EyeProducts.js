import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";

const EyeProducts = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchListings();
  }, []);

  const fetchListings = async () => {
    try {
      const listingRef = collection(db, "eyes");

      const listingSnapshot = await getDocs(listingRef);

      const listings = listingSnapshot.docs.map((doc) => doc.data());

      setListings(listings);
      setLoading(false);
    } catch (error) {
      toast.error("Could not fetch listings");
    }
  };

  const eyeItem = listings.map((item) => (
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
    <section className="section-items" id="eye-products">
      <div className="container center-text">
        <h2 className="heading-secondary color-change">Our Eye Products</h2>
      </div>
      <div className="container grid grid--3-cols margin-bottom-md">
        {eyeItem}
      </div>
    </section>
  );
};

export default EyeProducts;
