import { BiLogoPostgresql } from "react-icons/bi";
import SkillsCard from "./cards/SkillsCard";
import {
  FaAws,
  FaDocker,
  FaGithub,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiNginx,
  SiTailwindcss,
  SiTypescript,
  SiWeb3Dotjs,
} from "react-icons/si";
import { TbBrandCpp, TbBrandNextjs } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";
const SkillsSection = () => {
  return (
    <section className="bg-backfroundColor w-full font-dmMono">
      <div className="max-w-[1280px] mx-auto p-5 text-textWhite">
        <div>
          <div className="text-2xl md:text-3xl lg:text-4xl ">
            <span className="text-textPrimary mr-1">$</span>skills
          </div>
        </div>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5 ">
          <SkillsCard
            sectionName="languages"
            icons={[
              <TbBrandCpp size={32} />,
              <IoLogoJavascript size={32} />,
              <SiTypescript size={32} />,
              <FaPython size={32} />,
            ]}
          />
          <SkillsCard
            sectionName="frameworks"
            icons={[
              <FaNodeJs size={32} />,
              <SiExpress size={32} />,
              <FaReact size={32} />,
              <SiTailwindcss size={32} />,
              <SiWeb3Dotjs size={32} />,
              <TbBrandNextjs size={32} />,
            ]}
          />
          <SkillsCard
            sectionName="databases"
            icons={[
              <SiMongodb size={32} />,
              <BiLogoPostgresql size={32} />,
              <SiMysql size={32} />,
              <IoLogoFirebase size={32} />,
            ]}
          />
          <SkillsCard
            sectionName="tools"
            icons={[
              <FaGithub size={32} />,
              <FaDocker size={32} />,
              <FaAws size={32} />, 
              <SiNginx size={32} />,
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
