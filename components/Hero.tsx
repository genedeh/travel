import { FaPlaneDeparture, FaGlobe, FaStar,FaShieldAlt,FaCheckCircle } from "react-icons/fa";
import { Aladin } from "next/font/google";

const aladin = Aladin({
  weight: "400",
  subsets: ["latin"],
});
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
            <span className={`${aladin.className} text-8xl text-[#ED7911]`}>
              Confidence
            </span>
          </h2>

          <p className="mt-8 text-xl font-semibold text-gray-300">
            Flights, Hotels, Visas, Tours, Passports Processing and Reliable
            Logistics - all in one place
          </p>

          <div className="mt-9 flex gap-6">
         <button className="flex items-center gap-2 rounded-xl bg-blue-500 px-6 py-4 text-xl font-bold text-white">
  <span>Book a Flight</span>

  <svg
    width="35"
    height="35"
    viewBox="-3.6 -3.6 43.20 43.20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
    className="shrink-0"
  >
    <path d="M35.77,8.16a2.43,2.43,0,0,0-1.9-2L28,4.87a4.5,4.5,0,0,0-3.65.79L7,18.3,2.14,18.1A1.86,1.86,0,0,0,.91,21.41l5,3.93c.6.73,1,.59,10.93-4.82l.93,9.42a1.36,1.36,0,0,0,.85,1.18,1.43,1.43,0,0,0,.54.1,1.54,1.54,0,0,0,1-.41l2.39-2.18a1.52,1.52,0,0,0,.46-.83L25.2,15.9c3.57-2,6.95-3.88,9.36-5.25A2.43,2.43,0,0,0,35.77,8.16Zm-2.2.75c-2.5,1.42-6,3.41-9.76,5.47l-.41.23L21.07,27.28l-1.47,1.34L18.5,17.32,17.17,18C10,22,7.61,23.16,6.79,23.52l-4.3-3.41,5.08.22,18-13.06a2.51,2.51,0,0,1,2-.45l5.85,1.26a.43.43,0,0,1,.35.37A.42.42,0,0,1,33.57,8.91Z" />

    <path d="M7,12.54l3.56,1,1.64-1.19-4-1.16L10,10.09l5.47-.16,2.3-1.67L10,8.5a1.25,1.25,0,0,0-.7.17L6.67,10.2A1.28,1.28,0,0,0,7,12.54Z" />
  </svg>
</button>

            <button className="rounded-xl bg-white px-6 py-4 text-xl font-bold text-black">
              Explore Services
            </button>
          </div>
    <div className="mt-15 flex w-full items-center justify-between gap-2 text-xs sm:gap-4 sm:text-sm md:gap-8 md:text-lg">
  <h2 className="flex items-center gap-1 whitespace-nowrap text-white sm:gap-2">
    <svg
      width="30"
      height="30"
      viewBox="-3.6 -3.6 43.2 43.2"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className="h-5 w-5 shrink-0 sm:h-7 sm:w-7"
    >
      <path
        d="M35.77 8.16a2.43 2.43 0 0 0-1.9-2L28 4.87a4.5 4.5 0 0 0-3.65.79L7 18.3l-4.86-.2A1.86 1.86 0 0 0 .91 21.41l5 3.93c.6.73 1 .59 10.93-4.82l.93 9.42a1.36 1.36 0 0 0 .85 1.18 1.43 1.43 0 0 0 .54.1 1.54 1.54 0 0 0 1-.41l2.39-2.18a1.52 1.52 0 0 0 .46-.83L25.2 15.9c3.57-2 6.95-3.88 9.36-5.25a2.43 2.43 0 0 0 1.21-2.49Z"
        stroke="white"
        strokeWidth="1.8"
      />
      <path
        d="M7 12.54l3.56 1 1.64-1.19-4-1.16L10 10.09l5.47-.16 2.3-1.67L10 8.5a1.25 1.25 0 0 0-.7.17L6.67 10.2A1.28 1.28 0 0 0 7 12.54Z"
        stroke="white"
        strokeWidth="1.8"
      />
    </svg>

    <span>10,000+ Happy Travelers</span>
  </h2>

  <h2 className="flex items-center gap-1 whitespace-nowrap text-white sm:gap-2">
<img src="/loggistic (2).png" className="w-6 h-6" alt="" />
    <span>40+ Countries Covered</span>
  </h2>

  <h2 className="flex items-center gap-1 whitespace-nowrap text-white sm:gap-2">
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0 sm:h-7 sm:w-7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 3.5L14.6 8.8L20.5 9.65L16.25 13.8L17.25 19.65L12 16.9L6.75 19.65L7.75 13.8L3.5 9.65L9.4 8.8L12 3.5Z"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>

    <span>98% Customer Satisfaction</span>
  </h2>
</div>
        </div>
      </div> 
      <div className="bg-black">
  <div className="flex min-h-screen items-center   justify-end px-10">
    <div className="relative h-[350px] w-[500px]">

      <div className="absolute left-1/4 top-1/2 w-100 -translate-x-1/2 -translate-y-1/2 rounded-[30px] bg-white p-4 shadow-[0_0_35px_rgba(30,144,255,0.8)]">
        <img
          src="/ChatGPT Image Aug 2, 2026, 10_24_35 PM 1.png"
          alt="Travel services"
          className="w-full object-contain"
        />
      </div>
<div className="absolute left-[-240] top-[62%] z-20 flex w-[190px] items-center gap-2 rounded-lg border border-blue-950 bg-white px-3 py-2 shadow-lg">
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
