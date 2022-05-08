import eye from "../images/eye palete.jpeg";

const EyeHero = () => {
  return (
    <section className="section-hero">
      <div>
        <div className="eye-hero">
          <div className="hero-text-box">
            <h1 className="heading-primary">
              Rom&nd <br /> Better Than Palete
            </h1>
            <ul className="hero-description">
              <li>
                Each eye shadow palette consists of 10 stunning matte and
                glitter shades to suit skin tone.
              </li>
              <li>
                Five levels of brightness intensity to allow color layering for
                a well-defined eye contouring look.
              </li>
              <li>
                Super-fine glitter particles apply smoothly onto the eyelids
                without fallout.
              </li>
            </ul>
            <a href="#eye-products" className="btn btn--outline">
              Eye Products &darr;
            </a>
          </div>
          <div className="hero-img-box">
            <img src={eye} className="hero-img" alt="Eye paletes" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EyeHero;
