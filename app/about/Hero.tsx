import { Aladin } from "next/font/google";

const aladin = Aladin({
  weight: "400",
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src="/image 18.png"
        alt="hero.img"
      />

  

      <div className="absolute left-0 top-1/2 w-full -translate-y-1/2 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl text-left">
          <p className="mb-10 text-3xl text-blue-500">
            About Us
          </p>

          <h2 className="text-5xl font-bold text-white md:text-7xl">
            Your Journey Our{" "}
            <span
              className={`${aladin.className} text-7xl text-[#ED7911] md:text-9xl`}
            >
              Priority
            </span>
          </h2>

          <p className="mt-8 text-xl font-semibold text-gray-300 md:text-2xl">
            WOW The World Logistis is a trusted travel and logistic company
            dedicated to making local and international travel simple,
            convenient and stress free.
          </p>

          <p className="mt-10 text-xl font-semibold text-gray-300 md:text-2xl">
            We plan. You explore.{" "}
            <span className="text-blue-500">We deliver</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;