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
      </section>
    </main>
  );
}
