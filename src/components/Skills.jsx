import Header from "./Header";
import SkillsGrid from "./SkillsGrid";
import skills from "../data/skills";

const Skills = () => {
  return (
    <div className="mt-12">
      <section id="skills">
        <Header title="My Skills" />
        <div className="grid grid-cols-3 gap-y-6 mt-10">
          {skills.map((skill, index) => (
            <SkillsGrid key={index} skill={skill} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;

