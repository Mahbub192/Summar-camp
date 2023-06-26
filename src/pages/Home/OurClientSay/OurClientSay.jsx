import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import image1 from "../../../assets/banner/image1.jpeg";
import image2 from "../../../assets/banner/image2.jpeg";
import image3 from "../../../assets/banner/image3.jpeg";
import image4 from "../../../assets/banner/image4.jpeg";
const OurClientSay = () => {
  return (
    <div className="md:mx-20 my-20">
      <h1 className="text-3xl font-bold text-center mb-10">Our Client Say!</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div >
            <div className="avatar w-full">
              <div className="w-24 mx-auto rounded-full">
                <img src={image1} />
              </div>
            </div>
            <p>
              "Yoga is a great way to improve flexibility, reduce stress, and
              enhance mental clarity. Regular practice can lead to increased
              strength, balance, and inner peace."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
          <div className="avatar w-full">
              <div className="w-24 mx-auto rounded-full">
                <img src={image2} />
              </div>
            </div>
            <p>
              "Yoga has numerous benefits, including improved flexibility,
              stress reduction, and increased mindfulness."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div >
          <div className="avatar w-full">
              <div className="w-24 mx-auto rounded-full">
                <img src={image3} />
              </div>
            </div>
            <p>
              "Yoga is a wonderful way to find inner peace and harmony while
              taking care of your body."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
          <div className="avatar w-full">
              <div className="w-24 mx-auto rounded-full">
                <img src={image4} />
              </div>
            </div>
            <p>
              "Yoga has numerous health benefits and is a great way to maintain
              overall well-being. It can be practiced by people of all ages and
              fitness levels."
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OurClientSay;
