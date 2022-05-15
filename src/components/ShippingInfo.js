import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const ShippingInfo = ({ submitOrderHandler }) => {
  const navigate = useNavigate();
  const firstnameInputRef = useRef();
  const lastnameInputRef = useRef();
  const emailInputRef = useRef();
  const addressInputRef = useRef();
  const phoneInputRef = useRef();

  const submitFormHandler = (e) => {
    e.preventDefault();

    const enteredFirstName = firstnameInputRef.current.value;
    const enteredLastName = lastnameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;

    submitOrderHandler({
      firstname: enteredFirstName,
      lastname: enteredLastName,
      email: enteredEmail,
      address: enteredAddress,
      phone: enteredPhone,
    });
  };

  return (
    <section className="section-shipping">
      <div className="container">
        <div className="shipping">
          <div className="shipping-text-box">
            <h2 className="heading-secondary">Shipping Information</h2>
          </div>
          <form className="shipping-form" onSubmit={submitFormHandler}>
            <div>
              <input
                id="firstname"
                type="firstname"
                placeholder="First name"
                ref={firstnameInputRef}
                required
              />
            </div>
            <div>
              <input
                id="lastname"
                type="lastname"
                placeholder="Last name"
                ref={lastnameInputRef}
                required
              />
            </div>
            <div>
              <input
                id="email"
                type="email"
                placeholder="Email address"
                ref={emailInputRef}
                required
              />
            </div>
            <div>
              <input
                id="address"
                type="address"
                placeholder="Shipping address"
                ref={addressInputRef}
                required
              />
            </div>
            <div>
              <input
                id="phone"
                type="phone"
                placeholder="Phone number"
                ref={phoneInputRef}
                required
              />
            </div>
          </form>
          <button
            className="btn btn--edit"
            // type="submit"
            // onClick={() => {
            //   navigate("/payment");
            // }}
          >
            Go to payment
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShippingInfo;
