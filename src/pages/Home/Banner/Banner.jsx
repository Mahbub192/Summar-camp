import Lottie from "lottie-react";
import bannerImage from "../../../assets/103084-new-yoga.json";
import bannerImage2 from "../../../assets/40594-young-woman-meditating-in-yoga-tree-pose.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Banner = () => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="flex flex-wrap items-center  md:h-[80vh] pt-20 md:pt-0 px-8 ">
          <div className=" md:w-1/2 md:px-16 order-2 md:order-1">
            <h1 className="text-3xl uppercase font-bold text-gray500 ">
              Yogashala Studio
            </h1>
            <p className="md:pr-10 py-5 text-justify">
              Welcome to your yoga class, where motivation flows like the
              breath. As you step onto your mat, feel the transformative power
              within you. Embrace self-awareness, tuning in to the sensations of
              your body, the rhythm of your breath, and the whispers of your
              soul. Let go of expectations and judgments, and instead, embrace
              the present moment. With each asana, find strength, flexibility,
              and balance. Allow the energy to flow freely, revitalizing your
              spirit. Today, let your yoga practice be a celebration of your
              inner light, inspiring you to reach new heights on and off the
              mat. Namaste.
            </p>
            <button className="btn-color px-4 py-3 rounded-lg dark:text-white">
              Get Free Trial Lession
            </button>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <Lottie
              className="md:h-[80vh]"
              animationData={bannerImage}
              loop={true}
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-wrap items-center  md:h-[80vh] pt-20 md:pt-0 px-8 ">
          <div className=" md:w-1/2 md:px-16 order-2 md:order-1">
            <h1 className="text-3xl uppercase font-bold text-gray500 ">
              Yogashala Studio
            </h1>
            <p className="md:pr-10 py-5 text-justify">
              Yoga offers numerous benefits for women, including increased
              flexibility, strength, and balance. It promotes stress reduction,
              hormonal balance, and improved menstrual health. Regular practice
              can enhance fertility, support healthy pregnancies, and aid in
              postpartum recovery. Additionally, yoga cultivates body
              positivity, self-acceptance, and a deeper connection to one is
              body and inner self.
            </p>
            <button className="btn-color px-4 py-3 rounded-lg dark:text-white">
              Get Free Trial Lession
            </button>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <Lottie
              className="md:h-[80vh]"
              animationData={bannerImage2}
              loop={true}
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
