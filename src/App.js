import { Header } from "./components/Header";
import Cover from "./assets/Cover.png";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { useState } from "react";

function App() {
  const [option, setOption] = useState("Skills");

  return (
    <div>
      <main className="main-container mx-auto pt-10 max-w-xs md:max-w-xl lg:max-w-4xl xl:max-w-7xl">
        <Header />
        <div className="my-10 lg:my-20 flex flex-wrap lg:flex-nowrap justify-center">
          <div className="lg:basis-1/3">
            <img
              src={Cover}
              className="w-[225px] md:w-[250px] lg:w-[400px] mb-4"
              alt=""
            />
          </div>
          <div className="lg:ml-4 lg:basis-2/3 lg:pt-16 self-center text-center lg:text-left">
            <h1 className="lg:text-[35px] text-[21px] md:text-[30px] font-bold">
              FRANCIS JOSHUA COLLADO
            </h1>
            <h2 className="lg:text-[26px] text-[16px] md:text-[20px] mb-3">
              WEB DEVELOPER AND DESIGNER
            </h2>
            <p className="lg:text-[19px] text-[13px] md:text-[16px] max-w-2xl text-justify text-[#464646] ">
              Hi, I’m a Web Developer and Designer based in the Philippines.
              Equipped with different technological skills, I’ve always had a
              knack and passion in designing websites and building web
              applications.
            </p>
            <div className="flex justify-between mt-4">
              <div className="flex space-x-5 text-[30px] md:text-[40px]">
                <a
                  href="https://www.facebook.com/FJ.Kyou.Chan"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <AiFillFacebook color="black" />
                </a>
                <a
                  href="https://github.com/Paradosseus"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <AiFillGithub color="black" />
                </a>
                <a
                  href="https://www.linkedin.com/in/fjcollado/"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <AiFillLinkedin color="black" />
                </a>
              </div>
              <div className="lg:text-2xl text-[14px] md:text-[20px]">
                <ul className="flex flex-col space-y-2 text-right">
                  <li
                    className="p-2 cursor-pointer"
                    onClick={() => setOption("Skills")}
                  >
                    TECH STACK
                  </li>
                  <li
                    className="p-2 cursor-pointer"
                    onClick={() => setOption("Projects")}
                  >
                    PROJECTS
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>{option === "Skills" ? <Skills /> : <Projects />}</div>
        <div className="py-2 md:py-5 border-t-2 border-[#464646] text-[10px] md:text-[13px]">
          © 2023 Portfolio Created by Francis Joshua Collado
        </div>
      </main>
    </div>
  );
}

export default App;
