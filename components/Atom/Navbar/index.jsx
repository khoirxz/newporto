import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { TbMoon, TbSun } from "react-icons/tb";

import AppContext from "../../../context/state";

const Navbar = () => {
  const { theme, handleTheme } = useContext(AppContext);
  const [navbar, setNavbar] = useState(false);

  const changeBgNavbar = () => {
    if (window.scrollY >= 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBgNavbar);
  }, [changeBgNavbar]);

  return (
    <nav
      className={`w-full fixed z-90 top-0 left-1/2 -translate-x-1/2 ${
        navbar ? "backdrop-blur-sm" : "backdrop-blur-none"
      }`}
    >
      <div
        className={`${
          navbar ? "py-1" : "py-5"
        } transition-all max-w-screen-xl w-full px-5 xl:px-0 m-auto flex justify-between items-center`}
      >
        <div>
          <h1 className="text-xl font-bold cursor-pointer">
            <Link href="/">Roox</Link>
          </h1>
        </div>

        <div className="flex justify-between items-center">
          <button
            role="button"
            id="buttonToggle"
            aria-label="Button Toggle Dark Mode"
            onClick={handleTheme}
            className="cursor-pointer w-14 h-14 rounded-full hover:bg-black/10 hover:dark:bg-white/10 hover:backdrop-blur-md transition-all flex flex-row justify-center items-center"
          >
            {theme === "light" ? (
              <TbMoon size={20} color="#5a5a5a" />
            ) : (
              <TbSun size={20} color="#fff" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
