import Image from "next/image";

export default function Project() {
  return (
    <>
      <img src="/patsbbqss.png" />
      <p className="bg-white shadow-xl p-7 dark:text-white dark:bg-cyan-800 absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition duration-300 ease-in-out hover:opacity-100">
        I created a stunning website for my uncle's barbeque catering business.
        The site features high-quality food images, and an intuitive menu. My
        uncle loved it, and I'm proud to have contributed to his business growth
        through the power of the web.
      </p>
    </>
  );
}
