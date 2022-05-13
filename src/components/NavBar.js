import logo from "../images/logo.png";
import CartBtn from "./CartBtn";
import AccountBtn from "./AccountBtn";

const NavBar = ({ headerClass }) => {
  return (
    <header className={headerClass}>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <a href="/">
            <img className="logo" alt="Romand logo" src={logo} />
          </a>
          <li>
            <a className="main-nav-link" href="/#lip-products">
              Our Lip Products
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="/#eye-products">
              Our Eye Products
            </a>
          </li>
        </ul>
      </nav>

      <div className="nav-btn">
        <CartBtn />
        <AccountBtn />
      </div>
    </header>
  );
};

export default NavBar;
