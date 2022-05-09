import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import NavBar from "../components/NavBar";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      navigate("/login");
      toast.success("Email to reset password was sent");
    } catch (error) {
      toast.error("Could not send reset email");
    }
  };

  return (
    <div>
      <NavBar />
      <section className="section-login">
        <div className="container">
          <div className="login">
            <div className="login-text-box">
              <h2 className="heading-secondary">Change Password</h2>

              <form className="login-form" onSubmit={submitHandler}>
                <div>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <button className="btn btn--form">
                  Send Password Reset Email
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgotPassword;
