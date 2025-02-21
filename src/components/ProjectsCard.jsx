import CustomButton from "./CustomButton";

const ProjectsCard = ({ project, index }) => {
  return (
        <div 
        className={`py-8 md:py-12 md:flex md:items-center md:gap-4
        ${index % 2 === 1 ? "md:flex-row-reverse" : "md-flex-row"}`}>
      <div>
        <img 
          src={project.src} 
          alt={`${project.title} project`} 
          className="rounded-lg drop-shadow-lg" />
      </div>
      <div className="md:w-4/5">
        <h3 className="font-sora font-bold text-2xl text-center text-olive dark:text-linen py-4 2xl:text-3xl">
            {project.title}</h3>
        <p className="font-sora text-olive dark:text-linen text-center pb-4 2xl:px-36 2xl:text-xl">
            {project.description}</p>
        <p className="text-olive dark:text-linen text-center pb-10 2xl:text-lg">
          <span className="font-bold">Tech Stack:</span>
          {` ${project.techStack.join(", ")}`}
        </p>
        <div className="flex justify-center gap-4">
          <CustomButton 
            text="View Project" 
            link={project.projectLink} 
            color="bg-irish dark:bg-mustard text-linen dark:text-olive" 
            hoverColor="hover:border-solid hover:border-2 hover:border-irish hover:bg-linen hover:text-olive dark:hover:bg-olive dark:hover:border-mustard dark:hover:text-linen" />
          <CustomButton 
            text="Github Repo" 
            link={project.githubLink}  
            color="bg-periwinkle-100 dark:bg-sage text-linen dark:text-olive" 
            hoverColor="hover:border-solid hover:border-2 hover:border-periwinkle-100 hover:bg-linen hover:text-olive dark:hover:text-linen dark:hover:bg-olive dark:hover:border-sage" />
        </div>
      </div>
    </div>
  )
}

export default ProjectsCard;

