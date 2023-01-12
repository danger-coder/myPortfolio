import React from 'react'
import { motion } from "framer-motion"
import Skill from "../components/Skill"

type Props = {
   
}





const Skills = (props: Props) => {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className='relative flex items-center justify-center h-screen flex-col px-5'>
            <h1 className='absolute top-24 text-2xl tracking-[20px]  uppercase text-gray-500'>Skills</h1>
            <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm text-center '>Hover over the skill for currency profienciency</h3>
            <div className='grid grid-cols-4 gap-5 pt-20'>
                <Skill src='/html.png' />
                <Skill src='/js-removebg-preview.png' />
                <Skill src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png' />
                <Skill src='/sass-removebg-preview.png' />
                <Skill src='/bootstrap 5.webp' />
                <Skill src='/react-removebg-preview.png' />
                <Skill src='/mongo_db-removebg-preview.png' />
                <Skill src='/express.png' />
                <Skill src='/node.png' directionLeft={true} />
                <Skill src='/typescript.png' directionLeft={true} />
                <Skill src='/vscode.png' directionLeft={true} />
                <Skill src='/jquery.png' directionLeft={true} />
                <Skill src='/git.png' directionLeft={true} />
                <Skill src='/github.png' directionLeft={true} />
                <Skill src='/tailwind.png' directionLeft={true} />
                <Skill src='/next js.png' directionLeft={true} />
            </div>

        </motion.div>
    )
}

export default Skills