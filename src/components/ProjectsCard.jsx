import CustomButton from "./CustomButton";

const ProjectsCard = ({ project }) => {
  return (
    <div className="mb-10">
      <img src={project.src} alt={`${project.title} project`} className="rounded-lg drop-shadow-lg" />
      <h3 className="font-sora font-bold text-2xl text-center text-olive dark:text-linen py-4">{project.title}</h3>
      <p className="font-sora text-olive dark:text-linen text-center pb-4">{project.description}</p>
      <p className="text-olive dark:text-linen text-center pb-10">
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
  );
};

export default ProjectsCard;
