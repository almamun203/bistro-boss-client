import SectionTItle from "../../../Components/SectionTItle/SectionTItle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import pic from '../../../assets/quote.png'



const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="my-24">
      <SectionTItle
        heading={"Testimonial"}
        subheading={"--What Our Clients Say--"}
      ></SectionTItle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center space-y-6 mx-20">
              <Rating style={{ maxWidth: 280 }} value={review.rating} readOnly />
              <img src={pic} alt="" />
              <p>{review.details}</p>
              <h3 className="text-3xl text-orange-400">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
