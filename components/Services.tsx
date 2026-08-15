import {FaPlaneDeparture, FaHotel,FaPassport, FaUmbrellaBeach, FaShieldAlt, FaLock, FaBusAlt, FaBus} from "react-icons/fa"
const Services = () => {
    return(
        <div className="bg-white">
            <div className="mt-20">
                <p className="text-[#0363F1] text-center mt-10 text-3xl font-semibold">Our Services</p>
                <h1 className="text-center font-bold mt-8 text-black text-5xl">Everything You Need,</h1>
                <h2 className="text-[#0363F1] text-center mt-2 text-5xl font-bold">All in one Place</h2>
                <p className="text-[#050505B2] text-center text-wrap font-poppins mt-6 text-2xl">We provide a wide range of travel and logistic services designed to make <br />your journey smooth,easy and stress-free.</p>
                <div className="mx-auto grid w-full max-w-[1800px] grid-cols-1 mt-30 justify-items-center gap-8 px-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
<div className="flex h-[180px] w-[420px] items-center gap-6 rounded-xl border border-black bg-white px-6 py-5 shadow-[2px_2px_8px_rgba(0,0,0,0.25)]">
  <div className="flex h-[120px] w-[82px] shrink-0 flex-col items-center justify-center">
    <div className="flex h-[78px] w-[78px] items-center justify-center rounded-xl border border-blue-300 bg-[#EAF2FF]">
      <FaPlaneDeparture
        className="text-[#0363F1]"
        size={46}
      />
    </div>

    <div className="mt-4 h-[4px] w-[50px] rounded-full bg-[#0363F1]" />
  </div>

  <div className="min-w-0 flex-1 self-start pt-3">
    <h2 className="text-[21px] font-bold leading-7 text-black">
      Flight Reservation
    </h2>

    <p className="mt-3 text-[16px] font-medium leading-6 text-[#050505B2]">
      Book domestic and international flights at the best prices with top airlines.
    </p>
  </div>
</div>
       <div className="flex h-[180px] w-[420px] items-center gap-6 rounded-xl border border-black bg-white px-6 py-5 shadow-[2px_2px_8px_rgba(0,0,0,0.25)]">
  <div className="flex h-[120px] w-[82px] shrink-0 flex-col items-center justify-center">
    <div className="flex h-[78px] w-[78px] items-center justify-center rounded-xl border border-blue-300 bg-[#EAF2FF]">
      <FaHotel
        className="text-[#0363F1]"
        size={46}
      />
    </div>

    <div className="mt-4 h-[4px] w-[50px] rounded-full bg-[#0363F1]" />
  </div>

  <div className="min-w-0 flex-1 self-start pt-3">
    <h2 className="text-[21px] font-bold leading-7 text-black">
      Hotel Bookings
    </h2>

    <p className="mt-3 text-[16px] font-medium leading-6 text-[#050505B2]">
      Find and book the perfect hotels that suits your budget and comfort
    </p>
  </div>
</div><div className="flex h-[180px] w-[420px] items-center gap-6 rounded-xl border border-black bg-white px-6 py-5 shadow-[2px_2px_8px_rgba(0,0,0,0.25)]">
  <div className="flex h-[120px] w-[82px] shrink-0 flex-col items-center justify-center">
    <div className="flex h-[78px] w-[78px] items-center justify-center rounded-xl border border-blue-300 bg-[#EAF2FF]">
      <FaPassport
        className="text-[#0363F1]"
        size={46}
      />
    </div>

    <div className="mt-4 h-[4px] w-[50px] rounded-full bg-[#0363F1]" />
  </div>

  <div className="min-w-0 flex-1 self-start pt-3">
    <h2 className="text-[21px] font-bold leading-7 text-black">
      Visa Assistance
    </h2>

    <p className="mt-3 text-[16px] font-medium leading-6 text-[#050505B2]">
    Get expert help wih visa application and document for hassle free travel
    </p>
  </div>
</div>
                 <div className="flex h-[180px] w-[420px] items-center gap-6 rounded-xl border border-black bg-white px-6 py-5 shadow-[2px_2px_8px_rgba(0,0,0,0.25)]">
  <div className="flex h-[120px] w-[82px] shrink-0 flex-col items-center justify-center">
    <div className="flex h-[78px] w-[78px] items-center justify-center rounded-xl border border-blue-300 bg-[#EAF2FF]">
      <FaPassport
        className="text-[#0363F1]"
        size={46}
      />
    </div>

    <div className="mt-4 h-[4px] w-[50px] rounded-full bg-[#0363F1]" />
  </div>

  <div className="min-w-0 flex-1 self-start pt-3">
    <h2 className="text-[21px] font-bold leading-7 text-black">
      Passport Processing
    </h2>

    <p className="mt-3 text-[16px] font-medium leading-6 text-[#050505B2]">
      Fast and reliable passport processing to get ready for your next trip.
    </p>
  </div>
</div>
              <div className="flex h-[180px] w-[420px] items-center gap-6 rounded-xl border border-black bg-white px-6 py-5 shadow-[2px_2px_8px_rgba(0,0,0,0.25)]">
  <div className="flex h-[120px] w-[82px] shrink-0 flex-col items-center justify-center">
    <div className="flex h-[78px] w-[78px] items-center justify-center rounded-xl border border-blue-300 bg-[#EAF2FF]">
      <FaShieldAlt
        className="text-[#0363F1]"
        size={46}
      />
    </div>

    <div className="mt-4 h-[4px] w-[50px] rounded-full bg-[#0363F1]" />
  </div>

  <div className="min-w-0 flex-1 self-start pt-3">
    <h2 className="text-[21px] font-bold leading-7 text-black">
      Travel
    </h2>

    <p className="mt-3 text-[16px] font-medium leading-6 text-[#050505B2]">
      Comprehensive travel insurance plans for a safe and worry-free journey
    </p>
  </div>
</div>
              <div className="flex h-[180px] w-[420px] items-center gap-6 rounded-xl border border-black bg-white px-6 py-5 shadow-[2px_2px_8px_rgba(0,0,0,0.25)]">
  <div className="flex h-[120px] w-[82px] shrink-0 flex-col items-center justify-center">
    <div className="flex h-[78px] w-[78px] items-center justify-center rounded-xl border border-blue-300 bg-[#EAF2FF]">
      <FaLock
        className="text-[#0363F1]"
        size={46}
      />
    </div>

    <div className="mt-4 h-[4px] w-[50px] rounded-full bg-[#0363F1]" />
  </div>

  <div className="min-w-0 flex-1 self-start pt-3">
    <h2 className="text-[21px] font-bold leading-7 text-black">
      Safe & Secure Cargo
    </h2>

    <p className="mt-3 text-[16px] font-medium leading-6 text-[#050505B2]">
      We deliver your cargo safely and securely to any part of the world with ease
    </p>
  </div>
</div>
              <div className="flex h-[180px] w-[420px] items-center gap-6 rounded-xl border border-black bg-white px-6 py-5 shadow-[2px_2px_8px_rgba(0,0,0,0.25)]">
  <div className="flex h-[120px] w-[82px] shrink-0 flex-col items-center justify-center">
    <div className="flex h-[78px] w-[78px] items-center justify-center rounded-xl border border-blue-300 bg-[#EAF2FF]">
      <FaUmbrellaBeach
        className="text-[#0363F1]"
        size={46}
      />
    </div>

    <div className="mt-4 h-[4px] w-[50px] rounded-full bg-[#0363F1]" />
  </div>

  <div className="min-w-0 flex-1 self-start pt-3">
    <h2 className="text-[21px] font-bold leading-7 text-black">
        Tour Packages
    </h2>

    <p className="mt-3 text-[16px] font-medium leading-6 text-[#050505B2]">
      Explore any amazing destination with our curated tour package
    </p>
  </div>
</div>

<div className="flex h-[180px] w-[420px] items-center gap-6 rounded-xl border border-black bg-white px-6 py-5 shadow-[2px_2px_8px_rgba(0,0,0,0.25)]">
  <div className="flex h-[120px] w-[82px] shrink-0 flex-col items-center justify-center">
    <div className="flex h-[78px] w-[78px] items-center justify-center rounded-xl border border-blue-300 bg-[#EAF2FF]">
      <FaBusAlt
        className="text-[#0363F1]"
        size={46}
      />
    </div>

    <div className="mt-4 h-[4px] w-[50px] rounded-full bg-[#0363F1]" />
  </div>

  <div className="min-w-0 flex-1 self-start pt-3">
    <h2 className="text-[21px] font-bold leading-7 text-black">
      Logistic Services
    </h2>

    <p className="mt-3 text-[16px] font-medium leading-6 text-[#050505B2]">
      Reliable logistics solution for buisiness and individuals worldwide.
    </p>
  </div>
  
  
  

</div>
</div>

                </div>

            </div>
        

    );
}
export default Services;