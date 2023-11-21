import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoTailwindCss, BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoFirebase, BiLogoFigma } from "react-icons/bi";
import { TbBrandKotlin } from "react-icons/tb";
import { FaLaravel } from "react-icons/fa";
import { SiPhp, SiMysql, SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";

export const Skills = () => {



    return (
        <div>
            <h2 className="text-[18px] font-bold md:text-[22px] lg:text-[26px]">TECH STACK</h2>
            <div className="grid xl:grid-cols-12 lg:grid-cols-6 grid-cols-3 gap-4 skills-icons-container text-[30px] md:text-[40px] lg:text-[50px] xl:text-[75px]  text-black lg:my-20 md:my-10 my-5">
                <div className="icon-container">
                    <AiFillHtml5 className="m-auto" />
                    <p className="icon-text">HTML5</p>
                </div>
                <div className="icon-container">
                    <BiLogoCss3 className="m-auto" />
                    <p className="icon-text ">CSS3</p>
                </div>
                <div className="icon-container">
                    <BiLogoJavascript className="m-auto" />
                    <p className="icon-text ">JavaScript</p>
                </div>
                <div className="icon-container">
                    <BiLogoTailwindCss className="m-auto" />
                    <p className="icon-text ">Tailwind</p>
                </div>
                <div className="icon-container">
                    <BiLogoReact className="m-auto" />
                    <p className="icon-text ">React</p>
                </div>
                <div className="icon-container">
                    <TbBrandKotlin className="m-auto" />
                    <p className="icon-text">Kotlin</p>
                </div>
                <div className="icon-container">
                    <SiPhp className="m-auto" />
                    <p className="icon-text ">PHP</p>
                </div>
                <div className="icon-container">
                    <FaLaravel className="m-auto" />
                    <p className="icon-text">Laravel</p>
                </div>
                <div className="icon-container">
                    <SiMysql className="m-auto" />
                    <p className="icon-text">MySQL</p>
                </div>
                <div className="icon-container">
                    <BiLogoFirebase className="m-auto" />
                    <p className="icon-text">Firebase</p>
                </div>
                <div className="icon-container">
                    <BiLogoFigma className="m-auto" />
                    <p className="icon-text">Figma</p>
                </div>
                <div className="icon-container">
                    <SiAdobephotoshop className="m-auto" />
                    <p className="icon-text">Photoshop</p>
                </div>
            </div>
        </div>
    );
}