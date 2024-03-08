import React from "react";
import Banquet from "../Assets/Services/59546695-3f42-4b43-b6e2-aa2c1957f2e4.jpeg";
import Counsel from "../Assets/Services/Counseling-Office-2-min.jpeg";
import Iftar from "../Assets/Services/iftar.jpg";

const Services = () => {
  return (
    <div className="items-center justify-center h-full min-h-screen w-full" id="services">
      <section className="md:h-full flex items-center text-gray-600 py-24">
        <div className="container px-5  mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl text-gray-700 font-semibold">
              Services
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 sm:w-1/2 lg:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-72 md:h-48 w-full object-cover object-center"
                  src={Banquet}
                  alt="blog"
                />
                <div className="p-6 hover:bg-sky-700 hover:text-white transition duration-300 ease-in">
                  <h2 className="text-base font-medium text-sky-300 mb-1">
                    280 Yorkland Blvd
                  </h2>
                  <h1 className="text-2xl font-semibold mb-3">Banquet Hall</h1>
                  <p className="leading-relaxed mb-3">
                    Our banquet hall provides a versatile space for weddings and
                    events, featuring modern amenities and flexible seating
                    arrangements for a memorable occasion. Whether it's a
                    wedding reception or corporate gathering, our venue ensures
                    a stylish and accommodating atmosphere for all.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-sky-300 inline-flex items-center md:mb-2 lg:mb-0">
                      Read More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-72 md:h-48 w-full object-cover object-center"
                  src={Counsel}
                  alt="Coaching/Counselling"
                />
                <div className="p-6 hover:bg-sky-700 hover:text-white transition duration-300 ease-in">
                  <h2 className="text-base font-medium text-sky-300 mb-1">
                    270 Yorkland Blvd
                  </h2>
                  <h1 className="text-2xl font-semibold mb-3">
                    Coaching and Counseling
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Our coaching and counseling services offer personalized
                    support to help you navigate life's challenges and achieve
                    your goals. From individual sessions to marital and family
                    counseling, we provide professional guidance tailored to
                    your specific needs.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-sky-300 inline-flex items-center md:mb-2 lg:mb-0">
                      Read More
                      <svg
                        className="w-4 h-4 ml-2 stroke-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                       
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-72 md:h-48 w-full object-cover object-center"
                  src={Iftar}
                  alt="Iftar Program"
                />
                <div className="p-6 hover:bg-sky-700 hover:text-white transition duration-300 ease-in">
                  <h2 className="text-base font-medium text-sky-300 mb-1">
                    270-280 Yorkland Blvd
                  </h2>
                  <h1 className="text-2xl font-semibold mb-3">Iftar Program</h1>
                  <p className="leading-relaxed mb-3">
                    Join us for our daily iftar gatherings during Ramadan, where
                    we offer delicious dates, fruits, and hearty meals to break
                    your fast in a warm and welcoming environment. Experience
                    the joy of sharing Ramadan traditions with your community at
                    our iftar program, open to all.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-sky-300 inline-flex items-center md:mb-2 lg:mb-0">
                      Read More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
