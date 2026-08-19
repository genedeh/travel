import React from "react";

export default function HowItWorksSection() {
    
  const values = [
    {
      title: "Integrity",
      description:
        "We uphold honesty and transparency in all our dealings.",
      icon: (
       <img src="/arcticons_trust-wallet.png" alt="" />
      ),
    },
    {
      title: "Excellence",
      description:
        "We are committed to delivering the highest standards",
      icon: (
       <img src="/streamline-flex_star-badge.png" alt="" />
      ),
    },
    {
      title: "Reliable",
      description:
        "Our clients count on us for consistent and dependable service.",
      icon: (
       <img src="/streamline-freehand_business-deal-handshake.png" alt="" />
      ),
    },
    {
      title: "Innovation",
      description:
        "We embrace new ideas to create better travel and logistics solutions.",
      icon: (
       <img src="/streamline-freehand_creativity-idea-bulb.png" alt="" />
      ),
    },
    {
      title: "Customer First",
      description:
        "Our customers needs and satisfaction are always our priority.",
      icon: (
       <img src="/Vector (11).png" alt="" className="" />
      ),
    },
  ];

  return (
    <section className="w-full bg-white py-24 px-8 sm:px-12 lg:px-20 min-h-[600px] flex flex-col justify-center items-center">
      <div className="max-w-[1400px] w-full">
        <div className="flex flex-col items-center text-center mb-20 sm:mb-24">
          <span className="text-[#0066FF] text-base sm:text-lg font-bold tracking-widest uppercase mb-3">
            HOW IT WORKS
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 tracking-tight mb-5">
            Simple Steps to Your Adventure
          </h2>
          <div className="w-24 h-[5px] bg-[#0066FF] rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 items-start">
          {values.map((item, index) => (
            <div
              key={index}
              className="flex flex-row items-start gap-4 p-2"
            >
              {item.icon}
              <div className="flex flex-col space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}