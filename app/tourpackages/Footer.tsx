import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#061f3d] mt-20 text-white">
      <div className="mx-auto max-w-[1500px] px-8 py-20 lg:px-14">

        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1.4fr_1fr_1fr_1.4fr]">

          <div className="max-w-">
            <div className="mb-7 flex h-[75px] w-[150px] items-center">
              <img
                src="/WTW logo 4 1.png"
                alt="/WTW logo 4 1.png"
              className="w-120 h-50"
              />
            </div>

            <p className="text-lg leading-8 text-gray-300">
              WOW The World Logistics is a trusted travel and logistics
              company dedicated to making local and international travel
              simple, convenient, and stress-free.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-500">
              Get in Touch
            </h3>

            <div className="mt-8 flex flex-col gap-7">

              <div className="flex items-start gap-5">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-xl text-blue-500" />

                <p className="text-lg leading-7 text-gray-300">
                  8819 Ohio St. South Gate,
                  <br />
                  CA 90280
                </p>
              </div>

              <div className="flex items-center gap-5">
                <FaEnvelope className="shrink-0 text-xl text-blue-500" />

                <p className="text-lg text-gray-300">
                  WOWtheworld@gmail.com
                </p>
              </div>

              <div className="flex items-center gap-5">
                <FaPhoneAlt className="shrink-0 text-xl text-blue-500" />

                <p className="text-lg text-gray-300">
                  +234 934 567 6537
                </p>
              </div>

            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-500">
              Service
            </h3>

            <div className="mt-8 flex flex-col gap-5">
              <a
                href="#"
                className="text-lg text-gray-300 transition hover:text-blue-500"
              >
                Logistics Services
              </a>

              <a
                href="#"
                className="text-lg text-gray-300 transition hover:text-blue-500"
              >
                Flight Reservation
              </a>

              <a
                href="#"
                className="text-lg text-gray-300 transition hover:text-blue-500"
              >
                Hotel Bookings
              </a>

              <a
                href="#"
                className="text-lg text-gray-300 transition hover:text-blue-500"
              >
                Visa Assistance
              </a>

              <a
                href="#"
                className="text-lg text-gray-300 transition hover:text-blue-500"
              >
                Tour Packages
              </a>

              <a
                href="#"
                className="text-lg text-gray-300 transition hover:text-blue-500"
              >
                Passport Processing
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-500">
              Company
            </h3>

            <div className="mt-8 flex flex-col gap-5">
              <a
                href="#"
                className="text-lg text-gray-300 transition hover:text-blue-500"
              >
                Service
              </a>

              <a
                href="#"
                className="text-lg text-gray-300 transition hover:text-blue-500"
              >
                About Us
              </a>

              <a
                href="#"
                className="text-lg text-gray-300 transition hover:text-blue-500"
              >
                Tour Packages
              </a>

              <a
                href="#"
                className="text-lg text-gray-300 transition hover:text-blue-500"
              >
                Logistics
              </a>

              <a
                href="#"
                className="text-lg text-gray-300 transition hover:text-blue-500"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-500">
              Join a Newsletter
            </h3>

            <div className="mt-8">
              <label className="text-lg text-gray-300">
                Your Email
              </label>

              <input
                type="email"
                placeholder="Enter Your Email"
                className="mt-3 h-[52px] w-full rounded-md border border-blue-500 bg-gray-600/80 px-4 text-base text-white outline-none placeholder:text-gray-400 focus:border-blue-400"
              />

              <button className="mt-5 h-[48px] w-[160px] rounded-md bg-blue-600 text-base font-bold text-white transition hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        <div className="mt-16">
          <p className="text-sm text-gray-300">
            Copyright WOW The World Logistics
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;