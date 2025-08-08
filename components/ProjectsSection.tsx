import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
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
          data-aos-delay="50"
        >
          Here are a few projects I've been working on that show what I've been
          learning and building. They highlight my experience with both
          front-end and back-end development, and reflect my focus on{" "}
          <span className="text-teal-500">beautiful</span> and{" "}
          <span className="text-teal-500">responsive</span> design, solid
          functionality, and real-world problem-solving.
        </p>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <ProjectCard
            imgSrc="/patsbbqss.png"
            description="I created a website for my uncle's barbeque catering business. The site features high-quality food images, and an intuitive menu."
            flip="left"
            link="https://patstxbbq.netlify.app/"
          />
          <ProjectCard
            imgSrc="/bestrqss.png"
            description="At Cognizant, I built a venue request single-page app that had dynamic form validation, real-time search, and responsive design."
            flip="right"
          />
          <ProjectCard
            imgSrc="/pixelgramss.png"
            description="I contributed to a three-week project building a mock Instagram app with Angular and Spring Boot. It included features like user authentication, image uploading, and a news feed."
            flip="left"
          />
          <ProjectCard
            imgSrc="/flowss.png"
            description="Helped build a management tool using React and Spring Boot for new hire onboarding. The app streamlined the process by allowing managers to create groups and monitor progress."
            flip="right"
          />
          <ProjectCard
            imgSrc="/discord.png"
            description="Currently building a front-end clone of Discord using React and Tailwind CSS, focusing on UI/UX design, responsive layout, and component-based architecture."
            flip="left"
          />
          <ProjectCard
            imgSrc="/MovieApi.png"
            description="Developed a full-stack movie database application with React, Spring Boot, and MongoDB. Features include CRUD operations, RESTful API integration, and a modern, responsive UI."
            flip="right"
          />
        </div>
      </div>
    </div>
  );
}
