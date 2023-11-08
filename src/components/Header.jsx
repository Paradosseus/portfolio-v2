import Logo from "../assets/FJ-logo-01.svg"
import { AiOutlineDownload } from "react-icons/ai";
import { easeIn, easeOut, motion } from "framer-motion";
export const Header = () => {

    return (
        <motion.div className="flex justify-between items-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}>
            <div>
                <img src={Logo} alt="" className="w-[40px] lg:w-[60px]" />
            </div>
            <div className="flex cursor-pointer text-[14px] lg:text-[20px] hover:bg-[#0E2954] hover:text-[#ddf2fd] p-2">
                <a href="" className="text-[blue-900] font-bold">RESUME</a>
                <AiOutlineDownload className="self-center text-[18px] lg:text-[22px]" />
            </div>
        </motion.div>
    );
}