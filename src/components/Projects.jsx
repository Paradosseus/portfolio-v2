import { SiPhp, SiMysql, SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";
import { useContext, useEffect } from "react";
import ProjectContext from "../context/ProjectContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Projects = () => {

    const { projects } = useContext(ProjectContext);
    useEffect(() => {
        console.log("component mounted");
    }, [])
    return (
        <>
            <h2 className="text-[18px] font-bold md:text-[22px] lg:text-[26px]">PROJECTS</h2>
            <div className="grid gap-2 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 my-2" >
                {projects.map((project) => {
                    return (
                        <motion.div className="my-2 on-hover" key={project.name}
                            whileHover={{ scale: 1.05 }}>
                            <h3 className="uppercase font-bold text-[14px] md:text-[16px] lg:text-[18px]">{project.name}</h3>
                            <p className="text-[#464646] text-[12px] md:text-[14px] lg:text-[16px]">{project.description}</p>
                            <div className="flex justify-between my-2">
                                <div className="text-[10px] md:text-[12px] lg:text-[15px]">
                                    {project.tools.map((tool, index) => {
                                        return (
                                            <span className="uppercase" key={index}>{tool}{index !== project.tools.length - 1 && ' · '}</span>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="mb-2">
                                {project.siteLink ? <Link to={project.siteLink} target="_blank"><button className="project-button mr-2">DEMO</button></Link> : <span></span>}
                                {project.githubLink ? <Link to={project.githubLink} target="_blank"><button className="project-button">CODE</button></Link> : <span></span>}
                            </div>
                            <img src={project.screenshot} alt="screenshot of project" />
                        </motion.div>
                    )
                })}
            </div>
        </>
    );
}