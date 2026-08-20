import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-[750px] w-full overflow-hidden pt-[80px]">
      <Image
        src="/logistic (6).png"
        alt="Logistics"
        fill
        className="object-cover"
        priority
      />

      <div className="relative z-10 flex min-h-[670px] w-full flex-col justify-center px-6 sm:px-10 lg:px-14">
        <p className="mb-6 text-base font-bold text-blue-600 sm:text-lg md:text-xl">
          OUR LOGISTICS SERVICES
        </p>

        <h1 className="max-w-[650px] text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
          <span className="block">Fast. Secure. Reliable.</span>
          <span className="mt-3 block">Delivered with Care.</span>
        </h1>

        <p className="mt-7 w-full max-w-[560px] text-base leading-relaxed text-white sm:text-lg md:text-xl">
          At WOW The World Logistics, we provide dependable logistics solutions
          for individuals and businesses, from parcels to documents and bulk
          shipments, we ensure your items reach their destination safely and on
          time.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <button className="w-fit rounded-xl bg-blue-500 px-6 py-3 text-base font-bold text-white sm:px-7 sm:text-lg md:text-xl hover:bg-blue-600 transition-colors">
            Send a Package
          </button>

          <button className="w-fit rounded-xl border border-blue-500 bg-white px-6 py-3 text-base font-bold text-blue-500 sm:px-7 sm:text-lg md:text-xl hover:bg-gray-50 transition-colors">
            Request a Quote
          </button>
        </div>
      </div>

      <div className="absolute mr-20 bottom-0 right-0 z-20 w-full max-w-[520px] rounded-t-3xl bg-[#F4F6F9] p-6 sm:p-8 shadow-2xl">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5">
          Track Your Shipment
        </h2>

        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Enter Tracking Number"
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-gray-700 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm sm:text-base"
          />

          <button className="whitespace-nowrap rounded-xl bg-[#0066FF] px-6 py-3.5 text-sm sm:text-base font-semibold text-white hover:bg-blue-700 transition-colors shadow-sm">
            Track Now
          </button>
        </div>

        <a
          href="#"
          className="mt-4 inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#0066FF] hover:underline"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16v-4m0-4h.01"
            />
          </svg>
          <span>How to find your tracking number?</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;