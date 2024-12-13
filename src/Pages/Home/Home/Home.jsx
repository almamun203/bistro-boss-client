import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import BistroBoss from "../Bistro Boss/BistroBoss";
import Category from "../Category/Category";
import Contact from "../Contact/Contact";
import Featured from "../Featured/Featured";
import PopularMenu from "../Popularmenu/PopularMenu";
import Recommends from "../Recommends/Recommends";
import Testimonial from "../Testimonial/Testimonial";
import './../../../index.css';

const Home = () => {
  return (
    <div className="cinzel  ">
      <Helmet>
        <title>
          Bistro Boss | Home
        </title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Contact></Contact>
      <Recommends></Recommends>
      <Featured></Featured>
      <Testimonial></Testimonial>
      <BistroBoss></BistroBoss>
    </div>
  );
};

export default Home;
