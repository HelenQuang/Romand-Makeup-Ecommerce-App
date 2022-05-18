import lip from "../images/lip.jpeg";

const LipHero = () => {
  return (
    <section className="section-hero" id="lip-hero">
      <div className="promotion-bar">
        <span></span>
      </div>
      <div>
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary">
              Rom&nd <br /> Better Than Lip
            </h1>
            <ul className="hero-description">
              <li>
                Our lip products consist of 6 product lines giving different
                effects and textures on lips.
              </li>
              <li>
                Easily apply for a full lip style or gradient lip style with
                small applicator without flaking, drying, or caking.
              </li>
              <li>Various and trendy colors to suit everyday use.</li>
            </ul>
            <a href="#lip-products" className="btn btn--outline">
              Lip Products &darr;
            </a>
          </div>
          <div className="hero-img-box">
            <img src={lip} className="hero-img" alt="Lip sticks" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LipHero;
