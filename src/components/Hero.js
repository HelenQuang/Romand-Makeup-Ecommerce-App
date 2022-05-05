import eye from "../images/eye palete.jpeg";
import lip from "../images/lip.jpeg";
import Swiper from "react-id-swiper";

const Hero = () => {
  // const params = {
  //   slidesPerView: 1,
  //   loop: true,
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //     dynamicBullets: true,
  //   },
  // };

  return (
    <section className="section-hero">
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
                Eye shadow palette consists of 10 stunning matte and glitter
                shades to suit skin tone.
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
            <a href="/lip" className="btn btn--outline">
              Lip Products &darr;
            </a>
          </div>
          <div className="hero-img-box">
            <img src={lip} className="hero-img" alt="Lip sticks" />
          </div>
        </div>

        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary">
              Rom&nd <br /> Better Than Palete
            </h1>
            <ul className="hero-description">
              <li>
                Eye shadow palette consists of 10 stunning matte and glitter
                shades to suit skin tone.
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
            <a href="/eye" className="btn btn--outline">
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

export default Hero;
