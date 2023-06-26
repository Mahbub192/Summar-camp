import YogaEnhancesYourLife from "../ YogaEnhancesYourLife/ YogaEnhancesYourLife";
import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import ExtraSection from "../ExtraSection/ExtraSection";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import YogaPricingPlan from "../YogaPricingPlan/YogaPricingPlan";


const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner />
            <PopularClass />
            < YogaEnhancesYourLife />
            <YogaPricingPlan />
            <PopularInstructors />
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;