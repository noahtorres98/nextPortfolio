import Image from "next/image";

export default function Project() {
  return (
    <>
      <div className="w-full py-2">
        <Image
          src="/patsbbqss.png"
          alt="me"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
        {/* <p className="bg-white shadow-xl p-7 rounded-b-xl dark:text-white dark:bg-cyan-800">
          I created a stunning website for my uncle's barbeque catering
          business. The site features high-quality food images, and an intuitive
          menu. My uncle loved it, and I'm proud to have contributed to his
          business growth through the power of the web.
        </p> */}
      </div>
    </>
  );
}
