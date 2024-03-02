import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FcLinux } from "react-icons/fc";
import {SiLeetcode, SiLinkedin, SiGithub, SiPostcss, SiPostgresql,SiHtml5,SiCss3,SiJavascript,SiReact,SiRedux,SiFramer,SiTailwindcss,SiExpress,SiSocketdotio,SiNodedotjs,SiVercel,SiPython,SiTensorflow,SiScikitlearn,SiStreamlit,SiFlask,SiAppwrite,SiFirebase,SiMysql,SiMongodb,SiGnubash,SiHeroku} from 'react-icons/si';
import { useSelector } from 'react-redux';


const Stack = () => {
    const {darkMode} = useSelector(state=>state.theme)
    return (
    <div className={`${darkMode ? 'dark' : ''}`}>
        <div className='bg-neutral-200 dark:bg-slate-900 px-5 sm:px-10 md:px-15 lg:px-25 xl:px-30 font-segoeUI transition-all duration-300'>
            <section id='stack' className='min-h-screen py-20'>
                <div className='dark:text-white flex flex-col items-center justify-center '>
                    <h1 className='text-teal-600 dark:text-teal-400 text-5xl md:text-6xl mb-14'>My Stack</h1>
                    <div className='flex flex-wrap justify-center items-center gap-12 sm:gap-20 md:gap-24 lg:gap-28 px-4 sm:px-8 md:px-28 lg:px-32'>
                        
                            <SiHtml5 className='size-20 sm:size-24 md:size-26 lg:size-32 hover:scale-110 transition-all duration-200 text-orange-600'/>
                            <SiCss3 className='size-20 sm:size-24 md:size-26 lg:size-32 hover:scale-110 transition-all duration-200 text-blue-400'/>
                            <SiJavascript className='size-20 sm:size-24 md:size-26 lg:size-32 hover:scale-110 transition-all duration-200 text-yellow-500'/>
                            <SiReact className='size-20 sm:size-24 md:size-26 lg:size-32 transition-all duration-200 text-teal-300 animate-spin-slow'/>
                            <SiRedux className='size-20 sm:size-24 md:size-26 lg:size-32 hover:scale-110 transition-all duration-200 text-violet-400'/>
                            <SiTailwindcss className='size-20 sm:size-24 md:size-26 lg:size-32 hover:scale-110 transition-all duration-200 text-cyan-400'/>
                            <SiFramer className='size-20 sm:size-24 md:size-26 lg:size-32 hover:scale-110 transition-all duration-200'/>
                            <SiNodedotjs className='size-20 sm:size-24 md:size-26 lg:size-32 hover:scale-110 transition-all duration-200 text-green-500'/>
                            <SiExpress className='size-20 sm:size-24 md:size-26 lg:size-32 hover:scale-110 transition-all duration-200'/>
                            <SiSocketdotio className='size-20 sm:size-24 md:size-26 lg:size-32 hover:scale-110 transition-all duration-200'/>
                            <SiMongodb className='size-20 sm:size-24 md:size-26 lg:size-32 hover:scale-110 transition-all duration-200 text-green-500'/>
                            <SiMysql className='size-20 sm:size-24 md:size-26 lg:size-32 hover:scale-110 transition-all duration-200 text-blue-400'/>
                            <SiPostgresql className='size-20 sm:size-24 md:size-26 lg:size-32 hover:scale-110 transition-all duration-200'/>
                            <FcLinux className='size-20 sm:size-24 md:size-26 lg:size-32 hover:scale-110 transition-all duration-200 text-yellow-400'/>
                            <SiGnubash className='size-20 sm:size-24 md:size-26 lg:size-32 hover:scale-110 transition-all duration-200 text-green-400'/>
                            <SiPython className='size-20 sm:size-24 md:size-26 lg:size-32 hover:scale-110 transition-all duration-200 text-yellow-400'/>
                            <SiTensorflow className='size-20 sm:size-24 md:size-26 lg:size-32 hover:scale-110 transition-all duration-200 text-orange-600'/>
                            <SiScikitlearn className='size-20 sm:size-24 md:size-26 lg:size-32 hover:scale-110 transition-all duration-200'/>
                            <SiStreamlit className='size-20 sm:size-24 md:size-26 lg:size-32 hover:scale-110 transition-all duration-200 text-red-500'/>
                            <SiFlask className='size-20 sm:size-24 md:size-26 lg:size-32 hover:scale-110 transition-all duration-200'/>
                            <SiHeroku className='size-20 sm:size-24 md:size-26 lg:size-32 hover:scale-110 transition-all duration-200 text-purple-500'/>
                            <SiVercel className='size-20 sm:size-24 md:size-26 lg:size-32 hover:scale-110 transition-all duration-200 text-gray-700'/>
                            <SiFirebase className='size-20 sm:size-24 md:size-26 lg:size-32 hover:scale-110 transition-all duration-200 text-yellow-500'/>
                            <SiAppwrite className='size-20 sm:size-24 md:size-26 lg:size-32 hover:scale-110 transition-all duration-200 text-pink-400'/>

                    </div>
                </div>
            </section>
        </div>
    </div>
    )
}

export default Stack