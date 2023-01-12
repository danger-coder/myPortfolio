import React from 'react'
import { motion } from "framer-motion"

type Props = {}

const ExperinceCards = (props: Props) => {
    return (
        <article className='flex flex-shrink-0 rounded-lg items-center justify-center flex-col xl:w-[800px] w-[400px] md:w-[600px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 '>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 1
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='h-28 w-28 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center mb-5' src="https://yt3.ggpht.com/XvwU7JfXVb1351RafqHaF_ieKr78K059gMJWm80Jsk2ydGrj82TDfn0yiox3tf08F2sK6sPN=s88-c-k-c0x00ffffff-no-rj-mo" alt="" />
            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>CEO OF PAPA FAM</h4>
                <p>PAPA FAM</p>
                <div className='flex space-x-2 items-center'>
                    <img className='h-10 w-10' src="https://code.visualstudio.com/assets/branding/app-icon.png" alt="" />
                    <img className='h-10 w-10' src="https://code.visualstudio.com/assets/branding/app-icon.png" alt="" />
                    <img className='h-10 w-10' src="https://code.visualstudio.com/assets/branding/app-icon.png" alt="" />
                    <img className='h-10 w-10' src="https://code.visualstudio.com/assets/branding/app-icon.png" alt="" />
                    {/* skills */}
                </div>
                <p className='py-3 text-[grey]'>started date ... end date</p>
                <ul className='list-disc ml-6 space-y-2'>
                    <li>summary of work experience</li>
                    <li>summary of work experience</li>
                    <li>summary of work experience</li>
                    <li>summary of work experience</li>
                </ul>
            </div>
        </article>

    )
}

export default ExperinceCards