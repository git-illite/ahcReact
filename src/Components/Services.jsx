import React, { useEffect, useState } from "react";
import Banquet from "../Assets/Services/59546695-3f42-4b43-b6e2-aa2c1957f2e4.jpeg";
import Counsel from "../Assets/Services/Counseling-Office-2-min.jpeg";
import Iftar from "../Assets/Services/iftar.jpg";
import { Link } from "react-router-dom";

const Services = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      // Update the state based on the width of the window
      setIsMobile(window.innerWidth < 640);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call the handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log("is mobile: ", isMobile);

  useEffect(() => {
    if (isMobile) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveCard(entry.target.id);
            } else if (activeCard === entry.target.id) {
              setActiveCard(null);
            }
          });
        },
        { threshold: 0.5 }
      );

      const cards = document.querySelectorAll(".card");
      cards.forEach((card) => observer.observe(card));

      return () => cards.forEach((card) => observer.unobserve(card));
    }
  }, [isMobile, activeCard]);

  // A function to determine card hover state
  const isCardActive = (cardId) => {
    return activeCard && parseInt(activeCard.split("-")[1], 10) === cardId;
  };
  return (
    <div
      className="items-center justify-center h-full  w-full bg-gradient-to-b from-sky-50 via-sky-100 to-slate-50"
      id="services"
    >
      <section className="md:h-full flex items-center text-gray-600 py-12">
        <div className="container px-5  mx-auto">
          <div className="text-center mb-12">
            <h1
              className="text-4xl md:text-6xl text-gray-700 font-semibold"
              id="services"
            >
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
                <div
                  id="card-1"
                  className={`card p-4 ${
                    !isMobile &&
                    "hover:bg-sky-700 hover:text-white transition duration-300 ease-in"
                  } ${
                    isMobile && isCardActive(1) ? "bg-sky-700 text-white" : ""
                  }`}
                >
                  <h2 className="text-base font-medium text-sky-300 mb-1">
                    280 Yorkland Blvd
                  </h2>
                  <h1 className="text-2xl font-semibold mb-3" id="services">
                    Banquet Hall
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Our banquet hall provides a versatile space for weddings and
                    events, featuring modern amenities and flexible seating
                    arrangements for a memorable occasion. Whether it's a
                    wedding reception or corporate gathering, our venue ensures
                    a stylish and accommodating atmosphere for all.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link
                      to="https://abuhuraira.org/hall-booking/"
                      className="text-sky-300 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Read More
                      <svg
                        className="w-4 h-4 ml-2 stroke-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="none"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
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
                <div
                  id="card-2"
                  className={`card p-4 ${
                    !isMobile &&
                    "hover:bg-sky-700 hover:text-white transition duration-300 ease-in"
                  } ${
                    isMobile && isCardActive(2) ? "bg-sky-700 text-white" : ""
                  }`}
                >
                  <h2 className="text-base font-medium text-sky-300 mb-1">
                    270 Yorkland Blvd
                  </h2>
                  <h1 className="text-2xl font-semibold mb-3" id="services">
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
                    <Link
                      to="https://abuhuraira.org/counseling/"
                      className="text-sky-300 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Read More
                      <svg
                        className="w-4 h-4 ml-2 stroke-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="none"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
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
                <div
                  id="card-3"
                  className={`card p-4 ${
                    !isMobile &&
                    "hover:bg-sky-700 hover:text-white transition duration-300 ease-in"
                  } ${
                    isMobile && isCardActive(3) ? "bg-sky-700 text-white" : ""
                  }`}
                >
                  <h2 className="text-base font-medium text-sky-300 mb-1">
                    270-280 Yorkland Blvd
                  </h2>
                  <h1 className="text-2xl font-semibold mb-3" id="services">
                    Iftar Program
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Join us for our daily iftar gatherings during Ramadan, where
                    we offer delicious dates, fruits, and hearty meals to break
                    your fast in a warm and welcoming environment. Experience
                    the joy of sharing Ramadan traditions with your community at
                    our iftar program, open to all.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link
                      to="https://abuhuraira.org/iftaar-program/"
                      className="text-sky-300 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Read More
                      <svg
                        className="w-4 h-4 ml-2 stroke-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="none"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
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
