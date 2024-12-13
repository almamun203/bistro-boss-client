import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTItle from "../../../Components/SectionTItle/SectionTItle";

const Category = () => {
  return (
    <section className="my-24">
      <SectionTItle
      subheading={"--From 11.00am to 10.00pm--"}
      heading={"Order Online"}></SectionTItle>
      <Swiper
        slidesPerView={4}
        
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper lg:my-24 my-10"
      >
        <SwiperSlide>
          <img src={slide1}></img>
          <h2 className="text-4xl uppercase -mt-12 text-center">Salads</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2}></img>
          <h2 className="text-4xl uppercase -mt-12 text-white text-center">Pizzas</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3}></img>
          <h2 className="text-4xl uppercase -mt-12 text-center">Soups</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4}></img>
          <h2 className="text-4xl uppercase -mt-12 text-center">desserts</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5}></img>
          <h2 className="text-4xl uppercase -mt-12 text-center">salads</h2>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
