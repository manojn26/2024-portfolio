import { backendData, database, frontEndData, otherTools, programmingLanguages } from "./skills";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <>
      <div
        id="skill-container"
        className="skill-container pb-20 pt-24 bg-slate-950"
        style={{ zIndex: 100, position: "relative" }}
      >
        <h3 className="text-sky-500 text-center text-3xl font-bold mb-16">
          Skills  <span className="text-white"></span>
        </h3>


        <h2 className=" ml-20 text-white  text-3xl font-bold mb-8">Programming Languages</h2>
        <div className="skill flex flex-wrap justify-center gap-5  align-center">
          {programmingLanguages.map((skill, index) => (
            <div key={index} className="w-1/8">
              <SkillCard name={skill.name} path={skill.path} />
            </div>
          ))}
        </div>

        <h2 className=" ml-20 text-white  text-3xl font-bold mb-8 mt-8">Front End</h2>
        <div className="skill flex flex-wrap justify-center gap-5  align-center">
          {frontEndData.map((skill, index) => (
            <div key={index} className="w-1/8">
              <SkillCard name={skill.name} path={skill.path} />
            </div>
          ))}
        </div>

        <h2 className=" ml-20 text-white  text-3xl font-bold mb-8 mt-8">Back End</h2>
        <div className="skill flex flex-wrap justify-center gap-5  align-center">
          {backendData.map((skill, index) => (
            <div key={index} className="w-1/8">
              <SkillCard name={skill.name} path={skill.path} />
            </div>
          ))}
        </div>

        <h2 className=" ml-20 text-white  text-3xl font-bold mb-8 mt-8">Databases</h2>
        <div className="skill flex flex-wrap justify-center gap-5  align-center">
          {database.map((skill, index) => (
            <div key={index} className="w-1/8">
              <SkillCard name={skill.name} path={skill.path} />
            </div>
          ))}
        </div>

        <h2 className=" ml-20 text-white  text-3xl font-bold mb-8 mt-8">Other Tools</h2>
        <div className="skill flex flex-wrap justify-center gap-5  align-center">
          {otherTools.map((skill, index) => (
            <div key={index} className="w-1/8">
              <SkillCard name={skill.name} path={skill.path} />
            </div>
          ))}
        </div>

      </div>
    </>
  );
}
