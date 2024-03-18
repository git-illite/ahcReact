import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import iqamaData from "../Assets/Services/iqamas";

const Hero = () => {
  const [prayerTimes, setPrayerTimes] = useState({});
  const [maghribTime, setMaghribTime] = useState("");

  useEffect(() => {
    // Function to fetch Maghrib time
    const fetchMaghribTime = async () => {
      try {
        const response = await fetch(
          "https://api.sunrise-sunset.org/json?lat=43.65322&lng=-79.3832&formatted=0"
        );
        const data = await response.json();

        // Assuming 'sunset' is the key for Maghrib time in the API response
        const maghribTimeUTC = new Date(data.results.sunset);
        const formattedTime = maghribTimeUTC.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        });

        // Update state
        setMaghribTime(formattedTime);
      } catch (error) {
        console.error("Error fetching Maghrib time:", error);
      }
    };

    // Call the fetch function
    fetchMaghribTime();
  }, []); // Empty dependency array means this effect runs once on mount

  useEffect(() => {
    const today = new Date();
    const formattedToday = today
      .toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      })
      .replace(",", ""); // Format: "MMM DD YYYY"

    // Find the most recent entry, including or prior to today, that has prayer times
    const recentValidEntry = [...iqamaData].reverse().find((entry) => {
      const entryDate = new Date(entry.date + " " + today.getFullYear());
      return (
        entryDate <= today &&
        (entry.fajr || entry.zuhr || entry.asr || entry.isha)
      );
    });

    if (recentValidEntry) {
      setPrayerTimes({
        date: recentValidEntry.date.toUpperCase(),
        fajr: recentValidEntry.fajr.toUpperCase(),
        zuhr: recentValidEntry.zuhr.toUpperCase(),
        asr: recentValidEntry.asr.toUpperCase(),
        isha: recentValidEntry.isha.toUpperCase(),
      });
    }
    console.log(prayerTimes);
  }, []);
  return (
    <div className="p-2 pb-12 bg-gradient-to-b from-gray-800 via-sky-800 to-sky-700">
      {/* <!-- Content at the top of the container --> */}

      <section className="bg-bgr bg-cover bg-center bg-no-repeat mx-auto w-full h-full">
        <div className=" inset-0  sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="mx-auto max-w-screen-xl px-4 md:py-40 py-20 sm:px-6 flex justify-center items-center sm:cols-span-2">
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

        <div className="w-full flex flex-wrap justify-evenly  mb-8 px--2 ">
          {/* Cards container */}
          <div className="md:w-full lg:flex md:justify-center md:gap-8 grid grid-cols-3 md:grid-cols-2 md:grid sm:gap-3 lg:translate-y-12">
            {/* Individual card */}
            <div className="bg-gradient-to-b from-slate-50 via-slate-00 to-sky-200 p-4 shadow-lg">
              <p className="capitalize md:uppercase text-center md:text-5xl  text-sky-600 font-bold md:-translate-y-1/3">
                &nbsp;&nbsp;Fajr&nbsp;&nbsp;
              </p>
              <p className="text-center font-bold md:text-3xl">
                {prayerTimes.fajr}
              </p>
            </div>
            <div className="bg-gradient-to-b from-slate-50 via-slate-00 to-sky-200 p-4 shadow-lg ">
              <p className="capitalize md:uppercase text-center md:text-5xl  text-sky-600 font-bold md:-translate-y-1/3">
                Dhuhr
              </p>
              <p className="text-center font-bold md:text-3xl">
                {prayerTimes.zuhr}
              </p>
            </div>
            <div className="bg-gradient-to-b from-slate-50 via-slate-00 to-sky-200 p-4 shadow-lg ">
              <p className="capitalize md:uppercase text-center md:text-5xl  text-sky-600 font-bold md:-translate-y-1/3">
                &nbsp;&nbsp;&nbsp;Asr&nbsp;&nbsp;&nbsp;
              </p>
              <p className="text-center font-bold md:text-3xl">
                {prayerTimes.asr}
              </p>
            </div>
            <div className="bg-gradient-to-b from-slate-50 via-slate-00 to-sky-200 p-4 shadow-lg">
              <p className="capitalize md:uppercase text-center md:text-5xl  text-sky-600 font-bold md:-translate-y-1/3">
                Maghrib
              </p>
              <p className="text-center font-bold md:text-3xl">{maghribTime}</p>
            </div>
            <div className="bg-gradient-to-b from-slate-50 via-slate-00 to-sky-200 p-4 shadow-lg ">
              {" "}
              <p className="capitalize md:uppercase text-center md:text-5xl  text-sky-600 font-bold md:-translate-y-1/3">
                &nbsp;&nbsp;&nbsp;Isha&nbsp;&nbsp;&nbsp;
              </p>
              <p className="text-center font-bold md:text-3xl">
                {prayerTimes.isha}
              </p>
            </div>
            <div className="bg-gradient-to-b from-slate-50 via-slate-00 to-sky-200 p-4 shadow-lg ">
              <p className="capitalize md:uppercase text-center md:text-5xl  text-sky-600 font-bold md:-translate-y-1/3">
                Jum'uah
              </p>
              <p className="text-center font-bold md:text-3xl">01:30 PM</p>
            </div>
            {/* ... other cards */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
