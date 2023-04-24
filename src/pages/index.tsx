import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" bg-2626262 px-10">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl">Noah T</h1>
          <ul className="flex space-x-6">
            <li>Projects</li>
            <li>About Me</li>
            <li>Contact</li>
          </ul>
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
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillGithub />
            <AiFillLinkedin />
          </div>
          <div className=" bg-gradient-to-b from-teal-500 w-56 mx-auto rounded-full mt-20">
            <div className="h-52"></div>
          </div>
        </div>
        <div>
          <h1 className="text-center text-3xl font-bold">Projects Portfolio</h1>
          <div className="flex justify-between">
            <Image src="/patsbbqss.png" alt="me" width="300" height="300" className="rounded-lg"/>
            <Image src="/bestrqss.png" alt="me" width="300" height="300" className="rounded-lg"/>
          </div>
        </div>
      </section>
    </main>
  );
}
