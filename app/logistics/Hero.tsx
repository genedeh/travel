import Image from "next/image";
import Link from "next/link";

const SendPackageIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <mask id="send-package-mask" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="15" height="15">
      <path d="M7.0835 13.3333C10.5354 13.3333 13.3335 10.5352 13.3335 7.08331C13.3335 3.63144 10.5354 0.833313 7.0835 0.833313C3.63162 0.833313 0.833496 3.63144 0.833496 7.08331C0.833496 10.5352 3.63162 13.3333 7.0835 13.3333Z" fill="white" stroke="white" strokeWidth="1.66667" strokeLinejoin="round" />
      <path d="M6.146 9.89581L8.9585 7.08331L6.146 4.27081" stroke="black" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
    </mask>
    <g mask="url(#send-package-mask)">
      <path d="M-0.416504 -0.416687H14.5835V14.5833H-0.416504V-0.416687Z" fill="white" />
    </g>
  </svg>
);

const Hero = () => {
  return (
    <section className="relative min-h-[448px] w-full overflow-hidden">
      <Image
        src="/logistic (6).png"
        alt="WOW logistics van delivery"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#061947] via-[#061947]/80 to-transparent" />

      <div className="relative z-10 flex h-full max-w-[520px] flex-col justify-center px-6 sm:px-10">
        <p className="font-inter text-[13px] font-semibold uppercase leading-none text-[#0363F1]">
          Our Logistics Services
        </p>

        <h1 className="mt-[28px] font-inter text-[32px] font-bold leading-[50px] text-white">
          Fast. Secure. Reliable.
          <br />
          Delivered with Care.
        </h1>

        <p className="mt-[20px] font-inter text-[15px] font-medium leading-[25px] text-white">
          At WOW The World Logistics, we provide dependable logistics solutions
          for individuals and businesses, from parcels to documents and bulk
          shipments, we ensure your items reach their destination safely and on
          time.
        </p>

        <div className="mt-[20px] flex flex-wrap gap-[20px]">
          <Link href="/contact" className="inline-flex h-[34px] items-center justify-center gap-[5px] rounded-[5px] bg-[#0363F1] px-[18px] font-inter text-[13px] font-medium text-white transition hover:bg-[#024dbb]">
            Send a Package
            <SendPackageIcon />
          </Link>
          <Link href="/contact" className="inline-flex h-[34px] items-center justify-center rounded-[5px] border border-[#0363F1] bg-white px-[18px] font-inter text-[13px] font-medium text-[#0363F1] transition hover:bg-[#E0EEFF]">
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
