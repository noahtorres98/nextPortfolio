import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" bg-2626262 px-10">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl">
            <Image
              src={"/nt-logo-transparent.png"}
              alt="logo"
              width={"50"}
              height={"50"}
            ></Image>
          </h1>
          {/* <ul className="flex space-x-6">
            <li>Projects</li>
            <li>About Me</li>
            <li>Contact</li>
          </ul> */}
          <ul className="flex items-center">
            <li></li>
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                href="#"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10 ">
          <h2 className="text-5xl py-2 text-teal-600 font-medium">
            Noah Torres
          </h2>
          <h3 className="text-2xl py-2">Frontend developer</h3>
          <p className="text-md py-5 leading-8">
            As a front-end developer with a passion for coding and designing
            beautiful, user-friendly interfaces, I am always seeking new
            challenges and opportunities to expand my skill set. With several
            years of experience in front-end development, I have become
            proficient in HTML, CSS, JavaScript, and other front-end
            technologies.
          </p>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillGithub />
            <AiFillLinkedin />
          </div>
          <div className=" bg-gradient-to-b from-teal-500 w-56 mx-auto rounded-full mt-20">
            <div className="h-52"></div>
          </div>
        </div>
        <div className="rounded-lg">
          <h1 className="text-center text-3xl font-bold">Projects Portfolio</h1>
          <p className="text-md py-2 leading-8 text-gray-800">
            As a front-end developer, I have completed several projects that
            showcase my skills in creating{" "}
            <span className="text-teal-500">beautiful</span> and{" "}
            <span className="text-teal-500"> responsive</span> user interfaces.
          </p>
          <div>
            <div className="py-2">
              <Image src="/patsbbqss.png" alt="me" width="500" height="500" />
              <p>
                I created a stunning website for my uncle's barbeque catering
                business. The site features high-quality food images, and an
                intuitive menu. My uncle loved it, and I'm proud to have
                contributed to his business growth through the power of the web.
              </p>
            </div>
            <div>
              <Image src="/bestrqss.png" alt="me" width="500" height="500" />
              <p>
                At Cognizant, I built a venue request single-page app that had
                dynamic form validation, real-time search, and responsive
                design. This project helped me strengthen my skills in HTML,
                CSS, and JavaScript, and I gained a deeper understanding of
                single-page apps. The experience was fulfilling and further
                fueled my passion for web development.
              </p>
              <p>
                I contributed to a three-week project building a mock Instagram
                app with Angular and Spring Boot. It included features like user
                authentication, image uploading, and a news feed. Through this
                collaboration, I gained valuable experience in full-stack web
                development and honed my collaboration skills.
              </p>
              <p>
                Contributed to a team that developed an internal management tool
                using React and Spring Boot for new hire onboarding. The app
                streamlined the process by allowing managers to create groups
                and monitor progress. Valuable full-stack development experience
                was gained through this project.
              </p>
            </div>
          </div>
        </div>
        {/* <div>
          <h1>Get in touch</h1>
          <form>
            <h2>Contact</h2>
            <h3>Your Name</h3>
            <input></input>
            <h3>Email</h3>
            <input></input>
            <h3>Phone</h3>
            <h3>Message</h3>
            <textarea></textarea>
          </form>
        </div> */}
        <div>
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">
              Contact
            </h2>
            <form action="#" className="space-y-8">
            <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Name
                </label>
                <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Neo" required />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your email
                </label>
                <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@matrix.com" required />
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
  );
}
