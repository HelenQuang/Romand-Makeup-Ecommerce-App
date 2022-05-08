import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const changeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential.user) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="section-login">
      <div className="container">
        <div className="login">
          <div className="login-text-box">
            <h2 className="heading-secondary">Log In</h2>

            <form className="login-form" onSubmit={submitHandler}>
              <div>
                <input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  onChange={changeHandler}
                />
              </div>
              <div>
                <input
                  id="password"
                  type="password"
                  placeholder="Your password"
                  onChange={changeHandler}
                />
              </div>

              <button className="btn btn--form">Log In</button>
            </form>
          </div>

          <Link to="/forgotpassword" className="login-text">
            Forgot Your Password?
          </Link>
          <Link to="/signup" className="login-text">
            Create A New Account?
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
