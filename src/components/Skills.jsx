import Header from "./Header";
import SkillsGrid from "./SkillsGrid";
import skills from "../data/skills";

const Skills = () => {
  return (
    <div className="mt-24">
      <section id="skills">
        <Header title="My Skills" />
        <div className="grid grid-cols-3 gap-y-6 mt-10 sm:w-3/4 2xl:w-1/2 mx-auto xl:grid-cols-4 max-[385px]:grid-cols-2">
          {skills.map((skill, index) => (
            <SkillsGrid key={index} skill={skill} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;

