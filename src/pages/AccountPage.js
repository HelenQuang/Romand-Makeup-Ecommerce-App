import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { getAuth } from "firebase/auth";

const AccountPage = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  return (
    <div>
      <NavBar />
      <section className="section-cart">
        <div className="container">
          <div className="cart">
            <div className="cart-text-box">
              <h2 className="heading-secondary">My Account</h2>
              <p className="cart-text">You haven't placed any orders yet!</p>
              <div className="cart-btn">
                <button
                  className="btn btn--form"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Continue shopping with us
                </button>
                <button
                  className="btn btn--cta"
                  onClick={() => {
                    auth.signOut();
                    navigate("/");
                  }}
                >
                  Log out
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccountPage;
