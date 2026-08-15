import { Inter, Montserrat, Roboto, Oswald } from "next/font/google";
import { FaCalendarCheck } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 z-50 w-full bg-transparent text-white">
  <div className="flex w-full items-center justify-between px-6 py-4">

    <div>
      <img
        src="/image 27.png"
        alt="Logo"
        className="h-16 w-auto object-contain"
      />
    </div>

    <div className="hidden items-center gap-9 font-bold md:flex">
     <a
  href="#"
  className="relative text-gray-300 transition duration-300 hover:text-[#ED7911]
  after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0
  after:bg-[#ED7911] after:transition-all after:duration-300
  hover:after:w-full"
>
  Home
</a>

      <a
        href="#"
        className="relative text-gray-300 transition duration-300 hover:text-[#ED7911]
  after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0
  after:bg-[#ED7911] after:transition-all after:duration-300
  hover:after:w-full"
      >
        About Us
      </a>

      <a
        href="#"
        className="relative text-gray-300 transition duration-300 hover:text-[#ED7911]
  after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0
  after:bg-[#ED7911] after:transition-all after:duration-300
  hover:after:w-full"
      >
        Services
      </a>

      <a
        href="#"
        className="relative text-gray-300 transition duration-300 hover:text-[#ED7911]
  after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0
  after:bg-[#ED7911] after:transition-all after:duration-300
  hover:after:w-full"
      >
        Tour Packages
      </a>

      <a
        href="#"
        className="relative text-gray-300 transition duration-300 hover:text-[#ED7911]
  after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0
  after:bg-[#ED7911] after:transition-all after:duration-300
  hover:after:w-full"
      >
        Logistics
      </a>

      <a
        href="#"
        className="relative text-gray-300 transition duration-300 hover:text-[#ED7911]
  after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0
  after:bg-[#ED7911] after:transition-all after:duration-300
  hover:after:w-full"
      >
        Contact
      </a>
    </div>

    <button className="hidden items-center gap-2 rounded-xl bg-[#ED7911] px-6 py-3 font-semibold text-white transition duration-300 hover:bg-orange-600 md:flex">
      
      Book Now<FaCalendarCheck size={22} />
    </button>

  </div>
</nav>
  
  )
}

export default Navbar