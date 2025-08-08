import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Hero = () => {
  return (
    <div id="about" className="text-center p-10 ">
      <h2
        className="text-5xl md:py-2 text-teal-600 font-medium"
        data-aos="zoom-in"
        data-aos-delay="1000"
        data-aos-duration="1000"
      >
        Noah Torres
      </h2>
      <div data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">
        <h3 className="text-2xl py-2 dark:text-white">Full-Stack Developer</h3>
        <p className="lg:w-96 text-md lg:text-lg py-5 leading-1 md:leading-8 mx-auto dark:text-white">
          I'm a full-stack developer who loves building clean, user-friendly
          interfaces and solid, reliable backends. I'm always looking to learn
          something new and enjoy taking on challenges that push me to grow—both
          in my work and in life.
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-200">
        <Link href="https://github.com/noahtorres98">
          <AiFillGithub />
        </Link>
        <Link href="https://www.linkedin.com/in/noah-torres-39b7ab215/">
          <AiFillLinkedin />
        </Link>
      </div>
      <div className="relative bg-gradient-to-b from-teal-500 mx-auto rounded-full mt-20 lg:w-80 lg:h-80 w-40 h-40">
        <Image
          src={"/headshot.png"}
          alt="headshot"
          width={320}
          height={320}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Hero;
