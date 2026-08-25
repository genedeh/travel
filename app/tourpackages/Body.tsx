import Image from "next/image";
import Link from "next/link";

const packages = [
  {
    image: "/hand-picked-packages/dubai-getway.png",
    title: "Dubai Gateway",
    nights: 4,
    days: 5,
    badge: "Best Seller",
    badgeClass: "bg-[#ED7911]",
  },
  {
    image: "/hand-picked-packages/london-experince.png",
    title: "London Experience",
    nights: 6,
    days: 7,
    badge: "Popular",
    badgeClass: "bg-[#55D86A]",
  },
  {
    image: "/hand-picked-packages/canada-discovery.png",
    title: "Canada Discovery",
    nights: 7,
    days: 8,
    badge: "New",
    badgeClass: "bg-[#0363F1]",
  },
  {
    image: "/hand-picked-packages/turkey-delight.png",
    title: "Turkey Delight",
    nights: 5,
    days: 6,
    badge: "Family",
    badgeClass: "bg-[#B51CFF]",
  },
];

const NightIcon = () => (
  <Image src="/moon.png" alt="" width={15} height={15} className="size-[15px]" />
);

const DayIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M11.25 7.5C11.25 8.49456 10.8549 9.44839 10.1517 10.1517C9.44839 10.8549 8.49456 11.25 7.5 11.25C6.50544 11.25 5.55161 10.8549 4.84835 10.1517C4.14509 9.44839 3.75 8.49456 3.75 7.5C3.75 6.50544 4.14509 5.55161 4.84835 4.84835C5.55161 4.14509 6.50544 3.75 7.5 3.75C8.49456 3.75 9.44839 4.14509 10.1517 4.84835C10.8549 5.55161 11.25 6.50544 11.25 7.5Z" fill="#0363F1" />
    <path fillRule="evenodd" clipRule="evenodd" d="M7.5 0.78125C7.62432 0.78125 7.74355 0.830636 7.83146 0.918544C7.91936 1.00645 7.96875 1.12568 7.96875 1.25V1.875C7.96875 1.99932 7.91936 2.11855 7.83146 2.20646C7.74355 2.29436 7.62432 2.34375 7.5 2.34375C7.37568 2.34375 7.25645 2.29436 7.16854 2.20646C7.08064 2.11855 7.03125 1.99932 7.03125 1.875V1.25C7.03125 1.12568 7.08064 1.00645 7.16854 0.918544C7.25645 0.830636 7.37568 0.78125 7.5 0.78125ZM0.78125 7.5C0.78125 7.37568 0.830636 7.25645 0.918544 7.16854C1.00645 7.08064 1.12568 7.03125 1.25 7.03125H1.875C1.99932 7.03125 2.11855 7.08064 2.20646 7.16854C2.29436 7.25645 2.34375 7.37568 2.34375 7.5C2.34375 7.62432 2.29436 7.74355 2.20646 7.83146C2.11855 7.91936 1.99932 7.96875 1.875 7.96875H1.25C1.12568 7.96875 1.00645 7.91936 0.918544 7.83146C0.830636 7.74355 0.78125 7.62432 0.78125 7.5ZM12.6562 7.5C12.6562 7.37568 12.7056 7.25645 12.7935 7.16854C12.8815 7.08064 13.0007 7.03125 13.125 7.03125H13.75C13.8743 7.03125 13.9935 7.08064 14.0815 7.16854C14.1694 7.25645 14.2188 7.37568 14.2188 7.5C14.2188 7.62432 14.1694 7.74355 14.0815 7.83146C13.9935 7.91936 13.8743 7.96875 13.75 7.96875H13.125C13.0007 7.96875 12.8815 7.91936 12.7935 7.83146C12.7056 7.74355 12.6562 7.62432 12.6562 7.5ZM7.5 12.6562C7.62432 12.6562 7.74355 12.7056 7.83146 12.7935C7.91936 12.8815 7.96875 13.0007 7.96875 13.125V13.75C7.96875 13.8743 7.91936 13.9935 7.83146 14.0815C7.74355 14.1694 7.62432 14.2188 7.5 14.2188C7.37568 14.2188 7.25645 14.1694 7.16854 14.0815C7.08064 13.9935 7.03125 13.8743 7.03125 13.75V13.125C7.03125 13.0007 7.08064 12.8815 7.16854 12.7935C7.25645 12.7056 7.37568 12.6562 7.5 12.6562Z" fill="#0363F1" />
  </svg>
);

const SmallIcon = ({ src, alt, className = "size-[15px]" }: { src: string; alt: string; className?: string }) => (
  <Image src={src} alt={alt} width={15} height={15} className={className} />
);

const BookNowArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M2 6.00001H9.5M7 8.82851L9.8285 6.00001L7 3.17151" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TrustedIcon = () => (
  <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M0.833496 4.16415V11.8204C0.833496 19.4767 10.2085 22.7579 10.2085 22.7579C10.2085 22.7579 19.5835 19.4767 19.5835 11.8204V4.16415L10.2085 0.882904L0.833496 4.16415Z" stroke="white" strokeWidth="1.66667" strokeLinecap="square" />
    <path d="M6.22217 10.9579L9.16696 13.9037L15.0597 8.01103" stroke="white" strokeWidth="1.66667" strokeLinecap="square" />
  </svg>
);

const PriceIcon = () => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M19.4972 19.4974C17.6414 21.3532 15.1244 22.3958 12.4998 22.3958C9.8753 22.3958 7.35825 21.3532 5.50243 19.4974C3.6466 17.6416 2.604 15.1245 2.604 12.5C2.604 9.87547 3.6466 7.35842 5.50243 5.50259C7.35825 3.64677 9.8753 2.60417 12.4998 2.60417C15.1244 2.60417 17.6414 3.64677 19.4972 5.50259C21.3531 7.35842 22.3957 9.87547 22.3957 12.5C22.3957 15.1245 21.3531 17.6416 19.4972 19.4974Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.375 15.0344C9.44146 15.801 9.80607 16.5109 10.3904 17.0115C10.9748 17.5121 11.7323 17.7635 12.5 17.7115C15.0208 17.7115 15.625 16.2635 15.625 15.0344C15.625 13.8052 14.5833 12.5031 12.5 12.5031C10.4167 12.5031 9.375 11.6802 9.375 10.0031C9.39443 9.61731 9.49169 9.23941 9.66094 8.89215C9.83019 8.54489 10.0679 8.23546 10.3599 7.98245C10.6518 7.72945 10.9919 7.5381 11.3597 7.41993C11.7274 7.30175 12.1153 7.25919 12.5 7.2948C13.2682 7.26172 14.02 7.52388 14.6011 8.02749C15.1822 8.5311 15.5486 9.23798 15.625 10.0031M12.5 19.2708V17.9167M12.5 5.72917V7.29063" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SupportIcon = () => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M7.03125 8.59376C7.03125 7.14335 7.60742 5.75236 8.63301 4.72677C9.6586 3.70118 11.0496 3.12501 12.5 3.12501C13.9504 3.12501 15.3414 3.70118 16.367 4.72677C17.3926 5.75236 17.9688 7.14335 17.9688 8.59376C17.9688 8.80096 18.0511 8.99967 18.1976 9.14618C18.3441 9.2927 18.5428 9.37501 18.75 9.37501C18.9572 9.37501 19.1559 9.2927 19.3024 9.14618C19.4489 8.99967 19.5312 8.80096 19.5312 8.59376C19.5311 7.39464 19.2244 6.21547 18.6401 5.16833C18.0558 4.12119 17.2134 3.24088 16.193 2.61106C15.1726 1.98125 14.0081 1.62286 12.8102 1.56996C11.6122 1.51706 10.4207 1.77141 9.34872 2.30883C8.27677 2.84626 7.36009 3.64889 6.68578 4.64046C6.01148 5.63202 5.60197 6.77956 5.49617 7.974C5.39037 9.16844 5.59181 10.3701 6.08133 11.4647C6.57084 12.5594 7.33218 13.5107 8.29297 14.2281C9.11686 14.8436 10.0657 15.2708 11.0727 15.4797C11.2125 15.7934 11.4519 16.0523 11.7537 16.2164C12.0556 16.3804 12.403 16.4403 12.7424 16.387C13.0817 16.3337 13.394 16.17 13.631 15.9213C13.8679 15.6726 14.0163 15.3528 14.0532 15.0112C14.0901 14.6697 14.0134 14.3255 13.835 14.032C13.6566 13.7384 13.3865 13.5119 13.0663 13.3873C12.7462 13.2627 12.3939 13.2471 12.0641 13.3429C11.7342 13.4387 11.445 13.6405 11.2414 13.9172C10.0427 13.6337 8.97471 12.9538 8.21059 11.9876C7.44647 11.0214 7.03092 9.82558 7.03125 8.59376ZM7.8125 8.59376C7.81281 7.73141 8.05099 6.88585 8.50085 6.15014C8.9507 5.41442 9.59479 4.81705 10.3622 4.42378C11.1297 4.0305 11.9908 3.85654 12.8507 3.92106C13.7106 3.98558 14.5361 4.28606 15.2363 4.78945C15.9365 5.29284 16.4842 5.97962 16.8192 6.77423C17.1543 7.56883 17.2636 8.44046 17.1353 9.2932C17.0069 10.1459 16.6458 10.9467 16.0917 11.6075C15.5375 12.2683 14.8119 12.7633 13.9945 13.0383C13.5742 12.6904 13.0456 12.5 12.5 12.5C11.932 12.5 11.4117 12.7023 11.0055 13.0383C10.0748 12.7252 9.26595 12.1278 8.69305 11.3303C8.12016 10.5329 7.81215 9.57567 7.8125 8.59376ZM12.5 5.46876C11.6712 5.46876 10.8763 5.798 10.2903 6.38405C9.70424 6.9701 9.375 7.76495 9.375 8.59376C9.375 9.42256 9.70424 10.2174 10.2903 10.8035C10.8763 11.3895 11.6712 11.7188 12.5 11.7188C13.3288 11.7188 14.1237 11.3895 14.7097 10.8035C15.2958 10.2174 15.625 9.42256 15.625 8.59376C15.625 7.76495 15.2958 6.9701 14.7097 6.38405C14.1237 5.798 13.3288 5.46876 12.5 5.46876ZM5.85938 14.0625H6.92109C7.54912 14.7041 8.28304 15.2327 9.09062 15.625H5.85938C5.54857 15.625 5.2505 15.7485 5.03073 15.9682C4.81096 16.188 4.6875 16.4861 4.6875 16.7969V17.1875C4.6875 18.3383 5.42187 19.4914 6.84297 20.3953C8.25469 21.2938 10.2523 21.875 12.4992 21.875C14.7477 21.875 16.7453 21.2938 18.157 20.3953C19.5789 19.4922 20.3125 18.3375 20.3125 17.1875V16.7969C20.3125 16.4861 20.189 16.188 19.9693 15.9682C19.7495 15.7485 19.4514 15.625 19.1406 15.625H14.7109C14.8897 15.1195 14.8897 14.568 14.7109 14.0625H19.1406C19.8658 14.0625 20.5613 14.3506 21.0741 14.8634C21.5869 15.3762 21.875 16.0717 21.875 16.7969V17.1875C21.875 19.057 20.6852 20.6383 18.9961 21.7133C17.2977 22.7945 14.9984 23.4375 12.5 23.4375C10.0016 23.4375 7.70312 22.7945 6.00391 21.7133C4.31484 20.6383 3.125 19.057 3.125 17.1875V16.7969C3.125 16.0717 3.41309 15.3762 3.92588 14.8634C4.43867 14.3506 5.13417 14.0625 5.85938 14.0625Z" fill="white" />
  </svg>
);

const PackageIcon = () => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M17.1875 5.42083L21.875 7.84687V16.001C21.875 16.3719 21.875 16.5562 21.8187 16.7219C21.7698 16.8671 21.6894 16.9998 21.5833 17.1104C21.4635 17.2365 21.299 17.3208 20.9698 17.4917L12.5 21.875L4.03021 17.4917C3.70104 17.3208 3.53646 17.2354 3.41667 17.1104C3.30972 16.9986 3.23125 16.8691 3.18125 16.7219C3.125 16.5573 3.125 16.3708 3.125 15.999V7.84687L11.7385 3.38854C12.0177 3.24479 12.1573 3.17187 12.3031 3.14374C12.4332 3.11871 12.5668 3.11871 12.6969 3.14374C12.8437 3.17187 12.9823 3.24479 13.2604 3.38854C14.2354 3.8927 15.9479 4.77812 17.1875 5.42083ZM17.1875 5.42083L7.8125 10.1406M3.125 7.84687L7.8125 10.1406M12.5 21.875V12.4344M21.875 7.84687L12.5 12.4344M12.5 12.4344L7.8125 10.1406M7.8125 10.1406V12.4344" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ReadyIcon = () => (
  <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M17.4998 32.8125C28.0728 32.8125 32.0832 30.625 32.0832 22.6042M4.96036 26.0918C3.73244 25.7848 2.9165 24.6641 2.9165 23.3989V18.8942C2.9165 17.6283 3.73244 16.5069 4.96036 16.1999C6.14598 15.9031 7.70348 15.5699 9.23473 15.4095C10.2833 15.2994 11.2064 15.9141 11.3807 16.9531C11.5338 17.8602 11.6665 19.207 11.6665 21.1458C11.6665 23.0854 11.5331 24.4322 11.3807 25.3385C11.2057 26.3776 10.2833 26.9923 9.23473 26.8829C7.70348 26.7225 6.14598 26.3885 4.96036 26.0918Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M30.0392 26.0918C31.2671 25.7848 32.083 24.6641 32.083 23.3989V18.8942C32.083 17.6283 31.2671 16.5069 30.0392 16.1999C28.8535 15.9031 27.296 15.5699 25.7648 15.4095C24.7162 15.2994 23.7931 15.9141 23.6188 16.9531C23.4657 17.8602 23.333 19.207 23.333 21.1458C23.333 23.0854 23.4664 24.4322 23.6188 25.3385C23.7938 26.3776 24.7162 26.9923 25.7648 26.8829C27.296 26.7225 28.8535 26.3885 30.0392 26.0918Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M32.0832 18.8934V16.7708C32.0832 8.71646 25.5542 2.1875 17.4998 2.1875C9.44546 2.1875 2.9165 8.71646 2.9165 16.7708V18.8934M27.6761 15.6866C27.2605 10.5802 22.8636 6.5625 17.4998 6.5625C12.1361 6.5625 7.73921 10.5802 7.32359 15.6866" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BookIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12.4363 10H4.93625C4.355 10 4.06437 10 3.82562 10.0637C3.50769 10.149 3.21781 10.3165 2.98511 10.5493C2.75241 10.7821 2.5851 11.072 2.5 11.39" stroke="white" strokeWidth="1.25" />
    <path d="M5 4.375H10M5 6.5625H8.125M6.25 13.75C4.4825 13.75 3.59813 13.75 3.04938 13.2006C2.5 12.6519 2.5 11.7675 2.5 10V5C2.5 3.2325 2.5 2.34812 3.04938 1.79937C3.59813 1.25 4.4825 1.25 6.25 1.25H8.75C10.5175 1.25 11.4019 1.25 11.9506 1.79937C12.5 2.34812 12.5 3.2325 12.5 5M8.75 13.75C10.5175 13.75 11.4019 13.75 11.9506 13.2006C12.5 12.6519 12.5 11.7675 12.5 10V7.5" stroke="white" strokeWidth="1.25" strokeLinecap="round" />
  </svg>
);

const benefits = [
  {
    title: "Trusted & Reliable",
    text: "We are a registered and trusted travel company",
    icon: <TrustedIcon />,
    color: "bg-[#0363F1]",
  },
  {
    title: "Best Price Guarantee",
    text: "Get the best rates with no hidden charges.",
    icon: <PriceIcon />,
    color: "bg-[#ED7911]",
  },
  {
    title: "24/7 Support",
    text: "Our team is always here to assist you.",
    icon: <SupportIcon />,
    color: "bg-[#5ED47D]",
  },
  {
    title: "Custom Package",
    text: "We create packages that fit your needs.",
    icon: <PackageIcon />,
    color: "bg-[#B51CFF]",
  },
];

const Body = () => {
  return (
    <section className="w-full bg-white px-4 py-[42px] text-black sm:px-[22px]">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2 className="font-inter text-[22px] font-semibold leading-[25px] text-black">
              Popular <span className="text-[#0363F1]">Tour Packages</span>
            </h2>

            <p className="mt-[20px] font-inter text-[13px] font-medium leading-none text-[#050505B2]">
              Handpicked packages to give you the best travel experience.
            </p>
          </div>

          <Link
            href="/contact"
            className="mt-[2px] hidden items-center gap-[10px] font-inter text-[13px] font-semibold leading-none text-[#0363F1] transition hover:text-[#024dbb] sm:inline-flex"
          >
            View All Packages
            <BookNowArrowIcon />
          </Link>
        </div>

        <div className="mt-[38px] grid grid-cols-1 justify-items-center gap-[22px] sm:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg) => (
            <article
              key={pkg.title}
              className="group h-[318px] w-full max-w-[315px] overflow-hidden rounded-[10px] bg-white shadow-[0_0_6px_0_#00000026] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_26px_0_#0000002B]"
            >
              <div className="relative h-[166px] w-full overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  sizes="315px"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <span
                  className={`absolute left-[16px] top-[16px] rounded-[3px] px-[10px] py-[6px] font-inter text-[12px] font-semibold leading-none text-white ${pkg.badgeClass}`}
                >
                  {pkg.badge}
                </span>
              </div>

              <div className="px-[18px] pb-[18px] pt-[12px]">
                <h3 className="text-[13px] font-semibold leading-none text-[#050505]">
                  {pkg.title}
                </h3>

                <div className="mt-[9px] flex h-[25px] w-[145px] items-center gap-[8px] rounded-[5px] bg-[#E0EEFF] px-[7px] py-[5px] text-[11px] font-medium leading-none text-[#050505B2]">
                  <span className="flex shrink-0 items-center gap-[4px] whitespace-nowrap">
                    <NightIcon />
                    {pkg.nights} Nights
                  </span>
                  <span className="shrink-0">/</span>
                  <span className="flex shrink-0 items-center gap-[4px] whitespace-nowrap">
                    <DayIcon />
                    {pkg.days} Days
                  </span>
                </div>

                <div className="mt-[8px] flex items-center gap-[8px] text-[11px] font-medium leading-none text-[#050505B2]">
                  <span className="flex items-center gap-[3px]">
                    <SmallIcon src="/airplane2.png" alt="" />
                    Flight
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-[3px]">
                    <SmallIcon src="/sleep.png" alt="" className="h-[15px] w-[18px]" />
                    Hotel
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-[3px]">
                    <SmallIcon src="/tour.png" alt="" className="h-[15px] w-[18px]" />
                    Tour
                  </span>
                </div>

                <div className="mt-[22px]">
                  <Link href="/contact" className="flex h-[38px] w-full items-center justify-center gap-[8px] rounded-[5px] bg-[#ED7911] text-[11px] font-medium leading-none text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d96c0c]">
                    View Details
                    <BookNowArrowIcon />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-[44px] flex min-h-[148px] flex-col gap-8 rounded-[20px] bg-[#E0EEFF] px-[40px] py-[32px] lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-[250px]">
            <h2 className="font-inter text-[22px] font-semibold leading-[25px] text-black">
              Why Travel
              <br />
              With <span className="text-[#0363F1]">WOW?</span>
            </h2>
            <p className="mt-[16px] font-inter text-[13px] font-medium leading-[22px] text-[#050505B2]">
              We make every trip comfortable, memorable and hassle-free.
            </p>
          </div>

          <div className="grid flex-1 grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="group flex flex-col items-center text-center">
                <div className={`flex h-[50px] w-[50px] items-center justify-center rounded-full transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105 ${benefit.color}`}>
                  {benefit.icon}
                </div>
                <h3 className="mt-[12px] font-inter text-[13px] font-semibold leading-none text-black">
                  {benefit.title}
                </h3>
                <p className="mt-[7px] max-w-[130px] font-inter text-[11px] font-medium leading-[13px] text-black">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-[32px] min-h-[150px] overflow-hidden rounded-[20px] bg-[#06327B] text-white">
          <Image
            src="/tour-packages/tour-packages-cta.png"
            alt="Explore mountain tour packages"
            fill
            sizes="1400px"
            className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061947] via-[#0363F1]/70 to-[#0363F1]/15" />

          <div className="relative z-10 flex min-h-[150px] flex-col items-start justify-center gap-5 px-[40px] py-[28px] md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-[24px]">
              <div className="flex h-[65px] w-[65px] shrink-0 items-center justify-center rounded-full border border-white bg-[#0363F1] p-[15px]">
                <ReadyIcon />
              </div>

              <div>
                <h2 className="font-inter text-[22px] font-semibold leading-[25px] text-white">
                  Ready to Explore the World?
                </h2>
                <p className="mt-[8px] max-w-[420px] font-inter text-[15px] font-normal leading-[25px] text-white">
                  Book your dream tour package today and create memories that
                  last a lifetime.
                </p>
              </div>
            </div>

            <Link href="/contact" className="inline-flex h-[40px] items-center justify-center gap-[8px] rounded-[5px] bg-[#ED7911] px-[18px] font-inter text-[13px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d96c0c]">
              Book Now
              <BookIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
