import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"
import Link from 'next/link';

type Props = {}

function Header({ }: Props) {
    return (
        <header className='sticky top-0 flex justify-between max-w-7xl mx-auto z-20 p-5'>
            <motion.div initial={{
                x: -500,
                opacity: 0,
                scale: 0.5
            }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1,
                }}


            >
                {/* social icons */}
                <SocialIcon url="https://www.youtube.com/channel/UCe5pdoAgS4A_07D1rguDBTw" bgColor='transparent' fgColor='grey' />
                <SocialIcon url="https://www.linkedin.com/in/karan-chaudhary-280a931ba/" bgColor='transparent' fgColor='grey' />
                <SocialIcon url="https://twitter.com/jaketrent" bgColor='transparent' fgColor='grey' />
                <SocialIcon url="https://www.facebook.com/karanchaudhary143/" bgColor='transparent' fgColor='grey' />
            </motion.div>
          <Link href="#contact">
          <motion.div className='flex flex-row items-center cursor-pointer'
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1,
                }}
            >
                <SocialIcon url="https://email.com/jaketrent" bgColor='transparent' fgColor='grey' className='cursor-pointer' />
                <p className='uppercase hidden md:inline-flex text-sm text-gray-500'>Get In Touch</p>

            </motion.div>
          </Link>
        </header>
    )
}

export default Header