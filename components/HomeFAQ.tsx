"use client";

import type { FormEvent } from "react";
import { useState } from "react";

const MinusIcon = () => (
  <svg
    width="23"
    height="3"
    viewBox="0 0 23 3"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect opacity="0.8" width="22.3563" height="3" rx="1.5" fill="#0363F1" />
  </svg>
);

const PlusIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect
      opacity="0.8"
      y="7.31152"
      width="18"
      height="2.92464"
      rx="1.46232"
      fill="#1B1139"
    />
    <rect
      opacity="0.8"
      x="10.5"
      width="17.5479"
      height="3"
      rx="1.5"
      transform="rotate(90 10.5 0)"
      fill="#1B1139"
    />
  </svg>
);

const DropdownIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.16675 6.66675L10.0001 13.3334L15.8334 6.66675H4.16675Z"
      fill="#050505"
      fillOpacity="0.7"
    />
  </svg>
);

const faqs = [
  {
    question: "How long does visa processing take?",
    answer:
      "Visa processing times vary depending on the destination country, visa type, and embassy requirements. On average, processing can take 5 to 30 business days.",
  },
  {
    question: "How long until we deliver your first blog post?",
    answer:
      "Delivery timelines depend on the service selected, pickup location, and destination. Our team confirms the timeline before processing your request.",
  },
  {
    question: "How long until we deliver your first blog post?",
    answer:
      "We keep you updated throughout the process and share clear delivery expectations once your request is reviewed.",
  },
  {
    question: "How long until we deliver your first blog post?",
    answer:
      "For urgent requests, contact our team directly so we can recommend the fastest available travel or logistics option.",
  },
];

const inputClass =
  "h-[50px] rounded-[5px] border border-[#0000001A] bg-white px-5 font-inter text-[14px] font-normal text-[#050505B2] outline-none transition-colors duration-200 placeholder:text-[#050505B2] focus:border-[#0363F1]";

const whatsappNumber = "2349345676537";

const openWhatsAppMessage = (formData: FormData) => {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const service = String(formData.get("service") || "").trim();
  const message = String(formData.get("message") || "").trim();

  const text = [
    "Hello WOW The World Logistics, I have a new enquiry from the home page.",
    "",
    `Name: ${name || "Not provided"}`,
    `Email: ${email || "Not provided"}`,
    `Phone: ${phone || "Not provided"}`,
    `Service: ${service || "Not selected"}`,
    "",
    "Message:",
    message || "Not provided",
  ].join("\n");

  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
};

const HomeFAQ = () => {
  const [open, setOpen] = useState(0);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    openWhatsAppMessage(new FormData(event.currentTarget));
  };

  return (
    <section className="w-full bg-white px-4 py-[44px] sm:px-6">
      <div className="mx-auto grid max-w-[1250px] grid-cols-1 gap-[48px] lg:grid-cols-[558px_560px] lg:items-start lg:justify-between">
        <div>
          <p className="font-inter text-[11px] font-semibold uppercase leading-none text-[#0363F1]">
            Frequently Asked Questions
          </p>

          <div className="mt-[28px] flex flex-col gap-[19px]">
            {faqs.map((faq, index) => {
              const isOpen = open === index;

              return (
                <article
                  key={`${faq.question}-${index}`}
                  className={`w-full rounded-[4.91px] border border-[#0000001A] bg-white shadow-[0_3px_12px_0_#00000014] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_8px_22px_0_#00000018] ${
                    isOpen ? "min-h-[136px]" : "min-h-[66px]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    className="flex w-full items-center gap-4 px-5 py-[21px] text-left sm:gap-[34px] sm:px-[31px]"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center transition-transform duration-300 ease-out ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      {isOpen ? <MinusIcon /> : <PlusIcon />}
                    </span>

                    <span className="font-inter text-[16px] font-semibold leading-[130%] tracking-[0px] text-[#1B1139] sm:text-[18px]">
                      {faq.question}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-[23px] pl-[68px] pr-5 font-inter text-[14px] font-normal leading-[151%] tracking-[0.1px] text-[#363049] sm:pl-[112px] sm:pr-[34px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div>
          <p className="font-inter text-[11px] font-semibold uppercase leading-none text-[#0363F1]">
            Get In Touch
          </p>

          <h2 className="mt-[28px] font-inter text-[20px] font-semibold leading-[25px] text-black">
            We’re Here to Help You
          </h2>

          <form onSubmit={handleSubmit} className="mt-[25px] rounded-[20px] bg-[#F2F8FF] p-5 transition-shadow duration-300 hover:shadow-[0_10px_28px_0_#0363F11A]">
            <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
              <input name="name" type="text" placeholder="Full Name" className={inputClass} />
              <input name="email" type="email" placeholder="Email Address" className={inputClass} />
              <input name="phone" type="tel" placeholder="Phone Number" className={inputClass} />

              <div className="relative">
                <select
                  name="service"
                  defaultValue=""
                  className={`${inputClass} w-full appearance-none pr-12`}
                >
                  <option value="" disabled>
                    Select Service
                  </option>
                  <option>Visa Assistance</option>
                  <option>Flight Booking</option>
                  <option>Hotel Booking</option>
                  <option>Tour Packages</option>
                  <option>Logistics Services</option>
                </select>

                <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2">
                  <DropdownIcon />
                </span>
              </div>
            </div>

            <textarea
              name="message"
              placeholder="Your Message"
              className="mt-[16px] h-[100px] w-full resize-none rounded-[5px] border border-[#0000001A] bg-white px-5 py-4 font-inter text-[14px] font-normal text-[#050505B2] outline-none transition-colors duration-200 placeholder:text-[#050505B2] focus:border-[#0363F1]"
            />

            <button
              type="submit"
              className="mt-[18px] h-[54px] w-full rounded-[10px] bg-[#0363F1] font-inter text-[20px] font-semibold leading-none text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0255cf] hover:shadow-[0_10px_18px_0_#0363F140]"
            >
              Get In Touch
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;
