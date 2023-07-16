import { skills } from "../../utils/skills";
import SkillsCard from "./SkillsCard";
const Skills = () => {
  return (
    <section className="container mx-auto py-10 px-6 min-h-screen">
      {/* <div> */}
      <h2 className="my-10">profitional skills</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {skills.map((item) => (
        <SkillsCard Icon={item.Icon} title={item.title} key={item.id} />
      ))}
      </div>
      {/* </div> */}
     
     
    </section>
  );
};

export default Skills;
