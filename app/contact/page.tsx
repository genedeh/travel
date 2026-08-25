"use client";

import type { FormEvent } from "react";
import Image from "next/image";

const whatsappNumber = "2349345676537";

const openWhatsAppMessage = (formData: FormData, source: string) => {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const service = String(formData.get("service") || "").trim();
  const message = String(formData.get("message") || "").trim();

  const text = [
    `Hello WOW The World Logistics, I have a new enquiry from the ${source}.`,
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

const contactCards = [
  {
    title: "Phone/WhatsApp",
    lines: ["+234 934 564 5679", "+234 917 004 5472"],
    href: "https://wa.me/2349345645679",
    icon: (
      <path d="M6.54 5C6.6 5.89 6.75 6.76 6.99 7.59L5.79 8.79C5.38 7.59 5.12 6.32 5.03 5H6.54ZM16.4 17.02C17.25 17.26 18.12 17.41 19 17.47V18.96C17.68 18.87 16.41 18.61 15.2 18.21L16.4 17.02ZM7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.51C21 15.96 20.55 15.51 20 15.51C18.76 15.51 17.55 15.31 16.43 14.94C16.33 14.9 16.22 14.89 16.12 14.89C15.86 14.89 15.61 14.99 15.41 15.18L13.21 17.38C10.38 15.93 8.06 13.62 6.62 10.79L8.82 8.59C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3Z" />
    ),
  },
  {
    title: "Email Address",
    lines: ["info@wowlogistics.com", "support@wowlogistics.com"],
    href: "mailto:info@wowlogistics.com",
    icon: (
      <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
    ),
  },
  {
    title: "Office Address",
    lines: ["123 Freedom Way, Lekki Phase 1,", "Lagos, Nigeria."],
    href: "https://www.google.com/maps/search/?api=1&query=123%20Freedom%20Way%20Lekki%20Phase%201%20Lagos%20Nigeria",
    icon: (
      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" />
    ),
  },
  {
    title: "Working Hours",
    lines: ["Mon - Fri: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Closed"],
    href: "/contact",
    icon: (
      <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.2 16.2L11 13V7H12.5V12.15L17 14.85L16.2 16.2Z" />
    ),
  },
];

const ContactPage = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    openWhatsAppMessage(new FormData(event.currentTarget), "contact page");
  };

  return (
    <main className="w-full bg-white text-black">
      <section className="relative min-h-[420px] w-full overflow-hidden">
        <Image
          src="/contact/contact-hero.png"
          alt="Contact WOW The World Logistics"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061947]/95 via-[#06327B]/70 to-transparent" />
        <div className="relative z-10 flex h-full max-w-[640px] flex-col justify-center px-6 pt-[88px] sm:px-10">
          <p className="font-inter text-[13px] font-semibold uppercase leading-none text-[#3A86FF]">
            Contact Us
          </p>
          <h1 className="mt-[18px] font-inter text-[30px] font-bold leading-[40px] text-white sm:text-[34px] sm:leading-[46px]">
            We’re here to help you plan, book, and deliver.
          </h1>
          <p className="mt-[16px] max-w-[500px] font-inter text-[15px] font-medium leading-[25px] text-white/80">
            Reach out for travel bookings, visa support, tour packages, or
            logistics delivery. Our team is ready when you are.
          </p>
        </div>
      </section>

      <section className="bg-[#E0EEFF] px-4 py-[55px] sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1120px] gap-[32px] lg:grid-cols-[430px_1fr]">
          <div className="space-y-[14px]">
            {contactCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex min-h-[76px] items-start gap-[14px] rounded-[8px] bg-white/70 px-[14px] py-[13px] shadow-[0_0_4px_0_#00000012] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_10px_22px_0_#0363F11F] sm:items-center sm:gap-[18px] sm:px-[18px]"
              >
                <span className="flex size-[50px] shrink-0 items-center justify-center rounded-full bg-[#0363F1] text-white transition-transform duration-300 group-hover:scale-105">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    {card.icon}
                  </svg>
                </span>
                <span>
                  <span className="block font-inter text-[15px] font-semibold leading-none text-black">
                    {card.title}
                  </span>
                  {card.lines.map((line) => (
                    <span key={line} className="mt-[6px] block font-inter text-[13px] font-medium leading-none text-[#050505]">
                      {line}
                    </span>
                  ))}
                </span>
              </a>
            ))}
          </div>

          <div className="rounded-[18px] bg-white px-[24px] py-[26px] shadow-[0_0_8px_0_#00000018] transition-shadow duration-300 hover:shadow-[0_12px_30px_0_#0363F11F]">
            <p className="font-inter text-[13px] font-semibold uppercase leading-none text-[#0363F1]">
              Get In Touch
            </p>
            <h2 className="mt-[12px] font-inter text-[24px] font-semibold leading-[30px] text-black">
              Send us a message
            </h2>
            <p className="mt-[10px] max-w-[540px] font-inter text-[14px] font-medium leading-[22px] text-[#050505B2]">
              Tell us what you need and we’ll respond with the right travel or
              logistics support.
            </p>

            <form onSubmit={handleSubmit} className="mt-[22px] grid gap-[14px]">
              <div className="grid gap-[14px] md:grid-cols-2">
                <input name="name" className="h-[50px] rounded-[5px] border border-black/10 px-[14px] font-inter text-[13px] outline-none transition-colors duration-200 focus:border-[#0363F1]" placeholder="Full Name" />
                <input name="email" type="email" className="h-[50px] rounded-[5px] border border-black/10 px-[14px] font-inter text-[13px] outline-none transition-colors duration-200 focus:border-[#0363F1]" placeholder="Email Address" />
                <input name="phone" className="h-[50px] rounded-[5px] border border-black/10 px-[14px] font-inter text-[13px] outline-none transition-colors duration-200 focus:border-[#0363F1]" placeholder="Phone Number" />
                <select name="service" defaultValue="" className="h-[50px] rounded-[5px] border border-black/10 px-[14px] font-inter text-[13px] text-black/70 outline-none transition-colors duration-200 focus:border-[#0363F1]">
                  <option value="" disabled>Select Service</option>
                  <option>Flight Reservation</option>
                  <option>Hotel Booking</option>
                  <option>Visa Assistance</option>
                  <option>Tour Package</option>
                  <option>Logistics Services</option>
                </select>
              </div>
              <textarea name="message" className="min-h-[120px] rounded-[5px] border border-black/10 px-[14px] py-[14px] font-inter text-[13px] outline-none transition-colors duration-200 focus:border-[#0363F1]" placeholder="Your Message" />
              <button type="submit" className="flex h-[54px] items-center justify-center rounded-[10px] bg-[#0363F1] font-inter text-[18px] font-semibold leading-none text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#024dbb] hover:shadow-[0_10px_18px_0_#0363F140]">
                Get In Touch
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
