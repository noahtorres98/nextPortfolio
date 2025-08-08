import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { CiDark } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.message.value);
  }
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-slate-50 dark:bg-cyan-950 px-10">
        <section className="min-h-screen">
          <nav className="py-10 md:mb-12 flex justify-between">
            <h1 className="text-xl">
              <Image
                src={"/nt-logo-transparent.png"}
                alt="logo"
                width={"50"}
                height={"50"}
              ></Image>
            </h1>
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
          <div id="about" className="text-center p-10 ">
            <h2
              className="text-5xl md:py-2 text-teal-600 font-medium"
              data-aos="zoom-in"
              data-aos-dalay="1000"
              data-aos-duration="1000"
            >
              Noah Torres
            </h2>
            <div
              data-aos="fade-up"
              data-aos-delay="1000"
              data-aos-duration="1000"
            >
              <h3 className="text-2xl py-2 dark:text-white">
                Full-Stack Developer
              </h3>
              <p className="lg:w-96 text-md lg:text-lg py-5 leading-1 md:leading-8 mx-auto dark:text-white">
                I'm a full-stack developer who loves building clean,
                user-friendly interfaces and solid, reliable backends. I'm
                always looking to learn something new and enjoy taking on
                challenges that push me to grow—both in my work and in life.
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
              <div className="h-52">
                <Image
                  src={"/headshot.png"}
                  alt="headshot"
                  layout="fill"
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
          <div id="projects">
            <h1
              className="text-center text-3xl font-bold dark:text-white"
              data-aos="zoom-in"
            >
              Projects Portfolio
            </h1>
            <div className="mx-auto lg:max-w-7xl">
              <p
                className="text-md py-2 leading-8 text-gray-800 text-center dark:text-white lg:text-lg lg:w-96 mx-auto lg:pt-10 lg:pb-10"
                data-aos="zoom-in"
                data-aos-dely="50"
              >
                Here are a few projects I've been working on that show what I've
                been learning and building. They highlight my experience with
                both front-end and back-end development, and reflect my focus on
                <span className="text-teal-500"> beautiful </span> and
                <span className="text-teal-500"> responsive </span>design, solid
                functionality, and real-world problem-solving.
              </p>
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                <div
                  className="relative shadow-xl"
                  data-aos="flip-left"
                  data-aos-duration="2000"
                >
                  <a href="https://patstxbbq.netlify.app/" target="_blank">
                    <img src="/patsbbqss.png" className="rounded" />
                    <p className="text-sm lg:text-lg shadow-xl p-5 text-white rounded dark:bg-cyan-800 absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-cyan-500 to-teal-500 opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                      I created a website for my uncle's barbeque catering
                      business. The site features high-quality food images, and
                      an intuitive menu.
                    </p>
                  </a>
                </div>
                <div
                  className="relative shadow-xl"
                  data-aos="flip-right"
                  data-aos-duration="2000"
                >
                  <img src="/bestrqss.png" className="rounded" />
                  <p className="text-sm lg:text-lg shadow-lg p-5 text-white rounded dark:bg-cyan-800 absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-cyan-500 to-teal-500 opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                    At Cognizant, I built a venue request single-page app that
                    had dynamic form validation, real-time search, and
                    responsive design.
                  </p>
                </div>
                <div
                  className="relative shadow-xl"
                  data-aos="flip-left"
                  data-aos-duration="2000"
                >
                  <img src="/pixelgramss.png" className="rounded" />
                  <p className="text-sm lg:text-lg shadow-lg p-5 text-white rounded dark:bg-cyan-800 absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-cyan-500 to-teal-500 opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                    I contributed to a three-week project building a mock
                    Instagram app with Angular and Spring Boot. It included
                    features like user authentication, image uploading, and a
                    news feed.
                  </p>
                </div>
                <div
                  className="relative shadow-xl"
                  data-aos="flip-right"
                  data-aos-duration="2000"
                >
                  <img src="/flowss.png" className="rounded" />
                  <p className="text-sm lg:text-lg shadow-lg p-5 text-white rounded dark:bg-cyan-800 absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-cyan-500 to-teal-500 opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                    Helped build a management tool using React and Spring Boot
                    for new hire onboarding. The app streamlined the process by
                    allowing managers to create groups and monitor progress.
                  </p>
                </div>
                <div
                  className="relative shadow-xl"
                  data-aos="flip-left"
                  data-aos-duration="2000"
                >
                  <img src="/discord.png" className="w-full h-full rounded" />
                  <p className="text-sm lg:text-lg shadow-lg p-5 text-white rounded dark:bg-cyan-800 absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-cyan-500 to-teal-500 opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                    Currently building a front-end clone of Discord using React
                    and Tailwind CSS, focusing on UI/UX design, responsive
                    layout, and component-based architecture.
                  </p>
                </div>
                <div
                  className="relative shadow-xl"
                  data-aos="flip-right"
                  data-aos-duration="2000"
                >
                  <img src="/MovieApi.png" className="rounded" />
                  <p className="text-sm lg:text-lg shadow-lg p-5 text-white rounded dark:bg-cyan-800 absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-cyan-500 to-teal-500 opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                    Developed a full-stack movie database application with
                    React, Spring Boot, and MongoDB. Features include CRUD
                    operations, RESTful API integration, and a modern,
                    responsive UI.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-10">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center dark:text-white">
                Contact
              </h2>
              <form
                name="contact"
                className="space-y-8"
                method="POST"
                data-netlify="true"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Neo"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="name@matrix.com"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="py-3 px-5 text-sm font-medium text-center rounded-lg sm:w-fit bg-gradient-to-r from-cyan-800 to-green-500 text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
