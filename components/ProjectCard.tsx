import Image from "next/image";

interface ProjectCardProps {
  imgSrc: string;
  description: string;
  flip: "left" | "right";
  link?: string;
}

function ProjectCard({ imgSrc, description, flip, link }: ProjectCardProps) {
  const content = (
    <div className="relative w-full aspect-video rounded overflow-hidden">
      <Image
        src={imgSrc}
        alt={description}
        fill
        className="object-fill"
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      <p className="absolute inset-0 flex items-center justify-center text-center text-sm lg:text-lg shadow-lg text-white rounded dark:bg-cyan-800 bg-gradient-to-r from-cyan-500 to-teal-500 opacity-0 transition duration-300 ease-in-out hover:opacity-100 p-5">
        {description}
      </p>
    </div>
  );

  return (
    <div
      className="shadow-xl"
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
