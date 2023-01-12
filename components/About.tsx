import { motion } from "framer-motion";
import React from 'react'

type Props = {}

function About({ }: Props) {
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
            }}
            className='relative flex items-center justify-center h-screen flex-col  md:flex-row md:items-center md:justify-center xl:flex-col md:mx-10 '>
            <h1 className='absolute top-24 text-2xl tracking-[20px] uppercase text-gray-500'>About</h1>
            <motion.img initial={{
                x: -200,

            }}

                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.6
                }}
                className=" mt-24 rounded-full w-44 h-34 md:w-64 md:h-64 md:rounded-lg xl:w-[300px] xl:h-[300px] flex-shrink-0 object-cover " src="https://avatars.githubusercontent.com/u/70938131?v=4" />

            <div className="mt-10 p-6 text-center md:mt-5">
                <h1 className="text-3xl mb-5">Here is a <span className="underline decoration-[#F7AB0A]">little</span>  background</h1>
                <p className="text-base xl:max-w-5xl xl:text-center">"Highly skilled frontend developer with 1+ years of experience designing and building responsive, user-friendly websites and applications. Proficient in HTML, CSS, JavaScript, and various frontend frameworks, with a strong focus on usability and accessibility. Skilled in collaborating with cross-functional teams to deliver top-quality projects on time and on budget."</p>
            </div>
        </motion.div>
    )
}

export default About