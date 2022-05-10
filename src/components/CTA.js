import { toast } from "react-toastify";

const CTA = () => {
  return (
    <section className="section-cta">
      <div className="container">
        <div className="cta">
          <div className="cta-text-box">
            <h2 className="heading-secondary">Subcribe to our newsletter</h2>
            <p className="cta-text">
              Promotions, new products and sales. <br />
              Directly to your inbox.
            </p>
          </div>

          <form className="cta-form">
            <div>
              <input id="email" type="email" placeholder="Your email" />
            </div>

            <button
              className="btn btn--form"
              onClick={() => {
                toast.success("Thank you for subcribing us!");
              }}
            >
              Subcribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTA;
