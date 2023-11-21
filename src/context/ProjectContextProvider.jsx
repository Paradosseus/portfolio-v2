import ProjectContext from "./ProjectContext";
import pokelogPreview from "../assets/project-screenshots/pokelog-preview.png";
import newsletterPreview from "../assets/project-screenshots/newsletter-preview.png";
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
            name: "Responsive Newsletter FEM",
            link: "https://responsive-newsletter-with-form-validation-qu13gm6al.vercel.app/",
            description: "Newsletter project from Frontend Mentor ",
            tools: ["HTML", "CSS", "JavaScript"],
            screenshot: newsletterPreview,
            githubLink: "https://github.com/Paradosseus/Responsive-Newsletter-with-Form-Validation",
            siteLink: "https://responsive-newsletter-with-form-validation.vercel.app/"
        },
    ];

    return (
        <ProjectContext.Provider value={{ projects }}>
            {children}
        </ProjectContext.Provider>
    )
}

export default ProjectContextProvider;