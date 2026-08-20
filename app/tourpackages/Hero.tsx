const Hero = () => {
  const types = [
    {
      title: "All Packages",
      icon: <img src="/iconhero (1).png" className="h-10 w-10" alt="" />,
    },
    {
      title: "Adventure",
      icon: <img src="/iconhero (10).png" className="h-10 w-10" alt="" />,
    },
    {
      title: "Honeymoon",
      icon: <img src="/iconhero (3).png" className="h-10 w-10" alt="" />,
    },
    {
      title: "Family",
      icon: <img src="/iconhero (4).png" className="h-10 w-10" alt="" />,
    },
    {
      title: "Group",
      icon: <img src="/iconhero (5).png" className="h-10 w-10" alt="" />,
    },
    {
      title: "Religious",
      icon: <img src="/iconhero (6).png" className="h-10 w-10" alt="" />,
    },
    {
      title: "Luxury",
      icon: <img src="/iconhero (7).png" className="h-10 w-10" alt="" />,
    },
    {
      title: "Student",
      icon: <img src="/iconhero (8).png" className="h-10 w-10" alt="" />,
    },
    {
      title: "Corporate",
      icon: <img src="/iconhero (9).png" className="h-10 w-10" alt="" />,
    },
  ];

  return (
    <section className="relative w-full">
      <div className="relative h-[400px] w-full overflow-hidden sm:h-[500px] lg:h-[600px]">
        <img
          src="/image 21.png"
          className="h-full w-full object-cover"
          alt=""
        />
      </div>

      <div className="absolute bottom-[-65px] left-1/2 z-20 w-[98%] max-w-[16000px] -translate-x-1/2 rounded-2xl bg-white px-4 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.15)] sm:bottom-[-1px] sm:px-6 sm:py-5 lg:px-10">
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-5 lg:grid-cols-9 lg:gap-4">
          {types.map((item, index) => (
            <button
              key={index}
              type="button"
              className="group flex min-h-[80px] flex-col items-center justify-center gap-2 rounded-xl px-2 py-2 transition-all duration-300 hover:bg-blue-500 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <div className="transition-all duration-300 group-hover:brightness-0 group-hover:invert">
                  {item.icon}
                </div>
              </div>

              <h3 className="whitespace-nowrap text-xs font-semibold text-gray-800 transition-colors duration-300 group-hover:text-white sm:text-sm">
                {item.title}
              </h3>
            </button>
          ))}
        </div>
      </div>

      <div className="h-14 sm:h-16" />
    </section>
  );
};

export default Hero;