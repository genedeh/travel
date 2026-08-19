import { FaArrowRight, FaWhatsapp } from "react-icons/fa";

const Body = () => {
  const services = [
    {
      title: "Flight Reservations",
      description:
        "We book both domestic and international flights at the best prices for business, leisure, education or medical trips.",
      image: "/works (8).png",
    },
    {
      title: "Hotel Reservations",
      description:
        "We arrange hotel bookings worldwide, offering comfortable accommodation that suits different budgets.",
      image: "/works (1).png",
    },
    {
      title: "Visa Assistance",
      description:
        "Professional guidance through the visa application process for different countries with easy documentation.",
      image: "/works (2).png",
    },
    {
      title: "Tour Packages",
      description:
        "Exciting local and international tour packages for individuals, families, groups, schools and corporate organizations.",
      image: "/works (3).png",
    },
    {
      title: "International Passport Processing",
      description:
        "We guide you through the Nigerian international passport application and renewal process smoothly.",
      image: "/works (4).png",
    },
    {
      title: "Yellow Fever Card Processing",
      description:
        "We help you process your authentic Yellow Fever Card required for international travel.",
      image: "/works (5).png",
    },
    {
      title: "Local Ticketing",
      description:
        "We provide secure bookings for local transportation, making travel within Nigeria more convenient.",
      image: "/works (6).png",
    },
    {
      title: "Logistics Services",
      description:
        "We deliver parcels, documents and goods safely and efficiently for individuals and businesses.",
      image: "/works (7).png",
    },
  ];

  return (
    <section className="w-full bg-[#E8F1FF] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          WHAT WE OFFER
        </p>

        <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
          Comprehensive Travel & Logistics Services
        </h2>
      </div>

      <div className="mx-auto grid w-full max-w-[1536px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {services.map((item, index) => (
          <div
            key={index}
            className="flex w-full min-h-[480px] flex-col items-center justify-between rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7"
          >
            <div className="flex w-full flex-col items-center">
              <div className="mb-6 flex h-52 w-full items-center justify-center overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-contain"
                />
              </div>

              <h3 className="mb-3 text-xl font-bold leading-tight text-gray-900 sm:text-2xl">
                {item.title}
              </h3>

              <p className="mb-6 max-w-[320px] text-sm leading-relaxed text-gray-600 sm:text-base">
                {item.description}
              </p>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-base font-bold text-blue-600 transition-colors hover:text-blue-700"
            >
              <span>Learn More</span>
              <FaArrowRight size={14} />
            </a>
          </div>
        ))}
      </div>

      <div className="relative mx-auto mt-24 w-full max-w-[1536px] overflow-hidden rounded-3xl shadow-xl">
        <img
          src="/ChatGPT Image Aug 4, 2026, 05_50_00 PM 1 (1).png"
          alt="Need Help Choosing a Service?"
          className="h-[400px] w-full object-cover sm:h-[420px] lg:h-[300px]"
        />

        <div className="absolute inset-0 flex items-center">
          <div className="flex w-full items-center gap-5 px-6 sm:px-10 lg:px-16">
            <div className="hidden shrink-0 sm:block">
              <img
                src="/Frame 2147225201.png"
                className="h-19 w-19 lg:h-23 lg:w-23"
                alt=""
              />
            </div>

            <div className="max-w-2xl text-left">
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                Need Help Choosing a Service?
              </h2>

              <p className=" w-110 mt-4 text-base leading-relaxed text-white sm:text-lg">
                Our travel experts are ready to assist you with the best
                options for your needs.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button className="inline-flex items-center justify-center rounded-xl bg-[#ED7911] px-5 py-3 font-bold text-white transition hover:bg-[#d96808]">
                  Contact Us Now
                  <FaArrowRight className="ml-3" size={15} />
                </button>

                <button className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white bg-transparent px-5 py-3 font-bold text-white transition hover:bg-white hover:text-black">
                  <FaWhatsapp size={22} />
                  Chat On Whatsapp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;