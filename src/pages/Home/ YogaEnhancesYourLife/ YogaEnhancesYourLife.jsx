import { Link } from "react-router-dom";
import yoga from "../../../assets/banner/yoga.jpg";

const YogaEnhancesYourLife = () => {
  return (
    <div className="bg-black relative my-20">
      <img className="w-full h-96 object-fill opacity-50" src={yoga} alt="" />
      <div className="absolute top-0 left-0 w-full ">
        <div className="flex flex-col items-center justify-center h-96 text-white">
          <p className="text-gray-400">Yoga enhances your life</p>
          <h2 className="text-xl md:text-5xl my-2">The ancient practice <br /> for better tomorrow</h2>
          <Link to={`/classesPage`} className="uppercase px-5 py-2 bg-error mt-5  hover:bg-white hover:text-black">
            Discover Classes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default YogaEnhancesYourLife;
