import Image from "next/image";

interface ProjectCardProps {
  imgSrc: string;
  description: string;
  flip: "left" | "right";
  link?: string;
}

function ProjectCard({ imgSrc, description, flip, link }: ProjectCardProps) {
  const content = (
    <>
      <div className="relative w-full h-80 rounded overflow-hidden">
        <Image src={imgSrc} alt={description} fill className="rounded" />
      </div>
      <p className="text-sm lg:text-lg shadow-lg p-5 text-white rounded dark:bg-cyan-800 absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-cyan-500 to-teal-500 opacity-0 transition duration-300 ease-in-out hover:opacity-100">
        {description}
      </p>
    </>
  );

  return (
    <div
      className="relative shadow-xl"
      data-aos={`flip-${flip}`}
      data-aos-duration="2000"
    >
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}

export default ProjectCard;
