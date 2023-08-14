const Section5 = () => {
  return (
    <div className="h-80 bg-bgColor1">
      <h1 className="text-center font-montserrat font-semibold text-textColor2 bg-bgColor1 text-5xl  ">
        Frequently asked questions
      </h1>
      <div className="grid grid-cols-2 bg-bgColor1 font-montserrat p-10 gap-5 ">
        <div className="flex flex-col gap-2 ">
          <h2 className="text-3xl">
            <strong>How do I access the study materials?</strong>
          </h2>
          <p className="font-medium text-textColor2 text-2xl">
            All study materials are available within the app after registration
            and selecting your desired plan.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl">
            <strong>Can I change my subscription plan?</strong>
          </h2>
          <p className="font-medium text-textColor2 text-2xl">
            Yes, you can upgrade or downgrade your subscription plan anytime
            through your account settings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section5;
