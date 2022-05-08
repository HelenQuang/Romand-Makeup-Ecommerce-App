import logo from "../images/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container grid grid--footer">
        <div className="logo-col">
          <a href="#top" className="footer-logo">
            <img className="logo" alt="Romand logo" src={logo} />
          </a>

          <ul className="social-links">
            <li>
              <a className="footer-link" href="#top">
                <ion-icon
                  className="social-icon"
                  name="logo-instagram"
                ></ion-icon>
              </a>
            </li>
            <li>
              <a className="footer-link" href="#top">
                <ion-icon
                  className="social-icon"
                  name="logo-facebook"
                ></ion-icon>
              </a>
            </li>
            <li>
              <a className="footer-link" href="#top">
                <ion-icon
                  className="social-icon"
                  name="logo-twitter"
                ></ion-icon>
              </a>
            </li>
          </ul>

          <p className="copyright"> &copy; 2022 by Helen Quang.</p>
        </div>

        <nav className="nav-col">
          <p className="footer-heading">Account</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="/signup">
                Create account
              </a>
            </li>
            <li>
              <a className="footer-link" href="/login">
                Log in
              </a>
            </li>
            <li>
              <a className="footer-link" href="#top">
                iOS app
              </a>
            </li>
            <li>
              <a className="footer-link" href="#top">
                Android app
              </a>
            </li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Company</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="#top">
                About Rom&nd
              </a>
            </li>
            <li>
              <a className="footer-link" href="#top">
                Shipping info
              </a>
            </li>
            <li>
              <a className="footer-link" href="#top">
                Return policy
              </a>
            </li>
            <li>
              <a className="footer-link" href="#top">
                Contact us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
