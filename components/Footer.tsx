import Image from "next/image";
import Link from "next/link";

const MapIcon = () => (
  <svg
    width="14"
    height="20"
    viewBox="0 0 14 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 0C10.87 0 14 3.13 14 7C14 12.25 7 20 7 20C7 20 0 12.25 0 7C0 3.13 3.13 0 7 0ZM2 7C2 9.85 4.92 14.21 7 16.88C9.12 14.19 12 9.88 12 7C12 4.24 9.76 2 7 2C4.24 2 2 4.24 2 7ZM7 9.5C5.61929 9.5 4.5 8.38071 4.5 7C4.5 5.61929 5.61929 4.5 7 4.5C8.38071 4.5 9.5 5.61929 9.5 7C9.5 8.38071 8.38071 9.5 7 9.5Z"
      fill="#3A86FF"
    />
  </svg>
);

const MailIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"
      fill="#3A86FF"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.54 5C6.6 5.89 6.75 6.76 6.99 7.59L5.79 8.79C5.38 7.59 5.12 6.32 5.03 5H6.54ZM16.4 17.02C17.25 17.26 18.12 17.41 19 17.47V18.96C17.68 18.87 16.41 18.61 15.2 18.21L16.4 17.02ZM7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.51C21 15.96 20.55 15.51 20 15.51C18.76 15.51 17.55 15.31 16.43 14.94C16.33 14.9 16.22 14.89 16.12 14.89C15.86 14.89 15.61 14.99 15.41 15.18L13.21 17.38C10.38 15.93 8.06 13.62 6.62 10.79L8.82 8.59C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3Z"
      fill="#3A86FF"
    />
  </svg>
);

const serviceLinks = [
  { label: "Logistics Services", href: "/logistics" },
  { label: "Flight Reservation", href: "/services" },
  { label: "Hotel Bookings", href: "/services" },
  { label: "Visa Assistance", href: "/services" },
  { label: "Tour Packages", href: "/tourpackages" },
  { label: "Passport Processing", href: "/services" },
];

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "Service", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Tour Packages", href: "/tourpackages" },
  { label: "Logistics", href: "/logistics" },
  { label: "Contact Us", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#051D39] text-[#CFD3D7]">
      <div className="mx-auto max-w-[1280px] px-6 pb-[22px] pt-[48px] lg:px-[50px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[227px_270px_180px_150px] lg:justify-between lg:gap-[42px]">
          <div>
            <Image
              src="/logo.png"
              alt="WOW The World Logistics"
              width={173}
              height={97}
              className="h-[97px] w-[173px] object-contain"
            />

            <p className="mt-[16px] max-w-[227px] font-['Roboto'] text-[16px] font-normal leading-[1.5] text-[#CFD3D7]">
              WOW The World Logistics is a trusted travel and logistics company
              dedicated to making local and international travel simple,
              convenient, and stress-free.
            </p>
          </div>

          <div className="lg:pl-[4px] lg:pt-[40px]">
            <h3 className="font-['Raleway'] text-[16px] font-bold leading-[22px] text-[#3A86FF]">
              Get in Touch
            </h3>

            <div className="mt-[27px] flex flex-col gap-[28px]">
              <div className="flex items-start gap-[20px]">
                <span className="flex h-6 w-6 shrink-0 items-start justify-center pt-[2px]">
                  <MapIcon />
                </span>

                <p className="font-['Roboto'] text-[16px] font-normal leading-[1.5] text-[#CFD3D7]">
                  8819 Ohio St. South Gate,
                  <br />
                  CA 90280
                </p>
              </div>

              <div className="flex items-center gap-[20px]">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center">
                  <MailIcon />
                </span>

                <a
                  href="mailto:WOWtheworld@gmail.com"
                  className="font-['Roboto'] text-[16px] font-normal leading-[1.5] text-[#CFD3D7] transition hover:text-[#3A86FF]"
                >
                  WOWtheworld@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-[20px]">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center">
                  <PhoneIcon />
                </span>

                <a
                  href="tel:+2349345676537"
                  className="font-['Roboto'] text-[16px] font-normal leading-[1.5] text-[#CFD3D7] transition hover:text-[#3A86FF]"
                >
                  +234 934 567 6537
                </a>
              </div>
            </div>
          </div>

          <div className="lg:pt-[40px]">
            <h3 className="font-['Raleway'] text-[16px] font-bold leading-[22px] text-[#3A86FF]">
              Service
            </h3>

            <nav className="mt-[27px] flex flex-col gap-[16px]">
              {serviceLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-['Roboto'] text-[16px] font-medium leading-[1.5] text-[#CFD3D7] transition hover:text-[#3A86FF]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="lg:pt-[40px]">
            <h3 className="font-['Raleway'] text-[16px] font-bold leading-[22px] text-[#3A86FF]">
              Company
            </h3>

            <nav className="mt-[27px] flex flex-col gap-[16px]">
              {companyLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-['Roboto'] text-[16px] font-medium leading-[1.5] text-[#CFD3D7] transition hover:text-[#3A86FF]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <p className="mt-[38px] font-['Roboto'] text-[13px] font-normal leading-[1.5] text-[#CFD3D7]">
          Copyright WOW The World Logistics
        </p>
      </div>
    </footer>
  );
};

export default Footer;
