import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image';

type Props = {}

const Projects = (props: Props) => {
    // const projectss: string = "../public/project.png"

    const project = [1, 2, 3, 4, 5];
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className='relative cursor-pointer flex items-center justify-center h-screen flex-col '>
            <h1 className='absolute top-24 text-2xl tracking-[20px]  uppercase text-gray-500'>Projects</h1>



            <div className='relative w-full project flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
                {/* projects */}
                {
                    project.map((project, i) => (
                        <div className='w-screen flex-col flex-shrink-0 flex items-center justify-center snap-center ' key={i}>
                            <motion.img
                                initial={{
                                    y: -200,
                                    opacity: 0
                                }}
                                transition={{ duration: 1 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                className='w-[400px] z-20 transition duration-200 ease-out' src="/project.png"  alt="" />
                            {/* <Image src="/project.png" alt='' height={100} width={100} layout={"fill"}  /> */}
                            <div className='max-w-6xl space-y-5 px-10 text-center'>
                                <h4 className='text-3xl text-semibold'><span>Case Study of website clone</span></h4>
                                <p className='max-w-4xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum n ipsum dolor sit amet consectetur adipisicing elit. Eum nihil odit minima quia nostrum sapiente hic? Sed tempora eos aliquam.

                                </p>
                            </div>
                        </div>
                    ))
                }


            </div>

            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' >
            </div>

        </motion.div>
    )
}

export default Projects