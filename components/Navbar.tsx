"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/tourpackages", label: "Tour Packages" },
  { href: "/logistics", label: "Logistics" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHomePage = pathname === "/";
  const isTransparent = isHomePage && !scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full transition-colors duration-300 ${
        isTransparent
          ? "bg-transparent text-white"
          : "border-b border-slate-100 bg-white text-slate-700 shadow-xs"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:h-22 sm:px-6 lg:px-10">
        <div>
          <Image
            src="/logo.png"
            alt="Logo"
            width={128}
            height={128}
            className="h-20 w-24 object-contain sm:size-32"
            priority
          />
        </div>

        <div className="hidden items-center gap-9 font-bold md:flex">
          {navLinks.map(({ href, label }) => {
            const isActive = href === "/" ? pathname === href : pathname.startsWith(href);

            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={`relative transition duration-300 hover:text-[#ED7911] after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:bg-[#ED7911] after:transition-all after:duration-300 hover:after:w-full ${
                  isActive
                    ? "text-[#ED7911] after:w-full"
                    : `${isTransparent ? "text-white" : "text-slate-600"} after:w-0`
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        <Link href="/contact" className="hidden items-center gap-2 rounded-xl bg-[#ED7911] px-6 py-3 font-semibold text-white transition duration-300 hover:bg-orange-600 md:flex">
          Book Now
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M12.4363 10H4.93625C4.355 10 4.06437 10 3.82562 10.0637C3.50769 10.149 3.21781 10.3165 2.98511 10.5493C2.75241 10.7821 2.5851 11.072 2.5 11.39"
              stroke="white"
              strokeWidth="1.25"
            />
            <path
              d="M5 4.375H10M5 6.5625H8.125M6.25 13.75C4.4825 13.75 3.59813 13.75 3.04938 13.2006C2.5 12.6519 2.5 11.7675 2.5 10V5C2.5 3.2325 2.5 2.34812 3.04938 1.79937C3.59813 1.25 4.4825 1.25 6.25 1.25H8.75C10.5175 1.25 11.4019 1.25 11.9506 1.79937C12.5 2.34812 12.5 3.2325 12.5 5M8.75 13.75C10.5175 13.75 11.4019 13.75 11.9506 13.2006C12.5 12.6519 12.5 11.7675 12.5 10V7.5"
              stroke="white"
              strokeWidth="1.25"
              strokeLinecap="round"
            />
          </svg>
        </Link>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
          className={`flex size-10 items-center justify-center rounded-lg border transition md:hidden ${
            isTransparent
              ? "border-white/40 text-white"
              : "border-slate-200 text-slate-700"
          }`}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition ${
                mobileMenuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-current transition ${
                mobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`grid overflow-hidden bg-white text-slate-700 shadow-[0_12px_24px_rgba(15,23,42,0.08)] transition-all duration-300 md:hidden ${
          mobileMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <div className="flex flex-col gap-4 px-6 pb-6 pt-2 font-semibold">
            {navLinks.map(({ href, label }) => {
              const isActive = href === "/" ? pathname === href : pathname.startsWith(href);

              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-md py-1 transition hover:text-[#ED7911] ${
                    isActive ? "text-[#ED7911]" : "text-slate-600"
                  }`}
                >
                  {label}
                </Link>
              );
            })}

            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="mt-1 inline-flex w-fit items-center gap-2 rounded-xl bg-[#ED7911] px-5 py-3 font-semibold text-white transition duration-300 hover:bg-orange-600">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
