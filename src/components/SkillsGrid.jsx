const SkillsGrid = ({skill}) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        {<skill.icon className="text-periwinkle-100 dark:text-sage w-16 h-16" />}
        <p className="uppercase text-periwinkle-200 dark:text-sage font-bold pt-3">{skill.skillName}</p>
      </div>
    </div>
  );
}

export default SkillsGrid;