import YogaEnhancesYourLife from "../ YogaEnhancesYourLife/ YogaEnhancesYourLife";
import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import ExtraSection from "../ExtraSection/ExtraSection";
import OurClientSay from "../OurClientSay/OurClientSay";
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
            <OurClientSay />
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;