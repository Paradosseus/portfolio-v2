import React from 'react'
import Logo from "../assets/FJ-logo-01.svg"
import { easeOut, motion } from "framer-motion";
export const Preloader = () => {


    return (
        <motion.div className='flex justify-center items-center w-screen h-screen' animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }}>
            <div className='text-center'>
                <motion.img src={Logo} alt="" className='lg:w-[100px] md:w-[75px] w-[50px] m-auto my-6'
                    animate={{
                        rotate: 360,
                    }}
                    transition={{ ease: easeOut, delay: 0.5, duration: .5 }} />

                <h1 className='font-bold lg:text-[25px] uppercase md:text-[20px] text-[15px]'>L o a d i n g</h1>
            </div>
        </motion.div>
    )
}
