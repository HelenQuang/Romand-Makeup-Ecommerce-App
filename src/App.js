import "../src/UI/general.css";
import "../src/UI/style.css";
import HomePage from "./pages/HomePage";
import LipProducts from "./pages/LipProducts";
import EyeProducts from "./pages/EyeProducts";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ForgotPassword from "./pages/ForgotPassword";
import PaymentPage from "./pages/PaymentPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lip" element={<LipProducts />} />
          <Route path="/eye" element={<EyeProducts />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </Router>
      {/* <navbar></navbar> */}
    </>
  );
}

export default App;
