import React from "react";
import AHCAcademy from "../Assets/Schools/AHCAcademySMALLLOGO-transformed.png";
import DTPNG from "../Assets/Schools/dtpng.png";
import AHCAcPic from "../Assets/Schools/ahcAc.jpg";
import AHCWe from "../Assets/Schools/ahcWe.jpeg";
import DarImg from "../Assets/Schools/darImg.png";

const Schools = () => {
  return (
    <div class="h-full min-h-screen w-full bg-gray-800 pt-12 p-4">
      <div class="grid gap-14 md:grid-cols-3 md:gap-5">
        <div
          data-aos-delay="300"
          class="rounded-xl bg-white p-6 text-center shadow-xl"
        >
          <div class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-cyan-400 shadow-cyan-500/40 ">
            <img src={AHCAcademy} className="" alt="" />
          </div>
          <h1 class="text-darken text-xl font-medium lg:px-14 -translate-y-10">
            AHC ACADEMY
          </h1>
          <p class="px-8 text-gray-500 -translate-y-8">
            The Abu Huraira Center Academy is committed to providing our pupils
            with a rich Islamic curriculum based on the Holy Qur’an, and
            authentic Sunnah. Moreover, we aim to provide a well-rounded
            academic experience using the standards provided by the Ontario
            elementary curriculum. This will provide our students with a
            holistic, well-rounded education.
          </p>
          <div class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img src={AHCAcPic} alt="card-image" />
          </div>
          <div class="pt-6">
            <button
              class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-800 text-white shadow-md shadow-gray-800/10 hover:shadow-lg hover:shadow-gray-800/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              Read More
            </button>
          </div>
        </div>
        <div class="rounded-xl bg-white p-6 text-center shadow-xl">
          <div class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
            <img src={AHCAcademy} className="object-cover h-16 " alt="" />
          </div>
          <h1 class="text-darken mb-3 text-xl font-medium lg:px-14 -translate-y-10">
            WEEKEND SCHOOL
          </h1>
          <p class="px-4 text-gray-500 -translate-y-11 mb-3">
            Masjid Abu Huraira's weekend school offers a comprehensive Islamic
            education, rooted in the teachings of the Qur'an and authentic
            Sunnah, complemented by Ontario's elementary curriculum standards.
            Our goal is to deliver a balanced academic experience, ensuring
            students receive a holistic education that prepares them for
            success.
          </p>
          <div class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img src={AHCWe} alt="card-image" />
          </div>
          <div class="pt-6">
            <button
              class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-800 text-white shadow-md shadow-gray-800/10 hover:shadow-lg hover:shadow-gray-800/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              Read More
            </button>
          </div>
        </div>
        <div
          data-aos-delay="150"
          class="rounded-xl bg-white p-6 text-center shadow-xl"
        >
          <div class="mx-auto flex h-16 w-16 -translate-y-14 transform items-center justify-center rounded-full shadow-lg bg-blue-50 shadow-blue-500/40">
            <img src={DTPNG} className="object-cover h-28 " alt="" />
          </div>
          <h1 class="text-darken mb-3 text-xl font-medium lg:px-14 -translate-y-9">
            DARUL TARTEEL
          </h1>
          <p class="px-4 text-gray-500 -translate-y-11 mb-3">
            This program is catered towards full time learning of the recitation
            and memorization of the Quran using prophetic methods. The school
            and the teachers work really hard with the students to develop
            professional recitation quality and help them achieve one of the
            greatest achievements in Islam, memorize the entire Quran.
          </p>
          <div class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40 ">
            <img
              src={DarImg}
              alt="card-image"
              className="object-cover h-auto w-176 lg:-translate-y-9"
            />
          </div>
          <div class="pt-6">
            <button
              class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-800 text-white shadow-md shadow-gray-800/10 hover:shadow-lg hover:shadow-gray-800/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schools;
