import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-[420px] w-full overflow-hidden sm:min-h-[478px]">
      <Image
        src="/image 21.png"
        alt="Tour packages"
        fill
        className="object-cover"
        priority
      />
    </section>
  );
};

export default Hero;
