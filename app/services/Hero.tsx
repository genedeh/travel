import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-120 w-full overflow-hidden">
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
