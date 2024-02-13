import { useEffect, useState, useRef } from 'react';
import { Link,animateScroll } from 'react-scroll';
import { useInView } from 'react-intersection-observer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

import {BsFillMoonStarsFill} from 'react-icons/bs';
import { IoSunny, IoMail, IoCall } from "react-icons/io5";
import { FcLinux } from "react-icons/fc";
import { FaKaggle } from 'react-icons/fa';
import {SiLeetcode, SiLinkedin, SiGithub, SiPostcss, SiPostgresql,SiHtml5,SiCss3,SiJavascript,SiReact,SiRedux,SiFramer,SiTailwindcss,SiExpress,SiSocketdotio,SiNodedotjs,SiVercel,SiPython,SiTensorflow,SiScikitlearn,SiStreamlit,SiFlask,SiAppwrite,SiFirebase,SiMysql,SiMongodb,SiGnubash} from 'react-icons/si';
import { MdMail } from "react-icons/md";

import Avatar from './assets/avatar.jpg';
import ProjectCard from './ProjectCard';

import MemoizeImg from './assets/icons/memoize3.png';
import MiniBlogImg from './assets/icons/miniblog.png';
import TealFoxImg from './assets/icons/tealfox.png';
import DogBreedPred from './assets/icons/dogBreedPred1.png';
import VAR from './assets/icons/var.png';

import CodeLogo from './assets/icons/code_logo.png';
import CodeLogoLight from './assets/icons/code_logo_light.png';
import APILogo from './assets/icons/api_logo.png';
import AILogo from './assets/icons/ai_logo.png';
import DesignLogo from './assets/icons/design_logo.png';

function App() {
    const [darkMode,setDarkMode] = useState(true);

    useEffect(()=>{
        animateScroll.scrollTo(26);
    },[])

    const autoMail = (e)=>{
        e.preventDefault();
        emailjs.sendForm(String(import.meta.env.VITE_EMAILJS_SERVICE_NAME),String(import.meta.env.VITE_EMAILJS_TEMPLATE_NAME),e.target,{
            publicKey:String(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
        }).then(()=>toast.success('Email sent successfully'))
        .catch(()=>toast.error('Failed to send an Email'))
    }

    // const { introRef, introInView} = useInView({
    //     triggerOnce: false,
    //     rootMargin: '-100px 100px',
    // });

    // const { projectRef, projectInView } = useInView({
    //     triggerOnce: false,
    //     rootMargin: '-100px 100px',
    // });

    // const { serviceRef, serviceInView } = useInView({
    //     triggerOnce: false,
    //     rootMargin: '-100px 100px',
    // });

    // const { stackRef, stackInView } = useInView({
    //     triggerOnce: false,
    //     rootMargin: '-100px 100px',
    // });

    // const { contactRef, contactInView } = useInView({
    //     triggerOnce: false,
    //     rootMargin: '-100px 100px',
    // });


    return (
        <div className={`${darkMode?"dark":""}`}>

            {/* nav */}
            <div className='w-full fixed top-0 left-0 bg-neutral-200 dark:bg-slate-900 px-5 sm:px-10 md:px-15 lg:px-25 xl:px-30 font-segoeUI transition-all duration-300 z-10'>
                <nav className="py-2 flex justify-between items-center text-center text-sm sm:text-base">
                    {/* links */}
                    <div className='flex flex-wrap gap-x-5 text-l text-black dark:text-white'>

                        <Link to='about' activeClass="active" spy={true} smooth={true} offset={20} duration={500} className='my-auto cursor-pointer hover:text-teal-700 decoraion-teal-600 dark:hover:text-teal-400 hover:underline hover:underline-offset-4 dark:decoration-teal-400 nav-item'>About Me</Link>

                        <Link to='projects' activeClass="active" spy={true} smooth={true} offset={20} duration={500} className=' my-auto cursor-pointer hover:text-teal-600 decoraion-teal-700 dark:hover:text-teal-400 dark:hover:underline hover:underline-offset-4 dark:decoration-teal-400 nav-item'>Projects</Link>

                        <Link to='services' activeClass="active" spy={true} smooth={true} offset={20} duration={500} className=' my-auto cursor-pointer hover:text-teal-600 decoraion-teal-700 dark:hover:text-teal-400 dark:hover:underline hover:underline-offset-4 dark:decoration-teal-400 nav-item'>Services</Link>

                        <Link to='stack' activeClass="active" spy={true} smooth={true} offset={20} duration={500} className='  my-auto cursor-pointer hover:text-teal-700 decoraion-teal-600 dark:hover:text-teal-400 hover:underline hover:underline-offset-4 dark:decoration-teal-400 nav-item'>Tech Stack</Link>

                        <Link to='contact' activeClass="active" spy={true} smooth={true} offset={20} duration={500} className='my-auto cursor-pointer hover:text-teal-700 decoraion-teal-600 dark:hover:text-teal-400 hover:underline hover:underline-offset-4 dark:decoration-teal-400 nav-item'>Contact Me</Link>

                    </div>
                    {/* theme switch button */}
                    <div className='cursor-pointer text-2xl rounded-full p-1.5 text-teal-600 dark:text-teal-400 hover:text-teal-400 dark:hover:text-teal-600 hover:bg-black dark:hover:bg-neutral-200' onClick={()=>setDarkMode((prev)=>!prev)}>
                        {darkMode ? <IoSunny /> : <BsFillMoonStarsFill/>}
                    </div>
                </nav>
            </div>

            {/* page contents */}
            <div className='bg-neutral-200 dark:bg-slate-900 px-5 sm:px-10 md:px-15 lg:px-25 xl:px-30 font-segoeUI transition-all duration-300'>

                {/* intro section */}
                <section id='about' className={`min-h-screen`}>
                    {/* intro */}
                    <div className={`flex flex-col sm:flex-row sm:justify-center gap-y-7 sm:gap-x-5 items-center pt-32 sm:pt-44`}>
                        {/* image */}
                        <div className=' w-48 sm:w-52 md:w-56 overflow-hidden' style={{animation: 'movingEllipse 7s linear infinite normal'}}>
                            <img src={Avatar} alt="Profile Picture"/>
                        </div>
                        {/* name and information */}
                        <div className='flex flex-col gap-y-3'>
                            {/* profile links */}
                            <div className='dark:text-white flex justify-center sm:justify-start gap-x-5 text-2xl'>
                                <a href="https://github.com/harshpx" className='slide'><SiGithub /></a>
                                <a href="https://www.linkedin.com/in/harshpx/" className='slide-top'><SiLinkedin /></a>
                                <a href="https://leetcode.com/harsh_px/" className='slide-bottom'><SiLeetcode /></a>
                                <a href="https://www.kaggle.com/harshpriye" className='slide-right'><FaKaggle /></a>
                            </div>
                            {/* name and profession */}
                            <div className='flex flex-col text-center sm:text-left gap-y-2'>
                                <h1 className='text-teal-600 dark:text-teal-400 text-4xl md:text-5xl slide'>Harsh Priye</h1>
                                <div className='dark:text-white text-base md:text-l md:font-bold p-1'>
                                    <h1 className=' w-fit h-fit leading-5 mx-auto sm:mx-0 whitespace-nowrap overflow-hidden slide'>Full Stack Web Developer</h1>
                                    <h1 className='w-fit mx-auto sm:mx-0 leading-5 whitespace-nowrap overflow-hidden slide'>Machine Learning Enthusiast</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* about me */}
                    <div className='dark:text-white mt-20 text-center sm:text-l md:text-[18px] font-bold'>
                        <p><span className='text-teal-600 dark:text-teal-400'>Hello and welcome!</span> I'm thrilled to have you here.<br/>I am Harsh, a Full-Stack Web-Developer, particularly specializing in the <span className='text-green-600 dark:text-green-400'>M</span><span className='text-yellow-600 dark:text-yellow-400'>E</span><span className='text-teal-600 dark:text-teal-400'>R</span><span className='text-green-600 dark:text-green-400'>N</span> (MongoDB, Express JS, React JS, Node JS) stack.<br/>Also a Machine Learning Enthusiast, proficient in <span className='text-yellow-600 dark:text-yellow-400'>Python</span>, <span className='text-blue-500 dark:text-blue-300'>Scikit-Learn</span> and <span className='text-orange-600 dark:text-orange-400'>TensorFlow</span> stack.</p>
                    </div>
                </section>

                {/* project section */}
                <section id='projects' className={`min-h-screen mt-4 sm:mt-8 pt-24}`}>
                    <div  className='dark:text-white flex flex-col items-center justify-center '>
                        <h1 className={`transition-all text-teal-600 dark:text-teal-400 text-5xl md:text-6xl mb-10`}>{`Projects`}</h1>
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

                {/* Services Section */}
                <section id='services' className='min-h-screen mt-4 sm:mt-8 pt-24'>
                    <div className='dark:text-white flex flex-col items-center justify-center '>
                        <h1 className='text-teal-600 dark:text-teal-400 text-5xl md:text-6xl mb-14'>Services</h1>
                        <div className='flex flex-col justify-center items-center gap-12 sm:gap-20 md:gap-24 lg:gap-28 px-4 sm:px-8 md:px-28 lg:px-32'>
                            
                            {/* services */}
                            <div className='flex flex-wrap sm:flex-nowrap items-center justify-center gap-5 w-full'>
                                <img src={darkMode ? CodeLogo : CodeLogoLight} alt="Code Logo" className='w-1/2 sm:w-1/3'/>
                                <div className=' flex flex-col gap-5 lg:gap-7 xl:gap-10 sm:w-1/2'>
                                    <h1 className='text-4xl lg:text-5xl text-center sm:text-left'>End-to-End Website Development</h1>
                                    <p className='text-center sm:text-left lg:text-xl text-gray-700 dark:text-gray-400'>As a full stack developer, I offer comprehensive website development services from start to finish. This includes both front-end and back-end development, ensuring a seamless user experience and robust functionality.</p>
                                </div>
                            </div>

                            <div className='flex flex-row-reverse flex-wrap sm:flex-nowrap items-center justify-center gap-5 lg:gap-7 xl:gap-10 w-full'>
                                <img src={DesignLogo} alt="Design Logo" className='w-1/2 sm:w-1/3'/>
                                <div className=' flex flex-col gap-5 lg:gap-7 sm:w-1/2'>
                                    <h1 className='text-4xl lg:text-5xl text-center sm:text-right'>Web UI/UX Development</h1>
                                    <p className='text-center sm:text-right lg:text-xl text-gray-700 dark:text-gray-400'>Whether you need a brand new website design or want to refresh the look and feel of an existing site, I leverage my design expertise to create stunning and intuitive interfaces that engage users and drive conversions.</p>
                                </div>
                            </div>

                            <div className='flex flex-wrap sm:flex-nowrap items-center justify-center gap-5 w-full'>
                                <img src={APILogo} alt="API Logo" className='w-1/2 sm:w-1/3'/>
                                <div className=' flex flex-col gap-5 lg:gap-7 xl:gap-10 sm:w-1/2'>
                                    <h1 className='text-4xl lg:text-5xl text-center sm:text-left'>Production Grade API Development</h1>
                                    <p className='text-center sm:text-left lg:text-xl text-gray-700 dark:text-gray-400'>I specialize in developing robust and scalable APIs to enable seamless communication between different software applications or services.<br/> Whether you need to integrate third-party services, connect disparate systems within your organization, or build a custom API for your application, I have the expertise to deliver tailored solutions.</p>
                                </div>
                            </div>

                            <div className='flex flex-row-reverse flex-wrap sm:flex-nowrap items-center justify-center gap-5 lg:gap-7 xl:gap-10 w-full'>
                                <img src={AILogo} alt="AI Logo" className='w-1/2 sm:w-1/3'/>
                                <div className=' flex flex-col gap-5 lg:gap-7 sm:w-1/2'>
                                    <h1 className='text-4xl lg:text-5xl text-center sm:text-right'>AI Based Utility Solutions</h1>
                                    <p className='text-center sm:text-right lg:text-xl text-gray-700 dark:text-gray-400'>Leveraging the power of artificial intelligence (AI) and machine learning (ML), I provide innovative solutions to solve complex business challenges and drive digital transformation.</p>
                                </div>
                            </div>

                               
                        </div>
                    </div>
                </section>

                {/* tech stack section */}
                
                <section id='stack' className='min-h-screen mt-4 sm:mt-8 pt-24'>
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
                                <SiVercel className='size-20 sm:size-24 md:size-26 lg:size-32 hover:scale-110 transition-all duration-200 text-gray-700'/>
                                <SiFirebase className='size-20 sm:size-24 md:size-26 lg:size-32 hover:scale-110 transition-all duration-200 text-yellow-500'/>
                                <SiAppwrite className='size-20 sm:size-24 md:size-26 lg:size-32 hover:scale-110 transition-all duration-200 text-pink-400'/>

                        </div>
                    </div>
                </section>
                

                {/* contact section */}
                    
                    <section id='contact' className='min-h-screen mt-4 sm:mt-8 pt-24'>
                        <div className='dark:text-white flex flex-col items-center justify-center gap-28 sm:gap-32'>
                            <h1 className='text-teal-600 dark:text-teal-400 text-5xl md:text-6xl'>Contact Me</h1>
                            <div className='flex flex-wrap justify-center items-center gap-8 sm:gap-20 md:gap-24 lg:gap-28 px-4 sm:px-8 md:px-28 lg:px-32'>
                                <div className='flex flex-col items-center'><IoMail size={40} className='text-teal-600 dark:text-teal-400'/>
                                    <h1 className='text-3xl text-center'>harsh.rzf@gmail.com</h1>
                                </div>
                                <div className='flex flex-col items-center'><IoCall size={40} className='text-teal-600 dark:text-teal-400'/>
                                    <h1 className='text-3xl text-center'>+91 8745946064</h1>
                                </div>
                            </div>
                            <div className='flex flex-col items-center gap-5 sm:gap-6'>
                                <h1 className='text-4xl text-center'>Or start an email thread...</h1>
                                <form onSubmit={autoMail} className='flex flex-col justify-start items-center gap-3'>
                                    <div className='flex gap-x-4 items-center text-xl'>
                                        <label htmlFor="name"> Name:</label>
                                        <input type="text" name="to_name" id="name" className='leading-8 rounded-lg px-2 bg-transparent placeholder:text-base border-2 border-gray-500 dark:border-gray-400 focus:border-teal-600 focus:dark:border-teal-400 focus:outline-none focus:ring-0' placeholder='Your name'/>
                                    </div>
                                    <div className='flex gap-x-4 items-center text-xl'>
                                        <label htmlFor="email"> Email:</label>
                                        <input type="text" name="to_email" id="email" className='leading-8 rounded-lg px-2 bg-transparent placeholder:text-base  border-2 border-gray-500 dark:border-gray-400 focus:border-teal-600 focus:dark:border-teal-400 focus:outline-none focus:ring-0' placeholder='someone@example.com'/>
                                    </div>
                                    <button type="submit" className='flex items-center justify-evenly rounded-lg py-1 px-1.5 bg-teal-500 gap-2 my-2 text-sm sm:text-base'><MdMail size={20}/>Get a Mail!</button>
                                </form>
                            </div>


                        </div>
                    </section>
                    
            </div>
            <ToastContainer autoClose={5000} theme={`${darkMode ? 'dark' : 'light'}`}/>
        </div>
    )
}

export default App;
