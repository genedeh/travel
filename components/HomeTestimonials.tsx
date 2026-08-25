import Image from "next/image";

const StarIcon = () => (
  <svg
    width="22"
    height="20"
    viewBox="0 0 22 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M12.1038 0.703125C11.9014 0.273437 11.4736 0 11.0038 0C10.534 0 10.11 0.273437 9.90379 0.703125L7.44789 5.87109L1.96316 6.69922C1.50483 6.76953 1.12289 7.09766 0.981567 7.54687C0.840247 7.99609 0.95483 8.49219 1.2833 8.82422L5.26316 12.8516L4.32358 18.543C4.24719 19.0117 4.43816 19.4883 4.81629 19.7656C5.19441 20.043 5.69476 20.0781 6.10726 19.8555L11.0076 17.1797L15.908 19.8555C16.3205 20.0781 16.8208 20.0469 17.1989 19.7656C17.5771 19.4844 17.768 19.0117 17.6916 18.543L16.7482 12.8516L20.7281 8.82422C21.0566 8.49219 21.175 7.99609 21.0298 7.54687C20.8847 7.09766 20.5066 6.76953 20.0482 6.69922L14.5597 5.87109L12.1038 0.703125Z"
      fill="#EEFF00"
    />
  </svg>
);

const testimonials = [
  {
    name: "Marcus Chen",
    role: "Founder, Wellness Co",
    image: "/image 17.png",
    text: `"This changed how I think about what I drink. Clean, honest, and it tastes like something real."`,
  },
  {
    name: "Marcus Chen",
    role: "Founder, Wellness Co",
    image: "/image 17.png",
    text: `"This changed how I think about what I drink. Clean, honest, and it tastes like something real."`,
  },
  {
    name: "Marcus Chen",
    role: "Founder, Wellness Co",
    image: "/image 17.png",
    text: `"This changed how I think about what I drink. Clean, honest, and it tastes like something real."`,
  },
];

const HomeTestimonials = () => {
  const carouselTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="w-full overflow-hidden bg-white px-4 py-[34px]">
      <div className="mx-auto max-w-[1280px]">
        <div className="animate-fade-up text-center">
          <p className="font-['Poppins'] text-[11px] font-semibold uppercase leading-[120%] text-[#050505B2]">
            What Our Clients Say
          </p>

          <h2 className="mt-[13px] font-['Poppins'] text-[22px] font-semibold leading-[120%] text-black">
            Trusted by Thousands of Happy Travelers
          </h2>
        </div>

        <div className="relative mt-[38px] overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

          <div className="testimonial-marquee flex w-max gap-[31px] py-1">
            {carouselTestimonials.map((testimonial, index) => (
              <article
                key={`${testimonial.name}-${index}`}
                className="h-[174px] w-[418px] shrink-0 rounded-[10px] border border-[#0363F14D] bg-white p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_10px_24px_0_#0363F126]"
              >
              <div className="flex items-start justify-between gap-5">
                <div className="flex items-center gap-[15px]">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={70}
                    height={70}
                    className="h-[70px] w-[70px] rounded-[86px] object-cover"
                  />

                  <div className="pt-[2px]">
                    <h3 className="font-['Poppins'] text-[15px] font-semibold leading-[120%] text-black">
                      {testimonial.name}
                    </h3>

                    <p className="mt-[7px] font-['Poppins'] text-[11px] font-medium leading-[120%] text-black">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 gap-[5px] pt-[28px]">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <StarIcon key={starIndex} />
                  ))}
                </div>
              </div>

              <p className="ml-[84px] mt-[14px] max-w-[286px] font-['Poppins'] text-[16px] font-normal leading-[120%] text-black">
                {testimonial.text}
              </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
