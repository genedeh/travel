import {
  FaUsers,
  FaHome,
  FaFileAlt,
  FaArrowRight,
  FaMoon,
  FaSun,
  FaPlane,
  FaHotel,
  FaMapMarkedAlt,
} from "react-icons/fa";

const How = () => {
  const steps = [
    {
      icon: <FaUsers />,
      title: "1. Consultation",
      description: "Tell us your travel or logistics needs.",
    },
    {
      icon: <FaHome />,
      title: "2. Choose Service",
      description: "Select the service that suits you best.",
    },
    {
      icon: <FaFileAlt />,
      title: "3. Documentation",
      description: "We handle all required documents for you.",
    },
    {
      icon: <FaPlane />,
      title: "4. Travel or Delivery",
      description: "Enjoy a smooth journey or fast delivery.",
    },
  ];

  return (
    <div>
      <section className="w-full bg-white px-6 py-28">
        <div className="mx-auto max-w-[1500px]">
          <div className="text-center">
            <p className="mb-4 text-2xl font-bold uppercase tracking-widest text-blue-600">
              HOW IT WORKS
            </p>

            <h2 className="text-5xl font-extrabold text-gray-900 md:text-6xl">
              Simple Steps to Your Adventure
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-xl font-medium text-gray-600">
              From planning to arrival, we make your travel and logistics
              experience simple, smooth, and stress-free.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-16 md:grid-cols-4 md:gap-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative flex w-full items-center justify-center">
                  <div className="flex h-[110px] w-[110px] items-center justify-center rounded-full border-2 border-blue-600 bg-[#e5f1ff] text-[44px] text-blue-600 shadow-lg">
                    {step.icon}
                  </div>

                  {index < steps.length - 1 && (
                    <div className="absolute left-[calc(50%+55px)] top-1/2 hidden w-[calc(100%-110px)] -translate-y-1/2 border-t-2 border-dashed border-blue-900 md:block">
                      <span className="absolute right-[-5px] top-1/2 -translate-y-1/2 text-4xl font-bold text-blue-900">
                        →
                      </span>
                    </div>
                  )}
                </div>

                <h3 className="mt-8 text-2xl font-extrabold text-blue-600 md:text-3xl">
                  {step.title}
                </h3>

                <p className="mt-4 max-w-[280px] text-lg font-medium leading-7 text-gray-700 md:text-xl">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-6 py-24">
        <div className="mx-auto max-w-[1500px]">
          <div className="flex items-end justify-between">
            <div>
              <p className="ml-2 text-2xl font-bold text-blue-600">
                How it works
              </p>

              <h2 className="mt-3 text-5xl font-extrabold text-black">
                Explore Top Destinations
              </h2>
            </div>

            <a
              className="mr-2 flex items-center gap-3 text-xl font-bold text-blue-500 hover:text-blue-700"
              href="#"
            >
              View all Destinations
              <FaArrowRight size={22} />
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {[
              ["/image 9 (6).png", "Dubai", "$350.00"],
              ["/image 9.png", "United Kingdom", "$460.00"],
              ["/image 9 (1).png", "Canada", "$720.00"],
              ["/image 9 (2).png", "United State", "$400.00"],
              ["/image 9 (3).png", "South Africa", "$420.00"],
              ["/image 9 (4).png", "Ghana", "$210.00"],
            ].map(([image, name, price]) => (
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

   <section className="w-full bg-white px-8 py-16 text-black">
  <div className="mx-auto max-w-[1600px]">
    <div className="mb-10 flex items-center justify-between">
      <p className="text-base font-bold tracking-wider text-blue-500 uppercase">
        Featured Tour Packages
        <h2 className="mt-3 text-4xl font-extrabold text-black">
                Handpicked Packages Just for You
              </h2>
      </p>
      

      <a
        href="#"
        className="flex items-center gap-2 text-base font-bold text-blue-500 hover:underline"
      >
        View All Packages <span className="text-lg">&rarr;</span>
      </a>
      
    </div>

    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {[
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
      ].map((pkg, index) => (
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

          <div className="mt-5 flex flex-col flex-grow justify-between">
            <div>
              <h3 className="text-xl font-extrabold text-gray-900">
                {pkg.title}
              </h3>

              <div className="mt-4 inline-flex items-center gap-2.5 rounded-xl bg-blue-50/80 px-4 py-2 text-sm font-semibold text-gray-700">
                <FaMoon className="text-base text-blue-500" />
                <span>{pkg.nights} Nights</span>
                <span className="text-gray-400">/</span>
                <FaSun className="text-base text-blue-500" />
                <span>{pkg.days} Days</span>
              </div>

              <div className="mt-4 flex items-center gap-3 text-sm font-semibold text-gray-600">
                <div className="flex items-center gap-1.5">
                  <FaPlane className="text-base text-blue-500" />
                  <span>Flight</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <FaHotel className="text-base text-blue-500" />
                  <span>Hotel</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <FaMapMarkedAlt className="text-base text-blue-500" />
                  <span>Tour</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button className="flex items-center gap-1.5 rounded-xl bg-orange-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-600">
                Book Now <span className="text-base">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
    </div>
  );
};

export default How;