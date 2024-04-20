import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

import { IoMail, IoCall } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { useSelector } from 'react-redux';
import useWindowSize from '../hooks/useWindowSize';



const Contact = () => {
    const [wait,setWait] = useState(false)

    const {darkMode} = useSelector(state=>state.theme);
    const {isMobile,isTablet,isDesktop} = useWindowSize();

    const autoMail = (e)=>{
        setWait(true);
        e.preventDefault();
        emailjs.sendForm(String(import.meta.env.VITE_EMAILJS_SERVICE_NAME),String(import.meta.env.VITE_EMAILJS_TEMPLATE_NAME),e.target,{
            publicKey:String(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
        }).then(()=>toast.success('Email sent successfully'))
        .catch(()=>toast.error('Failed to send an Email'))
        .finally(()=>setWait(false));
    }

    return (
    <div className={`${darkMode ? 'dark' : ''}`}>
        <div className='bg-neutral-200 dark:bg-slate-900 px-5 sm:px-10 md:px-15 lg:px-25 xl:px-30 font-segoeUI transition-all duration-300'>
            <section id='contact' className='min-h-screen py-20'>
                <div className='dark:text-white flex flex-col items-center justify-center gap-24'>
                    <h1 className='text-teal-600 dark:text-teal-400 text-5xl md:text-6xl'>Contact Me</h1>
                    <div className='flex flex-col lg:flex-row gap-10 lg:gap-5 items-center justify-center'>
                        <div className='flex flex-col justify-center items-center gap-10 p-4 sm:p-8 md:p-28 lg:p-32'>
                            <div className='flex flex-col gap-1 items-center'><IoMail size={40} className='text-teal-600 dark:text-teal-400'/>
                                <h1 className='text-3xl text-center'>harsh.rzf@gmail.com</h1>
                            </div>
                            <div className='flex flex-col gap-1 items-center'><IoCall size={40} className='text-teal-600 dark:text-teal-400'/>
                                <h1 className='text-3xl text-center'>+91 8745946064</h1>
                            </div>
                        </div>
                        {/* {isDesktop?<div className='w-[2px] h-[300px] border-l border-neutral-700  dark:border-neutral-300'/>:null} */}
                        <div className='flex flex-col items-center gap-5 sm:gap-6 lg:gap-10 p-4 sm:p-8 md:p-28 lg:p-32'>
                            <h1 className='text-2xl text-center mt-7'>Or start an email thread...</h1>
                            <form onSubmit={wait ? (e)=>{e.preventDefault()} : autoMail} className='flex flex-col justify-start items-center gap-3'>
                                <div className='flex gap-x-4 items-center text-xl'>
                                    <label htmlFor="name"> Name:</label>
                                    <input type="text" name="to_name" id="name" className='leading-10 rounded-lg px-2 bg-transparent placeholder:text-base border-2 border-gray-500 dark:border-gray-400 focus:border-teal-600 focus:dark:border-teal-400 focus:outline-none focus:ring-0 transition-all duration-200 hover:scale-105' placeholder='Your name'/>
                                </div>
                                <div className='flex gap-x-4 items-center text-xl'>
                                    <label htmlFor="email"> Email:</label>
                                    <input type="text" name="to_email" id="email" className='leading-10 rounded-lg px-2 bg-transparent placeholder:text-base  border-2 border-gray-500 dark:border-gray-400 focus:border-teal-600 focus:dark:border-teal-400 focus:outline-none focus:ring-0 transition-all duration-200 hover:scale-105' placeholder='someone@example.com'/>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <div className={`${!wait ? "hidden" : ""}`}>Sending...</div>
                                    <button type="submit" className='flex items-center justify-evenly rounded-lg py-2 px-3 text-white bg-teal-500 gap-2 my-2 text-sm sm:text-base hover:scale-110 duration-150'><MdMail size={20}/>Get a Mail!</button>
                                    
                                </div>
                            </form>
                        </div>

                    </div>


                </div>
            </section>
        </div>
    </div>
    )
}

export default Contact