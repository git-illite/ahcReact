import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as XLSX from "xlsx";

const Hero = () => {
  const [prayerTimes, setPrayerTimes] = useState([]);

  // useEffect(() => {
  //   // Function to read file and parse data
  //   const readExcelFile = (file) => {
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       const data = e.target.result;
  //       const workbook = XLSX.read(data, { type: "array" });
  //       const worksheetName = workbook.SheetNames[0];
  //       const worksheet = workbook.Sheets[worksheetName];
  //       const jsonData = XLSX.utils.sheet_to_json(worksheet);
  //       console.log(jsonData, " file found");
  //       setPrayerTimes(jsonData);
  //     };
  //     reader.readAsArrayBuffer(file);
  //   };

  //   // Load the file from public folder or from an API
  //   const file = "../Assets/iqamas.xlsx"; // Adjust the path to where your file is located

  //   fetch(file)
  //     .then((res) => res.blob())
  //     .then((blob) => {
  //       readExcelFile(blob);
  //     });
  // }, []);

  return (
    <div className="p-2 pb-24 bg-gradient-to-b from-gray-800 via-sky-800 to-sky-700">
      {/* <!-- Content at the top of the container --> */}

      <section className="bg-bgr bg-cover bg-center bg-no-repeat mx-auto w-full h-full">
        <div className=" inset-0  sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="mx-auto max-w-screen-xl px-4 py-40 sm:px-6 flex justify-center items-center sm:cols-span-2">
          <div className="max-w-2xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1
              className="text-3xl font-extrabold sm:text-5xl text-white"
              id="home"
            >
              Automate your donation
              <strong className="block font-extrabold text-sky-700 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                {" "}
                Every Jum'uah{" "}
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
              Indeed, those men and women who give in charity and lend to Allah
              a good loan will have it multiplied for them, and they will have
              an honourable reward ( Quran 57:18 )
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center justify-center">
              <Link
                to="https://app.irm.io/abuhuraira.org/b/automate-your-jummah"
                className="block w-full rounded bg-sky-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-sky-700 focus:outline-none focus:ring active:bg-sky-500 sm:w-auto"
              >
                Donate
              </Link>

              <Link
                to="https://app.irm.io/abuhuraira.org/b/automate-your-jummah"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-sky-600 shadow hover:text-sky-700 focus:outline-none focus:ring active:text-sky-500 sm:w-auto"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-wrap justify-start mb-8 px--2 ">
          {/* Cards container */}
          <div className="md:w-full lg:flex md:justify-center md:gap-8 grid grid-cols-3 md:grid-cols-2 md:grid sm:gap-3 lg:translate-y-12">
            {/* Individual card */}
            <div className="bg-gradient-to-b from-slate-50 via-slate-00 to-sky-200 p-4 shadow-lg">
              <p className="capitalize md:uppercase text-center md:text-5xl  text-sky-600 font-bold md:-translate-y-1/3">
                &nbsp;&nbsp;Fajr&nbsp;&nbsp;
              </p>
              <p className="text-center font-bold md:text-3xl">4:58 AM</p>
            </div>
            <div className="bg-gradient-to-b from-slate-50 via-slate-00 to-sky-200 p-4 shadow-lg ">
              <p className="capitalize md:uppercase text-center md:text-5xl  text-sky-600 font-bold md:-translate-y-1/3">
                Dhuhr
              </p>
              <p className="text-center font-bold md:text-3xl">4:58 AM</p>
            </div>
            <div className="bg-gradient-to-b from-slate-50 via-slate-00 to-sky-200 p-4 shadow-lg ">
              <p className="capitalize md:uppercase text-center md:text-5xl  text-sky-600 font-bold md:-translate-y-1/3">
                &nbsp;&nbsp;&nbsp;Asr&nbsp;&nbsp;&nbsp;
              </p>
              <p className="text-center font-bold md:text-3xl">4:58 AM</p>
            </div>
            <div className="bg-gradient-to-b from-slate-50 via-slate-00 to-sky-200 p-4 shadow-lg">
              <p className="capitalize md:uppercase text-center md:text-5xl  text-sky-600 font-bold md:-translate-y-1/3">
                Maghrib
              </p>
              <p className="text-center font-bold md:text-3xl">4:58 AM</p>
            </div>
            <div className="bg-gradient-to-b from-slate-50 via-slate-00 to-sky-200 p-4 shadow-lg ">
              {" "}
              <p className="capitalize md:uppercase text-center md:text-5xl  text-sky-600 font-bold md:-translate-y-1/3">
                &nbsp;&nbsp;&nbsp;Isha&nbsp;&nbsp;&nbsp;
              </p>
              <p className="text-center font-bold md:text-3xl">4:58 AM</p>
            </div>
            <div className="bg-gradient-to-b from-slate-50 via-slate-00 to-sky-200 p-4 shadow-lg ">
              <p className="capitalize md:uppercase text-center md:text-5xl  text-sky-600 font-bold md:-translate-y-1/3">
                Jum'uah
              </p>
              <p className="text-center font-bold md:text-3xl">4:58 AM</p>
            </div>
            {/* ... other cards */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
