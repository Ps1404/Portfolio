import { FaLinkedinIn, FaGithub, FaKaggle, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import SocialButtons from "./elements/SocialButtons";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

const AboutMeSection = () => {
  return (
    <section
      className="bg-backfroundColor w-full font-dmMono"
      id="about-me-section"
    >
      <div className="max-w-[1280px] mx-auto text-textWhite p-5 ">
        <div className="text-2xl md:text-3xl lg:text-4xl ">
          <span className="text-textPrimary mr-1">$</span>about-me
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-5">
          <div className="mt-5 flex flex-col gap-5 text-base md:text-lg lg:col-span-2">
            <div>
              Hello! I'm <span className="text-textPrimary">Paritosh Sengar</span>, a
              passionate computer science student, did my
              Bachelor's in Technology from{" "}
              <span className="text-textPrimary">
                Jaypee University Of Information & Technology, India.
              </span>
            </div>
            <div>
              Alongside my studies, I've immersed myself in the world of
              technology, honing my skills in various programming languages like
              <span className="text-textPrimary">JavaScript</span>, and{" "}
              <span className="text-textPrimary"> Python</span>,{" "}
              <span className="text-textPrimary">C++</span>. My proficiency
              extends to frameworks such as{" "}
              <span className="text-textPrimary">Express.js</span>, and
              <span className="text-textPrimary">Node.js</span>,{" "}
              <span className="text-textPrimary">MERN Stack</span>,{" "}
              <span className="text-textPrimary">Fast Api</span>,{" "}
              <span className="text-textPrimary">Django</span>, complemented
              by a strong foundation in databases like
              <span className="text-textPrimary"> MongoDB</span>,{" "}
              <span className="text-textPrimary">PostgreSQL</span>,{" "}
              <span className="text-textPrimary">MySQL</span>, and{" "}
              <span className="text-textPrimary">Firebase</span>.
            </div>
            <div className="hidden md:block">
              Beyond Full Stack Development, I've also explored{" "}
              <span className="text-textPrimary">Web3 </span>
              and <span className="text-textPrimary">Blockchain</span>. I am
              experienced with
              <span className="text-textPrimary">Solidity</span>,{" "}
              <span className="text-textPrimary">MetaMask</span>, and{" "}
              <span className="text-textPrimary">MythX & OpenZeppelin</span>. I'm passionate about combining backend expertise with decentralized technologies to create secure, 
  transparent, and scalable applications in this fast-moving space — and I'm excited to bring that energy 
  into a dynamic career in Web3 and full-stack development.
            </div>
            <a
              href="/about"
              style={{ textDecoration: "None" }}
              className="hover-border w-fit text-textPrimary"
            >
              Read More ~~~{">"}
            </a>
          </div>
          <div>
            <div className="text-textWhite mb-2 text-xl border-0 border-solid border-b-2 border-textPrimary">
              <span className="text-textPrimary">/</span>social-profiles
            </div>
            <div className="flex justify-center items-center gap-8 mt-6">

              <SocialButtons
                url="https://www.instagram.com/paarito__shhhhhhhhhhhhh"
                element={<FaInstagram alphabetic={"Instagram"} />}
              />
              <SocialButtons
                url="https://github.com/Ps1404"
                element={<FaGithub alphabetic={"GitHub"} />}
              />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
