import { FaPlaneDeparture, FaGlobe, FaStar,FaShieldAlt,FaCheckCircle } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src="/ChatGPT Image Aug 2, 2026, 03_58_30 PM 1.png"
        alt="hero.img"
      />

      <div className="absolute left-0 top-1/2 w-full -translate-y-1/2 px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl text-left">
          <h2 className="text-6xl md-6 font-bold text-white">
            Travel round the World with{" "}
            <span className="font-serif text-8xl text-[#ED7911]">
              Confidence
            </span>
          </h2>

          <p className="mt-8 text-xl font-semibold text-gray-300">
            Flights, Hotels, Visas, Tours, Passports Processing and Reliable
            Logistics - all in one place
          </p>

          <div className="mt-9 flex gap-6">
            <button className="rounded-xl bg-blue-500 px-6 py-4 text-xl font-bold text-white">
              Book a Flight
              <FaPlaneDeparture
                className="ml-3 inline-block"
                size={26}
              />
            </button>

            <button className="rounded-xl bg-white px-6 py-4 text-xl font-bold text-black">
              Explore Services
            </button>
          </div>
          <div className="flex flex-wrap text-lg mt-15 items-center gap-8">
  <h2 className="flex items-center gap-2 text-white">
    <FaPlaneDeparture size={26} />
    10,000+ Happy Travelers
  </h2>

  <h2 className="flex items-center gap-2 text-white">
    <FaGlobe size={26} />
    40+ Countries Covered
  </h2>

  <h2 className="flex items-center gap-2 text-white">
    <FaStar size={26} />
    98% Customer Satisfaction
  </h2>
</div>
        </div>
      </div> 
      <div className="bg-black">
  <div className="flex min-h-screen items-center   justify-end px-10">
    <div className="relative h-[400px] w-[560px]">

      <div className="absolute left-1/4 top-1/2 w-120 -translate-x-1/2 -translate-y-1/2 rounded-[30px] bg-white p-4 shadow-[0_0_35px_rgba(30,144,255,0.8)]">
        <img
          src="/ChatGPT Image Aug 2, 2026, 10_24_35 PM 1.png"
          alt="Travel services"
          className="w-full object-contain"
        />
      </div>
<div className="absolute left-[-265] top-[62%] z-20 flex w-[190px] items-center gap-2 rounded-lg border border-blue-950 bg-white px-3 py-2 shadow-lg">
  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-blue-50 text-blue-600">
    <FaShieldAlt size={17} />
  </div>

  <div>
    <h4 className="text-[13px] font-bold text-gray-800">
      Airport Secured
    </h4>

    <p className="text-[11px] leading-tight text-gray-500">
      Always successful in process.
    </p>
  </div>
</div>

<div className="absolute right-0  top-[15%] z-20 flex w-[200px] items-center gap-2 rounded-lg border border-blue-950 bg-white px-3 py-2 shadow-lg">
  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-blue-50 text-blue-600">
    <FaCheckCircle size={17} />
  </div>

  <div>
    <h4 className="text-[13px] font-bold text-gray-800">
      Fast & Reliable
    </h4>

    <p className="text-[11px] leading-tight text-gray-500">
      We deliver messages faster than you think.
    </p>
  </div>
</div>

    </div>
  </div>
</div>
    </div>

  );
};
export default Hero
