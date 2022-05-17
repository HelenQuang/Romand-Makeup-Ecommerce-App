import "./UI/general.css";
import "./UI/homePage.css";
import "./UI/loginPage.css";
import "./UI/cartPage.css";
import "./UI/chekoutPage.css";
import "react-toastify/dist/ReactToastify.css";

import HomePage from "./pages/HomePage";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import AccountPage from "./pages/AccountPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ForgotPassword from "./pages/ForgotPassword";
import PaymentPage from "./pages/PaymentPage";
import ConfirmPage from "./pages/ConfirmPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/confirm" element={<ConfirmPage />} />
        </Routes>
      </Router>
      <ToastContainer
        position="top-center"
        style={{ width: "50rem", fontSize: "1.8rem" }}
      />
    </CartProvider>
  );
}

export default App;
