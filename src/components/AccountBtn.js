import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useState, useEffect } from "react";

const AccountBtn = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(auth.currentUser);
  }, [auth.currentUser]);

  return (
    <button className="button">
      <span className="cart-icon">
        <ion-icon name="person"></ion-icon>
      </span>
      {user && (
        <span
          onClick={() => {
            navigate("/account");
          }}
        >
          {user.displayName}
        </span>
      )}
      {!user && (
        <span
          onClick={() => {
            navigate("/login");
          }}
        >
          Account
        </span>
      )}
    </button>
  );
};

export default AccountBtn;
