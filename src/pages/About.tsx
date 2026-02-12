import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "Paritosh Sengar - About";
  }, []);
  return (
    <section
      className="bg-backfroundColor w-full font-dmMono"
      id="about-me-section"
    >
      <div className="max-w-[1280px] mx-auto text-textWhite p-5 ">
        <div className="text-2xl md:text-3xl lg:text-4xl ">
          <span className="text-textPrimary mr-1">/</span>about-me
        </div>
        <div className="grid grid-cols-1 justify-center items-center gap-5 mb-10">
          <div className="mt-5 flex flex-col gap-5 text-base md:text-lg">
            <p>
              Hello! I'm <span className="text-textPrimary">Paritosh Sengar</span>, a
              passionate computer science student, did my
              Bachelor's in Technology from{" "}
              <span className="text-textPrimary">
                Jaypee University Of Information & Technology, India.
              </span>
            </p>
            <p>
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
            </p>

            <p>
              As an <span className="text-textPrimary">Associate Web3 Developer </span>, 
              I developed an NFT coupon system (ERC-1155) for paper-based industries, enabling digital voucher tracking via blockchain (30% cost reduction). 
              Features included Node.js backend (300+ RPM), React frontend with MetaMask integration (95% wallet compatibility), and gas-optimized Solidity contracts. 
              Led smart contract audits achieving 100% compliance (MythX/OpenZeppelin) and resolved 50+ security vulnerabilities. Designed user-friendly UI improving coupon redemption by 25%.

              As a <span className="text-textPrimary">Software Developer Intern (MERN Stack)</span>, 
              I gained experience with an ongoing product, collaborated with product management to design/build/test systems, designed intuitive GUIs, and stored/retrieved/manipulated data. 
              Engineered a full-stack web app using MERN stack handling 5000+ user interactions/week with 99.9% uptime.
            </p>

            <p>
              Education: <span className="text-textPrimary">Bachelor of Technology (CSE)</span> from{" "}
              <span className="text-textPrimary">Jaypee University Of Information Technology (2019 – 2023)</span>.
            </p>
            
            <div>
              Let's connect and explore the endless possibilities at the
              intersection of technology and creativity!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
