import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../Assets/logosmall.png";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [currentPath, setCurrentPath] = useState(window.location.hash);
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
            //console.log(currentSection !== currentPath);
          }
        });
      },
      { rootMargin: "0px", threshold: 0.6 }
    );

    // Attaching the observer to each section
    document.querySelectorAll("h1").forEach((e) => {
      observer.observe(e);
    });

    return () => observer.disconnect(); // Cleanup observer on component unmount
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash);
      //console.log(currentPath, " current path");
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const navigation = [
    { name: "Home", href: "#" },
    { name: "Programs", href: "#programs" },
    { name: "Services", href: "#services" },
    { name: "School", href: "#school" },
    { name: "Ramadan", href: "#ramadan" },
    { name: "Media", href: "#media" },
    { name: "About", href: "#about" },
    { name: "Donate", href: "#donate" },
  ];
  return (
    <Disclosure as="nav" className="bg-gray-800 sticky top-0 z-50" id="Home">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl md:max-2xl lg:max-w-7xl px-2 sm:px-6 lg:px-8 flex">
            <div className="relative flex h-16 items-center justify-between flex-auto">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden ">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">
                <div className="flex flex-shrink-0 items-center">
                  <img className="h-10 w-auto" src={Logo} alt="Your Company" />
                  <span className="text-slate-50 ml-3 font-semibold ">
                    <a href="#"> Abu Huraira Center</a>
                  </span>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={`${
                          item.name.toLowerCase() === currentSection
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white"
                        } rounded-md px-3 py-2 text-sm font-medium`}
                        aria-current={
                          item.href === currentPath ? "page" : undefined
                        }
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden md:hidden" id="home">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-green-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
