import { Aladin } from "next/font/google";
import Image from "next/image";

const aladin = Aladin({
  weight: "400",
  subsets: ["latin"],
});

const AboutHero = () => {
  return (
    <section className="relative mt-20 min-h-[478px] w-full overflow-hidden sm:mt-[88px]">
      <Image
        src="/image 18.png"
        alt="Traveler standing at an airport with a plane outside"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#003B82]/95 via-[#003B82]/55 to-transparent" />

      <div className="absolute left-0 top-1/2 w-full -translate-y-1/2 px-6 md:px-9 lg:px-[37px]">
        <div className="max-w-[450px] text-left">
          <p className="font-inter text-[13px] font-semibold uppercase leading-none text-[#0363F1]">
            About Us
          </p>

          <h1 className="mt-[24px] font-inter text-[28px] font-bold leading-[42px] text-white sm:text-[32px] sm:leading-[50px]">
            Your Journey,
            <br />
            Our{" "}
            <span
              className={`${aladin.className} text-[42px] font-normal leading-[42px] text-[#ED7911] sm:text-[48px] sm:leading-[50px]`}
            >
              Priority
            </span>
          </h1>

          <p className="mt-[15px] max-w-[398px] font-inter text-[15px] font-medium leading-[25px] text-white/80">
            WOW The World Logistics is a trusted travel and logistics company
            dedicated to making local and international travel simple,
            convenient, and stress-free.
          </p>

          <p className="mt-[24px] font-inter text-[15px] font-medium leading-[25px] text-white">
            We plan. You explore.{" "}
            <span className="text-[#0363F1]">We deliver.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
