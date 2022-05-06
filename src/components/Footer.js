import logo from "../images/logo.png";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container grid grid--footer">
        <div class="logo-col">
          <a href="#top" class="footer-logo">
            <img class="logo" alt="Romand logo" src={logo} />
          </a>

          <ul class="social-links">
            <li>
              <a class="footer-link" href="#top">
                <ion-icon class="social-icon" name="logo-instagram"></ion-icon>
              </a>
            </li>
            <li>
              <a class="footer-link" href="#top">
                <ion-icon class="social-icon" name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li>
              <a class="footer-link" href="#top">
                <ion-icon class="social-icon" name="logo-twitter"></ion-icon>
              </a>
            </li>
          </ul>

          <p class="copyright"> &copy; 2022 by Helen Quang.</p>
        </div>

        <nav class="nav-col">
          <p class="footer-heading">Account</p>
          <ul class="footer-nav">
            <li>
              <a class="footer-link" href="/signup">
                Create account
              </a>
            </li>
            <li>
              <a class="footer-link" href="/login">
                Log in
              </a>
            </li>
            <li>
              <a class="footer-link" href="#top">
                iOS app
              </a>
            </li>
            <li>
              <a class="footer-link" href="#top">
                Android app
              </a>
            </li>
          </ul>
        </nav>

        <nav class="nav-col">
          <p class="footer-heading">Company</p>
          <ul class="footer-nav">
            <li>
              <a class="footer-link" href="#top">
                About Rom&nd
              </a>
            </li>
            <li>
              <a class="footer-link" href="#top">
                Shipping info
              </a>
            </li>
            <li>
              <a class="footer-link" href="#top">
                Return policy
              </a>
            </li>
            <li>
              <a class="footer-link" href="#top">
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
