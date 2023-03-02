import Link from 'next/link'
import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle'

type Props = {}

function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: ["Hi , The Name's Karan", "Guy-who-loves-coffee.tsx", "<ButLoveToCodeMore/>"],
        loop: true,
        delaySpeed: 2000

    })
    return (
        <div className='h-screen flex flex-col  items-center justify-center text-center overflow-hidden '>
            <BackgroundCircle />
            <img className='relative w-32 h-32 rounded-full mt-8' src="https://avatars.githubusercontent.com/u/70938131?v=4" alt="" />
            <div className='z-20'>
                <h2 className=' mt-5 text-[#F7AB0A] text-sm tracking-[15px] uppercase'>Front-End Developer</h2>
                <h1 className=' space-y-3 mt-1 text-4xl lg:text-5xl font-semibold'><span>{text}</span>
                    <Cursor cursorColor='F7ABBA' /></h1>
                <div className='pt-5 '>
                    <Link href="#about" className=''><button className='heroButton hover:border-[#F7ABBA] hover:rounded-3xl transition-all'>About</button></Link>
                    <Link href="#experience">
                        <button className='heroButton hover:border-[#F7ABBA] hover:rounded-3xl transition-all'>Experience</button></Link>
                    <Link href="#skills">
                        <button className='heroButton hover:border-[#F7ABBA] hover:rounded-3xl transition-all'>Skills </button></Link>
                    <Link href="#projects">
                        <button className='heroButton hover:border-[#F7ABBA] hover:rounded-3xl transition-all'>Projects </button>
                    </Link>
                </div>
            </div>


        </div>
    )
}

export default Hero