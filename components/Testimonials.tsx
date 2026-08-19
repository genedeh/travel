import { FaStar } from "react-icons/fa";

const Testimonials = () => {
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

  return (
    <section className="w-full bg-white px-6 py-28">
      <div className="mx-auto max-w-[1500px]">
        <div className="text-center">
          <p className="text-lg font-bold uppercase tracking-[0.25em] text-blue-600">
            What Our Clients Say
          </p>

          <h2 className="mt-4 text-5xl font-extrabold text-gray-900 md:text-6xl">
            Trusted By Our Clients
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-xl text-gray-600">
            Hear what our customers have to say about their experience with
            our travel and logistics services.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-h-[280px] rounded-2xl border border-gray-200 bg-white p-8 shadow-[0_5px_20px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.16)]"
            >
              <div className="flex items-start justify-between gap-5">
                <div className="flex items-center gap-5">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-[82px] w-[82px] rounded-full object-cover"
                  />

                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {testimonial.name}
                    </h3>

                    <p className="mt-2 text-base font-medium text-gray-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 pt-3">
                  {[...Array(5)].map((_, starIndex) => (
                    <FaStar
                      key={starIndex}
                      className="text-[23px] text-yellow-400"
                    />
                  ))}
                </div>
              </div>

              <p className="mt-8 text-xl font-medium leading-8 text-gray-800">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;