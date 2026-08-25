import Image from "next/image";
import Link from "next/link";
import { Aladin } from "next/font/google";

const aladin = Aladin({
  weight: "400",
  subsets: ["latin"],
});

const PlaneIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="M19.8723 4.53333C19.8297 4.26295 19.706 4.0119 19.5175 3.81347C19.3289 3.61503 19.0846 3.47858 18.8167 3.42222L15.5556 2.70555C15.2059 2.62928 14.8439 2.62899 14.4941 2.70471C14.1442 2.78043 13.8147 2.93038 13.5278 3.14444L3.88895 10.1667L1.18895 10.0555C0.971904 10.0478 0.757926 10.1086 0.577411 10.2294C0.396895 10.3501 0.25902 10.5247 0.183368 10.7283C0.107715 10.9319 0.0981328 11.1541 0.155981 11.3635C0.213829 11.5728 0.336167 11.7586 0.505617 11.8944L3.2834 14.0778C3.61673 14.4833 3.83895 14.4056 9.35562 11.4L9.87228 16.6333C9.88088 16.7761 9.92982 16.9135 10.0134 17.0295C10.097 17.1456 10.2118 17.2355 10.3445 17.2889C10.4399 17.327 10.5418 17.3459 10.6445 17.3444C10.8511 17.3381 11.0485 17.2572 11.2001 17.1167L12.5278 15.9056C12.6601 15.7831 12.7496 15.6215 12.7834 15.4444L14.0001 8.83333C15.9834 7.72222 17.8612 6.67777 19.2001 5.91666C19.4396 5.78192 19.6323 5.57728 19.7524 5.33008C19.8726 5.08289 19.9144 4.80492 19.8723 4.53333ZM18.6501 4.94999C17.2612 5.73888 15.3167 6.84444 13.2278 7.98888L13.0001 8.11666L11.7056 15.1556L10.889 15.9L10.2778 9.62222L9.53895 9.99999C5.55562 12.2222 4.22784 12.8667 3.77228 13.0667L1.3834 11.1722L4.20562 11.2944L14.2056 4.03888C14.3626 3.92105 14.5428 3.83785 14.7344 3.79476C14.9259 3.75166 15.1244 3.74966 15.3167 3.78888L18.5667 4.48888C18.6168 4.49796 18.6627 4.5228 18.6977 4.55977C18.7326 4.59675 18.7549 4.64393 18.7612 4.69444C18.7726 4.74332 18.768 4.79459 18.748 4.84062C18.7279 4.88666 18.6936 4.92502 18.6501 4.94999Z" fill="white" />
    <path d="M3.88894 6.96665L5.86672 7.5222L6.77783 6.86109L4.55561 6.21664L5.55561 5.60553L8.59449 5.51665L9.87227 4.58887L5.55561 4.7222C5.41952 4.71484 5.28427 4.74768 5.16672 4.81664L3.70561 5.66664C3.58481 5.7382 3.4879 5.84392 3.42709 5.97047C3.36628 6.09702 3.3443 6.23874 3.3639 6.37776C3.38351 6.51679 3.44383 6.6469 3.53726 6.75169C3.6307 6.85649 3.75306 6.93128 3.88894 6.96665Z" fill="white" />
  </svg>
);

const MapIcon = () => (
  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12.9271 15.5833L10.9792 13.4583L11.8008 12.6225L12.9271 13.7487L15.47 11.2058L16.2917 12.2046L12.9271 15.5833ZM14.5208 2.125C14.6148 2.125 14.7048 2.16231 14.7713 2.22873C14.8377 2.29515 14.875 2.38524 14.875 2.47917V9.44917C14.4288 9.29333 13.9542 9.20833 13.4583 9.20833V4.0375L11.3333 4.85917V9.775C10.7667 10.1079 10.2708 10.5612 9.91667 11.1067V4.86625L7.08333 3.87458V12.1337L9.24375 12.8917L9.20833 13.4583C9.20833 13.7842 9.24375 14.11 9.31458 14.4146L6.375 13.3875L2.5925 14.8537L2.47917 14.875C2.38524 14.875 2.29515 14.8377 2.22873 14.7713C2.16231 14.7048 2.125 14.6148 2.125 14.5208V3.81083C2.125 3.64792 2.23125 3.52042 2.38 3.47083L6.375 2.125L10.625 3.6125L14.4075 2.14625L14.5208 2.125ZM3.54167 4.57583V12.9696L5.66667 12.1479V3.86042L3.54167 4.57583Z" fill="#0363F1" />
  </svg>
);

const FastIcon = () => (
  <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M7.12204 0.783625C8.27657 0.305423 9.57378 0.305443 10.7283 0.783681C11.8828 1.26192 12.8001 2.1792 13.2783 3.33373C13.7565 4.48826 13.7565 5.78547 13.2782 6.93999C12.8 8.09451 11.8827 9.01176 10.7282 9.48996C9.575 9.96109 8.28219 9.9564 7.13248 9.47691C5.98277 8.99741 5.06972 8.08214 4.59302 6.93127C4.11633 5.7804 4.11477 4.48758 4.58871 3.33557C5.06264 2.18355 5.97348 1.26609 7.12204 0.783837" fill="#F2F2F2" />
    <path d="M7.12204 0.783625C8.27657 0.305423 9.57378 0.305443 10.7283 0.783681C11.8828 1.26192 12.8001 2.1792 13.2783 3.33373C13.7565 4.48826 13.7565 5.78547 13.2782 6.93999C12.8 8.09451 11.8827 9.01176 10.7282 9.48996C9.575 9.96109 8.28219 9.9564 7.13248 9.47691C5.98277 8.99741 5.06972 8.08214 4.59302 6.93127C4.11633 5.7804 4.11477 4.48758 4.58871 3.33557C5.06264 2.18355 5.97348 1.26609 7.12204 0.783837" stroke="#0363F1" strokeWidth="0.85" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.6833 3.53871C10.7503 3.44908 10.7793 3.33661 10.764 3.22573C10.7486 3.11485 10.6901 3.01451 10.6012 2.9465C10.5123 2.87849 10.4001 2.84831 10.2891 2.8625C10.1781 2.8767 10.0771 2.93414 10.0082 3.02233L10.6833 3.53871ZM8.9752 4.37235C8.9406 4.41661 8.91511 4.4673 8.90023 4.52148C8.88534 4.57566 8.88134 4.63226 8.88847 4.68799C8.8956 4.74373 8.91371 4.79749 8.94175 4.84619C8.96979 4.89488 9.00721 4.93752 9.05184 4.97166C9.09647 5.0058 9.14742 5.03074 9.20176 5.04506C9.25609 5.05937 9.31272 5.06277 9.36838 5.05506C9.42404 5.04735 9.47761 5.02868 9.526 5.00012C9.5744 4.97157 9.61665 4.93371 9.65031 4.88872L8.9752 4.37235ZM11.6705 7.18691C11.7685 7.24265 11.8846 7.25718 11.9933 7.22731C12.102 7.19744 12.1944 7.12562 12.2501 7.02764C12.3059 6.92966 12.3204 6.81355 12.2905 6.70486C12.2607 6.59616 12.1889 6.50378 12.0909 6.44805L11.6705 7.18691ZM9.69005 5.08231C9.59207 5.02657 9.47596 5.01204 9.36727 5.0419C9.25857 5.07177 9.16619 5.1436 9.11046 5.24158C9.05472 5.33956 9.04018 5.45566 9.07005 5.56436C9.09992 5.67305 9.17174 5.76543 9.26972 5.82117L9.69005 5.08231ZM8.71255 5.13692C8.71255 5.08056 8.73494 5.02651 8.77479 4.98666C8.81464 4.94681 8.86869 4.92442 8.92505 4.92442V4.07442C8.64326 4.07442 8.37301 4.18636 8.17375 4.38562C7.97449 4.58488 7.86255 4.85513 7.86255 5.13692H8.71255ZM8.92505 5.34942C8.86869 5.34942 8.81464 5.32703 8.77479 5.28718C8.73494 5.24733 8.71255 5.19328 8.71255 5.13692H7.86255C7.86255 5.41871 7.97449 5.68896 8.17375 5.88822C8.37301 6.08748 8.64326 6.19942 8.92505 6.19942V5.34942ZM9.13755 5.13692C9.13755 5.19328 9.11516 5.24733 9.07531 5.28718C9.03546 5.32703 8.98141 5.34942 8.92505 5.34942V6.19942C9.20684 6.19942 9.47709 6.08748 9.67635 5.88822C9.87561 5.68896 9.98755 5.41871 9.98755 5.13692H9.13755ZM8.92505 4.92442C8.98141 4.92442 9.03546 4.94681 9.07531 4.98666C9.11516 5.02651 9.13755 5.08056 9.13755 5.13692H9.98755C9.98755 4.85513 9.87561 4.58488 9.67635 4.38562C9.47709 4.18636 9.20684 4.07442 8.92505 4.07442V4.92442ZM10.0082 3.02233L8.9752 4.37235L9.65031 4.88872L10.6828 3.53871L10.0082 3.02233ZM12.0904 6.44805L9.68962 5.08231L9.2693 5.82117L11.6701 7.18691L12.0904 6.44805Z" fill="#0363F1" />
    <path d="M3.61255 8.53666H1.48755M2.97505 6.83666H0.850049M2.55005 5.13666H0.425049" stroke="#0363F1" strokeWidth="0.85" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M9.33333 17.6667C13.9358 17.6667 17.6667 13.9358 17.6667 9.33333C17.6667 4.73083 13.9358 1 9.33333 1C4.73083 1 1 4.73083 1 9.33333C1 13.9358 4.73083 17.6667 9.33333 17.6667Z" stroke="white" strokeWidth="2" />
    <path d="M1 8.01665C2.25639 7.42359 3.18556 7.34095 3.7875 7.76873C4.69042 8.4104 4.80333 11.0266 6.8575 9.77665C8.91167 8.52665 5.97792 8.01665 6.61458 6.20581C7.25125 4.39456 9.33667 5.80165 9.54375 3.8179C9.68236 2.4954 8.10042 1.98929 4.79792 2.29956" stroke="white" strokeWidth="2" />
    <path d="M14.3334 2.66669C11.9525 4.7453 11.121 6.00044 11.8388 6.4321C12.9155 7.08002 13.3721 6.16794 14.6863 6.4321C16.0005 6.69627 15.7155 8.47752 15.0246 8.47752C14.3338 8.47752 10.7542 8.02169 10.9346 10.1104C11.115 12.1992 13.268 12.5084 13.268 13.6754C13.268 14.4532 12.7916 15.6439 11.8388 17.2475M1.87671 13.0525C2.16073 12.9276 2.44631 12.8062 2.73338 12.6884C4.33615 12.0411 5.5256 11.8885 6.30171 12.2304C7.67338 12.8359 7.14588 14.0584 7.57588 14.5088C8.00504 14.9592 9.07838 14.8284 9.07838 15.685C9.07838 16.2564 8.88643 16.9017 8.50254 17.6209" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const StarIcon = () => (
  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M11.6137 4.03875L10.6221 1.56875C9.78206 -0.522917 6.82206 -0.522917 5.98206 1.56875L4.99039 4.03875L2.33456 4.21875C0.0862281 4.37125 -0.828772 7.18625 0.901228 8.63125L2.94289 10.3379L2.29373 12.9196C1.74373 15.1054 4.13873 16.8446 6.04789 15.6471L8.30206 14.2321L10.5562 15.6471C12.4646 16.8454 14.8604 15.1054 14.3104 12.9196L13.6604 10.3379L15.7037 8.63125C17.4329 7.18625 16.5179 4.37125 14.2704 4.21875L11.6137 4.03875ZM9.07539 2.18875C8.79539 1.49208 7.80873 1.49208 7.52873 2.18875L6.34206 5.14625C6.28366 5.29167 6.18544 5.41767 6.05867 5.50979C5.93191 5.60192 5.78174 5.65643 5.62539 5.66708L2.44706 5.88208C1.69706 5.93292 1.39289 6.87208 1.96873 7.35375L4.41373 9.39542C4.53388 9.49596 4.62325 9.62833 4.6716 9.77735C4.71994 9.92636 4.7253 10.086 4.68706 10.2379L3.91039 13.3271C3.72706 14.0554 4.52539 14.6354 5.16123 14.2362L7.85873 12.5429C7.99154 12.4595 8.14521 12.4152 8.30206 12.4152C8.45891 12.4152 8.61258 12.4595 8.74539 12.5429L11.4429 14.2362C12.0787 14.6362 12.8771 14.0554 12.6937 13.3279L11.9171 10.2387C11.8787 10.0867 11.8839 9.9269 11.9323 9.77772C11.9806 9.62854 12.0701 9.49603 12.1904 9.39542L14.6354 7.35375C15.2112 6.87125 14.9062 5.93292 14.1571 5.88208L10.9796 5.66708C10.8232 5.65643 10.673 5.60192 10.5463 5.50979C10.4195 5.41767 10.3213 5.29167 10.2629 5.14625L9.07456 2.18875H9.07539Z" fill="white" />
  </svg>
);

const FloatingCards = () => (
  <div className="animate-gentle-float-centered pointer-events-none absolute right-[5%] top-[calc(50%+18px)] hidden h-[303px] w-[513px] lg:block xl:right-[8%]">
    <div className="absolute left-[125px] top-8 h-[265px] w-[133px] rounded-bl-[10px] rounded-tl-[10px] bg-white shadow-[0_0_12.5px_rgba(3,99,241,0.63)]" />
    <div className="absolute left-[252px] top-0 h-[297px] w-[139px] rounded-br-[10px] rounded-t-[10px] bg-white shadow-[0_0_12.5px_rgba(3,99,241,0.63)]" />
    <Image
      src="/home-hero-cards.png"
      alt="Travel service cards"
      width={266}
      height={303}
      className="absolute left-[125px] top-0 h-[303px] w-[266px] object-cover"
    />
    <div className="absolute left-0 top-[235px] flex h-[34px] w-[132px] items-start gap-0.5 rounded-[5px] border-[3px] border-[#2a2828] bg-white px-1 py-[3px] text-[#050505]">
      <MapIcon />
      <div className="w-[104px] leading-none">
        <p className="[font-family:Inter,sans-serif] text-[9px] font-medium">All Process Secured</p>
        <p className="[font-family:Inter,sans-serif] text-[7px] font-normal">Always Successful in all Process.</p>
      </div>
    </div>
    <div className="absolute left-[381px] top-8 flex h-[34px] w-[132px] items-start gap-0.5 rounded-[5px] border-[3px] border-[#316992] bg-white px-1 py-[3px] text-[#050505]">
      <div className="flex h-[17px] w-[17px] items-center justify-center">
        <FastIcon />
      </div>
      <div className="w-[104px] leading-none">
        <p className="[font-family:Inter,sans-serif] text-[9px] font-medium">We are fast and reliable</p>
        <p className="[font-family:Inter,sans-serif] text-[7px] font-normal">We deliver message to you, faster than you think.</p>
      </div>
    </div>
  </div>
);

const keyPoints = [
  { icon: <PlaneIcon className="h-[17px] w-[17px]" />, text: "10,000+ Happy Travelers" },
  { icon: <GlobeIcon />, text: "40+ Countries Covered" },
  { icon: <StarIcon />, text: "98% Customer Satisfaction" },
];

const HomeHero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-950">
      <Image
        src="/home-hero.png"
        alt="Traveler looking at an airplane through an airport window"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[#001b35]/35" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 pt-24 md:px-10 lg:px-12">
        <div className="w-full max-w-[560px] translate-y-[10px]">
          <h1 className="[font-family:Inter,sans-serif] text-[32px] font-bold leading-[50px] text-white">
            Travel round the World <br />
            with{" "}
            <span className={`${aladin.className} text-[48px] font-normal leading-[50px] text-[#ED7911]`}>
              Confidence
            </span>
          </h1>

          <p className="mt-[15px] max-w-[390px] [font-family:Inter,sans-serif] text-[15px] font-medium leading-[22px] text-[#FFFFFFCC]">
            Flights, Hotels, Visas, Tours, Passport Processing and reliable
            Logistics - all in one place.
          </p>

          <div className="mt-[17px] flex flex-wrap items-center gap-[14px]">
            <Link href="/contact" className="flex h-[36px] items-center gap-2 rounded-[5px] bg-[#0363F1] px-[14px] [font-family:Inter,sans-serif] text-[13px] font-medium leading-none text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0255cf] hover:shadow-[0_8px_18px_rgba(3,99,241,0.35)]">
              Book a Flight
              <PlaneIcon />
            </Link>
            <Link href="/services" className="flex h-[36px] items-center rounded-[5px] bg-white px-[18px] [font-family:Inter,sans-serif] text-[13px] font-medium leading-none text-[#050505] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F3F8FF] hover:shadow-[0_8px_18px_rgba(255,255,255,0.22)]">
              Explore Services
            </Link>
          </div>

          <div className="mt-[32px] flex flex-wrap items-center gap-x-[19px] gap-y-3 lg:flex-nowrap">
            {keyPoints.map((item) => (
              <div
                key={item.text}
                className="flex shrink-0 items-center gap-[6px] whitespace-nowrap [font-family:Inter,sans-serif] text-[12px] font-medium leading-none text-white"
              >
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <FloatingCards />
    </section>
  );
};

export default HomeHero;
