import ProjectContext from "./ProjectContext";
import pokelogPreview from "../assets/project-screenshots/pokelog-preview.png";
import newsletterPreview from "../assets/project-screenshots/newsletter-preview.png";
import furriendsPreview from "../assets/project-screenshots/furriends-preview.png";
import nerdhubPreview from "../assets/project-screenshots/nerdhub-preview.png";
import listitPreview from "../assets/project-screenshots/listit-preview.png";
import citeitoutPreview from "../assets/project-screenshots/citeitout-preview.png";

const ProjectContextProvider = ({ children }) => {
    const projects = [
        {
            name: "Cite-it-out",
            description: "A category game built in HTML, CSS, Javascript",
            tools: ["HTML", "CSS", "JavaScript"],
            screenshot: citeitoutPreview,
            githubLink: "https://github.com/Paradosseus/cite-it-out.git",
            siteLink: "https://cite-it-out.vercel.app/"
        },
        {
            name: "List-it",
            description: "A simple fullstack Todo list app",
            tools: ["React", "Laravel", "Rest API"],
            screenshot: listitPreview,
            githubLink: "https://github.com/Paradosseus/Listit.git",
            siteLink: ""
        },
        {
            name: "NerdHub",
            description: "A Landing page built in Wordpress",
            tools: ["Wordpress"],
            screenshot: nerdhubPreview,
            githubLink: "",
            siteLink: "https://nerdhub8.wordpress.com/"
        },
        {
            name: "PokeLog",
            description: "A Pokedex like application with the use of PokeAPI",
            tools: ["React", "TailwindCSS", "Poke API"],
            screenshot: pokelogPreview,
            githubLink: "https://github.com/Paradosseus/pokelog",
            siteLink: "https://poke-log.vercel.app/"
        },
        {
            name: "Responsive Newsletter - FEM",
            description: "Newsletter project from Frontend Mentor",
            tools: ["HTML", "CSS", "JavaScript"],
            screenshot: newsletterPreview,
            githubLink: "https://github.com/Paradosseus/Responsive-Newsletter-with-Form-Validation",
            siteLink: "https://responsive-newsletter-with-form-validation.vercel.app/"
        },
        {
            name: "Furriends - Captsone Project",
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