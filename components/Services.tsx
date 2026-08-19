import {
  FaPassport,
} from "react-icons/fa";

const Services = () => {
  return (
    <div className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1600px]">
        <div className="text-center">
          <p className="mt-2 text-2xl font-semibold text-[#0363F1] sm:text-3xl">
            Our Services
          </p>

          <h1 className="mt-6 text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            Everything You Need,
          </h1>

          <h2 className="mt-2 text-3xl font-bold text-[#0363F1] sm:text-4xl lg:text-5xl">
            All in one Place
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-[#050505B2] sm:text-lg lg:text-xl">
            We provide a wide range of travel and logistic services designed
            to make your journey smooth, easy and stress-free.
          </p>
        </div>

        <div className="mx-auto mt-20 grid w-full max-w-[1500px] grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="flex min-h-[165px] w-full max-w-[330px] items-center gap-4 rounded-xl border border-black bg-white px-5 py-4 shadow-[2px_2px_8px_rgba(0,0,0,0.25)]">
            <div className="flex w-[72px] shrink-0 flex-col items-center">
              <div className="flex h-[68px] w-[68px] items-center justify-center rounded-xl border border-blue-300 bg-[#EAF2FF]">
                <svg
                  width="52"
                  height="52"
                  viewBox="-3.6 -3.6 43.20 43.20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#3B82F6"
                >
                  <path d="M35.77,8.16a2.43,2.43,0,0,0-1.9-2L28,4.87a4.5,4.5,0,0,0-3.65.79L7,18.3,2.14,18.1A1.86,1.86,0,0,0,.91,21.41l5,3.93c.6.73,1,.59,10.93-4.82l.93,9.42a1.36,1.36,0,0,0,.85,1.18,1.43,1.43,0,0,0,.54.1,1.54,1.54,0,0,0,1-.41l2.39-2.18a1.52,1.52,0,0,0,.46-.83L25.2,15.9c3.57-2,6.95-3.88,9.36-5.25A2.43,2.43,0,0,0,35.77,8.16Zm-2.2.75c-2.5,1.42-6,3.41-9.76,5.47l-.41.23L21.07,27.28l-1.47,1.34L18.5,17.32,17.17,18C10,22,7.61,23.16,6.79,23.52l-4.3-3.41,5.08.22,18-13.06a2.51,2.51,0,0,1,2-.45l5.85,1.26a.43.43,0,0,1,.35.37A.42.42,0,0,1,33.57,8.91Z" />
                  <path d="M7,12.54l3.56,1,1.64-1.19-4-1.16L10,10.09l5.47-.16,2.3-1.67L10,8.5a1.25,1.25,0,0,0-.7.17L6.67,10.2A1.28,1.28,0,0,0,7,12.54Z" />
                </svg>
              </div>
              <div className="mt-3 h-1 w-10 rounded-full bg-[#0363F1]" />
            </div>

            <div className="min-w-0 flex-1">
              <h2 className="text-lg font-bold leading-6 text-black">
                Flight Reservation
              </h2>
              <p className="mt-2 text-sm font-medium leading-5 text-[#050505B2]">
                Book domestic and international flights at the best prices
                with top airlines.
              </p>
            </div>
          </div>

          <div className="flex min-h-[165px] w-full max-w-[330px] items-center gap-4 rounded-xl border border-black bg-white px-5 py-4 shadow-[2px_2px_8px_rgba(0,0,0,0.25)]">
            <div className="flex w-[72px] shrink-0 flex-col items-center">
              <div className="flex h-[68px] w-[68px] items-center justify-center rounded-xl border border-blue-300 bg-[#EAF2FF]">
                <img src="/hotel.png" className="h-11 w-11" alt="" />
              </div>
              <div className="mt-3 h-1 w-10 rounded-full bg-[#0363F1]" />
            </div>

            <div className="min-w-0 flex-1">
              <h2 className="text-lg font-bold leading-6 text-black">
                Hotel Bookings
              </h2>
              <p className="mt-2 text-sm font-medium leading-5 text-[#050505B2]">
                Find and book the perfect hotels that suit your budget and
                comfort.
              </p>
            </div>
          </div>

          <div className="flex min-h-[165px] w-full max-w-[330px] items-center gap-4 rounded-xl border border-black bg-white px-5 py-4 shadow-[2px_2px_8px_rgba(0,0,0,0.25)]">
            <div className="flex w-[72px] shrink-0 flex-col items-center">
              <div className="flex h-[68px] w-[68px] items-center justify-center rounded-xl border border-blue-300 bg-[#EAF2FF]">
                <FaPassport className="text-[#0363F1]" size={40} />
              </div>
              <div className="mt-3 h-1 w-10 rounded-full bg-[#0363F1]" />
            </div>

            <div className="min-w-0 flex-1">
              <h2 className="text-lg font-bold leading-6 text-black">
                Visa Assistance
              </h2>
              <p className="mt-2 text-sm font-medium leading-5 text-[#050505B2]">
                Get expert help with visa applications and documents for
                hassle-free travel.
              </p>
            </div>
          </div>

          <div className="flex min-h-[165px] w-full max-w-[330px] items-center gap-4 rounded-xl border border-black bg-white px-5 py-4 shadow-[2px_2px_8px_rgba(0,0,0,0.25)]">
            <div className="flex w-[72px] shrink-0 flex-col items-center">
              <div className="flex h-[68px] w-[68px] items-center justify-center rounded-xl border border-blue-300 bg-[#EAF2FF]">
                <FaPassport className="text-[#0363F1]" size={40} />
              </div>
              <div className="mt-3 h-1 w-10 rounded-full bg-[#0363F1]" />
            </div>

            <div className="min-w-0 flex-1">
              <h2 className="text-lg font-bold leading-6 text-black">
                Passport Processing
              </h2>
              <p className="mt-2 text-sm font-medium leading-5 text-[#050505B2]">
                Fast and reliable passport processing to get ready for your
                next trip.
              </p>
            </div>
          </div>

          <div className="flex min-h-[165px] w-full max-w-[330px] items-center gap-4 rounded-xl border border-black bg-white px-5 py-4 shadow-[2px_2px_8px_rgba(0,0,0,0.25)]">
            <div className="flex w-[72px] shrink-0 flex-col items-center">
              <div className="flex h-[68px] w-[68px] items-center justify-center rounded-xl border border-blue-300 bg-[#EAF2FF]">
                <img src="/secure.png" alt="" className="h-11 w-11" />
              </div>
              <div className="mt-3 h-1 w-10 rounded-full bg-[#0363F1]" />
            </div>

            <div className="min-w-0 flex-1">
              <h2 className="text-lg font-bold leading-6 text-black">
                Travel Insurance
              </h2>
              <p className="mt-2 text-sm font-medium leading-5 text-[#050505B2]">
                Comprehensive travel insurance plans for a safe and worry-free
                journey.
              </p>
            </div>
          </div>

          <div className="flex min-h-[165px] w-full max-w-[330px] items-center gap-4 rounded-xl border border-black bg-white px-5 py-4 shadow-[2px_2px_8px_rgba(0,0,0,0.25)]">
            <div className="flex w-[72px] shrink-0 flex-col items-center">
              <div className="flex h-[68px] w-[68px] items-center justify-center rounded-xl border border-blue-300 bg-[#EAF2FF]">
                <img src="/Box.png" alt="" className="h-11 w-11" />
              </div>
              <div className="mt-3 h-1 w-10 rounded-full bg-[#0363F1]" />
            </div>

            <div className="min-w-0 flex-1">
              <h2 className="text-lg font-bold leading-6 text-black">
                Safe & Secure Cargo
              </h2>
              <p className="mt-2 text-sm font-medium leading-5 text-[#050505B2]">
                We deliver your cargo safely and securely to any part of the
                world with ease.
              </p>
            </div>
          </div>

          <div className="flex min-h-[165px] w-full max-w-[330px] items-center gap-4 rounded-xl border border-black bg-white px-5 py-4 shadow-[2px_2px_8px_rgba(0,0,0,0.25)]">
            <div className="flex w-[72px] shrink-0 flex-col items-center">
              <div className="flex h-[68px] w-[68px] items-center justify-center rounded-xl border border-blue-300 bg-[#EAF2FF]">
                <img src="/beach.png" alt="" className="h-11 w-11" />
              </div>
              <div className="mt-3 h-1 w-10 rounded-full bg-[#0363F1]" />
            </div>

            <div className="min-w-0 flex-1">
              <h2 className="text-lg font-bold leading-6 text-black">
                Tour Packages
              </h2>
              <p className="mt-2 text-sm font-medium leading-5 text-[#050505B2]">
                Explore amazing destinations with our curated tour packages.
              </p>
            </div>
          </div>

          <div className="flex min-h-[165px] w-full max-w-[330px] items-center gap-4 rounded-xl border border-black bg-white px-5 py-4 shadow-[2px_2px_8px_rgba(0,0,0,0.25)]">
            <div className="flex w-[72px] shrink-0 flex-col items-center">
              <div className="flex h-[68px] w-[68px] items-center justify-center rounded-xl border border-blue-300 bg-[#EAF2FF]">
                <img
                  className="h-11 w-11 object-contain"
                  src="/Vector (2).png"
                  alt=""
                />
              </div>
              <div className="mt-3 h-1 w-10 rounded-full bg-[#0363F1]" />
            </div>

            <div className="min-w-0 flex-1">
              <h2 className="text-lg font-bold leading-6 text-black">
                Logistic Services
              </h2>
              <p className="mt-2 text-sm font-medium leading-5 text-[#050505B2]">
                Reliable logistics solutions for businesses and individuals
                worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;