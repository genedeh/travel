import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative min-h-[420px] w-full overflow-hidden sm:min-h-[480px]">
      <Image
        src="/image 19.png"
        alt="WOW The World services"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
};

export default Hero;
