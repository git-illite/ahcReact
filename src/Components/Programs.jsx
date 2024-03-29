import React, { useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Link } from "react-router-dom";

import carouselData from "../Assets/carouselData";
let reversedData = [...carouselData].reverse();

export default function Programs() {
  return (
    <div
      className="pb-4 pt-4 w-full md:pt-16 md:pb-12 bg-gradient-to-b from-sky-700 via-sky-600 to-sky-300"
      id="programs"
    >
      <div className="text-center mb-2">
        <h1
          className="text-4xl md:text-6xl text-slate-100 font-semibold"
          id="programs"
        >
          Programs
        </h1>
      </div>
      <div className="container mx-auto md:mb-4">
        <div className="flex items-center justify-center w-full h-full py-2 sm:py-2 px-4 ">
          {/* Carousel for desktop and large size devices */}
          <CarouselProvider
            className="lg:block hidden"
            naturalSlideWidth={1920}
            naturalSlideHeight={1080}
            isIntrinsicHeight={true}
            totalSlides={16}
            visibleSlides={4}
            step={1}
            infinite={true}
          >
            <div className="w-full relative flex items-center justify-center">
              <ButtonBack
                role="button"
                aria-label="slide backward"
                className="left-[-10px] relative focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                id="prev"
              >
                <svg
                  width={10}
                  height={18}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1L1 7L7 13"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonBack>
              <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                <Slider>
                  <div
                    id="slider"
                    className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                  >
                    {[...reversedData].toReversed().map((item, index) => (
                      <Slide index={index} key={item.id}>
                        <div
                          className="flex flex-shrink-0 relative w-full sm:w-auto transform transition duration-500 
                                hover:scale-95"
                        >
                          <img
                            src={require(`../Assets/Programs/${item.imageUrl}`)}
                            alt={item.alt}
                            className="object-cover object-center w-full"
                          />
                        </div>
                        <h3 className="text-lg lg:text-xl font-semibold leading-5 lg:leading-6 text-slate-800 text-center mb-4">
                          {item.description} <br /> <br />{" "}
                          <button
                            type="button"
                            className="px-3 py-2 text-xs font-medium text-center text-white bg-sky-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            Read More
                          </button>
                        </h3>
                      </Slide>
                    ))}
                  </div>
                </Slider>
              </div>
              <ButtonNext
                role="button"
                aria-label="slide forward"
                className="relative z-30 left-3 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                id="next"
              >
                <svg
                  width={10}
                  height={18}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L7 7L1 13"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonNext>
            </div>
          </CarouselProvider>
        </div>

        {/* Carousel for tablet and medium size devices */}
        <CarouselProvider
          className="lg:hidden md:block hidden"
          naturalSlideWidth={1920}
          naturalSlideHeight={1080}
          isIntrinsicHeight={true}
          totalSlides={16}
          visibleSlides={2}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-1 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                >
                  {[...reversedData].toReversed().map((item, index) => (
                    <Slide index={index} key={item.id}>
                      <div
                        className="flex flex-shrink-0 relative w-full sm:w-auto transform transition duration-500 
                                hover:scale-95"
                      >
                        <img
                          src={require(`../Assets/Programs/${item.imageUrl}`)}
                          alt={item.alt}
                          className="object-cover object-center w-full"
                        />
                        <div className="absolute w-full h-full p-6">
                          <div className="flex h-full items-end pb-6"></div>
                        </div>
                      </div>
                      <h3 className="text-lg lg:text-xl font-semibold leading-5 lg:leading-6 text-black">
                        {item.description}
                      </h3>
                    </Slide>
                  ))}
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* Carousel for mobile and Small size Devices */}
        <CarouselProvider
          className="block md:hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={16}
          visibleSlides={1}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="mx-auto overflow-x-hidden overflow-y-hidden w-4/5">
              <Slider>
                {[...reversedData].toReversed().map((item, index) => (
                  <Slide index={index} key={item.id}>
                    <div
                      className="flex flex-shrink-0 relative w-full sm:w-auto transform transition duration-500 
                                hover:scale-95"
                    >
                      <img
                        src={require(`../Assets/Programs/${item.imageUrl}`)}
                        alt={item.alt}
                        className="object-cover object-center w-full"
                      />
                      <div className=" absolute w-full h-full p-6">
                        <div className="flex flex-col h-full items-end pb-6"></div>
                      </div>
                    </div>
                  </Slide>
                ))}
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
}
