import { Link } from "react-router-dom";
import bannerImag from "../../assets/header.png";

const Banner = () => {
  return (
    <div className="header__container section__container">
      <div className="header__content z-30">
        <h4 className="uppercase">UP TO 20% Discount on</h4>
        <h1>Girl&lsquo;s Fashion</h1>
        <p>
          Discover the latest trends and express your unique style with our
          Women&lsquo;s Fashion website. Explore a curated collection of
          clothing, accessories, and footwear that caters to every taste and
          occasion.
        </p>
        <button className="btn">
          <Link to="/shop">EXPLORE NOW</Link>
        </button>
      </div>
      <div className="header__image">
        <img src={bannerImag} alt="banner image" />
      </div>
    </div>
  );
};

export default Banner;
