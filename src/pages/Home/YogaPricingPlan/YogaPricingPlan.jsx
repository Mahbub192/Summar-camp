const YogaPricingPlan = () => {
  return (
    <div>
      <div>
        <h2 className="text-xl md:text-3xl text-center font-bold mb-5">Yoga Pricing Plan</h2>
        <p className="text-center w-1/3 mx-auto mb-5"    >
          Blissful Yoga Studio Pricing Plans: Drop-In Class $15, Class Packages
          with discounts, and Unlimited Membership for unlimited classes at a
          fixed monthly fee.
        </p>
      </div>
      <div className="flex flex-wrap md:w-3/4 mx-auto gap-6 justify-between">
        <div className="w-full md:w-1/4 py-10 mx-5 md:mx-0 bg-white shadow-2xl text-center">
          <h1 className="text-2xl font-bold pt-5">REGULAR MEMBER</h1>
          <p className="pb-3">
            <span className="text-2xl font-bold">$49</span>/ Month
          </p>
          <div className="divider"></div>
          <div className="leading-loose">
            <p>Basic Options</p>
            <p>Full Access</p>
            <p>Customers Support</p>
            <p>Free Updates</p>
            <p>Advanced Options</p>
            <button className="py-3 px-4 bg-gray-500 text-white rounded-sm">
              Buy Now
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/4 mx-5 md:mx-0 bg-white shadow-2xl text-center">
          <div className="bg-error py-10 text-white">
            <h1 className="text-2xl font-bold">V.I.P MEMBER</h1>
            <p className="pb-3">
              <span className="text-2xl font-bold">$99</span>/ Month
            </p>
          </div>
          <div className="mt-8 leading-loose">
            <p>Standard Options</p>
            <p>Full Access</p>
            <p>Customers Support</p>
            <p>Free Updates</p>
            <p>Advanced Options</p>
            <button className="py-3 px-4 bg-error text-white">Buy Now</button>
          </div>
        </div>
        <div className="w-full md:w-1/4 py-10 mx-5 md:mx-0 bg-white shadow-2xl text-center">
          <h1 className="text-2xl font-bold pt-5">PREMIUM MEMBER</h1>
          <p className="pb-3">
            <span className="text-2xl font-bold">$199</span>/ Month
          </p>
          <div className="divider"></div>
          <div className="leading-loose">
            <p>Unlimited Options</p>
            <p>Full Access</p>
            <p>Customers Support</p>
            <p>Free Updates</p>
            <p>Advanced Options</p>
          </div>
          <button className="py-3 px-4 bg-gray-500 text-white rounded-sm">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default YogaPricingPlan;
