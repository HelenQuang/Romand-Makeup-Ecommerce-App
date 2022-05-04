import { useNavigate } from "react-router-dom";

const AccountBtn = () => {
  const navigate = useNavigate();
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
      <span>Account</span>
    </button>
  );
};

export default AccountBtn;
