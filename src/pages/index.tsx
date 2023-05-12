import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { CiDark } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
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
            {/* <ul className="flex space-x-6">
          <li><Link href="#about">About Me</Link></li>
            <li><Link href="#projects">Projects</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul> */}
            <ul className="flex items-center">
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="/Torres Resume 2023.pdf"
                  download="Torres Resume 2023.pdf"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex place-content-end items-center space-x-1">
            <MdDarkMode />
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onClick={() => setDarkMode(!darkMode)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 dark:peer-focus:ring-teal-500 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-500"></div>
            </label>
            <CiDark className="dark:text-white" />
          </div>
          <div id="about" className="text-center p-10 ">
            <h2 className="text-5xl md:py-2 text-teal-600 font-medium">
              Noah Torres
            </h2>
            <h3 className="text-2xl py-2 dark:text-white">
              Frontend Developer
            </h3>
            <p className="lg:w-96 text-md lg:text-lg py-5 leading-1 md:leading-8 mx-auto dark:text-white">
              As a front-end developer seeking new opportunities, I am eager to
              expand my skill set and become a full-stack developer. I am
              passionate about creating engaging and user-friendly interfaces,
              and I am excited to apply this expertise to the back-end as well.
              When I'm not coding, you can find me watching soccer and Formula
              1, playing video games, or building computers. I thrive on
              learning new things and tackling new challenges, and I am always
              looking for ways to grow both personally and professionally.
            </p>
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
            <h1 className="text-center text-3xl font-bold dark:text-white">
              Projects Portfolio
            </h1>
            <div className="mx-auto lg:max-w-7xl">
              <p className="text-md py-2 leading-8 text-gray-800 text-center dark:text-white lg:text-lg lg:w-96 mx-auto lg:pt-10 lg:pb-10">
                As a front-end developer, I have completed several projects that
                showcase my skills in creating{" "}
                <span className="text-teal-500">beautiful</span> and{" "}
                <span className="text-teal-500"> responsive</span> user
                interfaces.
              </p>
              <div className="md:grid md:grid-cols-2 md:mx-auto md:gap-10">
                <div className="w-full py-2">
                  <Image
                    src="/patsbbqss.png"
                    alt="me"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <p className="bg-white shadow-xl p-7 rounded-b-xl dark:text-white dark:bg-cyan-800">
                    I created a stunning website for my uncle's barbeque
                    catering business. The site features high-quality food
                    images, and an intuitive menu. My uncle loved it, and I'm
                    proud to have contributed to his business growth through the
                    power of the web.
                  </p>
                </div>
                <div className="w-full py-2">
                  <Image
                    src="/bestrqss.png"
                    alt="me"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <p className="shadow-lg p-7 rounded-b-xl dark:text-white dark:bg-cyan-800">
                    At Cognizant, I built a venue request single-page app that
                    had dynamic form validation, real-time search, and
                    responsive design. This project helped me strengthen my
                    skills in HTML, CSS, and JavaScript, and I gained a deeper
                    understanding of single-page apps. The experience was
                    fulfilling and further fueled my passion for web
                    development.
                  </p>
                </div>
                <div className="w-full py-2">
                  <Image
                    src="/pixelgramss.png"
                    alt="me"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <p className="shadow-lg p-7 rounded-b-xl dark:text-white dark:bg-cyan-800">
                    I contributed to a three-week project building a mock
                    Instagram app with Angular and Spring Boot. It included
                    features like user authentication, image uploading, and a
                    news feed. Through this collaboration, I gained valuable
                    experience in full-stack web development and honed my
                    collaboration skills.
                  </p>
                </div>
                <div className="w-full py-2">
                  <Image
                    src="/flowss.png"
                    alt="me"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <p className="shadow-lg p-7 rounded-b-xl dark:text-white dark:bg-cyan-800">
                    Contributed to a team that developed an internal management
                    tool using React and Spring Boot for new hire onboarding.
                    The app streamlined the process by allowing managers to
                    create groups and monitor progress. Valuable full-stack
                    development experience was gained through this project.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="contact" className="pt-10">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center dark:text-white">
                Contact
              </h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
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
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="name@matrix.com"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="py-3 px-5 text-sm font-medium text-center rounded-lg sm:w-fit bg-gradient-to-r from-cyan-800 to-green-500 text-white"
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
