import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import ProductItem from "./ProductItem";

const LipProducts = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetchListings();
  }, []);

  const fetchListings = async () => {
    try {
      const listingRef = collection(db, "lips");
      const listingSnapshot = await getDocs(listingRef);
      const listings = listingSnapshot.docs.map((doc) => doc.data());

      setListings(listings);
    } catch (error) {
      toast.error("Could not fetch listings");
    }
  };

  return (
    <section className="section-items" id="lip-products">
      <div className="container center-text">
        <h2 className="heading-secondary">Our Lip Products</h2>
      </div>

      <ProductItem productListings={listings} />
    </section>
  );
};

export default LipProducts;
