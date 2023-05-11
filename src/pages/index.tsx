import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
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
      <main className="bg-white dark:bg-cyan-950 px-10">
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
          <button className="bg-red-100" onClick={() => setDarkMode(!darkMode)}>dark mode</button>
          <div id="about" className="text-center p-10 ">
            <h2 className="text-5xl md:py-2 text-teal-600 font-medium">
              Noah Torres
            </h2>
            <h3 className="text-2xl py-2 dark:text-white">
              Frontend developer
            </h3>
            <p className="lg:w-80 text-md py-5 leading-1 md:leading-8 mx-auto dark:text-white">
              As a front-end developer with a passion for coding and designing
              beautiful, user-friendly interfaces, I am always seeking new
              challenges and opportunities to expand my skill set. With several
              years of experience in front-end development, I have become
              proficient in HTML, CSS, JavaScript, and other front-end
              technologies.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
              <Link href="https://github.com/noahtorres98">
                <AiFillGithub />
              </Link>
              <Link href="https://www.linkedin.com/in/noah-torres-39b7ab215/">
                <AiFillLinkedin />
              </Link>
            </div>
            <div className=" bg-gradient-to-b from-teal-500 w-56 mx-auto rounded-full mt-20">
              <div className="h-52"></div>
            </div>
          </div>
          <div id="projects">
            <h1 className="text-center text-3xl font-bold dark:text-white">
              Projects Portfolio
            </h1>
            <div className="mx-auto">
              <p className="text-md py-2 leading-8 text-gray-800 text-center dark:text-white">
                As a front-end developer, I have completed several projects that
                showcase my skills in creating{" "}
                <span className="text-teal-500">beautiful</span> and{" "}
                <span className="text-teal-500"> responsive</span> user
                interfaces.
              </p>
              <div className="md:grid md:grid-cols-2">
                <div className="py-2 md:mx-auto md:w-1/2">
                  <Image
                    src="/patsbbqss.png"
                    alt="me"
                    width="500"
                    height="500"
                  />
                  <p className="shadow-xl p-7 rounded-xl dark:text-white">
                    I created a stunning website for my uncle's barbeque
                    catering business. The site features high-quality food
                    images, and an intuitive menu. My uncle loved it, and I'm
                    proud to have contributed to his business growth through the
                    power of the web.
                  </p>
                </div>
                <div className="py-2 md:mx-auto md:w-1/2">
                  <Image
                    src="/bestrqss.png"
                    alt="me"
                    width="500"
                    height="500"
                  />
                  <p className="shadow-lg p-7 rounded-xl dark:text-white">
                    At Cognizant, I built a venue request single-page app that
                    had dynamic form validation, real-time search, and
                    responsive design. This project helped me strengthen my
                    skills in HTML, CSS, and JavaScript, and I gained a deeper
                    understanding of single-page apps. The experience was
                    fulfilling and further fueled my passion for web
                    development.
                  </p>
                </div>
                <div className="py-2 md:mx-auto md:w-1/2">
                  <Image
                    src="/pixelgramss.png"
                    alt="me"
                    width="500"
                    height="500"
                  />
                  <p className="shadow-lg p-7 rounded-xl dark:text-white">
                    I contributed to a three-week project building a mock
                    Instagram app with Angular and Spring Boot. It included
                    features like user authentication, image uploading, and a
                    news feed. Through this collaboration, I gained valuable
                    experience in full-stack web development and honed my
                    collaboration skills.
                  </p>
                </div>
                <div className="py-2 md:mx-auto md:w-1/2">
                  <Image src="/flowss.png" alt="me" width="500" height="500" />
                  <p className="shadow-lg p-7 rounded-xl dark:text-white">
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
                  className="py-3 px-5 text-sm font-medium text-center rounded-lg sm:w-fit bg-gradient-to-r from-blue-500 to-green-500 text-white"
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
