import Image from "next/image";
import Link from "next/link";

const LearnMoreArrow = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M3.3335 10H16.6668M11.6668 15L16.6668 10L11.6668 5" stroke="#0363F1" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ParcelIcon = () => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M23.0326 6.73749L15.2201 2.44061C15.1047 2.37715 14.9752 2.34387 14.8435 2.34387C14.7118 2.34387 14.5823 2.37715 14.4669 2.44061L6.65444 6.73749C6.53195 6.80493 6.42981 6.90401 6.35867 7.02439C6.28753 7.14477 6.25 7.28203 6.25 7.42186C6.25 7.56169 6.28753 7.69896 6.35867 7.81934C6.42981 7.93972 6.53195 8.0388 6.65444 8.10624L14.0623 12.1805V20.5547L11.6904 19.25L10.9373 20.618L14.4669 22.5594C14.5823 22.6228 14.7118 22.6561 14.8435 22.6561C14.9752 22.6561 15.1047 22.6228 15.2201 22.5594L23.0326 18.2625C23.1551 18.1951 23.2573 18.096 23.3285 17.9756C23.3997 17.8553 23.4372 17.718 23.4373 17.5781V7.42186C23.4372 7.28201 23.3997 7.14473 23.3285 7.02435C23.2573 6.90396 23.1551 6.8049 23.0326 6.73749ZM14.8435 4.01718L21.0349 7.42186L14.8435 10.8266L8.6521 7.42186L14.8435 4.01718ZM21.8748 17.1164L15.6248 20.5539V12.1797L21.8748 8.74218V17.1164Z" fill="white" />
    <path d="M7.8125 12.5H1.5625V10.9375H7.8125V12.5ZM9.375 18.75H3.125V17.1875H9.375V18.75ZM10.9375 15.625H4.6875V14.0625H10.9375V15.625Z" fill="white" />
  </svg>
);

const DocumentIcon = () => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M9.37533 13.5417H15.6253M9.37533 17.7083H12.5003M4.16699 4.16668V20.8333C4.16699 21.3859 4.38649 21.9158 4.77719 22.3065C5.16789 22.6972 5.69779 22.9167 6.25033 22.9167H18.7503C19.3029 22.9167 19.8328 22.6972 20.2235 22.3065C20.6142 21.9158 20.8337 21.3859 20.8337 20.8333V8.68959C20.8336 8.41205 20.7781 8.13731 20.6704 7.88151C20.5628 7.62572 20.4051 7.39401 20.2066 7.20001L15.5816 2.67709C15.1924 2.29653 14.6697 2.08341 14.1253 2.08334H6.25033C5.69779 2.08334 5.16789 2.30284 4.77719 2.69354C4.38649 3.08424 4.16699 3.61414 4.16699 4.16668Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14.584 2.08334V6.25001C14.584 6.80254 14.8035 7.33245 15.1942 7.72315C15.5849 8.11385 16.1148 8.33334 16.6673 8.33334H20.834" stroke="white" strokeWidth="1.66667" strokeLinejoin="round" />
  </svg>
);

const BusinessIcon = () => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M17.7083 20.8333C18.8589 20.8333 19.7917 19.9006 19.7917 18.75C19.7917 17.5994 18.8589 16.6667 17.7083 16.6667C16.5577 16.6667 15.625 17.5994 15.625 18.75C15.625 19.9006 16.5577 20.8333 17.7083 20.8333Z" stroke="white" strokeWidth="1.25" />
    <path d="M7.29134 20.8333C8.44193 20.8333 9.37467 19.9006 9.37467 18.75C9.37467 17.5994 8.44193 16.6667 7.29134 16.6667C6.14075 16.6667 5.20801 17.5994 5.20801 18.75C5.20801 19.9006 6.14075 20.8333 7.29134 20.8333Z" stroke="white" strokeWidth="1.25" />
    <path d="M11.458 17.7083H15.6247M14.0622 7.29166H15.0445C16.409 7.29166 17.0924 7.29166 17.6705 7.61978C18.2497 7.94686 18.6351 8.55207 19.407 9.76145C19.9486 10.6094 20.5153 11.226 21.3143 11.7729C22.1184 12.325 22.5018 12.5948 22.7132 13.0271C22.9163 13.4417 22.9163 13.9323 22.9163 14.9135C22.9163 16.2083 22.9163 16.8552 22.5528 17.2667L22.5049 17.3177C22.1226 17.7083 21.5195 17.7083 20.3153 17.7083H19.7913" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.5413 7.29166L14.5768 9.88124C15.084 11.1489 15.3372 11.7833 15.8674 12.1417C16.3965 12.5 17.0788 12.5 18.4455 12.5H21.8747M13.5413 7.29166C13.5413 5.8177 13.5413 5.08124 13.1038 4.62499C12.6663 4.16666 11.9611 4.16666 10.5518 4.16666H5.07259C3.66322 4.16666 2.95801 4.1677 2.52051 4.62499C2.08301 5.08228 2.08301 5.81874 2.08301 7.29166V14.5833C2.08301 16.0573 2.08301 16.7937 2.52051 17.25C2.95801 17.7083 3.66322 17.7083 5.07259 17.7083M13.5413 7.29166V17.7083H9.05801" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const InternationalIcon = () => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M21.8458 11.7614C21.6999 9.91557 21.0106 8.15433 19.865 6.69976C18.7194 5.24518 17.1687 4.16241 15.4085 3.58799C13.6483 3.01358 11.7574 2.97323 9.97431 3.47206C8.19121 3.97088 6.59575 4.98653 5.38913 6.39092C4.18251 7.79531 3.41876 9.52555 3.19421 11.3634C2.96965 13.2013 3.29435 15.0645 4.12734 16.7181C4.96033 18.3717 6.26432 19.7416 7.87486 20.6551C9.4854 21.5686 11.3304 21.9847 13.1771 21.8509M3.75 9.3749H21.25M3.75 15.6249H13.0208" stroke="white" strokeWidth="1.27" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11.9791 3.125C10.2243 5.9371 9.29395 9.18528 9.29395 12.5C9.29395 15.8147 10.2243 19.0629 11.9791 21.875M13.0208 3.125C14.7791 5.94248 15.7097 9.19763 15.7062 12.5187M19.7916 18.75V18.7604M22.001 20.9594C22.4382 20.5224 22.7359 19.9656 22.8565 19.3593C22.9772 18.7531 22.9154 18.1247 22.6789 17.5537C22.4424 16.9826 22.0418 16.4945 21.5279 16.1511C21.014 15.8076 20.4098 15.6243 19.7916 15.6243C19.1735 15.6243 18.5693 15.8076 18.0554 16.1511C17.5415 16.4945 17.1409 16.9826 16.9044 17.5537C16.6679 18.1247 16.6061 18.7531 16.7268 19.3593C16.8474 19.9656 17.1451 20.5224 17.5823 20.9594C18.0177 21.3955 18.7541 22.0479 19.7916 22.9167C20.8868 21.9896 21.6232 21.3372 22.001 20.9594Z" stroke="white" strokeWidth="1.27" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SendPackageIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="7.0835" cy="7.08331" r="6.25" fill="white" />
    <path d="M6.146 9.89581L8.9585 7.08331L6.146 4.27081" stroke="#0363F1" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckIcon = () => (
  <span className="flex size-[20px] items-center justify-center rounded-full bg-[#0363F1] text-white">
    <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M1 4.5L4.1 7.5L10 1" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const services = [
  { title: "Parcel Delivery", description: "Send packages of any size across the city, nationwide, or internationally.", icon: <ParcelIcon />, color: "bg-[#0363F1]" },
  { title: "Document Delivery", description: "Fast, secure and confidential delivery of important documents.", icon: <DocumentIcon />, color: "bg-[#FC8D0E]" },
  { title: "Business Logistics", description: "Supply chain and logistics solutions for businesses of all sizes.", icon: <BusinessIcon />, color: "bg-[#6DD78D]" },
  { title: "International Shipping", description: "We handle customs and international delivery with ease.", icon: <InternationalIcon />, color: "bg-[#9D0EFC]" },
];

const stats = [
  { value: "5,000+", label: "Successful Deliveries", color: "bg-[#0363F1]", icon: <ParcelIcon /> },
  { value: "1,200+", label: "Happy Clients", color: "bg-[#FC8D0E]", icon: <BusinessIcon /> },
  { value: "40+", label: "Cities Covered", color: "bg-[#6DD78D]", icon: <InternationalIcon /> },
  { value: "99%", label: "On-time Delivery", color: "bg-[#9D0EFC]", icon: <DocumentIcon /> },
];

const Body = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1080px] px-4 py-[42px]">
        <div className="flex flex-col items-center text-center">
          <p className="font-inter text-[13px] font-semibold uppercase leading-none text-[#0363F1]">What We Offer</p>
          <h2 className="mt-[12px] font-inter text-[20px] font-semibold leading-[25px] text-black">Popular Tour Packages</h2>
          <div className="mt-[15px] h-0 w-[50px] border-t-[4px] border-[#0363F1]" />
        </div>

        <div className="mt-[40px] grid grid-cols-1 gap-[20px] sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article key={service.title} className="group flex min-h-[189px] flex-col items-start rounded-[15px] border border-black/20 bg-white p-[14px] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#0363F166] hover:shadow-[0_12px_24px_0_#0000001F]">
              <div className={`flex size-[50px] items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105 ${service.color}`}>
                {service.icon}
              </div>
              <h3 className="mt-[16px] font-inter text-[15px] font-semibold leading-none text-[#050505]">{service.title}</h3>
              <p className="mt-[12px] flex-1 font-inter text-[12px] font-medium leading-[15px] text-black/70">{service.description}</p>
              <Link href="/contact" className="mt-[14px] inline-flex items-center gap-[3px] font-inter text-[12px] font-semibold leading-none text-[#0363F1] transition-all duration-300 hover:gap-[8px] hover:text-[#024dbb]">
                Contact Us
                <LearnMoreArrow />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-[58px] grid items-center gap-[38px] lg:grid-cols-[600px_1fr]">
          <div className="grid gap-[30px] sm:grid-cols-[308px_231px]">
            <div className="group relative h-[259px] overflow-hidden rounded-[20px]">
              <Image src="/logistic (7).png" alt="Logistics truck shipment" fill sizes="308px" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
            </div>
            <div className="flex min-h-[259px] flex-col justify-center gap-[16px] rounded-[20px] bg-white px-[22px] shadow-[0_0_10px_0_#0000001A] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_0_#00000024]">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-[13px]">
                  <div className={`flex size-[38px] shrink-0 items-center justify-center rounded-full ${stat.color}`}>{stat.icon}</div>
                  <div>
                    <p className="font-inter text-[22px] font-semibold leading-none text-black">{stat.value}</p>
                    <p className="mt-[4px] font-inter text-[11px] font-medium leading-none text-black/70">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="font-inter text-[13px] font-semibold uppercase leading-none text-[#0363F1]">What We Offer</p>
            <h2 className="mt-[12px] font-inter text-[20px] font-semibold leading-[25px] text-black">Your Trusted Logistics Partner</h2>
            <p className="mt-[15px] max-w-[434px] font-inter text-[14px] font-medium leading-[20px] text-[#050505E5]">
              We are committed to providing efficient, affordable, and reliable logistics services with a focus on customer satisfaction.
            </p>
            <div className="mt-[20px] space-y-[10px]">
              {["Timely and reliable delivery", "Affordable pricing", "Real-time tracking updates", "Safe and secure Handling", "Excellent customer support"].map((item) => (
                <div key={item} className="flex items-center gap-[10px] font-inter text-[13px] font-medium leading-[20px] text-black">
                  <CheckIcon />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[18px] bg-[#0363F1] px-4 py-[28px]">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-inter text-[22px] font-semibold leading-[25px] text-white">Need to send a package or document?</h2>
            <p className="mt-[10px] font-inter text-[15px] font-medium leading-[25px] text-white">We’re ready to deliver it for you.</p>
          </div>
          <div className="flex flex-wrap gap-[20px]">
            <Link href="/contact" className="flex h-[34px] items-center rounded-[5px] bg-white px-[18px] font-inter text-[13px] font-medium text-[#0363F1] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_18px_rgba(255,255,255,0.22)]">Request a Quote</Link>
            <Link href="/contact" className="inline-flex h-[34px] items-center gap-[8px] rounded-[5px] border border-white/20 bg-[#0363F1] px-[18px] font-inter text-[13px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0255cf]">
              Send a Package
              <SendPackageIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
