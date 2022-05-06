import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <section className="section-login">
      <div className="container">
        <div className="login">
          <div className="login-text-box">
            <h2 className="heading-secondary">Create Your Account</h2>

            <form className="login-form">
              <div>
                <input
                  id="firstname"
                  type="firstname"
                  placeholder="Your firstname"
                />
              </div>
              <div>
                <input
                  id="lastname"
                  type="lastname"
                  placeholder="Your lastname"
                />
              </div>
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

              <button className="btn btn--form">Creat Account</button>
            </form>
          </div>

          <Link to="/login" className="login-text">
            Already Have An Account?
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Signup;
