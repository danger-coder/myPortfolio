import React from 'react'
import ExperinceCards from './ExperinceCards'
import { motion } from "framer-motion"

type Props = {}

function Experience({ }: Props) {
    return (
        <motion.div initial={{
            opacity: 0
        }}
            whileInView={{
                opacity: 1
            }}
            viewport={{
                once: true
            }}
            transition={{
                duration: 1.5
            }} className='relative flex items-center justify-center h-screen flex-col px-5'>
            <h1 className='absolute top-24 text-2xl tracking-[20px] uppercase text-gray-500'>Experience</h1>
            <div className='w-full  card flex mt-10 xl:mt-[135px] space-x-5 overflow-x-scroll snap-x snap-mandatory   p-10 scrollbar scrollbar-thumb-[#F7AB0A] scrollbar-track-[#292929] scrollbar-thin'>
                <ExperinceCards />
                <ExperinceCards />
                <ExperinceCards />
                <ExperinceCards />
            </div>
        </motion.div>
    )
}

export default Experience