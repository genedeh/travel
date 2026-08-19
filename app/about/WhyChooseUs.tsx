import React from "react";

export default function WhyChooseWowSection() {
  const stats = [
    {
      number: "10,000+",
      label: "Happy Travelers",
      icon: (
       <img src="/usercart.png" className="w-12 h-12 mb-4"alt="" />
      ),
    },
    {
      number: "40+",
      label: "Countries Covered",
      icon: (
      <img src="/loggistic (2).png" className="w-12 h-12 mb-4" alt="" />
      ),
    },
    {
      number: "5,000+",
      label: "Successful Deliveries",
      icon: (
      <img src="/box2.png" className="w-12 h-12 mb-4" alt="" />
      ),
    },
    {
      number: "98%",
      label: "Customer Satisfaction",
      icon: (
        <svg
          className="w-12 h-12 text-white mb-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full px-2 sm:px-4 md:px-6 py-12">
      <div className="w-full max-w-[1920px] mx-auto bg-gradient-to-r from-[#002B66] via-[#0040A8] to-[#0055D4] rounded-3xl p-8 sm:p-14 lg:p-20 text-white shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-5 flex flex-col items-start space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-wider uppercase mb-2">
                WHY CHOOSE WOW?
              </h2>
              <div className="w-16 h-[4px] bg-[#0066FF] rounded-full" />
            </div>

            <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-xl">
              We combine experience, global partnership, and dedicated support to give you the best travel and logistics experience.
            </p>

            <button className="bg-[#FF6B00] hover:bg-[#E05E00] text-white font-semibold px-7 py-3.5 rounded-xl flex items-center gap-2.5 transition-all duration-200 shadow-md hover:shadow-lg active:scale-95">
              <span>Send a Package Now</span>
              <svg
                className="w-4 h-4 transform rotate-45"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-0 items-center">
            {stats.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center px-4 relative lg:border-r border-white/20 last:border-r-0"
              >
                {item.icon}
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight my-1">
                  {item.number}
                </span>
                <span className="text-blue-100 text-sm sm:text-base font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}