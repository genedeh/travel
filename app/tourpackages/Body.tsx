import {FaArrowRight,FaSun} from 'react-icons/fa'
const Body = () => {
    const packages = [
         {
      image: "/image 10.png",
      title: "Dubai Gateway",
      nights: 4,
      days: 5,
    },
    {
      image: "/image 11.png",
      title: "London Experience",
      nights: 6,
      days: 7,
    },
    {
      image: "/image 12.png",
      title: "Canada Discovery",
      nights: 7,
      days: 8,
    },
    {
      image: "/image 13.png",
      title: "Turkey Delight",
      nights: 5,
      days: 6,
    },
        
    ]
    return(
        <section className="mt-30 ml-10 mr-10">
            <h2 className="text-3xl text-left ml-7 font-bold text-black">Porpular {''}
            <span className="text-blue-500">Tour Packages</span>
            </h2>
            <p className="text-black mt-3 ml-7 font-semibold text-xl">Handpicked packages to give you the best travel experience.</p>
           
             <div className=" mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="flex flex-col justify-between overflow-hidden rounded-3xl bg-white p-4 text-black shadow-lg"
              >
                <div className="h-[240px] w-full overflow-hidden rounded-2xl">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-grow flex-col justify-between">
                  <div>
                    <h3 className="mt-5 text-xl font-bold text-gray-900">
                      {pkg.title}
                    </h3>

                    <div className="mt-4 inline-flex flex-wrap items-center gap-2.5 rounded-xl bg-blue-50/80 px-4 py-2 text-sm font-semibold text-gray-700">
                      <img
                        src="/moon.png"
                        alt=""
                        className="h-5 w-5 object-contain"
                      />

                      <span>{pkg.nights} Nights</span>

                      <span className="text-gray-400">/</span>

                      <FaSun className="text-base text-blue-500" />

                      <span>{pkg.days} Days</span>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-3 text-sm font-semibold text-gray-600">
                      <div className="flex items-center gap-1.5">
                        <img
                          src="/airplane2.png"
                          className="h-5 w-5 object-contain"
                          alt=""
                        />
                        <span>Flight</span>
                      </div>

                      <span>•</span>

                      <div className="flex items-center gap-1.5">
                        <img
                          src="/sleep.png"
                          className="h-5 w-6 object-contain"
                          alt=""
                        />
                        <span>Hotel</span>
                      </div>

                      <span>•</span>

                      <div className="flex items-center gap-1.5">
                        <img
                          src="/tour.png"
                          className="h-5 w-6 object-contain"
                          alt=""
                        />
                        <span>Tour</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex  text-center justify-center">
                    <button className="flex w-[93%] mr-4 center items-center gap-1.5 rounded-xl bg-orange-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-600">
                      View Details
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
           <div className="bg-[#E0EEFF] rounded-2xl mt-20 mb-10 h-70">
            <div className="flex gap-6">
                <div className="flex">
                    <h1 className="text-3xl mt-18 w-50 ml-12 font-bold text-black">Why Travel With{""} <span className="text-blue-500">WOW?</span>
                     <p className="text-gray-600 mt-2 w-110 font-bold text-xl ">We make every trip comfortable, memorable and hassle-free.</p></h1>
                   <div className="gap-25 mr-10 grid grid-cols-4 grid-rows-1 ml-90 mt-10 text-center text-black font-bold gap-3 justify-end">
                    <div className="flex flex-col items-center text-center">
  <img
    src="/Frame 2147225201.png"
    className="h-20 w-20 object-contain"
    alt=""
  />

  <h2 className="mt-4 text-xl w-50 font-bold text-gray-900">
    Trusted and Reliable
  </h2>

  <p className="mt-2 w-40 text-base leading-6 text-gray-600">
    We are a registered and trusted travel company
  </p>
</div>  
                    <div className="flex flex-col items-center text-center">
                        <img src="/Frame 2147225223 (1).png" className="h-20 w-20 object-contain" alt="" />
                        <h2 className="mt-4 text-xl w-60 font-bold text-gray-900">Best Price Guranteed </h2>
                        <p className="mt-2 max-w-xs text-base leading-6 text-gray-600">Get the best rates with no hidden charges.</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <img src="/Frame 2147225223 (2).png" alt="" className="h-20 w-20 object-contain" />
                        <h2 className="mt-4 text-xl w-60 font-bold text-gray-900">24/7 Support</h2>
                        <p className="mt-2 max-w-xs text-base leading-6 text-gray-600">Our team is always here to assist you.</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <img src="/Frame 2147225223 (3).png" alt="" className="w-20 h-20 object-contain" />
                        <h2 className="mt-4 text-xl w-60 font-bold text-gray-900">Custom Packages</h2>
                        <p className="mt-2 max-w-xs text-base leading-6 text-gray-600">We create packages that fit your needs.</p>
                    </div>

                    
                   </div>
                </div>
                

            </div>

           </div>
<div className="relative mt-25 w-full overflow-hidden rounded-3xl">
  <img
    src="/ChatGPT Image Aug 4, 2026, 05_50_00 PM 2.png"
    alt=""
    className="h-auto w-full object-cover"
  />

  <div className="absolute inset-0 flex items-center justify-between px-8 sm:px-12 lg:px-20">
    <div className="flex items-center gap-5">
      <img
        src="/Frame 2147225201.png"
        alt=""
        className="h-20 w-20 object-contain sm:h-24 sm:w-24"
      />

      <div className="max-w-xl">
        <h1 className="text-xl font-bold text-white sm:text-2xl lg:text-3xl">
          Ready to Explore the World?
        </h1>

        <p className="mt-2 text-sm leading-6 w-120 text-white sm:text-base lg:text-lg">
          Book your dream tour package today and create memories that last a
          lifetime.
        </p>
      </div>
    </div>

    <button className="shrink-0 rounded-xl bg-[#ED7911] px-6 flex gap-2 py-3 text-sm font-bold text-white transition hover:bg-orange-600 sm:px-8 sm:py-4 sm:text-base">
      Book Now <span className="flex"> <img src="/solar_book-broken.png" className="w-5" alt="" /></span>
    </button>
  </div>
</div>
        </section>
        

    );
}
export default Body;