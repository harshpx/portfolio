import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FaKaggle } from 'react-icons/fa';
import {SiLeetcode, SiLinkedin, SiGithub} from 'react-icons/si';
import { useSelector } from 'react-redux';

import Avatar from '../assets/avatar.jpg';


const About = () => {

    const {darkMode} = useSelector(state=>state.theme);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
        <div className='bg-neutral-200 dark:bg-slate-900 px-5 sm:px-10 md:px-15 lg:px-25 xl:px-30 font-segoeUI transition-all duration-300'>
            <section id='about' className={`min-h-screen flex flex-col items-center`}>
                {/* intro */}
                <div className={`flex flex-col sm:flex-row sm:justify-center gap-y-7 sm:gap-x-5 items-center pt-32 sm:pt-44`}>
                    {/* image */}
                    <div className=' w-48 sm:w-52 md:w-56 overflow-hidden rounded-full'>
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
                            <div className='dark:text-white text-base md:text-l p-1'>
                                <h1 className=' w-fit h-fit leading-5 mx-auto sm:mx-0 whitespace-nowrap overflow-hidden slide'>Full Stack Web Developer</h1>
                                <h1 className='w-fit mx-auto sm:mx-0 leading-5 whitespace-nowrap overflow-hidden slide'>Machine Learning Enthusiast</h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/* about me */}
                <div className='dark:text-white mt-20 text-center sm:text-l md:text-[18px] w-full sm:w-11/12 md:w-1/2'>
                    <p><span className='text-teal-600 dark:text-teal-400'>Hello and welcome!</span> I'm thrilled to have you here.<br/>I am Harsh, a Full-Stack Web-Developer, particularly specializing in the <span className='text-green-600 dark:text-green-400'>M</span><span className='text-yellow-600 dark:text-yellow-400'>E</span><span className='text-teal-600 dark:text-teal-400'>R</span><span className='text-green-600 dark:text-green-400'>N</span> (MongoDB, Express JS, React JS, Node JS) stack.<br/>Also a Machine Learning Enthusiast, proficient in <span className='text-yellow-600 dark:text-yellow-400'>Python</span>, <span className='text-blue-500 dark:text-blue-300'>Scikit-Learn</span> and <span className='text-orange-600 dark:text-orange-400'>TensorFlow</span> stack.</p>
                </div>
            </section>
        </div>
    </div>
  )
}

export default About