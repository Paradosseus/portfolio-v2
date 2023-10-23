import { SiPhp, SiMysql, SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";

export const Projects = () => {
    return (
        <div>
            <h2 className="text-[18px] font-bold md:text-[22px] lg:text-[26px]">PROJECTS</h2>
            <p className="text-[#464646] text-[14px] md:text-[18px] lg:text-[20px] mb-2">Below are the technologies I learned and used on my projects:</p>
            <div className="grid gap-2 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                <div className="my-2">
                    <h3 className="uppercase font-bold text-[14px] md:text-[16px] lg:text-[18px]">Project 1</h3>
                    <p className="text-[#464646] text-[12px] md:text-[14px] lg:text-[16px]">This is a placeholder for project description</p>
                    <div className="flex justify-between my-2">
                        <div className="flex text-[40px] md:text-[45px] lg:text-[50px]">
                            <div className="project-icon-container">
                                <SiPhp />
                            </div>
                            <div className="project-icon-container">
                                <SiPhp />
                            </div>
                            <div className="project-icon-container">
                                <SiPhp />
                            </div>
                        </div>
                        <div className="my-auto">
                            <a href=""><button className="project-button">DEMO</button></a>
                            <a href=""><button className="project-button">CODE</button></a>
                        </div>
                    </div>
                    <div className="bg-gray-400 h-[200px] md:h-[300px]"></div>
                </div>
                <div className="my-2">
                    <h3 className="uppercase font-bold text-[14px] md:text-[16px] lg:text-[18px]">Project 1</h3>
                    <p className="text-[#464646] text-[12px] md:text-[14px] lg:text-[16px]">This is a placeholder for project description</p>
                    <div className="flex justify-between my-2">
                        <div className="flex text-[40px] md:text-[45px] lg:text-[50px]">
                            <div className="project-icon-container">
                                <SiPhp />
                            </div>
                            <div className="project-icon-container">
                                <SiPhp />
                            </div>
                            <div className="project-icon-container">
                                <SiPhp />
                            </div>
                        </div>
                        <div className="my-auto">
                            <a href=""><button className="project-button">DEMO</button></a>
                            <a href=""><button className="project-button">CODE</button></a>
                        </div>
                    </div>
                    <div className="bg-gray-400 h-[200px] md:h-[300px]"></div>
                </div>
                <div className="my-2">
                    <h3 className="uppercase font-bold text-[14px] md:text-[16px] lg:text-[18px]">Project 1</h3>
                    <p className="text-[#464646] text-[12px] md:text-[14px] lg:text-[16px]">This is a placeholder for project description</p>
                    <div className="flex justify-between my-2">
                        <div className="flex text-[40px] md:text-[45px] lg:text-[50px]">
                            <div className="project-icon-container">
                                <SiPhp />
                            </div>
                            <div className="project-icon-container">
                                <SiPhp />
                            </div>
                            <div className="project-icon-container">
                                <SiPhp />
                            </div>
                        </div>
                        <div className="my-auto">
                            <a href=""><button className="project-button">DEMO</button></a>
                            <a href=""><button className="project-button">CODE</button></a>
                        </div>
                    </div>
                    <div className="bg-gray-400 h-[200px] md:h-[300px]"></div>
                </div>
            </div>
        </div>
    );
}