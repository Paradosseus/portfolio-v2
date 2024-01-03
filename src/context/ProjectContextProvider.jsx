import ProjectContext from "./ProjectContext";
import pokelogPreview from "../assets/project-screenshots/pokelog-preview.png";
import newsletterPreview from "../assets/project-screenshots/newsletter-preview.png";
import furriendsPreview from "../assets/project-screenshots/furriends-preview.png";
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoTailwindCss, BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoFirebase, BiLogoFigma } from "react-icons/bi";
import { TbBrandKotlin } from "react-icons/tb";
import { FaLaravel } from "react-icons/fa";
import { SiPhp, SiMysql, SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";
const ProjectContextProvider = ({ children }) => {
    const projects = [
        {
            name: "PokeLog",
            link: "https://pokelog-i32s84ffw-paradosseus-projects.vercel.app/",
            description: "A Pokedex like application with the use of PokeAPI",
            tools: ["React", "TailwindCSS", "Poke API"],
            screenshot: pokelogPreview,
            githubLink: "https://github.com/Paradosseus/pokelog",
            siteLink: "https://poke-log.vercel.app/"
        },
        {
            name: "Responsive Newsletter - FEM",
            link: "https://responsive-newsletter-with-form-validation-qu13gm6al.vercel.app/",
            description: "Newsletter project from Frontend Mentor",
            tools: ["HTML", "CSS", "JavaScript"],
            screenshot: newsletterPreview,
            githubLink: "https://github.com/Paradosseus/Responsive-Newsletter-with-Form-Validation",
            siteLink: "https://responsive-newsletter-with-form-validation.vercel.app/"
        },
        {
            name: "Furriends - Captsone Project",
            link: "https://responsive-newsletter-with-form-validation-qu13gm6al.vercel.app/",
            description: "A mobile pet adoption application",
            tools: ["Kotlin", "Firebase"],
            screenshot: furriendsPreview,
            githubLink: "https://github.com/Paradosseus/Furriends",
            siteLink: ""
        }
    ];


    return (
        <ProjectContext.Provider value={{ projects }}>
            {children}
        </ProjectContext.Provider>
    )
}

export default ProjectContextProvider;