import {
  FaArrowRight,
  FaSun,
  FaPaperPlane,
  FaHouseChimney,
} from "react-icons/fa6";

const How = () => {
  const steps = [
    {
      icon: <img src="/consult.png" alt="" className="h-12 w-12" />,
      title: "1. Consultation",
      description: "Tell us your travel or logistics needs.",
    },
    {
      icon: <FaHouseChimney />,
      title: "2. Choose Service",
      description: "Select the service that suits you best.",
    },
    {
      icon: <img src="/document.png" alt="" className="h-12 w-12" />,
      title: "3. Documentation",
      description: "We handle all required documents for you.",
    },
    {
      icon: <img src="/airplane2.png" alt="" className="h-12 w-12" />,
      title: "4. Travel or Delivery",
      description: "Enjoy a smooth journey or fast delivery.",
    },
  ];

  const destinations = [
    ["/image 9 (6).png", "Dubai", "$350.00"],
    ["/image 9.png", "United Kingdom", "$460.00"],
    ["/image 9 (1).png", "Canada", "$720.00"],
    ["/image 9 (2).png", "United State", "$400.00"],
    ["/image 9 (3).png", "South Africa", "$420.00"],
    ["/image 9 (4).png", "Ghana", "$210.00"],
  ];

  const packages = [
    {
      image: "/image 10.png",
      title: "Dubai Gateway",
      nights: 4,
      days: 5,
    },
    {
      image: "/image 11.png",
      title: "London Experience",
      nights: 6,
      days: 7,
    },
    {
      image: "/image 12.png",
      title: "Canada Discovery",
      nights: 7,
      days: 8,
    },
    {
      image: "/image 13.png",
      title: "Turkey Delight",
      nights: 5,
      days: 6,
    },
  ];

  const logistics = [
    {
      image: "/loggistic (1).png",
      title: "Parcel Delivery",
    },
    {
      image: "/loggistic (4).png",
      title: "Document Delivery",
    },
    {
      image: "/loggistic (3).png",
      title: "Business Logistics",
    },
    {
      image: "/loggistic (2).png",
      title: "Nationwide Coverage",
    },
  ];

  return (
    <div>
      <section className="w-full bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[1500px]">
          <div className="text-center">
            <p className="mb-4 text-lg font-bold uppercase tracking-widest text-blue-600 sm:text-2xl">
              HOW IT WORKS
            </p>

            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
              Simple Steps to Your Adventure
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-7 text-gray-600 sm:text-lg md:text-xl">
              From planning to arrival, we make your travel and logistics
              experience simple, smooth, and stress-free.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-14 sm:mt-20 md:grid-cols-4 md:gap-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative flex w-full items-center justify-center">
                  <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full border-2 border-blue-600 bg-[#e5f1ff] text-[44px] text-blue-600 shadow-lg sm:h-[110px] sm:w-[110px]">
                    {step.icon}
                  </div>

                  {index < steps.length - 1 && (
                    <div className="absolute left-[calc(50%+55px)] right-[-50%] top-1/2 hidden -translate-y-1/2 items-center md:flex">
                      <div className="w-full border-t-2 border-dashed border-blue-900" />

                      <div className="absolute left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-white">
                        <FaArrowRight
                          className="text-blue-900"
                          size={22}
                        />
                      </div>
                    </div>
                  )}
                </div>

                <h3 className="mt-7 text-xl font-extrabold text-blue-600 sm:text-2xl md:text-3xl">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-[280px] text-base font-medium leading-7 text-gray-700 sm:text-lg md:text-xl">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-[1500px]">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="ml-0 text-lg font-bold text-blue-600 sm:ml-2 sm:text-xl">
                How it works
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-black sm:text-4xl md:text-5xl">
                Explore Top Destinations
              </h2>
            </div>

            <a
              className="flex items-center gap-3 text-lg font-bold text-blue-500 hover:text-blue-700 sm:text-xl"
              href="#"
            >
              View all Destinations
              <FaArrowRight size={20} />
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {destinations.map(([image, name, price]) => (
              <div
                key={name}
                className="relative h-[270px] overflow-hidden rounded-2xl shadow-lg"
              >
                <img
                  className="h-full w-full object-cover transition duration-500 hover:scale-110"
                  src={image}
                  alt={name}
                />

                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 to-transparent" />

                <div className="absolute bottom-5 left-5 flex flex-col">
                  <h3 className="text-2xl font-bold text-white">{name}</h3>

                  <p className="mt-1 text-lg text-gray-300">
                    from{" "}
                    <span className="font-bold text-white">{price}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-16 text-black sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-lg font-bold text-blue-600 sm:text-xl">
                Featured Tour Packages
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-black sm:text-4xl">
                Handpicked Packages Just for You
              </h2>
            </div>

            <a
              href="#"
              className="flex items-center gap-2 text-base font-bold text-blue-500 hover:underline"
            >
              View All Packages
              <FaArrowRight />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="flex flex-col justify-between overflow-hidden rounded-3xl bg-white p-4 text-black shadow-lg"
              >
                <div className="h-[240px] w-full overflow-hidden rounded-2xl">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-grow flex-col justify-between">
                  <div>
                    <h3 className="mt-5 text-xl font-extrabold text-gray-900">
                      {pkg.title}
                    </h3>

                    <div className="mt-4 inline-flex flex-wrap items-center gap-2.5 rounded-xl bg-blue-50/80 px-4 py-2 text-sm font-semibold text-gray-700">
                      <img
                        src="/moon.png"
                        alt=""
                        className="h-5 w-5 object-contain"
                      />

                      <span>{pkg.nights} Nights</span>

                      <span className="text-gray-400">/</span>

                      <FaSun className="text-base text-blue-500" />

                      <span>{pkg.days} Days</span>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-3 text-sm font-semibold text-gray-600">
                      <div className="flex items-center gap-1.5">
                        <img
                          src="/airplane2.png"
                          className="h-5 w-5 object-contain"
                          alt=""
                        />
                        <span>Flight</span>
                      </div>

                      <span>•</span>

                      <div className="flex items-center gap-1.5">
                        <img
                          src="/sleep.png"
                          className="h-5 w-6 object-contain"
                          alt=""
                        />
                        <span>Hotel</span>
                      </div>

                      <span>•</span>

                      <div className="flex items-center gap-1.5">
                        <img
                          src="/tour.png"
                          className="h-5 w-6 object-contain"
                          alt=""
                        />
                        <span>Tour</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end">
                    <button className="flex items-center gap-1.5 rounded-xl bg-orange-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-600">
                      Book Now
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px] overflow-hidden rounded-[30px]">
          <div className="flex min-h-[400px] flex-col lg:flex-row">
            <div className="h-[260px] w-full sm:h-[350px] lg:h-auto lg:w-[42%]">
              <img
                src="/image 2.png"
                alt="Logistics"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex w-full flex-col justify-between bg-gradient-to-r from-[#123968] via-[#124b91] to-[#1764b9] px-6 py-10 text-white sm:px-10 lg:w-[58%] lg:flex-row lg:items-center lg:px-12 xl:px-16">
              <div className="max-w-[500px]">
                <p className="text-sm font-medium uppercase tracking-wide text-blue-200">
                  Logistics Services
                </p>

                <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                  Fast & Secure Logistics
                  <br />
                  Solutions
                </h2>

                <p className="mt-3 max-w-[420px] text-sm leading-5 text-blue-100 sm:text-base">
                  We deliver parcels, documents and goods safely and
                  efficiently to any location.
                </p>

                <button className="mt-5 flex items-center gap-2 rounded-md bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600">
                  Send a Package Now
                  <FaPaperPlane />
                </button>
              </div>

              <div className="mt-10 flex flex-col gap-5 lg:mt-0">
                {logistics.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-orange-400 bg-blue-900">
                      <img
                        src={item.image}
                        alt=""
                        className="h-6 w-6 object-contain"
                      />
                    </div>

                    <span className="text-base font-medium lg:text-lg">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default How;