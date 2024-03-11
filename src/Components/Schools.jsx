import React from "react";
import { Link } from "react-router-dom";
import AHCAcademy from "../Assets/Schools/AHCAcademySMALLLOGO-transformed.png";
import DTPNG from "../Assets/Schools/dtpng.png";
import AHCAcPic from "../Assets/Schools/ahcAc.jpg";
import AHCWe from "../Assets/Schools/ahcWe.jpeg";
import DarImg from "../Assets/Schools/darImg.png";

const Schools = () => {
  return (
    <div
      className="h-full min-h-screen w-full  py-24 p-4 bg-gradient-to-b from-slate-100 via-sky-200 to-sky-300"
      id="school"
    >
      <div className="text-center mb-12">
        <h1
          className="text-4xl md:text-6xl text-gray-800 font-semibold"
          id="school"
        >
          Schools
        </h1>
      </div>
      <div className="grid gap-14 md:grid-cols-3 md:gap-5">
        <div className="rounded-xl bg-white p-6 text-center shadow-xl">
          <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-cyan-400 shadow-cyan-500/40 ">
            <img src={AHCAcademy} className="" alt="" />
          </div>
          <h1
            className="text-darken text-xl font-medium lg:px-14 -translate-y-10"
            id="school"
          >
            AHC ACADEMY
          </h1>
          <p className="px-8 text-gray-500 -translate-y-8">
            The Abu Huraira Center Academy is committed to providing our pupils
            with a rich Islamic curriculum based on the Holy Qur’an, and
            authentic Sunnah. Moreover, we aim to provide a well-rounded
            academic experience using the standards provided by the Ontario
            elementary curriculum. This will provide our students with a
            holistic, well-rounded education.
          </p>
          <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img src={AHCAcPic} alt="card-image" />
          </div>
          <div className="pt-6">
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-800 text-white shadow-md shadow-gray-800/10 hover:shadow-lg hover:shadow-gray-800/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              <Link to="https://ahcacademy.com/">Read More</Link>
            </button>
          </div>
        </div>
        <div className="rounded-xl bg-white p-6 text-center shadow-xl">
          <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
            <img src={AHCAcademy} className="object-cover h-16 " alt="" />
          </div>
          <h1
            className="text-darken mb-3 text-xl font-medium lg:px-14 -translate-y-10"
            id="school"
          >
            WEEKEND SCHOOL
          </h1>
          <p className="px-4 text-gray-500 -translate-y-11 mb-3">
            Masjid Abu Huraira's weekend school offers a comprehensive Islamic
            education, rooted in the teachings of the Qur'an and authentic
            Sunnah, complemented by Ontario's elementary curriculum standards.
            Our goal is to deliver a balanced academic experience, ensuring
            students receive a holistic education that prepares them for
            success.
          </p>
          <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img
              src={AHCWe}
              alt="card-image"
              className="object-cover h-auto w-176 lg:-translate-y-9"
            />
          </div>
          <div className="pt-6">
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-800 text-white shadow-md shadow-gray-800/10 hover:shadow-lg hover:shadow-gray-800/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              <Link to="https://abuhuraira.org/weekendschool/">Read More</Link>
            </button>
          </div>
        </div>
        <div
          data-aos-delay="150"
          className="rounded-xl bg-white p-6 text-center shadow-xl"
        >
          <div className="mx-auto flex h-16 w-16 -translate-y-14 transform items-center justify-center rounded-full shadow-lg bg-blue-50 shadow-blue-500/40">
            <img src={DTPNG} className="object-cover h-28 " alt="" />
          </div>
          <h1
            className="text-darken mb-3 text-xl font-medium lg:px-14 -translate-y-9"
            id="school"
          >
            DARUL TARTEEL
          </h1>
          <p className="px-4 text-gray-500 -translate-y-11 mb-3">
            This program is catered towards full time learning of the recitation
            and memorization of the Quran using prophetic methods. The school
            and the teachers work really hard with the students to develop
            professional recitation quality and help them achieve one of the
            greatest achievements in Islam, memorize the entire Quran.
          </p>
          <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40 ">
            <img
              src={DarImg}
              alt="card-image"
              className="object-cover h-auto w-176 lg:-translate-y-9"
            />
          </div>
          <div className="pt-6">
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-800 text-white shadow-md shadow-gray-800/10 hover:shadow-lg hover:shadow-gray-800/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              <Link to="https://darultarteel.com/">Read More</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schools;
