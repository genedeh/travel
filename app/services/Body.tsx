import Image from "next/image";
import Link from "next/link";

const LearnMoreArrow = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M3.3335 10H16.6668M11.6668 15L16.6668 10L11.6668 5"
      stroke="#0363F1"
      strokeWidth="1.45"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HelpIcon = () => (
  <svg
    width="35"
    height="35"
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M17.4998 32.8125C28.0728 32.8125 32.0832 30.625 32.0832 22.6042M4.96036 26.0918C3.73244 25.7848 2.9165 24.6641 2.9165 23.3989V18.8942C2.9165 17.6283 3.73244 16.5069 4.96036 16.1999C6.14598 15.9031 7.70348 15.5699 9.23473 15.4095C10.2833 15.2994 11.2064 15.9141 11.3807 16.9531C11.5338 17.8602 11.6665 19.207 11.6665 21.1458C11.6665 23.0854 11.5331 24.4322 11.3807 25.3385C11.2057 26.3776 10.2833 26.9923 9.23473 26.8829C7.70348 26.7225 6.14598 26.3885 4.96036 26.0918Z"
      stroke="white"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M30.0392 26.0918C31.2671 25.7848 32.083 24.6641 32.083 23.3989V18.8942C32.083 17.6283 31.2671 16.5069 30.0392 16.1999C28.8535 15.9031 27.296 15.5699 25.7648 15.4095C24.7162 15.2994 23.7931 15.9141 23.6188 16.9531C23.4657 17.8602 23.333 19.207 23.333 21.1458C23.333 23.0854 23.4664 24.4322 23.6188 25.3385C23.7938 26.3776 24.7162 26.9923 25.7648 26.8829C27.296 26.7225 28.8535 26.3885 30.0392 26.0918Z"
      stroke="white"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M32.0832 18.8934V16.7708C32.0832 8.71646 25.5542 2.1875 17.4998 2.1875C9.44546 2.1875 2.9165 8.71646 2.9165 16.7708V18.8934M27.6761 15.6866C27.2605 10.5802 22.8636 6.5625 17.4998 6.5625C12.1361 6.5625 7.73921 10.5802 7.32359 15.6866"
      stroke="white"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ContactArrowIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M2 6.00001H9.5M7 8.82851L9.8285 6.00001L7 3.17151"
      stroke="white"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const WhatsappIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M9.5249 2.455C9.06643 1.99205 8.52041 1.62498 7.91866 1.37518C7.3169 1.12538 6.67144 0.997838 6.0199 0.999996C3.2899 0.999996 1.0649 3.225 1.0649 5.955C1.0649 6.83 1.2949 7.68 1.7249 8.43L1.0249 11L3.6499 10.31C4.3749 10.705 5.1899 10.915 6.0199 10.915C8.7499 10.915 10.9749 8.69 10.9749 5.96C10.9749 4.635 10.4599 3.39 9.5249 2.455ZM6.0199 10.075C5.2799 10.075 4.5549 9.875 3.9199 9.5L3.7699 9.41L2.2099 9.82L2.6249 8.3L2.5249 8.145C2.11368 7.48853 1.89536 6.72963 1.8949 5.955C1.8949 3.685 3.7449 1.835 6.0149 1.835C7.1149 1.835 8.1499 2.265 8.9249 3.045C9.30871 3.42693 9.61286 3.88127 9.81971 4.38166C10.0266 4.88205 10.132 5.41854 10.1299 5.96C10.1399 8.23 8.2899 10.075 6.0199 10.075ZM8.2799 6.995C8.1549 6.935 7.5449 6.635 7.4349 6.59C7.3199 6.55 7.2399 6.53 7.1549 6.65C7.0699 6.775 6.8349 7.055 6.7649 7.135C6.6949 7.22 6.6199 7.23 6.4949 7.165C6.3699 7.105 5.9699 6.97 5.4999 6.55C5.1299 6.22 4.8849 5.815 4.8099 5.69C4.7399 5.565 4.7999 5.5 4.8649 5.435C4.9199 5.38 4.9899 5.29 5.0499 5.22C5.1099 5.15 5.1349 5.095 5.1749 5.015C5.2149 4.93 5.1949 4.86 5.1649 4.8C5.1349 4.74 4.8849 4.13 4.7849 3.88C4.6849 3.64 4.5799 3.67 4.5049 3.665H4.2649C4.1799 3.665 4.0499 3.695 3.9349 3.82C3.8249 3.945 3.5049 4.245 3.5049 4.855C3.5049 5.465 3.9499 6.055 4.0099 6.135C4.0699 6.22 4.8849 7.47 6.1249 8.005C6.4199 8.135 6.6499 8.21 6.8299 8.265C7.1249 8.36 7.3949 8.345 7.6099 8.315C7.8499 8.28 8.3449 8.015 8.4449 7.725C8.5499 7.435 8.5499 7.19 8.5149 7.135C8.4799 7.08 8.4049 7.055 8.2799 6.995Z"
      fill="currentColor"
    />
  </svg>
);

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
    <section className="w-full bg-[#E0EEFF] px-4 py-[30px] sm:px-6 lg:px-8">
      <div className="mx-auto mb-[28px] max-w-3xl text-center">
        <p className="font-inter text-[14px] font-medium uppercase leading-none text-[#0363F1]">
          WHAT WE OFFER
        </p>

        <h2 className="mt-[8px] font-inter text-[20px] font-semibold leading-[25px] text-black">
          Comprehensive Travel & Logistics Services
        </h2>
      </div>

      <div className="mx-auto grid w-full max-w-[1120px] grid-cols-1 justify-items-center gap-[20px] sm:grid-cols-2 lg:grid-cols-4">
        {services.map((item, index) => (
          <div
            key={index}
            className="group flex h-[322px] w-full max-w-[255px] flex-col items-center rounded-[20px] bg-white px-[16px] pb-[14px] pt-[13px] text-center shadow-[0_0_4px_0_#00000026] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_26px_0_#00000024]"
          >
            <div className="relative h-[123px] w-full max-w-[202px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="202px"
                className="object-contain transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            <h3 className="mt-[12px] font-inter text-[18px] font-semibold leading-[25px] text-black">
              {item.title}
            </h3>

            <p className="mt-[7px] flex-1 font-inter text-[13px] font-medium leading-[25px] text-[#050505B2]">
              {item.description}
            </p>

            <Link
              href="/contact"
              className="mt-[8px] inline-flex items-center gap-[2px] font-inter text-[12px] font-semibold leading-none text-[#0363F1] transition-all duration-300 hover:gap-[7px] hover:text-[#024dbb]"
            >
              <span>Contact Us</span>
              <LearnMoreArrow />
            </Link>
          </div>
        ))}
      </div>

      <div className="relative mx-auto mt-[38px] min-h-[177px] w-full max-w-[1120px] overflow-hidden rounded-[20px] bg-[#051B48] text-white">
        <Image
          src="/services/cta-image.png"
          alt="Airplane window view"
          fill
          sizes="1120px"
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061947] via-[#06327B]/95 to-[#06327B]/10" />
        <div className="relative z-10 flex min-h-[177px] max-w-[520px] items-center gap-[24px] px-[37px] py-[26px]">
          <div className="flex h-[65px] w-[65px] shrink-0 items-center justify-center rounded-full border border-white bg-[#0363F1] p-[15px]">
            <HelpIcon />
          </div>

          <div>
            <h2 className="font-inter text-[22px] font-semibold leading-[25px] text-white">
              Need Help Choosing a Service?
            </h2>
            <p className="mt-[8px] max-w-[390px] font-inter text-[15px] font-normal leading-[25px] text-white">
              Our travel experts are ready to assist you with the best options
              for your needs.
            </p>

            <div className="mt-[16px] flex flex-wrap gap-[12px]">
              <Link
                href="/contact"
                className="inline-flex h-[30px] items-center justify-center gap-[9px] rounded-[5px] bg-[#ED7911] px-[15px] font-inter text-[11px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d96c0c]"
              >
                Contact Us Now
                <ContactArrowIcon />
              </Link>
              <a
                href="https://wa.me/2349345676537"
                className="inline-flex h-[30px] items-center justify-center gap-[7px] rounded-[5px] border border-white/80 px-[12px] font-inter text-[11px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#0B2B57]"
              >
                <WhatsappIcon />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
