import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import ProductItem from "./ProductItem";

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

  return (
    <section className="section-items" id="eye-products">
      <div className="container center-text">
        <h2 className="heading-secondary color-change">Our Eye Products</h2>
      </div>

      <ProductItem productListings={listings} />
    </section>
  );
};

export default EyeProducts;
