import HeroSection from "./HeroSection";
import Banner from "./Banner";
import Categories from "./Categories";
import TrendingProducts from "../shop/TrendingProducts";
import DealsSections from "./DealsSections";
import PromoBanner from "./PromoBanner";
import Blogs from "../blogs/Blogs";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <HeroSection />
      <TrendingProducts />
      <DealsSections />
      <PromoBanner />
      <Blogs />
    </>
  );
};

export default Home;
