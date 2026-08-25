import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-[478px] w-full overflow-hidden">
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
