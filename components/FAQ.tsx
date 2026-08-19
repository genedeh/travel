"use client";

import { useState } from "react";
import { FaPlus, FaMinus, FaChevronDown } from "react-icons/fa";

const FAQ = () => {
  const [open, setOpen] = useState(0);

  const faqs = [
    {
      question: "How long does visa processing take?",
      answer:
        "Visa processing times vary depending on the destination country, visa type, and embassy requirements. On average, processing can take 5 to 30 business days.",
    },
    {
      question: "How long does it take to book a trip?",
      answer:
        "Our team can help you plan and arrange your trip based on your preferred destination, schedule, and requirements.",
    },
    {
      question: "Do you handle travel documentation?",
      answer:
        "Yes. We assist with the required travel documents and guide you through the documentation process.",
    },
    {
      question: "Do you provide logistics services?",
      answer:
        "Yes. We provide parcel delivery, document delivery, business logistics, and nationwide delivery services.",
    },
  ];

  return (
    <section className="w-full bg-white px-6 py-24">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">

          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-wider text-blue-600">
              Frequently Asked Questions
            </p>

            <div className="flex flex-col gap-5">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_3px_12px_rgba(0,0,0,0.12)]"
                >
                  <button
                    onClick={() => setOpen(open === index ? -1 : index)}
                    className="flex w-full items-center gap-7 px-7 py-6 text-left"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center text-blue-600">
                      {open === index ? (
                        <FaMinus className="text-xl" />
                      ) : (
                        <FaPlus className="text-xl" />
                      )}
                    </span>

                    <span className="text-xl font-bold text-[#353052] md:text-2xl">
                      {faq.question}
                    </span>
                  </button>

                  {open === index && (
                    <div className="px-7 pb-7 pl-[84px]">
                      <p className="max-w-[650px] text-lg leading-7 text-gray-500">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-wider text-blue-600">
              Get In Touch
            </p>
            <h1 className="text-black font-bold text-4xl mt-10">We Are Here To Help You</h1>

            <div className="rounded-[24px] bg-[#f4f8fd] mt-16 p-7 shadow-[0_4px_20px_rgba(0,0,0,0.08)] md:p-8">
              <form className="grid grid-cols-1 gap-5 md:grid-cols-2">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="h-[58px] rounded-md border border-gray-200 bg-white px-5 text-lg text-gray-700 outline-none transition focus:border-blue-500"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="h-[58px] rounded-md border border-gray-200 bg-white px-5 text-lg text-gray-700 outline-none transition focus:border-blue-500"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="h-[58px] rounded-md border border-gray-200 bg-white px-5 text-lg text-gray-700 outline-none transition focus:border-blue-500"
                />

                <div className="relative">
                  <select
                    defaultValue=""
                    className="h-[58px] w-full appearance-none rounded-md border border-gray-200 bg-white px-5 text-lg text-gray-600 outline-none transition focus:border-blue-500"
                  >
                    <option value="" disabled>
                      Select Service
                    </option>
                    <option>Visa Assistance</option>
                    <option>Travel Booking</option>
                    <option>Logistics</option>
                    <option>Hotel Booking</option>
                    <option>Tour Package</option>
                  </select>

                  <FaChevronDown className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-sm text-gray-600" />
                </div>

                <textarea
                  placeholder="Your Message"
                  className="h-[130px] resize-none rounded-md border border-gray-200 bg-white px-5 py-4 text-lg text-gray-700 outline-none transition focus:border-blue-500 md:col-span-2"
                />

                <button
                  type="submit"
                  className="h-[60px] rounded-lg bg-blue-600 text-xl font-bold text-white transition hover:bg-blue-700 md:col-span-2"
                >
                  Send Message
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;