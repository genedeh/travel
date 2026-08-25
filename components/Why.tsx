import Image from "next/image";

const features = [
  "Professional and customer-focused service",
  "Fast, reliable and transparent processes",
  "Affordable travel solutions",
  "Personalized support from start to finish",
  "Reliable assistance before, during and after your trip",
  "Commitment to honesty, integrity and satisfaction",
];

const Why = () => {
  return (
    <section className="w-full bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1080px] flex-col items-center gap-[54px] lg:flex-row lg:items-start">
        <div className="relative isolate h-[298px] w-[313px] shrink-0">
          <div className="absolute left-[32px] bottom-6 z-0 h-[166px] w-[249px] rounded-b-full bg-[#0363F1]" />
          <Image
            src="/why-choose-wow-img1.png"
            alt="Traveler ready for an international trip"
            width={313}
            height={263}
            className="absolute left-0 top-0 z-10 h-auto w-[313px]"
          />
        </div>

        <div className="relative w-full max-w-[712px] overflow-hidden py-1">
          <Image
            src="/why-choose-wow-img2.png"
            alt=""
            width={380}
            height={260}
            className="pointer-events-none absolute left-1/2 top-[24px] z-0 h-auto w-[380px] -translate-x-1/2 opacity-20"
          />

          <div className="relative z-10 flex flex-col gap-[30px]">
            <div className="flex flex-col gap-[10px]">
              <div className="flex w-full flex-col gap-[10px] [font-family:Inter,sans-serif] font-semibold lg:w-[320px]">
                <p className="text-[11px] leading-none text-[#0363F1]">
                  WHY CHOOSE WOW?
                </p>
                <h2 className="text-[20px] font-semibold leading-[25px] text-black">
                  Your Journey is Our{" "}
                  <span className="text-[#0363F1]">Priority</span>
                </h2>
              </div>
              <p className="[font-family:Inter,sans-serif] text-[13px] font-normal leading-[22px] text-[#050505B2]">
                We go above and beyond to deliver exceptional service and make
                your travel experience seamless and memorable.
              </p>
            </div>

            <div className="grid w-full max-w-[642px] grid-cols-1 gap-x-[60px] gap-y-[15px] sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex min-h-[35px] items-center rounded-[7px] border border-[#8FBFFA4D] bg-[#E0EEFF] px-[18px] py-[9px] shadow-[0_0_4.5px_rgba(0,0,0,0.17)]"
                >
                  <p className="[font-family:Inter,sans-serif] text-[12px] font-medium leading-normal text-[#000000B2]">
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
