import Link from "next/link";

const TravelersIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <g clipPath="url(#travelers)">
      <path d="M6.56251 10.3125V17.8125M12.1125 15C11.8825 13.6057 11.1361 12.349 10.0218 11.4799C8.90746 10.6108 7.50683 10.193 6.09848 10.3096C4.69013 10.4262 3.37726 11.0686 2.42098 12.1091C1.46471 13.1495 0.935107 14.5118 0.937508 15.925V19.675H2.81251L3.75001 29.0625H9.37501L10.3125 19.6875M14.0625 22.5H29.0625M21.5625 22.5V25M18.75 17.8125V16.25C18.75 15.5041 19.0463 14.7887 19.5738 14.2613C20.1012 13.7338 20.8166 13.4375 21.5625 13.4375C22.3084 13.4375 23.0238 13.7338 23.5512 14.2613C24.0787 14.7887 24.375 15.5041 24.375 16.25V17.8125M2.81251 4.6875C2.81251 5.68206 3.2076 6.63589 3.91086 7.33915C4.61412 8.04241 5.56795 8.4375 6.56251 8.4375C7.55707 8.4375 8.5109 8.04241 9.21416 7.33915C9.91742 6.63589 10.3125 5.68206 10.3125 4.6875C10.3125 3.69294 9.91742 2.73911 9.21416 2.03585C8.5109 1.33259 7.55707 0.9375 6.56251 0.9375C5.56795 0.9375 4.61412 1.33259 3.91086 2.03585C3.2076 2.73911 2.81251 3.69294 2.81251 4.6875ZM15.3125 17.8125H27.8125C27.8125 17.8125 29.0625 17.8125 29.0625 19.0625V27.8125C29.0625 27.8125 29.0625 29.0625 27.8125 29.0625H15.3125C15.3125 29.0625 14.0625 29.0625 14.0625 27.8125V19.0625C14.0625 19.0625 14.0625 17.8125 15.3125 17.8125Z" stroke="white" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs><clipPath id="travelers"><rect width="30" height="30" fill="white" /></clipPath></defs>
  </svg>
);

const CountriesIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="15" cy="15" r="13.5" stroke="white" strokeWidth="1.875" />
    <path d="M3 14.5C5.3 13.3 7 13.2 8.1 14C9.7 15.1 9.9 19.8 13.6 17.6C17.3 15.3 12 14.5 13.2 11.2C14.3 7.9 18.1 10.5 18.5 6.9C18.7 4.5 15.9 3.6 9.9 4.2M24 5C19.7 8.7 18.2 11 19.5 11.8C21.4 13 22.2 11.3 24.6 11.8C27 12.3 26.5 15.5 25.2 15.5C24 15.5 17.5 14.7 17.8 18.5C18.2 22.3 22 22.9 22 25" stroke="white" strokeWidth="1.875" strokeLinecap="round" />
  </svg>
);

const DeliveriesIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M26.25 9.375L21.25 11.875M21.25 11.875L20.625 12.1875L15 15M21.25 11.875V16.25M21.25 11.875L9.375 5.625M15 15L3.75 9.375M15 15V26.875M19.4725 4.2275L21.9725 5.54C24.6612 6.95125 26.0062 7.65625 26.7537 8.925C27.5 10.1925 27.5 11.7713 27.5 14.9275V15.0738C27.5 18.2287 27.5 19.8075 26.7537 21.075C26.0062 22.3438 24.6612 23.05 21.9725 24.4613L19.4725 25.7725C17.2775 26.9238 16.18 27.5 15 27.5C13.82 27.5 12.7225 26.925 10.5275 25.7725L8.0275 24.46C5.33875 23.0488 3.99375 22.3438 3.24625 21.075C2.5 19.8075 2.5 18.2288 2.5 15.075V14.9287C2.5 11.7725 2.5 10.1937 3.24625 8.92625C3.99375 7.6575 5.33875 6.95125 8.0275 5.54125L10.5275 4.22875C12.7225 3.07625 13.82 2.5 15 2.5C16.18 2.5 17.2775 3.075 19.4725 4.2275Z" stroke="white" strokeWidth="1.875" strokeLinecap="round" />
  </svg>
);

const SatisfactionIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M15 19.2375L10.3 22.075L11.5375 16.725L7.3875 13.125L12.8625 12.6625L15 7.6125L17.1375 12.6625L22.6125 13.125L18.4625 16.725L19.7 22.075M27.5 11.55L18.5125 10.7875L15 2.5L11.4875 10.7875L2.5 11.55L9.3125 17.4625L7.275 26.25L15 21.5875L22.725 26.25L20.675 17.4625L27.5 11.55Z" fill="white" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M9.40756 1.79255C9.90556 1.61255 10.3876 2.09455 10.2076 2.59255L7.38456 10.3975C7.20406 10.8975 6.52206 10.958 6.25606 10.4985L4.76506 7.92355C4.79708 7.90378 4.82677 7.88047 4.85356 7.85405L7.35356 5.35405C7.44464 5.25974 7.49503 5.13344 7.49389 5.00234C7.49276 4.87125 7.44017 4.74584 7.34747 4.65314C7.25476 4.56043 7.12936 4.50785 6.99826 4.50671C6.86716 4.50557 6.74086 4.55597 6.64656 4.64705L4.14656 7.14705C4.11999 7.17365 4.09651 7.20317 4.07656 7.23505L1.50156 5.74405C1.04156 5.47805 1.10256 4.79655 1.60206 4.61555L9.40756 1.79255Z" fill="white" />
  </svg>
);

const stats = [
  { number: "10,000+", label: "Happy Travelers", icon: <TravelersIcon /> },
  { number: "40+", label: "Countries Covered", icon: <CountriesIcon /> },
  { number: "5,000+", label: "Successful Deliveries", icon: <DeliveriesIcon /> },
  { number: "98%", label: "Customer Satisfaction", icon: <SatisfactionIcon /> },
];

const AboutWhyChooseWow = () => {
  return (
    <section className="w-full bg-white px-4 py-[45px]">
      <div className="mx-auto flex min-h-[202px] max-w-[1200px] flex-col gap-9 rounded-[20px] bg-gradient-to-r from-[#0B2B57] to-[#1156B0] px-[30px] py-[30px] text-white lg:flex-row lg:items-center lg:gap-[86px]">
        <div className="w-full max-w-[300px]">
          <p className="font-inter text-[13px] font-semibold uppercase leading-none text-white">
            Why Choose Wow?
          </p>
          <div className="mt-[12px] h-0 w-[50px] border-t-[4px] border-[#0363F1]" />
          <p className="mt-[20px] font-inter text-[13px] font-medium leading-none text-white">
            We combine experience, global partnership, and dedicated support to
            give you the best travel and logistics experience.
          </p>
          <Link href="/contact" className="mt-[23px] flex h-[30px] items-center gap-[7px] rounded-[5px] bg-[#ED7911] px-[10px] font-inter text-[11px] font-medium leading-none text-white transition hover:bg-[#d96c0c]">
            Send a Package Now
            <ArrowIcon />
          </Link>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-y-8 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex min-h-[84px] flex-col items-center justify-center text-center ${
                index > 0 ? "md:border-l md:border-white/25" : ""
              }`}
            >
              {stat.icon}
              <p className="mt-[9px] font-['Poppins'] text-[22px] font-semibold leading-[129%] text-white">
                {stat.number}
              </p>
              <p className="mt-[3px] font-inter text-[13px] font-semibold leading-none text-white">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutWhyChooseWow;
