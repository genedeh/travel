import React from "react";
import Image from "next/image";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

const Body = () => {
  const tour = [
    {
      image: "/logistic (5).png",
      title: "Parcel Delivery",
      description:
        "Send packages of any size across the city, nationwide, or internationally.",
    },
    {
      image: "/logistic (1).png",
      title: "Document Delivery",
      description:
        "Fast, secure and confidential delivery of important documents.",
    },
    {
      image: "/logistic (2).png",
      title: "Business Logistics",
      description:
        "Supply chain and logistics solutions for businesses of all sizes.",
    },
    {
      image: "/logistic (4).png",
      title: "International Shipping",
      description:
        "We handle customs and international delivery with ease.",
    },
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="flex flex-col items-center text-center mb-12">
        <h3 className="text-[#0363F1] font-semibold text-sm tracking-wider uppercase mb-2">
          WHAT WE OFFER
        </h3>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
          Popular Tour Packages
        </h1>
        <div className="bg-[#0363F1] w-16 h-1 rounded-full" />
      </div>

      <div className="mx-auto max-w-[1536px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tour.map((item, index) => (
          <div
            key={index}
            className="w-full rounded-2xl bg-white p-8 border border-gray-200/80 hover:border-gray-300 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between items-start text-left"
          >
            <div className="flex flex-col items-start w-full">
              <div className="relative w-14 h-14 mb-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>

              <h2 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h2>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                {item.description}
              </p>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-base font-semibold text-[#0363F1] hover:text-blue-700 transition-colors mt-auto"
            >
              <span>Learn More</span>
              <span className="text-lg"><FaArrowRight size={20}/></span>
            </a>
          </div>
        ))}
      </div>
      <div className="flex grid-cols-3 grid-rows-1 gap-8 mt-30 ml-10">
        <div>
            <img src="/logistic (7).png" className="w-105 h-97" alt="" />
        </div>
        <div>
            <img src="/logistic (8).png" className="h-97 w-70 "alt="" />
        </div>
        <div className="ml-10">
            <h3 className="text-blue-600 text-xl font-semibold ">WHAT WE OFFER</h3>
            <h1 className="text-3xl text-black font-bold mt-3">Your Trusted Logisttic Partner</h1>
            <p className="text-black font-normal  mt-2 w-140">We are committed to providing efficient, affordable, and reliable logistics services with a focus on customer satisfaction.</p>
                <div>
                    <div className="flex mt-4">
                      <img src="/line-md_confirm-circle-filled.png" className="w-7 h-7"alt="" />
                        <p className="flex text-black font-normal text-lg ml-2">Timely and Reliable Delivery</p>

                    </div>
                    <div className="flex mt-4">
                      <img src="/line-md_confirm-circle-filled.png" className="w-7 h-7"alt="" />
                        <p className="flex text-black font-normal text-lg ml-2">Affordable Pricing</p></div>
                
                         <div className="flex mt-4">
                      <img src="/line-md_confirm-circle-filled.png" className="w-7 h-7"alt="" />
                        <p className="flex text-black font-normal text-lg ml-2">Real-time Tracking Updates</p>
                    </div>
                    
                     <div className="flex mt-4">
                      <img src="/line-md_confirm-circle-filled.png" className="w-7 h-7"alt="" />
                        <p className="flex text-black font-normal text-lg ml-2">Safe and Secure Handling</p></div>
                     <div className="flex mt-4">
                      <img src="/line-md_confirm-circle-filled.png" className="w-7 h-7"alt="" />
                        <p className="flex text-black font-normal text-lg ml-2">Excellent Customer Support</p></div>

                </div>
        </div>

      </div>
      <div className="text-center mt-20">
        <h3 className="text-blue-600 text-xl font-semibold">HOW IT WORKS</h3>
         <h1 className="text-3xl text-black font-bold mt-3">Simple Steps to Deliver</h1>
         <div  className="flex justify-center items-center mt-5">
            
        <div className="bg-[#0363F1] w-16 h-1 flex rounded-full" />
         </div>
         <div className="flex justify-center items-center mt-16">
            <img src="/logistic (9).png"  className="flex w-[90%] h-auto " alt="" />
         </div>
      </div>
    <div className="w-full bg-blue-700 mt-15 px-6 py-8 sm:px-10 lg:px-16">
  <div className="flex w-full flex-col items-center justify-between gap-6 md:flex-row">
    <div>
      <h2 className="text-left text-2xl font-bold text-white sm:text-3xl">
        Need to Send a Package or Document?
      </h2>

      <p className="mt-4 text-left text-lg font-bold text-white sm:text-xl">
        We are Ready to Deliver it for You
      </p>
    </div>

    <div className="flex flex-col gap-3 sm:flex-row">
      <button className="rounded-lg border border-blue-600 bg-white px-6 py-3 font-semibold text-blue-600">
        Request a Quote
      </button>

      <button className="rounded-lg bg-blue-800 px-6 py-3 font-semibold text-white">
        Send Package
      </button>
    </div>
  </div>


      </div>
    </section>
  );
};

export default Body;