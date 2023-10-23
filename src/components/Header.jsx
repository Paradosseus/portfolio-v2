import Logo from "../assets/FJ-logo-01.svg"
import { AiOutlineDownload } from "react-icons/ai";
export const Header = () => {

    return (
        <div className="flex justify-between items-center">
            <div>
                <img src={Logo} alt="" className="w-[40px] lg:w-[60px]" />
            </div>
            <div className="flex cursor-pointer text-[14px] lg:text-[20px]">
                <a href="" className="text-[blue-900]">RESUME</a>
                <AiOutlineDownload color="black" className="self-center text-[18px] lg:text-[22px]" />
            </div>
        </div>
    );
}