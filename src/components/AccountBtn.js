import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useState, useEffect } from "react";

const AccountBtn = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(auth.currentUser);
  }, []);

  return (
    <button
      className="button"
      onClick={() => {
        navigate("/login");
      }}
    >
      <span className="cart-icon">
        <ion-icon name="person"></ion-icon>
      </span>
      {user ? <span>{user.displayName}</span> : <span>Account</span>}
    </button>
  );
};

export default AccountBtn;
