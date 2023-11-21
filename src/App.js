import { Header } from "./components/Header";
import Cover from "./assets/Cover.png";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Preloader } from "./components/Preloader";
import { Link } from "react-router-dom";
function App() {
  const [option, setOption] = useState("Skills");
  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {screenLoading ? (
        <Preloader />
      ) : (
        <motion.main className="main-container mx-auto pt-10 max-w-xs md:max-w-xl lg:max-w-4xl xl:max-w-7xl">
          <Header />
          <div className="my-10 lg:my-20 flex flex-wrap lg:flex-nowrap justify-center">
            <div className="lg:basis-1/3">
              <motion.img
                src={Cover}
                className="w-[225px] md:w-[250px] lg:w-[400px] mb-4"
                alt="cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              />
            </div>
            <div className="lg:ml-4 lg:basis-2/3 lg:pt-16 self-center text-center lg:text-left">
              <motion.h1
                className="lg:text-[35px] text-[21px] md:text-[30px] font-bold"
                initial={{ y: -70, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                FRANCIS JOSHUA COLLADO
              </motion.h1>
              <motion.h2
                className="lg:text-[26px] text-[16px] md:text-[20px] mb-3"
                initial={{ y: -70, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.7, duration: 0.5 }}
              >
                WEB DEVELOPER
              </motion.h2>
              <motion.p
                className="lg:text-[19px] text-[13px] md:text-[16px] max-w-2xl text-justify text-[#464646]"
                initial={{ y: -70, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.9, duration: 0.5 }}
              >
                Hi, I’m a Web Developer and Designer based in the Philippines.
                Equipped with different technological skills, I’ve always had a
                knack and passion in designing websites and building web
                applications.
              </motion.p>
              <div className="flex justify-between mt-4">
                <motion.div
                  className="flex space-x-5 text-[30px] md:text-[40px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2, duration: 1.5 }}
                >
                  <Link
                    to="https://www.facebook.com/FJ.Kyou.Chan"
                    target="_blank"
                    className="cursor-pointer"
                  >
                    <AiFillFacebook color="black" />
                  </Link>
                  <Link
                    to="https://github.com/Paradosseus"
                    target="_blank"
                    className="cursor-pointer"
                  >
                    <AiFillGithub color="black" />
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/fjcollado/"
                    target="_blank"
                    className="cursor-pointer"
                  >
                    <AiFillLinkedin color="black" />
                  </Link>
                </motion.div>
                <div className="lg:text-2xl text-[14px] md:text-[20px]">
                  <ul className="flex flex-col space-y-2 text-right">
                    <motion.li
                      className="p-2 cursor-pointer hover:bg-[#0E2954] hover:text-[#ddf2fd]"
                      initial={{ y: -70, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 2.3, duration: 0.5 }}
                      onClick={() => setOption("Skills")}
                    >
                      TECH STACK
                    </motion.li>
                    <motion.li
                      className="p-2 cursor-pointer hover:bg-[#0E2954] hover:text-[#ddf2fd]"
                      initial={{ y: -70, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 2.6, duration: 0.5 }}
                      onClick={() => setOption("Projects")}
                    >
                      PROJECTS
                    </motion.li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ y: -70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.6, duration: 0.5 }}
            onClick={() => setOption("Projects")}
          >
            {option === "Skills" ? <Skills /> : <Projects />}
          </motion.div>
          <motion.div
            className="py-2 md:py-5 border-t-2 border-[#464646] text-[10px] md:text-[13px]"
            initial={{ y: -70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.8, duration: 0.5 }}
          >
            © 2023 Portfolio Created by Francis Joshua Collado
          </motion.div>
        </motion.main>
      )}
    </div>
  );
}

export default App;
