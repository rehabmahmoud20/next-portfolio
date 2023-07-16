import { projects } from "../../utils/projects";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <section className="container mx-auto py-10 px-6 ">
      <h2 className="mb-10"> my projects</h2>
      <div className="grid sm:grid-cols-2 gap-4 md:grid-cols-3  gap-8">
        {projects.map((item) => (
          <ProjectCard item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
