import { FaUsers, FaHome, FaFileAlt, FaPlane } from "react-icons/fa";
const How = () => {
     const steps = [
    {
      icon: <FaUsers />,
      title: "1. Consultation",
      description: "Tell us your travel or logistics needs.",
    },
    {
      icon: <FaHome />,
      title: "2. Choose Service",
      description: "Select the service that suits you best.",
    },
    {
      icon: <FaFileAlt />,
      title: "3. Documentation",
      description: "We handle all required documents for you.",
    },
    {
      icon: <FaPlane />,
      title: "4. Travel or Delivery",
      description: "Enjoy a smooth journey or fast delivery.",
    },
  ];

    return(
         <div className="w-full bg-[#e5f1ff] border-y border-blue-950  py-20 mt-30">
      <div className="mx-auto max-w-[1400px]">
        <div className="text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-blue-600">
            HOW IT WORKS
          </p>

          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Simple Steps to Your Adventure
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-0">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative flex w-full items-center justify-center">
                <div className="flex h-[78px] w-[78px] items-center justify-center rounded-full border border-blue-600 bg-[#e5f1ff] text-[30px] text-blue-600">
                  {step.icon}
                </div>

                {index < steps.length - 1 && (
                  <div className="absolute left-[calc(50%+40px)] top-1/2 hidden w-[calc(100%-80px)] -translate-y-1/2 border-t-2 border-dashed border-blue-900 md:block">
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 text-3xl text-blue-900">
                      →
                    </span>
                  </div>
                )}
              </div>

              <h3 className="mt-6 text-lg font-bold text-blue-600">
                {step.title}
              </h3>

              <p className="mt-2 max-w-[220px] text-sm leading-5 text-gray-700">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>

    );
}
export default How;