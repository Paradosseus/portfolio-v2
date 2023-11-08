import React from 'react'
import Logo from "../assets/FJ-logo-01.svg"
import { easeIn, easeOut, motion } from "framer-motion";
export const Preloader = () => {


    return (
        <motion.div className='flex justify-center items-center w-screen h-screen' animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }}>
            <div className='text-center '>
                <motion.img src={Logo} alt="" className='w-[100px] lg:w-[100px] m-auto my-6'
                    animate={{
                        rotate: 360,
                    }}
                    transition={{ ease: easeOut, delay: 0.5, duration: .5 }} />

                <h1 className='font-bold text-[25px] uppercase'>L o a d i n g</h1>
            </div>
        </motion.div>
    )
}
