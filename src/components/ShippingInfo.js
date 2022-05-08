import { useNavigate } from "react-router-dom";

const ShippingInfo = () => {
  const navigate = useNavigate();

  return (
    <section className="section-shipping">
      <div className="container">
        <div className="shipping">
          <div className="shipping-text-box">
            <h2 className="heading-secondary">Shipping Information</h2>
          </div>
          <form className="shipping-form">
            <div>
              <input id="firstname" type="firstname" placeholder="First name" />
            </div>
            <div>
              <input id="lastname" type="lastname" placeholder="Last name" />
            </div>
            <div>
              <input id="email" type="email" placeholder="Email address" />
            </div>
            <div>
              <input
                id="address"
                type="address"
                placeholder="Shipping address"
              />
            </div>
            <div>
              <input id="phone" type="phone" placeholder="Phone number" />
            </div>
          </form>
          <button
            className="btn btn--edit"
            onClick={() => {
              navigate("/payment");
            }}
          >
            Go to payment
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShippingInfo;
