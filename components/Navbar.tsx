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
      <div className="mx-auto flex h-22 w-full max-w-7xl items-center justify-between px-6 lg:px-10">
        <div>
          <Image
            src="/logo.png"
            alt="Logo"
            width={128}
            height={128}
            className="size-32 object-contain"
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
      </div>
    </nav>
  );
};

export default Navbar;
