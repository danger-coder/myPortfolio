import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image';
import Link from 'next/link';

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
            className='relative  flex items-center h-[120vh] justify-center  flex-col '>
            <h1 className='absolute top-24 text-2xl tracking-[20px]  uppercase text-gray-500'>Projects</h1>



            <div className='grid grid-cols-2 gap-[50px] absolute top-[20%]'>
                <Link href="https://rococo-rugelach-c37ee5.netlify.app" target="_blank" className='cursor-pointer'>
                    <div className='border h-[300px]  w-[450px] cursor-pointer relative border-[#F7AB0A]'>
                        <Link href="https://rococo-rugelach-c37ee5.netlify.app" className='cursor-pointer'>
                            <img src="/project1.jpg" alt="" className='w-full h-[100%] object-cover cursor-pointer z-10' />
                        </Link>
                        <div className='h-[100%] w-full bg-[#393121] absolute top-0 left-0 opacity-[0.9]'></div>
                        <h1 className='text-[52px] tracking-[3px] font-semibold whitespace-pre absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]'>Poject 01</h1>
                    </div>
                </Link>
                <Link href="https://rococo-rugelach-c37ee5.netlify.app" target="_blank" className='cursor-pointer'>
                    <div className='border h-[300px]  w-[450px] border-[#F7AB0A] cursor-pointer relative'>
                        <img src="/project2.jpg" alt="" className='w-full h-[100%] object-cover' />
                        <div className='h-[100%] w-full bg-[#393121] absolute top-0 left-0 opacity-[0.9]'></div>
                        <h1 className='text-[52px] tracking-[3px] font-semibold whitespace-pre absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]'>Poject 02</h1>
                    </div>
                </Link>
                <Link href="https://rococo-rugelach-c37ee5.netlify.app" target="_blank" className='cursor-pointer'>
                    <div className='border h-[300px]  w-[450px] border-[#F7AB0A] cursor-pointer relative'>
                        <img src="/project3.jpg" alt="" className='w-full h-[100%] object-cover' />
                        <div className='h-[100%] w-full bg-[#393121] absolute top-0 left-0 opacity-[0.9]'></div>
                        <h1 className='text-[52px] tracking-[3px] font-semibold whitespace-pre absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]'>Poject 03</h1>
                    </div>
                </Link>
                <Link href="https://wooders2.netlify.app/" target="_blank" className='cursor-pointer'>
                    <div className='border h-[300px]  w-[450px] border-[#F7AB0A] cursor-pointer relative'>
                        <img src="/project4.jpg" alt="" className='w-full h-[100%] object-cover' />
                        <div className='h-[100%] w-full bg-[#393121] absolute top-0 left-0 opacity-[0.9]'></div>
                        <h1 className='text-[52px] tracking-[3px] font-semibold whitespace-pre absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]'>Poject 04</h1>
                    </div>
                </Link>
            </div>

            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' >
            </div>

        </motion.div>
    )
}

export default Projects