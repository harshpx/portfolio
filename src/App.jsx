import { useState } from 'react'

import {BsFillMoonStarsFill} from 'react-icons/bs';
import { IoSunny } from "react-icons/io5";
import { FaKaggle } from 'react-icons/fa';
import { SiLeetcode, SiLinkedin, SiGithub, SiPostcss, SiPostgresql } from "react-icons/si";
import {SiHtml5,SiCss3,SiJavascript,SiReact,SiRedux,SiFramer,SiTailwindcss,SiExpress,SiSocketdotio,SiNodedotjs,SiVercel,SiPython,SiTensorflow,SiScikitlearn,SiStreamlit,SiFlask,SiAppwrite,SiFirebase,SiMysql,SiMongodb} from 'react-icons/si';

import Avatar from './assets/avatar.jpg';
import ProjectCard from './ProjectCard';

import MemoizeImg from './assets/icons/memoize3.png';
import MiniBlogImg from './assets/icons/miniblog.png';
import TealFoxImg from './assets/icons/tealfox.png';
import DogBreedPred from './assets/icons/dogBreedPred1.png';
import VAR from './assets/icons/var.png';

function App() {
    const [darkMode,setDarkMode] = useState(true);
    return (
        <div className={`${darkMode?"dark":""}`}>

            {/* nav */}
            <div className='w-full fixed top-0 left-0 bg-neutral-200 dark:bg-slate-900 px-5 sm:px-10 md:px-15 lg:px-25 xl:px-30 font-segoeUI transition-all duration-300'>
                <nav className="py-2 flex justify-between items-center text-center text-sm sm:text-base">
                    {/* links */}
                    <div className='flex text-l text-black dark:text-white'>
                        <a href="#" className='my-auto'>About Me</a>
                        <a href="#" className='mx-5 my-auto'>Projects</a>
                        <a href="#" className='my-auto'>Tech Stack</a>
                        <a href="#" className='mx-5 my-auto'>Contact Me</a>
                    </div>
                    {/* theme switch button */}
                    <div className='cursor-pointer text-2xl rounded-full p-1.5 text-teal-600 dark:text-teal-400 hover:text-teal-400 dark:hover:text-teal-600 hover:bg-black dark:hover:bg-neutral-200' onClick={()=>setDarkMode((prev)=>!prev)}>
                        {darkMode ? <IoSunny /> : <BsFillMoonStarsFill/>}
                    </div>
                </nav>
            </div>

            {/* page contents */}
            <div className='bg-neutral-200 dark:bg-gradient-to-b from-slate-900 to-slate-800 px-5 sm:px-10 md:px-15 lg:px-25 xl:px-30 font-segoeUI transition-all duration-300'>
                {/* 1st section */}
                <section className="h-screen" id='about-me'>
                    {/* intro */}
                    <div id='intro' className='flex flex-col sm:flex-row sm:justify-center gap-y-7 sm:gap-x-5 items-center pt-28 sm:pt-44'>
                        {/* image */}
                        <div className=' w-48 sm:w-52 md:w-56 overflow-hidden' style={{animation: 'movingEllipse 8s linear infinite normal'}}>
                            <img src={Avatar} alt="Profile Picture"/>
                        </div>
                        {/* name and information */}
                        <div className='flex flex-col gap-y-3'>
                            {/* profile links */}
                            <div className='dark:text-white flex justify-center sm:justify-start gap-x-5 text-2xl'>
                                <a href="https://github.com/harshpx"><SiGithub /></a>
                                <a href="https://www.linkedin.com/in/harshpx/"><SiLinkedin /></a>
                                <a href="https://leetcode.com/harsh_px/"><SiLeetcode /></a>
                                <a href="https://www.kaggle.com/harshpriye"><FaKaggle /></a>
                            </div>
                            {/* name and profession */}
                            <div className='flex flex-col text-center sm:text-left gap-y-2'>
                                <h1 className='text-teal-600 dark:text-teal-400 text-4xl md:text-5xl'>Harsh Priye</h1>
                                <h2 className='dark:text-white text-base md:text-l md:font-bold'>Full Stack Web Developer,<br/>Machine Learning Enthusiast</h2>
                            </div>
                        </div>
                    </div>
                    {/* about me */}
                    <div className='dark:text-white mt-20 text-center sm:text-l md:text-[18px] font-bold'>
                        <p><span className='text-teal-600 dark:text-teal-400'>Hello and welcome!</span> I'm thrilled to have you here.<br/>I am Harsh, a Full-Stack Web-Developer, particularly specializing in the <span className='text-green-600 dark:text-green-400'>M</span><span className='text-yellow-600 dark:text-yellow-400'>E</span><span className='text-teal-600 dark:text-teal-400'>R</span><span className='text-green-600 dark:text-green-400'>N</span> stack.<br/>Also a Machine Learning Enthusiast, proficient in <span className='text-yellow-600 dark:text-yellow-400'>Python</span>, <span className='text-blue-500 dark:text-blue-300'>Scikit-Learn</span> and <span className='text-orange-600 dark:text-orange-400'>TensorFlow</span> stack.</p>
                    </div>
                </section>
                {/* project section */}
                <section className='min-h-screen mt-10 sm:mt-0'>
                    <div className='dark:text-white flex flex-col items-center justify-center '>
                        <h1 className='text-teal-600 dark:text-teal-400 text-5xl md:text-6xl mb-10'>Projects</h1>
                        <div className='flex flex-wrap items-end justify-center gap-3 xl:w-10/12'>
                                <div className='columns-1 sm:columns-2 xl:columns-3 gap-5'>

                                    <ProjectCard dark={darkMode} title="Memoize Notes" description="A Full Stack, industry standard Notes App" image={MemoizeImg} stack={['react','tailwind','redux','express','node','mongodb']} applink='https://memoize-notes.vercel.app/' code='https://github.com/harshpx/memoize' />

                                    <ProjectCard dark={darkMode} title="MiniBlog" description="Micro-Blogging App" image={MiniBlogImg} stack={['react','redux','tailwind','appwrite']} applink='https://miniblogger.vercel.app/' code='https://github.com/harshpx/miniBlog' />

                                    <ProjectCard dark={darkMode} title="TealFox" description="UserStyle CSS custom theme for Firefox" image={TealFoxImg} stack={['css']} code='https://github.com/harshpx/TealFox' />

                                    <ProjectCard dark={darkMode} title="Dog Breed Identifier" description="A CNN based Deep-Learning Image Classification Model for Dog Breed Identification" image={DogBreedPred} stack={['python','tensorflow','streamlit']} applink='https://dog-breed-identify.streamlit.app/' code='https://github.com/harshpx/Dog-Breed-Identifier' />


                                    <ProjectCard dark={darkMode} title="Virtual Assistant Referee" description="A CNN Based Deep-Learning Video Analysis Model for Player Contact Detection in Football" image={VAR} stack={['python','opencv','tensorflow','streamlit']} applink='https://virtual-assistant-referee.streamlit.app/' code='https://github.com/harshpx/Virtual-Assistant-Referee' />

                                </div>
                        </div>
                    </div>
                </section>

                {/* tech stack section */}
                <section className='min-h-screen mt-24 sm:mt-24'>
                    <div className='dark:text-white flex flex-col items-center justify-center '>
                        <h1 className='text-teal-600 dark:text-teal-400 text-5xl md:text-6xl mb-14'>My Stack</h1>
                        <div className='flex flex-wrap justify-center items-center gap-12 sm:gap-20 md:gap-24 lg:gap-28 px-4 sm:px-8 md:px-28 lg:px-32'>
                            <SiHtml5 className='size-20 sm:size-24 md:size-26 lg:size-32 text-orange-600'/>
                            <SiCss3 className='size-20 sm:size-24 md:size-26 lg:size-32 text-blue-400'/>
                            <SiJavascript className='size-20 sm:size-24 md:size-26 lg:size-32 text-yellow-500'/>
                            <SiReact className='size-20 sm:size-24 md:size-26 lg:size-32 text-teal-300 transition-all animate-spin-slow'/>
                            <SiRedux className='size-20 sm:size-24 md:size-26 lg:size-32 text-violet-400'/>
                            <SiTailwindcss className='size-20 sm:size-24 md:size-26 lg:size-32 text-cyan-400'/>
                            <SiFramer className='size-20 sm:size-24 md:size-26 lg:size-32'/>
                            <SiNodedotjs className='size-20 sm:size-24 md:size-26 lg:size-32 text-green-500'/>
                            <SiExpress className='size-20 sm:size-24 md:size-26 lg:size-32'/>
                            <SiSocketdotio className='size-20 sm:size-24 md:size-26 lg:size-32'/>
                            <SiMongodb className='size-20 sm:size-24 md:size-26 lg:size-32 text-green-500'/>
                            <SiMysql className='size-20 sm:size-24 md:size-26 lg:size-32 text-blue-400'/>
                            <SiPostgresql className='size-20 sm:size-24 md:size-26 lg:size-32'/>
                            <SiPython className='size-20 sm:size-24 md:size-26 lg:size-32 text-yellow-400'/>
                            <SiTensorflow className='size-20 sm:size-24 md:size-26 lg:size-32 text-orange-600'/>
                            <SiScikitlearn className='size-20 sm:size-24 md:size-26 lg:size-32'/>
                            <SiStreamlit className='size-20 sm:size-24 md:size-26 lg:size-32 text-red-500'/>
                            <SiFlask className='size-20 sm:size-24 md:size-26 lg:size-32'/>
                            <SiVercel className='size-20 sm:size-24 md:size-26 lg:size-32 text-gray-700'/>
                            <SiFirebase className='size-20 sm:size-24 md:size-26 lg:size-32 text-yellow-500'/>
                            <SiAppwrite className='size-20 sm:size-24 md:size-26 lg:size-32 text-pink-400'/>
                        </div>
                    </div>
                </section>
                <div className='ellipse '></div>
            </div>
        </div>
    )
}

export default App;
