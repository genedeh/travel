import Image from "next/image";

const destinations = [
  {
    image: "/top-destinations/dubai.png",
    name: "Dubai",
    price: "₦350.000",
  },
  {
    image: "/top-destinations/united-kingdom.png",
    name: "United Kingdom",
    price: "₦460.000",
  },
  {
    image: "/top-destinations/canada.png",
    name: "Canada",
    price: "₦720.000",
  },
  {
    image: "/top-destinations/united-states.png",
    name: "United State",
    price: "₦400.000",
  },
  {
    image: "/top-destinations/south-africa.png",
    name: "South Africa",
    price: "₦420.000",
  },
  {
    image: "/top-destinations/china.png",
    name: "Chana",
    price: "₦210.000",
  },
];

const HomeTopDestinations = () => {
  return (
    <section className="w-full bg-white px-4 py-10 sm:px-7">
      <div className="mx-auto w-full max-w-[1118px]">
        <p className="text-[11px] font-semibold uppercase leading-none text-[#0363F1]">
          HOW IT WORKS
        </p>

        <h2 className="mt-3 text-[22px] font-semibold leading-[25px] text-black">
          Explore Top Destinations
        </h2>

        <div className="mt-5 grid grid-cols-1 gap-[22px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {destinations.map((destination) => (
            <article
              key={destination.name}
              className="group relative h-[150px] w-full overflow-hidden rounded-[8px] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_24px_0_#0000002B] sm:w-[180px]"
            >
              <Image
                src={destination.image}
                alt={destination.name}
                width={180}
                height={150}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              <div className="absolute bottom-[17px] left-[13px] text-white">
                <h3 className="text-[14px] font-bold leading-none">
                  {destination.name}
                </h3>

                <p className="mt-[6px] text-[13px] font-medium leading-none">
                  From{" "}
                  <span className="text-[14px] font-semibold">
                    {destination.price}
                  </span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTopDestinations;
