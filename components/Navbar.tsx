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
      <div className="text-xl">
        <Image
          src="/nt-logo-transparent.png"
          alt="logo"
          width={50}
          height={50}
          className="rounded-full object-cover"
        />
      </div>
      <ul className="flex items-center space-x-6">
        <BsFillMoonStarsFill
          tabIndex={0}
          role="button"
          className="dark:text-white text-xl cursor-pointer"
          onClick={() => setDarkMode(!darkMode)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setDarkMode(!darkMode);
            }
          }}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        />
        <a
          href="/Noah Torres.pdf"
          download="Noah Torres.pdf"
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
        >
          Resume
        </a>
      </ul>
    </nav>
  );
}

export default Navbar;
