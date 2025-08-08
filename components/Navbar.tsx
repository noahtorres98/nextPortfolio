import React from "react";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  return (
    <nav className="py-10 md:mb-12 flex justify-between items-center">
      <Image
        src="/nt-logo-transparent.png"
        alt="logo"
        width={"50"}
        height={"50"}
      />
      <ul className="flex items-center">
        <BsFillMoonStarsFill
          className="dark:text-white cursor-pointer"
          onClick={() => setDarkMode(!darkMode)}
        />
        <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ml-8 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md">
          <a href="/Noah Torres.pdf" download="Noah Torres.pdf">
            Resume
          </a>
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;
