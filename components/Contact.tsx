import React from 'react'
import { motion } from "framer-motion"
import { FaPhoneAlt, FaRegEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string
};


const Contact = () => {


    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = data => {
        window.location.href=`mailto:karanchy95@gmail.com?subject=${data.subject}&body= Hi my name is ${data.name}. ${data.message} (${data.email})`
    };
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className='relative flex items-center justify-center h-screen flex-col '>
            <h1 className='absolute top-24 text-2xl tracking-[20px]  uppercase text-gray-500'>Contact</h1>

            <div>
                <h4 className='text-4xl text-semibold text-center'>I have got just what you need <span className='decoration-[#F7AB0A]/50 underline'>Lets Talk</span></h4>

            </div>
            <div className='space-y-5 mt-5'>
                <div className='flex items-center justify-center space-x-2'>
                    {/* <BsFillTelephoneFill className='bg-slate-500'/> */}
                    <FaPhoneAlt color='#F7AB0A' className='animate-pulse' />
                    <p>9815451537</p>
                </div>
                <div className='flex items-center justify-center space-x-2'>
                    {/* <BsFillTelephoneFill className='bg-slate-500'/> */}
                    <FaRegEnvelope color='#F7AB0A' />
                    <p>Karanchy95@gmail.com</p>
                </div>
                <div className='flex items-center justify-center space-x-2'>
                    {/* <BsFillTelephoneFill className='bg-slate-500'/> */}
                    <FaMapMarkerAlt color='#F7AB0A' />
                    <p>Lalitpur,Imadole</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} action="" className='flex flex-col  w-fil space-y-2 mx-auto'>
                    <div className='space-x-2'>
                        <input type="text" {...register("name")} className='contactInput' placeholder='Name' />
                        <input type="email"{...register("email")} className='contactInput' placeholder='Email' />
                    </div>
                    <input type="text"{...register("subject")} className='contactInput' placeholder='subject' />
                    <textarea className='contactInput' {...register("message")} placeholder='Enter a message' />
                    <button type='submit' className='bg-[#F7AB0A] py-4 px-5 text-black text-lg font-semibold'>submit</button>
                </form>
            </div>

        </motion.div>

    )
}

export default Contact