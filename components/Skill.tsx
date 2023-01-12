import React from 'react'
import { motion } from "framer-motion"
type Props = {
    directionLeft?: boolean;
    src:string
}

const Skill = ({ directionLeft,src }: Props) => {
    return (
        <div className='group relative flex cursor-pointer'>
            <motion.img
                initial={{
                    x: directionLeft ? -100 : 100,
                    opacity: 0
                }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                whileInView={{ x: 0, opacity: 1 }}
                className='h-17 w-17 md:w-24 md:h-24   rounded-full border object-cover object-center filter group-hover:grayscale transition duration-300 ease-in-out'
                src={`${src}`} />

            <div className='absolute  opacity-0 group-hover:opacity-50 h-18 w-18 md:h-24 md:w-24 rounded-full bg-white  transition duration-300 ease-in-out '>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl text-bold text-black opacity-100'>100%</p>
                </div>
            </div>
        </div>
    )
}

export default Skill