import { useState } from "react";
import "./header.css";
import nextgenjcLogo from './assets/nextgenjclogo.png';


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-xl font-times">
<nav className="bg-white border-gray-200 px-3 sm:px-4 lg:px-3 xl:px-6 py-2 sm:py-2.5 dark:bg-gray-800 shadow-xl">

          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            {/* LOGO */}
            <a href="#" className="flex items-center gap-4 text-gray-900">
              <img
  src={nextgenjcLogo}
  className=" h-9 sm:h-8 lg:h-9"
  alt="NextGen JC Logo"
/>

<span className="self-center text-xl font-semibold whitespace-nowrap text-gray-900 dark:text-white hidden md:inline">  NextGen JC
</span>
            
            </a>

            {/* NAV LINKS - show on lg+ only */}
            <ul className="hidden lg:flex flex-row space-x-8 font-medium text-gray-900">
              {[
                "Who We Help",
                "Strategy",
                "Solutions",
                "Why Us",
                "Insights",
                "Book Call",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-900 hover:text-blue-500 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* RIGHT SIDE */}
            <div className="flex items-center lg:order-2">
              <a
                href="#"
                className="text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none dark:focus:ring-gray-800"
              >
                Get Started
              </a>
        

              {/* HAMBURGER BUTTON - show on mobile only */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`hamburger lg:hidden relative w-8 h-8 flex flex-col justify-between items-center ml-1`}
              >
                <span className={`bar ${menuOpen ? "rotate-45 translate-y-3" : ""}`}></span>
                <span className={`bar ${menuOpen ? "opacity-0" : ""}`}></span>
                <span className={`bar ${menuOpen ? "-rotate-45 -translate-y-3" : ""}`}></span>
              </button>
            </div>

            {/* MOBILE MENU - show only when open on mobile */}
            <div
              className={`${
                menuOpen ? "max-h-screen" : "max-h-0"
              } overflow-hidden transition-all duration-500 ease-in-out w-full lg:hidden mt-2`}
            >
              <ul className="flex flex-col font-medium text-gray-900 space-y-2">
                {[
                  "Who We Help",
                  "Strategy",
                  "Solutions",
                  "Why Us",
                  "Insights",
                  "Book Call",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="block py-2 pr-4 pl-3 hover:text-primary-400"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
