import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import serviceData from "../Assets/servicesData";

const Services = () => {
  // This state will keep track of which card is currently active
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the element is in view, set it as active
          if (entry.isIntersecting) {
            console.log(entry.target.id, " entry card id");
            setActiveCard(entry.target.id);
          }
        });
      },
      {
        root: null, // default is the viewport
        threshold: 0.5, // percentage of element's visibility required to trigger the observer
      }
    );

    // Target elements to observe
    const cards = document.querySelectorAll("p");

    // Start observing the elements
    cards.forEach((card) => observer.observe(card));

    // Cleanup function to unobserve when component unmounts
    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  // A function to determine card hover state
  const isCardActive = (cardId) => {
    console.log({ activeCard });
    console.log({ cardId });
    console.log(parseInt(activeCard,10) === cardId);
    return (parseInt(activeCard,10))=== cardId;
  };

  return (
    <div
      className="items-center justify-center h-full min-h-screen w-full bg-gradient-to-b from-sky-100 via-sky-50 to-sky-50"
      id="services"
    >
      <section className="md:h-full flex items-center text-gray-600 py-24">
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
            {serviceData.map((service, index) => (
              <div
                id={service.id}
                key={index}
                className={`p-4 sm:w-1/3 lg:w-1/3 `}
              >
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-72 md:h-48 w-full object-cover object-center"
                    src={require(`../Assets/Services/${service.imageUrl}`)}
                    alt=""
                  />
                  <div
                    className={`p-6 ${
                      isCardActive(index)
                        ? "bg-sky-700 text-white transition duration-300 ease-in"
                        : ""
                    } `}
                  >
                    <h2 className="text-base font-medium text-sky-300 mb-1">
                      {service.address}
                    </h2>
                    <h1 className="text-2xl font-semibold mb-3" id="services">
                      {service.title}
                    </h1>
                    <p className="leading-relaxed mb-3" id={service.id}>
                      {service.description}
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <Link
                        to={service.link}
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
