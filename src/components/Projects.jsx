import Header from "./Header"
import ProjectsCard from "./ProjectsCard"
import projects from "../data/projects"

const Projects = () => {
  return (
    <div className="mt-24">
        <section id="projects">
        <Header title="My Projects" className="" />
        <div className="sm:px-14">
          {projects.map((project, index) => (
            <ProjectsCard key={index} project={project} index={index}/>
          ))}
        </div>
        </section>
    </div>
  )
}

export default Projects