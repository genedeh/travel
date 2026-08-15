
const Why = () => {
  const features = [
    "Professional and customer-focused service",
    "Fast, reliable and transparent processes",
    "Affordable travel solutions",
    "Personalized support from start to finish",
    "Reliable assistance before, during and after your trip",
    "Commitment to honesty, integrity and satisfaction",
  ];
 

  return (
    <section className="w-full bg-white px-6 py-20 md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-[1350px] items-center gap-12 lg:gap-16">
        <div className="relative h-[360px] w-[360px] shrink-0">
          <div className="absolute inset-0 translate-y-3 rounded-full bg-blue-600" />

          <div className="relative h-full w-full overflow-hidden rounded-full">
            <img
              src="/ChatGPT Image Aug 3, 2026, 12_56_39 PM 1 (1).png"
              alt="Travel"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="relative min-h-[390px] flex-1 overflow-hidden">
          <img
            src="/Traveler rushing to gate with departing airplane, Missing flight and airport rush.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative z-10 px-8 py-5 lg:px-10">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-blue-600">
              WHY CHOOSE WOW?
            </p>

            <h2 className="mb-2 text-4xl font-bold text-blue-600">
             <span className="mb-2 text-4xl font-bold text-black">Your Journey Is Our</span> Priority
            </h2>

            <p className="mb-8 max-w-2xl  text-xl leading-6 text-gray-700">
              We go above and beyond to deliver exceptional service and make
              your travel experience seamless and memorable.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex min-h-[65px] items-center rounded-lg border-2 border-gray-800 bg-[#e5f0ff] px-4 py-3"
                >
                  <p className="text-[15px] leading-5 text-gray-700">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
     
    </section>
    
  );
};

export default Why;