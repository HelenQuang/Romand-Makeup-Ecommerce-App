import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="section-login">
      <div className="container">
        <div className="login">
          <div className="login-text-box">
            <h2 className="heading-secondary">Log In</h2>

            <form className="login-form">
              <div>
                <input id="email" type="email" placeholder="Your email" />
              </div>
              <div>
                <input
                  id="password"
                  type="password"
                  placeholder="Your password"
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
